import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";


export class WidgetServices extends Construct {
    constructor(scope: Construct, id: string) {
        super (scope, id);

        const bucket = new s3.Bucket(this, "WidgetStorage")

        const handler = new lambda.Function(this, "WidgetHandler", {
            runtime: lambda.Runtime.NODEJS_18_X,
            code: lambda.Code.fromAsset("resources"),
            handler: "widgets.main",
            environment: {
                BUCKET: bucket.bucketName
            }
        });

        bucket.grantReadWrite(handler)

        const api = new apigateway.RestApi(this, "widget-api", {
            restApiName: "Widget Service",
            description: "This is server widgets"
        });

        const getWidgetsIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode: "200" }' }
        });
        
        api.root.addMethod("GET", getWidgetsIntegration);
    }
}