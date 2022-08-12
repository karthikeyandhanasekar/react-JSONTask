import React from "react"
import { Form, Table, Button, Row, Col } from "react-bootstrap"
import Pagination from 'react-bootstrap/Pagination';

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeemployee } from "../redux/slice";




const EntryDisplay = () => {
    const [filtervalue, setvalues] = React.useState('')
    const [currentpage, setcurrentpage] = React.useState(1)
    const [size, setsize] = React.useState(3)

    const employeedetails = useSelector(state => state.employeeslice.reducer.employeedetails)
    const [UIdata, setUIdata] = React.useState('')
    const dispatch = useDispatch()


    const changepageno = (pageno) => {
        setcurrentpage(pageno)
    }
    const PageItem = [...Array(size).keys()]
        .map(number =>
            <Pagination.Item onClick={() => changepageno(number + 1)} key={number + 1} active={number + 1 === currentpage}>
                {number + 1}
            </Pagination.Item>)



    //when pageno change 
    React.useEffect(() => {
        const p = currentpage - 1

        const start = size * p

        const end = (size * currentpage) - 1


        const roworder = ['userId', 'firstName', 'lastName', 'jobTitleName', 'employeeCode', 'region', 'phoneNumber', 'emailaddress']

        const rowUI = React.Children.toArray(
            employeedetails.map(detail => (
                <tr>
                    <td>
                        <Form.Check
                            type={'checkbox'}
                            value={detail}
                        />

                    </td>
                    {roworder.map(row => React.Children.toArray(
                        <td>{detail[row]}</td>
                    )).flat(0)
                    }
                    <td>
                        <Button className=" d-inline me-4 bg-warning rounded-circle p-2  border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512">
                                <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
                            </svg>
                        </Button>
                    </td>
                    <td>
                        <Button onClick={() => deleteemployee(detail.userId)} className=" d-inline me-4 bg-warning rounded-circle p-2  border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 448 512">
                                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
                            </svg>
                        </Button>
                    </td>

                </tr>
            )


            )).reverse().slice(start, end + 1)


        setUIdata(rowUI)
        // remove employee
        const deleteemployee = (id) => {
            dispatch(removeemployee(id))
        }

    }, [employeedetails, currentpage, size, dispatch])






    return (
        <>
            <div className="d-flex flex-wrap">
                <div className="me-2">
                    <Form.Control type="text" name="filtervalue" onKeyUp={(e) => setvalues(e.target.value)}
                        className="border-0 border-bottom " required autoFocus placeholder="Filter" />
                </div>
                <div>
                    <Button className=" d-inline me-4 bg-warning rounded-circle p-2  border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 448 512">
                            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
                        </svg>
                    </Button>
                </div>
            </div>
            <br />
            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            <Form.Check
                                type={'checkbox'}
                            />
                        </th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>JobTitle</th>
                        <th>Employee Code</th>
                        <th>Region</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {UIdata}
                </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center ">
                <div>
                    <div className="d-flex">
                        {/* <div className="me-2">Items per Page</div>
                        <div>
                            <Form.Select aria-label="Default select example" onChange={(e)=>setsize(e.target.value)} className="border-0 border-bottom">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Select>
                        </div> */}
                    </div>
                </div>
                <div>
                    <p>{currentpage}-{size} of {size}</p>
                </div>
                <div>

                    <Pagination className="">
                        {PageItem}
                    </Pagination>
                </div>
            </div>


        </>
    )

}

export default EntryDisplay