import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {API_URL} from "../App/constants";
import {endLoadingImg, errorLoadingImg, startLoadingImg} from "../../actions/art";
import {useDispatch, useSelector} from "react-redux";

export default function Art(props) {

    const [image, setState] = useState(undefined);

    const loadData = () => {
        fetch(API_URL, {
            // mode: 'no-cors'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(image);
            setState(data.url);
        }).catch(() => console.log("error"))
    };

    const loadAsync = async () => {
        try {
            const response = await fetch(API_URL)

            if (!response.ok || response.status !== 200) {
                throw Error('Something went wrong')
            }

            const responseJson = await response.json()
            setState(responseJson.url);

            console.log({response, responseJson})
        } catch (error) {
            console.error('error', error)
        }
    }

    const dispatch = useDispatch()
    const selectImage = useSelector(state => state.art)

    const loadByRedux = async () => {
        try {
            dispatch(startLoadingImg())

            const response = await fetch(API_URL)

            if (!response.ok || response.status !== 200) {
                throw Error('Something went wrong')
            }

            const responseJson = await response.json()
            dispatch(endLoadingImg(responseJson.url))

        } catch (error) {

            dispatch(errorLoadingImg())
            console.error('error', error)

        }
    }

    return (
        <div style={{padding: '10px'}}>
            <p>Art</p>
            <Button onClick={loadData}>Load Promise</Button>
            <hr/>
            <Button onClick={loadAsync}>Load Async</Button>
            <hr/>
            <Button onClick={loadByRedux}>Load By Redux</Button>
            <hr/>
            <div>
                {image && <img style={{width: '300px', height: '300px'}} src={image} alt="cat"/> }
            </div>

            {
                selectImage.loading && <span>LOADING...</span>
            }
            <br/>
            {
                selectImage.loaded && <img onClick={loadByRedux} style={{width: '300px', height: '300px', border: '1px solid black', cursor: "pointer"}} src={selectImage.imageUrl} alt="cat"/>
            }

            {
                selectImage.error && <span> ERROR REPEAT => <Button onClick={loadByRedux}>Load By Redux</Button> </span>
            }

        </div>
    )

}
