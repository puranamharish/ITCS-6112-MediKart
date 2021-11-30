import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import uploadFileToS3 from '../components/UploadFileToS3'
import FormContainer from '../components/FormContainer'
import { createProduct } from '../actions/productActions'

const ProductEditScreen = ({ match, history }) => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [imagePath, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [expiry, setExpiry] = useState(Date())
  const [countInStock, setCountInStock] = useState(0)
  const [isRxRequired, setIsRxRequired] = useState(false)
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productCreate = useSelector((state) => state.productCreate)
  const { success: successCreate } = productCreate

  useEffect(() => {
    if (successCreate) {
      history.goBack()
    }
  })

  const uploadFileHandler = async (e) => {

    const file = e.target.files[0]
    setUploading(true)

    try {
      uploadFileToS3(file).then((data) => {
        setImage(data.Location)
        setUploading(false)
      }).catch(error =>
        setUploading(false)
      )
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct({
        name,
        description,
        price,
        imagePath,
        manufacturer,
        expiry,
        isRxRequired,
        countInStock
      })
    )
  }

  return (
    <>
      <Link to='/profile' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Product</h1>        
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='description'
                placeholder='Enter Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='manufacturer'>
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                type='manufacturer'
                placeholder='Enter manufacturer'
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isRxRequired'>
              <Form.Label>Prescription</Form.Label>
              <Form.Check
                type='checkbox'
                label='Is Rx Required'
                onChange={(e) => setIsRxRequired(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Form.Group controlId='expiry'>
              <Form.Label>Expiry</Form.Label>
              <Form.Control
                type='date'
                min={new Date().toISOString().split("T")[0]}
                placeholder='Expiry date'
                onChange={(e) => setExpiry(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <img src={imagePath} alt="Uploaded pic" width="500" height="300"
               style={{marginBottom: '8px'}}
               onLoad={(event) => event.target.style.display = 'block' }
               onError={(event) => event.target.style.display = 'none' }/>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Create
            </Button>
          </Form>
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
