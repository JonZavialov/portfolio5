import sendRequestToBackend from "../../utils/sendRequestToBackend";
import CollapsableDiv from "./CollapsibleDiv";
import { useState, useEffect } from "react";

function CollapsibleRepo({ repoName, path, setMainWindow }){
    const [topLevelDirs, setTopLevelDirs] = useState([]);
    const [topLevelFiles, setTopLevelFiles] = useState([]);

    function setTopLevelItems(items){
        setTopLevelDirs(items.filter((item) => item.type === "dir"));
        setTopLevelFiles(items.filter((item) => item.type === "file"));
    }
    
    useEffect(() => {
        sendRequestToBackend(`v1/github/repoContents?repo=${repoName}&path=${path}`)
        .then((res) => {
            setTopLevelItems(res.data);
        })
        .catch(() => {
            setTopLevelItems([]);
        });
    }, [repoName, path]);

    return (
        <CollapsableDiv name={path === "/" ? repoName : path.substring(path.lastIndexOf('/') + 1)}>
            {
                topLevelDirs.map((item) => {
                    return <CollapsibleRepo repoName={repoName} path={item.path} key={item.name} setMainWindow={setMainWindow} />
                })
            }
            {
                topLevelFiles.map((item) => {
                    return <p key={item.name} onClick={() => setMainWindow({repo: repoName, path: item.path})}>{item.name}</p>
                })
            }
        </CollapsableDiv>
    )
}

export default CollapsibleRepo;
