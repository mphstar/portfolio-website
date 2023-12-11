interface data {
  image: string;
  title: String;
  deskripsi: String;
  github: string | null | undefined;
  build: null;
  redirect: string | null | undefined;
}

interface DataInterface {
  data: data;
}

export default DataInterface;
