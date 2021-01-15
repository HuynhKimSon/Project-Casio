import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import history from '../../util/history';
import iconFacebook from '../../image/icons8-facebook.svg'
import iconYoutube from '../../image/icons8-youtube.svg'
import iconInstagram from '../../image/icons8-instagram.svg'
import './styles.css';

function Footer() {
    return (
        <footer id="footerPage">
            <div className="topFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: "20px" }}>
                                    <h4>THÔNG TIN LIÊN HỆ</h4>
                                    <div className="footerInfo">
                                        <p>Văn Phòng: Số 20 đường 3 tháng 2, Phường 12, Quận 10, HCM <a href="https://www.google.com/search?q=donghocasioanhkhuesaigon" target="_blank" rel="noopener noreferrer">&#40;Xem bản đồ&#41;</a></p>
                                        <p>Tư Vấn Bán Hàng &#40;Thời gian làm việc: 8:00 - 17:00&#41;
                                            <br />
                                            <span className="numberFooter">0934 300 304</span>
                                        </p>
                                        <p>CSKH &#40;bảo hành, phụ kiện&#41; &#40;Các ngày trong tuần- trừ ngày lễ&#41;
                                            <br />
                                            <span className="numberFooter">0916 11 12 13</span>
                                        </p>
                                        <p>Tổng đài tư vấn&#40;1000đ/phút&#41;: Phím 1 gặp Sale Online - Phím 3 gặp CSKH
                                            <br />
                                            <span className="numberFooter">1900 068 667</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <h4>LIÊN KẾT</h4>
                                    <ul className="socialNetwork">
                                        <li>
                                            <a href="https://www.facebook.com/Casio.AnhKhueSaiGon/" target="_blank" rel="noopener noreferrer">
                                                <img src={iconFacebook} alt="CASIO ANH KHUÊ" height="37px" width="auto" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UC9junguUoHEXK7fNcOo0ivQ?sub_confirmation=1" target="_blank" rel="noopener noreferrer" >
                                                <img src={iconYoutube} alt="CASIO ANH KHUÊ" height="37px" width="auto" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/accounts/login/?next=/gshock_babyg.vietnam/" target="_blank" rel="noopener noreferrer">
                                                <img src={iconInstagram} alt="CASIO ANH KHUÊ" height="37px" width="auto" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <h4>THANH TOÁN</h4>
                                    <div className="payContent">
                                        <img src="//theme.hstatic.net/1000388227/1000497091/14/payment.png?v=1132" alt="Các phương thúc thanh toán" height="35px" width="170px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <h4>ANH KHUÊ WATCH</h4>
                                    <ul className="ul-Link">
                                        <li><span>Liên hệ</span></li>
                                        <li><span onClick={() => history.push('/gioithieu')}>Giới thiệu</span></li>
                                        <li><span>Hệ thống đại lý</span></li>
                                        <li><span>Hệ thống cửa hàng</span></li>
                                        <li><span>Tuyển dụng</span></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <h4>HỔ TRỢ</h4>
                                    <ul className="ul-Link">
                                        <li><span onClick={() => history.push('/sanpham')}>Tất cả sản phẩm</span></li>
                                        <li><span>Sản phẩm nổi bật</span></li>
                                        <li><span>Hướng dẫn mua hàng</span></li>
                                        <li><span>Khách hàng thân thiết</span></li>
                                        <li><span>Website Casio</span></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <h4>CHÍNH SÁCH</h4>
                                    <ul className="ul-Link">
                                        <li><span>Chính sách bảo mật</span></li>
                                        <li><span>Điều khoản dịch vụ</span></li>
                                        <li><span>Chính sách bảo hành</span></li>
                                        <li><span>Trung tâm bảo hành</span></li>
                                        <li><span>Chính sách đổi trả</span></li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                    <h4 style={{ display: "inline-block", width: "auto" }}>HÃY ĐỂ LẠI EMAIL ĐỂ NHẬN NHIỀU ƯU ĐÃI HƠN</h4>
                                    <Formik
                                        initialValues={{
                                            Email: '',
                                        }}
                                        validationSchema={Yup.object({
                                            Email: Yup.string()
                                                .email('Địa chỉ email không đúng định dạng.')
                                                .required('Vui lòng nhập Email của bạn.'),
                                        })}
                                        onSubmit={(values, { resetForm }) => {
                                            console.log(values);
                                            resetForm({ values: '' });
                                        }}>
                                        <Form>
                                            <div className=" form-group" >
                                                <Field
                                                    name="Email"
                                                    render={(props) => {
                                                        const { field, meta } = props;
                                                        return (
                                                            <>
                                                                <input
                                                                    {...field}
                                                                    type="text"
                                                                    className={`form-control mt-1 w-50 ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                                    placeholder="Đăng ký email"
                                                                    style={{ background: "none", fontSize: 14, color: "#9a9b9e" }}
                                                                />
                                                                {(meta.touched && meta.error) && <div className="text-danger mt-2" style={{ fontSize: 14 }} >{meta.error}</div>}
                                                            </>
                                                        )
                                                    }} />
                                                <button
                                                    type="submit"
                                                    className="btn btn-secondary mt-2"
                                                    style={{ border: "none", width: "80px", fontSize: 14 }}
                                                >   Đăng ký
                                                </button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomFooter">
                <div className="container ">
                    <div className="row d-flex justify-content-between">
                        <div className="col-sm-5 col-xs-12 coppyFooter pt-2">
                            <p style={{ lineHeight: '25px', margin: 0 }}>
                                &copy;2019 Anh Khuê. CÔNG TY CỔ PHẦN ANH KHUÊ WATCH .<br />
                            Trụ sở chính: 104 Hùng Vương, Phường 2, TP.Tân An, Tỉnh Long An<br />
                            GCNĐKKD: 1101780735 do Sở KH&#38;ĐT tỉnh Long An cấp ngày 28/10/2016 <br />
                            Văn Phòng : Số 20 đường 3 tháng 2, Phường 12, Quận 10, HCM <br />
                            Email: chamsockhachhang@anhkhuesaigon.com.vn <br />
                            Email: online@anhkhuesaigon.com.vn
                        </p>
                        </div>
                        <div className="col-sm-4 col-xs-12 logoFooter pt-2">
                            <img src="//theme.hstatic.net/1000388227/1000497091/14/logo_ft.png?v=1136" alt="Casio Anh Khuê Watch" />
                        </div>
                        <div className="col-sm-3 col-xs-12 logoBCT pt-2">
                            <img src="//theme.hstatic.net/1000388227/1000497091/14/dtb.png?v=1136" alt="Casio Anh Khuê Watch" />
                        </div>
                    </div>

                    <div className="col-sm-12 col-xs-12 copyrightFooter text-center pb-1">
                        <p className="m-0">&copy; Bản quyền thuộc về <a href="https://www.facebook.com/son.huynhkim.610" target="_blank" rel="noopener noreferrer">Design By Huynh Kim Son</a> </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default (Footer);

