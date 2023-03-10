export interface IImage {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface FlickerProps {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IImage[];
}

export interface IResponse {
  photos: FlickerProps;
  stat: string;
}

export interface IExifInfoProps {
  tagspace: string;
  tagspaceid: number;
  tag: string;
  label: string;
  raw: {
    _content: string;
  };
}

export interface ExifProps {
  id: string;
  secret: string;
  server: string;
  farm: number;
  camera: string;
  exif: IExifInfoProps[];
}

export interface IExifResponse {
  photo: ExifProps;
  stat: string;
}

export interface IImageInfo {
  photo: {
    id: string;
    secret: string;
    server: string;
    farm: number;
    dateuploaded: string;
    isfavorite: string;
    license: string;
    safety_level: string;
    rotation: number;
    originalsecret: string;
    originalformat: string;
    owner: {
      nsid: string;
      username: string;
      realname: string;
      location: string;
      iconserver: string;
      iconfarm: number;
      path_alias: string;
      gift: {
        gift_eligible: boolean;
        eligible_durations: string[];
        new_flow: boolean;
      };
    };
    title: {
      _content: string;
    };
    description: {
      _content: string;
    };
    visibility: {
      ispublic: number;
      isfriend: number;
      isfamily: number;
    };
    dates: {
      posted: string;
      taken: string;
      takengranularity: number;
      takenunknown: string;
      lastupdate: string;
    };
    views: string;
    editability: {
      cancomment: number;
      canaddmeta: number;
    };
    publiceditability: {
      cancomment: number;
      canaddmeta: number;
    };
    usage: {
      candownload: number;
      canblog: number;
      canprint: number;
      canshare: number;
    };
    comments: {
      _content: string;
    };
    notes: {
      note: [];
    };
    people: {
      haspeople: number;
    };
    tags: {
      tag: ImageTag[];
    };
    urls: {
      url: IURL[];
    };
    media: string;
  };
  stat: string;
}

export interface ImageTag {
  id: string;
  author: string;
  authorname: string;
  raw: string;
  _content: string;
  machine_tag: number;
}

export interface IURL {
  type: string;
  _content: string;
}

export interface IUserInfo {
  profile: {
    id: string;
    nsid: string;
    join_date: string;
    occupation: string;
    hometown: string;
    showcase_set: string;
    showcase_set_title: string;
    first_name: string;
    last_name: string;
    profile_description: string;
    city: string;
    country: string;
    facebook: string;
    twitter: string;
    tumblr: string;
    instagram: string;
    pinterest: string;
  };
  stat: string;
}

export interface IPopularPhotos {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: string;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface IPopularPhotosResponse {
  photos: {
    photo: IPopularPhotos[];
    page: number;
    pages: number;
    perpage: number;
    total: number;
  };
  stat: string;
}
