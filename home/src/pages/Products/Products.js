import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'
import Filter from '../../components/Filter/Filter'
import "./Products.scss";
import Carousel from "../../components/Carousel/Carousel"
import CardItem from '../../components/CardItem/CardItem';
import { useSelector, useDispatch } from 'react-redux';
import {toSlug} from '../../components/utiliti/utility';
import * as actions from '../../store/actions/index'
import Spinnerr from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import ModalItem from '../../components/ModalItem/ModalItem';

function Products(props) {
    let dataProducts = useSelector(state => state.products.data);
    let loading = useSelector(state => state.products.loading);
    let dispatch = useDispatch();
    let showModalItem = useSelector(state => state.products.showModal);
    let loadingShowModal = useSelector(state => state.products.loadingModal)
    let dataModal = useSelector(state => state.products.dataModal);
    console.log(dataModal)
    console.log(dataProducts)
    const clickedToCard = () => {

    } 

    const onQuickView = (e, id) => {
        e.preventDefault()
        dispatch(actions.productsItemModalInit(id))
    }

    const onChangeQuanlity = (e) => {
        let quanlity = e.target.value
        if(!quanlity) {
            quanlity = ''
        }else{
            quanlity = parseInt(e.target.value)
            if(quanlity === 0 || Number.isNaN(quanlity) || quanlity >= 100) return;
        }
       

        dispatch(actions.productsOnChangeQuanlity(quanlity))
    }

    const plusQuanlity = () => {
        dispatch(actions.productsPlusQuanlity())
    }

    const minusQuanlity = () => {
        dispatch(actions.productsMiunsQuanlity())
    }

    useEffect(() => {
       dispatch(actions.productsInit())
    }, [])
    const turnOffModal = () => {
        dispatch(actions.productsTurnOffModal())
    }

    
    let renderProduct;
    if(dataProducts){
        renderProduct = dataProducts.map(item => {
            return(
                <Col  xl={4} lg={4} md={4} sm={6} xs={12} key={item.id} style={{marginBottom: "3rem"}}>
                <div >
                    <CardItem 
                        clickedToCard={clickedToCard}
                        onQuickView={(e) => onQuickView(e, item.id)}
                        sale={item.sale}
                        price={item.price}
                        title={item.title}
                        url={item.images[0]}
                        id={item.id}
                        link={`products/${toSlug(item.title)}`}                                 
                    />
               </div>
               </Col>
            )
        })
    }

    if(loading){
        renderProduct = <Spinnerr style={{height: "30rem",  width: "100%", textAlign: "center"}} />
    }
    return (
        <Fragment>
             <Modal show={showModalItem} clicked={turnOffModal}>
                 <p></p>
                 <ModalItem plus={plusQuanlity} minus={minusQuanlity} onChangeQuanlity={onChangeQuanlity} loadingShowModal={loadingShowModal} dataModal={dataModal} />
            </Modal>
            <section className="Products__banners">
                <Container fluid>
                    <Row>
                            <Banner 
                            title="Products"
                            page="products"
                            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"/>
                    </Row>
                </Container>
            </section>
            <section className="Products__content">
                <Container>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={3} xs={12} >
                            <form className="Products__content__filter">
                                <Filter title="Categories" subTitle={["camera"]}/>
                                <div className="Products__content__filter__box">
                                        <button className="Products__content__filter__box__submit" >Filter</button>
                                        <button className="Products__content__filter__box__submit FilterOut" >Filter Out</button>
                                </div>
                            </form>
                        </Col>
                        <Col  xl={9} lg={9} md={9} sm={9} xs={12}>
                            <div className="Products__content__list">
                                <div className="Products__content__list__filter">
                                    <p className="Products__content__list__filter__sort">Sort by:</p>
                                    <select className="Products__content__list__filter__select">
                                        <option value="default" select="selected">Mặc định</option>
                                        <option value="az">A đến Z</option>
                                        <option value="za">Z đến A</option>
                                        <option value="lowHigh">Giá từ thấp đến cao</option>
                                        <option value="highLow">Giá từ cao đến thấp</option>
                                    </select>
                                </div>
                                <div className="Products__content__list__content">
                                    <Row>
                                        {renderProduct}
                                    </Row>                  
                                </div>

                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col >
                            <Carousel />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}


export default Products

