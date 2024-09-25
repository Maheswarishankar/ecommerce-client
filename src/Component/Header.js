import React from 'react'
import { Navbar, Container, Col, Nav, Row, Form, InputGroup } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch ,useSelector} from 'react-redux'
import { filterByCategory, searchProducts } from '../redux/ProductSlice'


const Header = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems); 
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    //Category Change.......................................................................
    const handleCategoryChange = (e) => {
        dispatch(filterByCategory(e.target.value));
    }
    //Search the Products...................................................................
    const handleSearchChange = (e) => {
        dispatch(searchProducts(e.target.value));
    }
    
    return (
        <>
            <Navbar sticky="top"
                className="navbar-custom"
                style={{ backgroundColor: "#a6f7e5" }}
                expand="lg"
            >
                <Container>
                    <Navbar.Brand
                        className="fs-4 "
                        style={{ fontWeight: "700", color: "#079110", fontFamily: "cursive" }}
                    >
                        <FaCartPlus size="1.8rem" color="#f98406" />
                        Shopify
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="w-100 align-items-center">
                            <Col className="mx-5">
                                <Nav className="me-auto NavLink">
                                </Nav>
                            </Col>
                            <Col md={4}>
                                <Form.Select onChange={handleCategoryChange}>
                                    <option value="">All categories</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothings">Clothings</option>
                                    <option value="Home Appliance">Home Appliance</option>
                                 
                                </Form.Select> 
                            </Col>
                            <Col md={4}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Products"
                                        onChange={handleSearchChange}

                                    /> <InputGroup.Text>
                                        <FaSearch />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Nav>
                                    <Nav.Link >
                                        <MdAddShoppingCart size="1.5em" color="#f98406" />
                                        <sup style={{ color: "#079110" }}>{cartCount}</sup>
                                    </Nav.Link>                                    
                                </Nav>
                            </Col>                            
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header