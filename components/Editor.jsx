import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor({data}) {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={data ? data : "Start writing something awesome 😎"}
      />
    </>
  );
}
