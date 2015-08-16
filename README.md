# Node geocoder command line client

## Installation

```shell
npm install -g node-geocoder-cli
```

## Usage

```shell
geocoder geocode 'your address'
geocoder reverse -- 12.12 3.3
```


## Help
```shell
Usage: index [options] [command]


  Commands:

    geocode [options] [value]       geocode given value
    reverse [options] [lat] [long]  reverse geocode given value
    help [cmd]                      display help for [cmd]

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -p, --provider [value]]  Geocoder provider (default to google)
```
