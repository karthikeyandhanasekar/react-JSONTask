import React from "react"
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap"


const FormEntry = () => {

    const [values, setvalues] = React.useState({})


    const handlesubmit = (e) => {
        console.log(e.target.value);
    }


    const InputChange = (e) => {
        const key = e.target.name
        const value = key === 'phoneNumber' ? '408-' + e.target.value : e.target.value
        setvalues(data => (
            {
                ...data,
                [key]: value
            }
        ))

        console.log(values);

    }

    return (
        <Form className="p-2 " onSubmit={handlesubmit}>
            <Row className="mb-3">

                {/* First Name */}
                <Col md={2} className="mb-3" >
                    <Form.Control type="text" name="firstName" onKeyUp={InputChange}
                        className="border-0 border-bottom " required autoFocus placeholder="First Name" />
                </Col>

                {/* Last Name */}
                <Col md={2} className="mb-3" >
                    <Form.Control type="text" name="lastName" onKeyUp={InputChange}
                        className="border-0 border-bottom " required autoFocus placeholder="Last Name" />
                </Col>

                {/* jobTitleName */}
                <Col md={3} className="mb-3" >
                    <Form.Control type="text" name="jobTitleName" onKeyUp={InputChange}
                        className="border-0 border-bottom " required autoFocus placeholder="Job Title" />
                </Col>

                {/* employeeCode */}
                <Col md={2} className="mb-3" >
                    <Form.Control type="text" name="employeeCode" onKeyUp={InputChange}
                        className="border-0 border-bottom " required autoFocus placeholder="Employee Code" />
                </Col>


                {/* Region */}
                <Col md={2} className="mb-3" >
                    <Form.Control type="text" name="region" onKeyUp={InputChange}
                        className="border-0 border-bottom " required autoFocus placeholder="Region" />

                </Col>
            </Row>

            <Row className="mb-3">

                {/* emailaddress */}
                <Col md={3} className="mb-3" >
                    <Form.Control type="email" name="emailaddress" onKeyUp={InputChange}
                        className="border-0 border-bottom " required autoFocus placeholder="Email ID" />
                </Col>

                {/* phoneNumber */}
                <Col md={3} className="mb-3" >
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="408">408</InputGroup.Text>
                        <Form.Control type="phone" name="phoneNumber" onKeyUp={InputChange} aria-describedby="408"
                            className="border-0 border-bottom " required autoFocus placeholder="11112020" />

                    </InputGroup>
                </Col>

                <Col md={4} >
                    <Button variant="primary" type="submit" className="me-4">
                        Submit
                    </Button>
                    <Button variant="warning" type="reset" >
                        Reset
                    </Button>
                </Col>
            </Row>

        </Form>
    )
}

export default FormEntry