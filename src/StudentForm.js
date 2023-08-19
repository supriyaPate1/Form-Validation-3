import React, { Component } from 'react'
import './studentform.css'
export default class StudentForm extends Component {
    state={
        status:"",
    } 
    validation=()=>{
        var nameAF =document.getElementById('firstN').value;
        var nameAL =document.getElementById('firstL').value;
        var dob =document.getElementById('dob').value;
        var detailSib =document.getElementById('sib').value;
        var FnameF =document.getElementById('Ffirst').value;
        var Fnamel =document.getElementById('Lfirst').value;
        var fqual =document.getElementById('Fquali').value;
        var Fphone=document.getElementById('phone').value;
        var Femail =document.getElementById('email').value;
        var Foccu =document.getElementById('occuF').value;      
        var MnameF =document.getElementById('Mfirst').value;
        var MnameL =document.getElementById('MLast').value;
        var mqual =document.getElementById('Mquali').value;
        var Mphone =document.getElementById('phone').value;
        var Memail =document.getElementById('email').value;
        var Moccu =document.getElementById('occuM').value; 
        var address =document.getElementById('add').value;
        if(nameAF!==""&& nameAL!==""&& detailSib!==""&&dob !==""&& FnameF !==""&&Fnamel!==""&&fqual!==""&&Fphone!==""&&Femail!==""&&Foccu!==""&& MnameF!==""&& MnameL!==""&& mqual!==""&&Mphone!==""&&Memail!==""&&Moccu!==""&& address!==""){
            this.setState({
                status:"Your form has been  successfully created!"
            })
        }

    }
  

  render() {
    return (
        <>
      <h3>Student Registration Form</h3>
      <center>
      <div className='maindiv'>
        <form className='form' action='#'>
            <table className='tab'>
                <tr> Name of the Applicant </tr>
                <tr>
                    <td ><input type='text' className='twofields' required id='firstN' placeholder='first name' minlength="2"  maxlength="20" pattern="[A-Za-z]{1,32}"></input></td>
                    <td><input type='text' className='twofields' required id='firstL' placeholder='last name'  minlength="2"  maxlength="20" pattern="[A-Za-z]{1,32}"></input></td>
                </tr>
                <tr>Date of Birth</tr>
                <tr>
                    <td colSpan={2}><input className='onefield' type='date' id='dob'  required ></input></td>
                </tr>
                <tr>Gender</tr>
                <tr>
                    <td><input id="male" className='gen' name="gend" type="radio" defaultChecked/>Male</td>
                    
                </tr>
                <tr>
                    <td><input id="female"  className='gen' name="gend" type="radio" />Female</td>
                </tr>
                <tr>Details of Siblings</tr>
                <tr>
                    <td colSpan={2}><textarea  type='text' id='sib' className='onefield' required  minlength="2"  maxlength="20" /></td>
                </tr>
                <h4>Parents Information</h4>
                <tr>
                    Father's Name
                </tr>
                <tr>
                    <td><input type='text' required className='twofields' id='Ffirst' placeholder='first'  minlength="2"  maxlength="20"></input></td>
                    <td><input type='text' required className='twofields' id='Lfirst' placeholder='last'  minlength="2"  maxlength="20"></input></td>
                </tr>
                <tr>Father's Qualification</tr>
                <tr>
                    <td colSpan={2}><input className='onefield' type='text' id='Fquali'  minlength="2"  maxlength="20" required></input></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>Email</td>
                </tr>
                <tr>
                    <td><input type="text" pattern="[7-9]{1}[0-9]{9}" className='twofields' id='phone'  placeholder='#### ### ###' required ></input></td>
                    <td><input type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" className='twofields'id='email' required></input></td>
                </tr>
                <tr>Father's Occupation</tr>
                <tr>
                    <td colSpan={2}><input  className='onefield' type='text' id='occuF'  minlength="2"  maxlength="20" required></input></td>
                </tr>
                <tr>Mother's Name</tr>
                <tr>
                    <td><input type='text' className='twofields' id='Mfirst' placeholder='first'  minlength="2"  maxlength="20" pattern="[A-Za-z]{1,32}"required></input></td>
                    <td><input type='text' className='twofields' id='MLast' placeholder='last'  minlength="2"  maxlength="20" pattern="[A-Za-z]{1,32}" required></input></td>
                </tr>
                <tr>Mother's Qualification</tr>
                <tr>
                    <td colSpan={2}><input  className='onefield' type='text' id='Mquali'  minlength="2"  maxlength="20" required></input></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>Email</td>
                </tr>
                <tr>
                    <td><input type="text" pattern="[7-9]{1}[0-9]{9}" className='twofields' placeholder='#### ### ###' id='phone' required></input></td>
                    <td><input type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" className='twofields' id='email' required></input></td>
                </tr>
                <tr>Mother's Occupation</tr>
                <tr>
                    <td colSpan={2}><input  className='onefield' type='text' id='occuM'  minlength="2"  maxlength="20" required ></input></td>
                </tr>
                <tr>Address</tr>
                <tr>
                    <td colSpan={2}><input className='onefield' type='text' id='add'  minlength="2"  maxlength="100" required></input></td>
                </tr>
                <tr>
                    <td><button type='submit' id='submitbtn'onClick={ this.validation} >Submit</button></td>
                </tr>
                 <tr>{this.state.status}</tr>
                
            </table>
        </form>
       
      </div>
      </center>
      </>
    )
  }
}
