const GROOM = {
    FULL: 'Đỗ Vũ Tuấn',
    DISPLAY: 'Đỗ Tuấn',
    SHORT: 'Tuấn'
}

const BRIDE = {
    FULL: 'Lê Thị Huyền',
    DISPLAY: 'Lê Huyền',
    SHORT: 'Huyền'
}

const WEDDING_DATE = '29/03/2026'
const WEDDING_TIME = '12:00'
const SHORT_ADDRESS = 'Kiến Xương, Thái Bình'

const WEDDING_LOCATIONS = [
    {
        TITLE: 'Tại tư gia nhà trai',
        TIME: `${WEDDING_TIME} ngày, ${WEDDING_DATE}`,
        LOCATION_NAME: 'Tư gia chú rể',
        ADDRESS: 'xóm 5, thôn Khả Phú, xã Bình Thanh, Huyện Kiến Xương, tỉnh Thái Bình',
        MAP_EMBED_URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.4748822188985!2d106.43413277582819!3d20.321991611676836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fd5f9f92688d%3A0x43ab67cd4e85ef82!2zQ-G7rWEgxJFp4buHbiDDtG5nIMSQ4buXIMSQ4bupYyBDaMOtbmg!5e0!3m2!1svi!2s!4v1752914954188!5m2!1svi!2s',
        MAP_LINK: 'https://maps.app.goo.gl/ZaBNBGFRq3CgNc2T7',
    },
    {
        TITLE: 'Tại tư gia nhà gái',
        TIME: `${WEDDING_TIME} ngày, ${WEDDING_DATE}`,
        LOCATION_NAME: 'Tư gia cô dâu',
        ADDRESS: 'xóm 5, xã Hồng Tiến, Huyện Kiến Xương, tỉnh Thái Bình',
        MAP_EMBED_URL: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d352.90884550276536!2d106.47903504499988!3d20.301234904836818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1752915043090!5m2!1svi!2s',
        MAP_LINK: 'https://maps.app.goo.gl/tgfn7FeKQpySgUjo7',
    }
]

const GIFTS = [
    {
        TITLE: `Chú rể: ${GROOM.FULL}`,
        IMAGE: new URL('@/assets/images/groom.jpeg', import.meta.url).href,
        BANK_NAME: 'Techcombank',
        NUMBER: '19035439866011',
    },
    {
        TITLE: `Cô dâu: ${BRIDE.FULL}`,
        IMAGE: new URL('@/assets/images/groom.jpeg', import.meta.url).href,
        BANK_NAME: 'Techcombank',
        NUMBER: '19035439866011',
    }
]

const FORMAT_DATE = 'dd/MM/yyyy'
const FORMAT_WEDDING_DATE = 'dd . MM . yyyy'
const FORMAT_DATE_VI = "'ngày' dd 'tháng' MM 'năm' yyyy"
const FORMAT_DAY = 'dd'
const FORMAT_MONTH = 'MMMM'
const FORMAT_YEAR = 'yyyy'
const WEEK_DAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

export {
    GROOM,
    BRIDE,
    WEDDING_DATE,
    WEDDING_TIME,
    WEDDING_LOCATIONS,
    SHORT_ADDRESS,

    GIFTS,

    FORMAT_DATE,
    FORMAT_WEDDING_DATE,
    FORMAT_DATE_VI,
    FORMAT_DAY,
    FORMAT_MONTH,
    FORMAT_YEAR,
    WEEK_DAYS
}