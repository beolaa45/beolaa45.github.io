import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner';
import Carousel2 from '../../components/Carousel2/Carousel2'
import DetailItem from '../../components/DetailItem/DetailItem';
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'
import './Detail.scss'
function Detail(props) {
    let {state: {id}} = useLocation();
    let dataDetail = useSelector(state => state.detail.data);
    let loading = useSelector(state => state.detail.loading)
    let dispatch = useDispatch()
    console.log(dataDetail)
   
   
    const onChangeQuanlity = (e) => {
        let quanlity = e.target.value
        if(!quanlity) {
            quanlity = ''
        }else{
            quanlity = parseInt(e.target.value)
            if(quanlity === 0 || Number.isNaN(quanlity) || quanlity >= 100) return;
        }
       

        dispatch(actions.detaiOnChangeQuanlity(quanlity))
    }

    const plusQuanlity = () => {
        dispatch(actions.detailPlusQuanlity())
        console.log("plus")
    }

    const minusQuanlity = () => {
        dispatch(actions.detailMiunsQuanlity())
        console.log("minus")
    }

    useEffect(() => {
        dispatch(actions.detailInit(id))
        window.scrollTo(0, 0);
    },[])
    let renderDetaiItem;
    if(dataDetail){
        renderDetaiItem = (
            <section className="Detail__box">
            <Container>
                <Row>
                    <Col  xl={6} lg={6} md={6} sm={12} xs={12} style={{overflowX: "hidden"}}>
                        <div className="Detail__box__carousel2">
                           <Carousel2 data={dataDetail}/>
                        </div>
                    </Col>
                    <Col  xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className="Detail__box__item">
                           <DetailItem plus={plusQuanlity} minus={minusQuanlity} onChangeQuanlity={onChangeQuanlity} data={dataDetail}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }

    if(loading){
        renderDetaiItem = (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "40rem"}}>
                <Spinner />
            </div>
        )
    }
   
    
    return (
       
        <Fragment>
             
            <section className="Detail__banner">
                <Container fluid>
                    <Row>
                    <Banner 
                            title="Products"
                            page="Detail"
                            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"/>
                    </Row>
                </Container>
            </section>
            <div>
            Quiz detail {id}
            </div>
            {renderDetaiItem}
            {/* <section className="Detail__box">
                <Container>
                    <Row>
                        <Col  xl={6} lg={6} md={6} sm={12} xs={12} style={{overflowX: "hidden"}}>
                            <div className="Detail__box__carousel2">
                               <Carousel2 />
                            </div>
                        </Col>
                        <Col  xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="Detail__box__item">
                               <DetailItem data/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </Fragment>
    )
}


export default Detail

