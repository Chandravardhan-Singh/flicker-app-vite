import React, { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useImageExifQuery,
  useImageInfoQuery,
  usePhotoContextsQuery,
  usePopularPhotosQuery,
  useUserInfoQuery,
} from "../redux/api/products/flickerAPI";
import { ScreenContainer } from "../layouts";
import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Fade,
  Grid,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ImageCard from "../components/ImageCard/Imagecard";
import CameraIcon from "@mui/icons-material/Camera";
import IsoIcon from "@mui/icons-material/Iso";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import { ImageInfo, Loader } from "../components";
import { IExifInfoProps } from "../redux/api/products/types";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { TabArea } from "../components/TabArea";
import { IMAGE_URL } from "../utils";

const ImageDetails: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { id } = useParams();
  const {
    data: exifData,
    isLoading: loadingExif,
    isError: exifError,
  } = useImageExifQuery(id ?? "");
  const { data: imageInfo, isLoading: loadingImageInfo } = useImageInfoQuery(
    id ?? ""
  );
  const { data: popularPhotos } = usePopularPhotosQuery(
    imageInfo?.photo.owner.nsid ?? "",
    {
      refetchOnMountOrArgChange: true,
      skip: true,
    }
  );

  const getTagInfo = (tag: string): IExifInfoProps => {
    const tagItem: IExifInfoProps = exifData?.photo?.exif?.find(
      (tagItem) => tagItem?.tag === tag
    );
    console.log("-->", tagItem, exifData);

    return tagItem;
  };
  const apertureInfo = useMemo(() => getTagInfo("FNumber"), [exifData, id]);
  const isoInfo = useMemo(() => getTagInfo("ISO"), [exifData, id]);
  const shutterInfo = useMemo(() => getTagInfo("ExposureTime"), [exifData, id]);
  const datetimeInfo = useMemo(
    () => getTagInfo("DateTimeOriginal"),
    [exifData, id]
  );

  if (loadingImageInfo) {
    return <Loader />;
  }
  const imageCardDetails = {
    farm: imageInfo?.photo?.farm ?? 0,
    id: imageInfo?.photo?.id ?? "",
    isfamily: imageInfo?.photo.visibility.isfamily ?? 0,
    owner: imageInfo?.photo.owner,
    secret: imageInfo?.photo.secret ?? "",
    server: imageInfo?.photo.server ?? "",
    title: imageInfo?.photo.title._content ?? "",
  };

  const renderPopularTab = () => {
    return (
      <>
        <Grid container>
          {popularPhotos?.photos?.photo?.map((data, i) => {
            return (
              <Grid md={3} xs={6}>
                <div style={{ margin: 5 }}>
                  <ImageCard image={data} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };

  return (
    <ScreenContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={openModal}>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid md={6} xs={10}>
              <Card
                style={{
                  padding: 15,
                }}
                elevation={10}
              >
                <Typography variant="h5" component={"h5"}>
                  {imageInfo?.photo.owner.realname}
                </Typography>
                <Typography variant="h5" component={"h5"}>
                  {datetimeInfo?.raw?._content}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Fade>
      </Modal>

      <Grid container spacing={1} mt={2}>
        <Grid xs={12} lg={3} md={12}>
          <ImageCard image={imageCardDetails} />
        </Grid>
        <Grid xs={12} lg={9} md={12}>
          <Grid container>
            <Grid xs={6} lg={4} md={12}>
              {apertureInfo !== undefined ? (
                <ImageInfo
                  renderIcon={() => <CameraIcon style={{ fontSize: 48 }} />}
                  description={`F/${apertureInfo?.raw?._content}`}
                  label={apertureInfo?.label}
                />
              ) : null}
            </Grid>
            <Grid xs={6} lg={4} md={12}>
              {isoInfo !== undefined ? (
                <ImageInfo
                  renderIcon={() => <IsoIcon style={{ fontSize: 48 }} />}
                  description={`${isoInfo?.raw?._content}`}
                  label={isoInfo?.label}
                />
              ) : null}
            </Grid>
            <Grid xs={12} lg={4} md={12}>
              {shutterInfo !== undefined ? (
                <ImageInfo
                  renderIcon={() => (
                    <ShutterSpeedIcon style={{ fontSize: 48 }} />
                  )}
                  description={`${shutterInfo?.raw?._content}`}
                  label={"Shutter Speed"}
                />
              ) : null}
            </Grid>
            {!!imageInfo?.photo?.owner?.realname ? (
              <Grid xs={12} lg={5} md={12}>
                <Card
                  onClick={() => setOpenModal(true)}
                  elevation={2}
                  style={{
                    margin: 10,
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <CameraAltIcon style={{ fontSize: 40, marginRight: 10 }} />
                  <Typography>
                    Clicked By <b>{imageInfo?.photo?.owner?.realname}</b>{" "}
                    {!!exifData?.photo?.camera ? (
                      <>
                        with <b>{exifData?.photo?.camera}</b>
                      </>
                    ) : null}{" "}
                  </Typography>
                </Card>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>

      <TabArea
        tabLabels={["Photo Context"]}
        renderTabContent={[renderPopularTab()]}
      />
    </ScreenContainer>
  );
};

export default ImageDetails;
