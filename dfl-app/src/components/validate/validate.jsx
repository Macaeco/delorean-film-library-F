import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSearchParams } from "react-router-dom";



function Validate() {
    const [queryParams] = useSearchParams();
    const param = queryParams.get('token')

   
    useEffect(() => {
        fetch(`http://localhost:4000/auth/validate?token=${param}`)
            .then(d => d.json())
            .then(data => console.log(data))

    },[]);


    return <Button 
    //   onClick={handleValidate} 
      >Volver</Button>


}

export default Validate;