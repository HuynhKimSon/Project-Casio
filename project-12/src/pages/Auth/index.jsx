import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { connect } from 'react-redux';
// import history from '../../util/history';
import iconEmail from '../../image/email-solid.svg'
import iconUser from '../../image/user-solid.svg'
import iconLock from '../../image/lock-solid.svg'
import iconLockOpen from '../../image/unlock-alt-solid.svg'
import '../Auth/styles.css'

function Auth() {
    return (
        <section id="auth">
            <div className="container">
                <div className=" row form-box">
                    <div className="col-12 auth-social">
                        <h1 className="auth-title text-center">ĐĂNG NHẬP BẰNG</h1>
                        <div className="auth-other text-center mb-1">
                            <button type="button" className="btn-login-fb">Facebook</button>
                            <button type="button" className="btn-login-gg">Google+</button>
                        </div>
                    </div>
                    <div className="col-12 auth-line mt-4">
                        <span>HOẶC</span>
                    </div>
                    <div className="col-6 login">
                        <h1 className="auth-title-form">Đăng Nhập</h1>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email('Địa chỉ email không đúng định dạng.')
                                    .required('Email không được bỏ trống.'),
                                password: Yup.string()
                                    .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự.')
                                    .required('Mật khẩu không được bỏ trống.'),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                resetForm({ values: '' });
                            }}>
                            <Form className="form-login">
                                <div className="form-group frm-email mb-4" >
                                    <Field
                                        name="email"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Email của bạn"
                                                    />
                                                    <span><img src={iconEmail} alt="iconEmail" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group frm-pass mb-4" >
                                    <Field
                                        name="password"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="password"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Nhập mật khẩu"
                                                    />
                                                    <span><img src={iconLockOpen} alt="iconLock" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        class="btn btn-outline-secondary btn-login"
                                        style={{ width: "100%", height: "40px", borderRadius: 0, backgroundColor: "#ffffff", color: "#6f6a60" }}
                                    >Đăng Nhập
                                    </button>
                                </div>
                                <div className="form-group text-center mt-3">
                                    <span className="forgetPass">Quên mật khẩu?</span>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className=" col-6 register">
                        <h1 className="auth-title-form">Đăng Ký Thành Viên Mới</h1>
                        <Formik
                            initialValues={{
                                lastname: '',
                                firstname: '',
                                email: '',
                                password: '',
                                confirmpassword: '',
                            }}
                            validationSchema={Yup.object({
                                lastname: Yup.string()
                                    .matches(/([A-Za-z])/, 'Họ của bạn không đúng định dạng.')
                                    .max(10, 'Họ không quá 10 kí tự.')
                                    .required('Mời bạn nhập Họ.'),
                                firstname: Yup.string()
                                    .matches(/([A-Za-z])/, 'Tên của bạn không đúng định dạng.')
                                    .max(20, 'Họ không quá 20 kí tự.')
                                    .required('Mời bạn nhập Tên.'),
                                email: Yup.string()
                                    .email('Địa chỉ email không đúng định dạng.')
                                    .required('Mời bạn nhập Email.'),
                                password: Yup.string()
                                    .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự.')
                                    .required('Mời bạn nhập Mật Khẩu.'),
                                confirmpassword: Yup.string()
                                    .min(8, 'Password phải có độ dài tối thiểu là 8 kí tự.')
                                    .required('Mời bạn nhập lại Mật Khẩu.')
                                    .oneOf([Yup.ref('password')], 'Mật khẩu xác thực không trùng khớp.'),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);
                                resetForm({ values: '' });
                            }}>
                            <Form className="form-register">
                                <div className="form-group frm-email mb-4" >
                                    <Field
                                        name="lastname"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Họ"
                                                    />
                                                    <span><img src={iconUser} alt="iconUser" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group frm-email mb-4" >
                                    <Field
                                        name="firstname"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Tên"
                                                    />
                                                    <span><img src={iconUser} alt="iconUser" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group frm-email mb-4" >
                                    <Field
                                        name="email"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Email"
                                                    />
                                                    <span><img src={iconEmail} alt="iconEmail" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group frm-pass mb-4" >
                                    <Field
                                        name="password"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="password"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Mật khẩu"
                                                    />
                                                    <span><img src={iconLock} alt="iconLock" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group frm-pass mb-4" >
                                    <Field
                                        name="confirmpassword"
                                        render={(props) => {
                                            const { field, meta } = props;
                                            return (
                                                <>
                                                    <input
                                                        {...field}
                                                        type="password"
                                                        className={`form-control inpForm ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                        placeholder="Nhập lại mật khẩu"
                                                    />
                                                    <span><img src={iconLockOpen} alt="iconLock" height="20px" width="20px" /></span>
                                                    {(meta.touched && meta.error) && <div className="text-danger mt-1" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                </>
                                            )
                                        }} />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-secondary btn-register"
                                        style={{ width: "100%", height: "40px", borderRadius: 0, backgroundColor: "#ffffff", color: "#6f6a60" }}
                                    >Đăng Ký
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default (Auth);