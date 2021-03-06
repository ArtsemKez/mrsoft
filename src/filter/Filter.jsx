import React, {useState} from "react";
import {Button, Card, Checkbox, Col, Input, Row} from "antd";

export const Filter = () => {

    let data = [
        "affenpinscher",
        "whippet",
        "african",
        "irish wolfhound",
        "pembroke",
        "airedale",
        "NEWFOUNDLAND",
        "OTTERHOUND",
        "PAPILLON",
        "PEKINESE",
        "SWISS MOUNTAIN",
        "weimaraner",
        "MINIATURE PINSCHER",
        "akita",
        "GERMAN POINTER",
        "vizsla",
        "POMERANIAN",
        "appenzeller",
        "MINIATURE POODLE",
        "yorkshire terrier",
        "STANDARD POODLE",
        "basenji",
        "BERNESE MOUNTAIN",
        "wheaten terrier",
        "TOY POODLE",
        "beagle",
        "MEXICANHAIRLESS",
        "westhighland terrier",
        "PUG",
        "bluetick",
        "TIBETAN MASTIFF",
        "toy terrier",
        "PYRENEES",
        "borzoi",
        "BULL MASTIFF",
        "tibetan terrier",
        "REDBONE",
        "bouvier",
        "MALTESE",
        "silky terrier",
        "CHESAPEAKE RETRIEVER",
        "boxer",
        "MALINOIS",
        "sealyham terrier",
        "CURLY RETRIEVER",
        "brabancon",
        "MALAMUTE",
        "scottish terrier",
        "FLATCOATED RETRIEVER",
        "briard",
        "LHASA",
        "patterdale terrier",
        "GOLDEN RETRIEVER",
        "boston bulldog",
        "LEONBERG",
        "norwich terrier",
        "RHODESIAN RIDGEBACK",
        "french bulldog",
        "LABRADOR",
        "norfolk terrier",
        "ROTTWEILER",
        "staffordshire bullterrier",
        "KUVASZ",
        "lakeland terrier",
        "SALUKI",
        "cairn",
        "KOMONDOR",
        "kerryblue terrier",
        "SAMOYED",
        "chihuahua",
        "KELPIE",
        "irish terrier",
        "SCHIPPERKE",
        "chow",
        "KEESHOND",
        "fox terrier",
        "GIANT SCHNAUZER",
        "clumber",
        "HUSKY",
        "dandie terrier",
        "MINIATURE SCHNAUZER",
        "border collie",
        "WALKER HOUND",
        "border terrier",
        "ENGLISH SETTER",
        "coonhound",
        "ENGLISH HOUND",
        "bedlington terrier",
        "GORDON SETTER",
        "cardigan corgi",
        "BLOOD HOUND",
        "australian terrier",
        "IRISH SETTER",
        "dachshund",
        "BASSET HOUND",
        "american terrier",
        "ENGLISH SHEEPDOG",
        "great dane",
        "AFGHAN HOUND",
        "stbernard",
        "SHETLAND SHEEPDOG",
        "scottish deerhound",
        "IBIZAN HOUND",
        "english springer",
        "SHIBA",
        "dhole",
        "GROENENDAEL",
        "welsh spaniel",
        "SHIHTZU",
        "dingo",
        "ITALIAN GREYHOUND",
        "sussex spaniel",
        "BLENHEIM SPANIEL",
        "doberman",
        "GERMANSHEPHERD",
        "japanese spaniel",
        "BRITTANY SPANIEL",
        "norwegian elkhound",
        "ESKIMO",
        "irish spaniel",
        "COCKER SPANIEL",
        "entlebucher",
        "ENTLEBUCHER",
        "cocker spaniel",
        "IRISH SPANIEL",
        "eskimo",
        "NORWEGIAN ELKHOUND",
        "brittany spaniel",
        "JAPANESE SPANIEL",
        "germanshepherd",
        "DOBERMAN",
        "blenheim spaniel",
        "SUSSEX SPANIEL",
        "italian greyhound",
        "DINGO",
        "shihtzu",
        "WELSH SPANIEL",
        "groenendael",
        "DHOLE",
        "shiba",
        "ENGLISH SPRINGER",
        "Ibizan hound",
        "SCOTTISH DEERHOUND",
        "shetland sheepdog",
        "STBERNARD",
        "afghan hound",
        "GREAT DANE",
        "english sheepdog",
        "AMERICAN TERRIER",
        "basset hound",
        "DACHSHUND",
        "irish setter",
        "AUSTRALIAN TERRIER",
        "blood hound",
        "CARDIGAN CORGI",
        "gordon setter",
        "BEDLINGTON TERRIER",
        "english hound",
        "COONHOUND",
        "english setter",
        "BORDER TERRIER",
        "walker hound",
        "BORDER COLLIE",
        "miniature schnauzer",
        "DANDIE TERRIER",
        "husky",
        "CLUMBER",
        "giant schnauzer",
        "FOX TERRIER",
        "keeshond",
        "CHOW",
        "schipperke",
        "IRISH TERRIER",
        "kelpie",
        "CHIHUAHUA",
        "samoyed",
        "KERRYBLUE TERRIER",
        "komondor",
        "CAIRN",
        "saluki",
        "LAKELAND TERRIER",
        "kuvasz",
        "STAFFORDSHIRE BULLTERRIER",
        "rottweiler",
        "NORFOLK TERRIER",
        "labrador",
        "FRENCH BULLDOG",
        "rhodesian ridgeback",
        "NORWICH TERRIER",
        "leonberg",
        "BOSTON BULLDOG",
        "golden retriever",
        "PATTERDALE TERRIER",
        "lhasa",
        "BRIARD",
        "flatcoated retriever",
        "SCOTTISH TERRIER",
        "malamute",
        "BRABANCON",
        "curly retriever",
        "SEALYHAM TERRIER",
        "malinois",
        "BOXER",
        "chesapeake retriever",
        "SILKY TERRIER",
        "maltese",
        "BOUVIER",
        "redbone",
        "TIBETAN TERRIER",
        "bull mastiff",
        "BORZOI",
        "pyrenees",
        "TOY TERRIER",
        "tibetan mastiff",
        "BLUETICK",
        "pug",
        "WESTHIGHLAND TERRIER",
        "mexicanhairless",
        "BEAGLE",
        "toy poodle",
        "WHEATEN TERRIER",
        "bernese mountain",
        "BASENJI",
        "standard poodle",
        "YORKSHIRE TERRIER",
        "miniature poodle",
        "APPENZELLER",
        "pomeranian",
        "VIZSLA",
        "german pointer",
        "AKITA",
        "miniature pinscher",
        "WEIMARANER",
        "swiss mountain",
        "AIREDALE",
        "pekinese",
        "WHIPPET",
        "papillon",
        "AFRICAN",
        "otterhound",
        "IRISH WOLFHOUND",
        "newfoundland",
        "PEMBROKE",
        "AFFENPINSCHER"
    ]

    const [input, setInput] = useState()
    const [checkbox, setCheckbox] = useState(false)
    const [searchData, setSearchData] = useState([])

    const ChangeInput = (value) => {
        setInput(value)
    }

    const SearchByLength = () => {
        setSearchData(data.filter(data => data.length > input))
    }

    const SearchBySubstring = () => {
        if (checkbox === true) {
            setSearchData(data.filter(data => data.indexOf(input) >= 0))
        } else {
            setSearchData(data.filter(data => data.toUpperCase().indexOf(input.toUpperCase()) >= 0))
        }
    }

    const Checked = (checked) => {
        setCheckbox(checked)
    }

    return (
        <>
            <Col style={{padding: '5px'}}>
                <Row>
                    <Input placeholder="?????????????? ?????????? ?????? ??????????????????"
                           onChange={(event) => ChangeInput(event.target.value)}/>
                </Row>
                <Row style={{paddingTop: '5px'}}>
                    <Button onClick={SearchByLength}>?????????? ???? ??????????</Button>
                </Row>
                <Row style={{paddingTop: '5px'}}>
                    <Button onClick={SearchBySubstring}>?????????? ???? ??????????????????</Button>
                    <Checkbox value={checkbox}
                              onChange={(Event) => Checked(Event.target.checked)}
                              style={{margin: '5px'}}>???????????????????????????????? ???? ????????????????</Checkbox>
                </Row>
                <Row style={{paddingTop: '5px'}}>
                    <Card direction="vertical" style={{width: '100%'}}>
                        {searchData.map((i) => (
                            <p>{i}</p>
                        ))}
                    </Card>
                </Row>
            </Col>
        </>
    )
}