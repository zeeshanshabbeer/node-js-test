# PROJECT NAME: Attendance Management System 
<br>
[Project Link](https://www.freeprojectz.com/uml-diagram/attendance-management-system-uml-diagram)

## Available Scripts
In the project directory, you can run:
### `npm run dev`
Runs the app in development mode.
Open [http://localhost:7000](http://localhost:7000) to view it in your browser.

## Description
It is simply to manage the Student attendance, Leaves and Holiday. Admin add holiday, add leaves, add attendance of student and register student and teacher. Student request for Attendance or Leaves and view his/her Attendance.Teacher mark the attendance of student and view the profile of Student. Everyone change contact no,update password, reset password through email. Admin change the student attendance.  

## Functionalities in userRouter:

1. `/signup` - Admin register the Student, Teacher and also Admin by entering his/her detail.
2. `/login` -Everyone login through role_name, user_username and user_password.
3. `/profile` -Everyone view his her profile.
4. `/updatePassword` -Everyone update his/her password by entering old passord,new_password and confirm_password.
5. `/updateContactNo` -Everyone change his/her contact No.
6. `/logout` -Simply logout from the system. In this clear the cookies.
7. `/resetPassword` -Verify the token that send through the email. Then rest the password.
8. `/resetPasswordLink` -Resest password link send on email to change the password through email.
9. `/View_Student_profile` -Teacher view all the student profile.
10. `/View_Specific_Student_profile/:user_id` -Teacher view the profile of every student through Student unique id (user_id).
11. `/Admin_viewProfile` -Admin view the student and teacher profile.
12. `/Admin_ViewSpecificProfile/:user_id` -Admin view the specific student, teacher profile by entering his/her user_id.
13. `/Registered_User_Sheet` -admin download the file in excel format in which all the user and employee data 

## Functionalities in attendanceRouter:

1. `/Attendence` -Admin enroll the student for attendance by entering his/her user_id and teacher user_id.
2. `/Request_Attendance` -Student request for his/her attendance from teacher. Enter the attendance ,date or description and then request for attendance.
3.  `/View_Student_Requests` -Teacher the student attendance request with detail.
4. `/Admin_View_Student_Request` -Admin view all the request for attendance that he/she send to specific teacher.
5. `/View_Specific_Student_Request/:attendance_student_id` -Admin and Teacher view the specific student attendance request by entering his/her student_attendance_id.
6. `/Accept_Reject_Student_Request/:attendance_student_id/:status` -Admin and Teacher accept or reject student attendance request then this store in attendance model. He/she view through unique student attendance and then accept od reject.
7. `/Accept_Request/:attendance_student_id` -Teacher and Admin accept student request by viewing through unique id. After accept this store in Attendance model.
8. `/Reject_Request/:attendance_student_id` -Teacher and Admin reject student request by viewing through unique id. After reject this store in Attendance model.
9. `/Student_View_Attendance` -Student view his/her all the previous attendance.
10. `/Admin_View_Student_Attendance` -Admin view all the student attendance.
11. `/Admin_View_Specific_Student_Attendance/:attendance_student_id` -Admin can view the specific student attendance by entering his unqiue id.
12. `/Admin_Change_Attendance/:user_id` -Admin chabge the student attendance from present to absent or absent to present.
13. `/Student_Attendance_Report` -student can download his/her attendance report in excel. 

## Functionalities of Leaves

1. `/Student_Leave_Request` -Student for leave from admin and he/she must enter the description ,from and to date also.
2. `/Admin_add_Student_Leave_Request/:user_id` -Admin also has the access tho add leave request from the student unique id.
3. `/View_Leave_Requests` -Admin view all the leaves request that send the students.
4. `/Accept_Request/:user_id` -admin accept the student request for leaves by using his/her user_id and view the reason, from and to date.
5. `/Reject_Request/:user_id` -admin reject the student request and do not gave any reason to student.
6. `/Accept_Reject_Request/:user_id` -admin also accept or reject the request of same student request.
7. `/Admin_View_leaves` -admin view all the student leaves that are accepted.
8. `/Student_View_Leaves` -student view all the leaves that are accepted by the admin
9. `/Delete_Leaves/:user_id` -Admin has access to delete thye leaves by fetching through his id.

## Functionalities of Holiday

1. `/Add_Holiday` -Admin has access to add holiday with some required fields.
2. `/View_Holiday` -Everyone view the holiday and also seen thw date and description.
3. `/Delete Holiday/:holiday_employee_id` -Admin has access to delete the holiday. it delete the specific employee holiday by his/her unique id.
4. `/Edit_Holiday` -Admin has access to change the holiday day,description.




