export const QRCodeUrl = async (enrollmentToken) => {
    const qrcode_url = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${encodeURIComponent(enrollmentToken.data['qrCode'])}`
    return qrcode_url
}


