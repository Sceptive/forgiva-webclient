const fhash = require('./fhash')



function normalizeInput (input) {
    var ret
    if (input instanceof Uint8Array) {
      ret = input
    } else if (input instanceof Buffer) {
      ret = new Uint8Array(input)
    } else if (typeof (input) === 'string') {
      ret = new Uint8Array(Buffer.from(input, 'utf8'))
    } else {
      throw new Error(ERROR_MSG_INPUT)
    }
    return ret
  }

test('generic hash functions', () => {

        let key =  new Uint8Array(Buffer.from('password', 'utf8'))

        let testVectors = [
                { 'algorithm': 'SHA3-512',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   'e9a75486736a550af4fea861e2378305c4a555a05094dee1dca2f68afea49cc3a50e8de6ea131ea521311f4d6fb054a146e8282f8e35ff2e6368c1a62e909716'
                },
                { 'algorithm': 'SHA3-384',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   '9c1565e99afa2ce7800e96a73c125363c06697c5674d59f227b3368fd00b85ead506eefa90702673d873cb2c9357eafc'
                },
                { 'algorithm': 'SHA3-256',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   'c0067d4af4e87f00dbac63b6156828237059172d1bbeac67427345d6a9fda484'
                },
                { 'algorithm': 'SHA-512',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86'
                },
                { 'algorithm': 'SHA-384',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   'a8b64babd0aca91a59bdbb7761b421d4f2bb38280d3a75ba0f21f2bebc45583d446c598660c94ce680c47d19c30783a7'
                },
                { 'algorithm': 'SHA-256',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
                },
                { 'algorithm': 'BLAKE2B-512',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   '7c863950ac93c93692995e4732ce1e1466ad74a775352ffbaaf2a4a4ce9b549d0b414a1f3150452be6c7c72c694a7cb46f76452917298d33e67611f0a42addb8'
                },
                { 'algorithm': 'BLAKE2B-384',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   '78bb59097e9443312d702fe3f726ab54c1f22b4c7887e7059a2b042425e872325dce9cc9610584d5eb3c79be3aa4da08'
                },
                { 'algorithm': 'BLAKE2B-256',
                        'key':      key,
                        'salt':     new Uint8Array(),
                        'result':   '344b8a854221bd1eaf9382daaea1996fbcd496f158e983f8835c7ef5084c55bb'
                },
                {
                        'algorithm': 'SM3', 
                        'key':  key, 
                        'salt':  new Uint8Array(),
                        'result' : '08594e140bcc046e345325435218f67a85c38c63de6443b197b544d70ee62f26'
                }
        ];

        testVectors.forEach((object) => {
                expect(fhash.default(object.algorithm,
                object.salt,
                object.key)).toMatch(object.result);

        });


});