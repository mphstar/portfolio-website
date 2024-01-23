import SelectionTech from "@/utils/SelectionTech";

interface data {
  image: string;
  title: String;
  deskripsi: String;
  github: string | null | undefined;
  build: null | SelectionTech[];
  redirect: string | null | undefined;
}

interface DataInterface {
  data: data;
}

export default DataInterface;
