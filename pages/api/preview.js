export default function handler(req, res) {
    res.setPreviewData({ user: 'Mahadi' })
    res.redirect(req.query.redirect)
}