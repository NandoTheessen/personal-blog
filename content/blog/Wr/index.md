---
title: Logging Request Bodies For Golang REST APIs
published: true
description: Logging HTTP request bodies
tags: Golang, HTTP, REST API, Serverless
---

Go does not support JSON natively, so our first step should be to learn how to decode the JSON format.
Thankfully Go comes with the "json" package which makes decoding easy and convenient to do.

## A Basic Example

This simplified example comes from the [Go docs](https://golang.org/pkg/encoding/json/#Decoder):

```Go
const jsonStream = `{"Name": "Ed", "Text": "Knock knock."}`

type Message struct {
    Name, Text string
}
var m Message

dec := json.NewDecoder(strings.NewReader(jsonStream))
err := dec.Decode(&m)
if err != nil && err != io.EOF {
    // handle that error
}

fmt.Println(m.Name, m.Text)

```
After handing our JSON stream over to a Reader, we're using the `json.NewDecoder()` and `dec.Decode(&m)` to "translate" and read our data into the previously defined `Message` format. 

## The Request Body

When handling an HTTP request, we are doing something very similar already which helps us skip a step here.
I'll also show you a nifty tool, we'll be using for our logging output!

```Go
func (h *handlerShared) doSomething(w http.ResponseWriter, r *http.Request) {
    // we still need a type definition for the receiving struct! 

    type Request struct {
        CompanyName string
    }
    // create a pointer to said struct
    req := &Request{}

    // create Decoder to "translate" our data
    // you probably spotted the step we can skip already!
    // if you haven't: the request body already comes in a Reader,
    // we don't have to hand it to one!
    decoder := json.NewDecoder(r.Body)

    err := decoder.Decode(&req)
    if err != io.EOF {
        // handle the error 
    }
    
    // At this point, we can a) access the data we read into our Request
    // struct: 
    fmt.Println(req.CompanyName)

    // As well as log it using the logrus logger I've included on my handlers                    
    h.log.WithFields(logrus.Fields{
        "host":     r.URL.Host,
        "path":     r.URL.Path,
        "header":   r.Header,
        // as you can see, there is a lot the logger can do for us
        // however "body": r.Body will not work, and always log an empty string!
        "body":     req
        // this is why we'll log our crated struct instead.
    })
    // send a response!
}

```

This is a very easy example, but should give you a good idea how to implement logging for your endpoints.

I've seen a few examples that go an extra step and read the body into an input buffer, to then cast it to a string. That is not necessary.

If you know of an easier way to achieve this or have any other feedback please let me know. I'll update this article and am always eager to learn!