import AWS from 'aws-sdk'

const AWS_ACCESSKEY_ID = 'AKIAW3IWDYYVGMO4WK6C'
const AWS_SECRET_KEY = '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'
const S3_BUCKET = 'medikartimagedump/Images'
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