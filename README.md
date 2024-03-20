# MyWidgetService
MyWidgetService

# instructions
1. Init
    ```bash
    mkdir MyWidgetService
    cd MyWidgetService
    cdk init --language typescript
    ```
1. Synth
    ```bash
    cdk synth
    ```
1. Create resources
    ```bash
    mkdir resources
    touch resources/widget.js
    ```
1. Synth
    ```bash
    cdk synth
    ```
1. Create WidgetService
    ```bash
    touch lib/widget-service.ts
    ```
1. Synth
    ```bash
    cdk synth
    ```
1. Add widget-service to stack
    ```js
    import * as widget_service from '../lib/widget_service';
    ```
1. Add widget-service to stack
    ```js
    new widget_service.WidgetService(this, 'WidgetService');
    ```
1. Synth
    ```bash
    cdk synth
    ```
1. Deploy
    ```bash
    cdk bootstrap aws://713894360622/ap-northeast-2
    cdk deploy
    ```