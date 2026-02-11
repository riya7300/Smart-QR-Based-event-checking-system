import {useEffect} from "react";
import {BrowserQRCodeReader}
from "@zxing/browser";

function Scanner(){

    useEffect(()=>{

        const reader =
            new BrowserQRCodeReader();

        reader.decodeFromVideoDevice(
            null,
            "video",
            async(result)=>{

                if(result){

                    await fetch(
                        "http://localhost:5000/checkin",
                        {
                            method:"POST",
                            headers:{
                                "Content-Type":
                                "application/json"
                            },
                            body:JSON.stringify({
                                token:result.text
                            })
                        }
                    );

                    alert("✅ Checked In!");
                }
            }
        );

    },[]);

    return(
        <div>

            <h2>QR Scanner</h2>

            <video
                id="video"
                width="400"
                height="300"
            ></video>

        </div>
    );
}

export default Scanner;
