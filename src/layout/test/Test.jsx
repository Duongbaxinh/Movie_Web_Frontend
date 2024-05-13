import { Box, Button } from '@mui/material';
import React from 'react';

Test.propTypes = {

};

function Test(props) {
    // const [count, setCount] = useState(0)
    // const [data, setData] = useState(null)
    // const memoizedFetchData = useMemo(() => {
    //     return listFilm.getList();
    // }, [count]);
    // const { data: dataMovie } = useFetch(memoizedFetchData)
    // console.log(dataMovie)
    // useEffect(() => {
    //     const getData = async () => {
    //         const { response } = await listFilm.getDetai()
    //         setData(response)
    //         console.log(data)
    //     }
    //     getData()
    // }, [])
    // console.log(count)
    return (
        <div>
            <Box>hello</Box>
            <Button >click me</Button>
        </div>
    );
}

export default Test;