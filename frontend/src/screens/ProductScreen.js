import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import uploadFileToS3 from '../components/UploadFileToS3'
import {
  listProductDetails,
} from '../actions/productActions'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [prescriptionPath, setPrescription] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
    }
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const uploadFileHandler = async (e) => {

    const file = e.target.files[0]

    try {
      uploadFileToS3(file).then((data) => {
        setPrescription(data.Location)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Link className='btn btn-light my-3' to={userInfo && userInfo.isVendor ? '/profile' : '/'}>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={6}>
              <Card.Img src={product.imagePath} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                { userInfo && userInfo.isVendor && (
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                )}
                <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                
                {  userInfo && userInfo.isVendor && (<>
                    <ListGroup.Item>Manufacturer: {product.manufacturer}</ListGroup.Item>
                    <ListGroup.Item>Expiry: {product.expiry ? product.expiry.substring(0, 10) : ''}</ListGroup.Item>
                    <ListGroup.Item>In Stock: {product.countInStock}</ListGroup.Item>
                    <ListGroup.Item>Is RxRequired: {product.isRxRequired ? 'Yes' : 'No'}</ListGroup.Item></>)}
              </ListGroup>
            </Col>
            { userInfo && !userInfo.isVendor && (
              <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>RxRequired:</Col>
                      <Col>
                        <strong>{product.isRxRequired ? 'Yes' : 'No'}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.isRxRequired && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Prescription:</Col>
                      <Col>
                      <Form.File id='image-file'
                      onChange={uploadFileHandler}></Form.File>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  )}

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0 || (product.isRxRequired ? !(prescriptionPath.length > 0) : false)}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>)}
            
          </Row>
        </>
      )}
    </>
  )
}

export default ProductScreen
