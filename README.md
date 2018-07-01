# \<blox-keypair\>

Makes two EOS key-pairs

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.


## Install blox-keypair

```
$ npm install blox-keypair
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-keypair';
```

## Basic Use

```html
<blox-keypair
    id="keypair"
    generate="0"
    keypairs="{{keyPairs}}">
</blox-keypair>
```

## Javascript Generate Number

```html
<blox-keypair id="keypair"></blox-keypair>
<script>
    this.$.keypair.generate()
    .then((keypairArray) => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```