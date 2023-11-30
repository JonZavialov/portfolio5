import { useEffect, useState } from "react";
import sendRequestToBackend from "../../../../utils/sendRequestToBackend";
import '../../../../styles/mainstates/codeview.scss';
import CodeDisplay from "./CodeDisplay";
import ImageDisplay from "./ImageDisplay";

function FileView({ path }){
    const [state, setState] = useState("loading");
    const [additionalProp, setAdditionalProp] = useState(null);

    useEffect(() => {
        const repoName = path.split("/")[0];
        const restOfPath = path.substring(path.indexOf("/") + 1);
        const fileExtension = path.split(".")[1];
        
        sendRequestToBackend(`v1/github/repoContents?repo=${repoName}&path=${restOfPath}`)
        .then((res) => {
            if (/(jpg|jpeg|png|ico)$/i.test(fileExtension)) {
                setState("image");
                setAdditionalProp(res.data.download_url);
            }
            else {
                setState("code");
                setAdditionalProp(atob(res.data.content));
            }
        })
        .catch(() => {
            setState("error");
        });
    }, [path]);
    
    return (
        <>
            {state === "loading" && <p>Loading...</p>}
            {state === "error" && <p>Error loading file</p>}
            {state === "code" && <CodeDisplay content={additionalProp} language={path.split(".")[1]} />}
            {state === "image" && <ImageDisplay url={additionalProp} />}
        </>
    )
}

export default FileView;
