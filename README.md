This tool reads JSON on stdin and generates Open API Spec components based on the data types it finds. It's very basic at the moment, but it's a great starting point to start modifying by hand

## Usage

```bash
$ echo '{"foo":"bar", "baz": [{"hello":"world"}]}' | node json-to-oas-component
```

```yaml
components:
  schemas:
    AnonymousObject:
      foo:
        type: string
        maxLength: 32
        description: Description goes here
        example: bar
      baz:
        type: array
        items:
          type: object
          properties:
            hello:
              type: string
              maxLength: 32
              description: Description goes here
              example: world
```
