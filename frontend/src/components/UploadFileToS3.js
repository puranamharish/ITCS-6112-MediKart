import AWS from 'aws-sdk'

const AWS_ACCESSKEY_ID = 'AKIAYTQODWH57NZ45NZT'
const AWS_SECRET_KEY = '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'
const S3_BUCKET = 'harishitama'
const REGION = 'us-east-1'

AWS.config.update({
    accessKeyId: AWS_ACCESSKEY_ID,
    secretAccessKey: AWS_SECRET_KEY
  })

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const uploadFileToS3 = (file) => {

    const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name
    };

    return myBucket.upload(params).promise()
}

export default uploadFileToS3;