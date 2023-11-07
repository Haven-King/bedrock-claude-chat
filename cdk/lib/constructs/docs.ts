import { RemovalPolicy, Stack } from "aws-cdk-lib";
import { AccountPrincipal, Role } from "aws-cdk-lib/aws-iam";
import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface DocumentsProps {}

export class Documents extends Construct {
    readonly bucket: Bucket;
    readonly bucketAccessRole: Role;

    constructor(scope: Construct, id: string, props?: DocumentsProps) {
        super(scope, id);

        const bucket = new Bucket(this, "DocumentBucket", {
            encryption: BucketEncryption.S3_MANAGED,
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            versioned: true
        });

        const bucketAccessRole = new Role(this, "DocumentAccessRole", {
            assumedBy: new AccountPrincipal(Stack.of(this).account)
        });

        bucket.grantReadWrite(bucketAccessRole);

        this.bucket = bucket;
        this.bucketAccessRole = bucketAccessRole;
    }
}