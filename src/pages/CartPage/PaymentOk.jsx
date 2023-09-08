import ThumbUpIcon from '@mui/icons-material/ThumbUp';
function PaymentOk() {
  return (
    <div className="h-screen w-screen bg-green-500 flex items-center justify-center flex-col">
        <ThumbUpIcon sx={{color:"blue",width:"130px",height:"130px"}}/>
        <p className='_font-bold text-lg'>پرداخت با موفقیت انجام شد</p>
        <a href="/" className='_font-medium text-red-500 mt-5'>بازگشت به صفحه اصلی</a>
    </div>
  )
}

export default PaymentOk