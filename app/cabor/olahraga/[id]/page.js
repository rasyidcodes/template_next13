import NotFound from "@/app/not-found"
import { data } from "autoprefixer"

const datax = {
    sepakbola :{
        isi : "sepakbola sepakbola",
        jenis : "tunggal"
    },
    bulutangkis :{
        isi : "bt",
        jenis : "team"
    },
}

export default async function DetailOlahraga({ params }) {
    try {
        // Code that might throw an error
        const detail = datax[params.id]
        return(
            <div>
        <p>{detail.isi}</p>
        <p>{detail.jenis}</p>
    </div>
        )
      } catch (error) {
        // Code to handle the error
        return <NotFound />
      }

    

   
}


































































































































































