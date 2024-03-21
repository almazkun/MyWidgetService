import json

def lambda_handler(event, context):
    # Handle Lambda function logic here
    print(event)
    print(context)
    data = {
            'event': print(event),
            'context': print(context)
        }
    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }

main =lambda_handler