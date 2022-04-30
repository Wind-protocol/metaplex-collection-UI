(this["webpackJsonpcollections-ui"] = this["webpackJsonpcollections-ui"] || []).push([
    [0], {
        109: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return u
                })), n.d(t, "b", (function() {
                    return d
                })), n.d(t, "c", (function() {
                    return j
                }));
                n(13);
                var r = n(10),
                    a = n(12),
                    i = n(2),
                    c = n.n(i),
                    o = n(279),
                    s = n(7),
                    l = (n(22), n(26)),
                    u = "metadata.json";

                function d(e) {
                    var t = e.attributes,
                        n = e.name,
                        r = e.symbol,
                        i = e.description,
                        c = e.seller_fee_basis_points,
                        o = e.image,
                        s = e.external_url,
                        l = e.properties,
                        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                        b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : File,
                        j = {
                            animation_url: void 0,
                            attributes: null !== t && void 0 !== t && t.length ? t : void 0,
                            name: n,
                            symbol: r,
                            description: i,
                            seller_fee_basis_points: c,
                            image: o,
                            external_url: s,
                            properties: Object(a.a)(Object(a.a)({}, l), {}, {
                                creators: l.creators.map((function(e) {
                                    return {
                                        address: e.address,
                                        share: e.share
                                    }
                                }))
                            })
                        };
                    return new b([JSON.stringify(j)], d)
                }

                function b(e) {
                    var t = Array.from(e.values()).map((function(e) {
                        return e.byteLength
                    }));
                    return Object(o.a)(t)
                }

                function j(e) {
                    return f.apply(this, arguments)
                }

                function f() {
                    return (f = Object(r.a)(c.a.mark((function t(n) {
                        var r, a, i;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Promise.all(n.map((function(t) {
                                        return t.arrayBuffer().then((function(n) {
                                            return [t.name, e.from(n)]
                                        }))
                                    })));
                                case 2:
                                    return r = t.sent, a = new Map(r), t.next = 6, b(a);
                                case 6:
                                    return i = t.sent, t.abrupt("return", {
                                        info: i,
                                        lamports: i.solana * s.LAMPORTS_PER_SOL
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                l.MAX_NAME_LENGTH, l.MAX_SYMBOL_LENGTH, l.MAX_URI_LENGTH, l.MAX_CREATOR_LEN
            }).call(this, n(20).Buffer)
        },
        119: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = n(27);

            function a(e) {
                var t = Object(r.e)();
                return {
                    $node: Object(r.l)(t, e),
                    set: t
                }
            }

            function i(e) {
                var t = Object(r.l)(e.doneData, null),
                    n = Object(r.l)(e.failData, null);
                return {
                    $node: Object(r.c)(t, n, e.pending, (function(e, t, n) {
                        return [e, t, n]
                    })),
                    effectFx: e
                }
            }
        },
        133: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
        },
        134: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(14),
                a = n(15),
                i = function() {
                    function e(t, n) {
                        Object(r.a)(this, e), this.DEFAULT_VALUE = t, this.callbackStep = n, this._step = this.DEFAULT_VALUE
                    }
                    return Object(a.a)(e, [{
                        key: "step",
                        get: function() {
                            return this._step
                        }
                    }, {
                        key: "setStep",
                        value: function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.DEFAULT_VALUE;
                            this._step = t, null === (e = this.callbackStep) || void 0 === e || e.call(this, t)
                        }
                    }, {
                        key: "exec",
                        value: function(e, t) {
                            var n = this,
                                r = e();
                            return r instanceof Promise || "object" === typeof r && r && r.then instanceof Function ? r.then((function() {
                                void 0 !== t && n.setStep(t)
                            })) : void 0 !== t && this.setStep(t), r
                        }
                    }]), e
                }()
        },
        148: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return j
            })), n.d(t, "a", (function() {
                return x
            }));
            var r = n(10),
                a = n(2),
                i = n.n(a),
                c = n(175),
                o = n(20),
                s = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t instanceof o.Buffer)) {
                                        e.next = 4;
                                        break
                                    }
                                    e.t0 = t.toString(), e.next = 7;
                                    break;
                                case 4:
                                    return e.next = 6, t.text();
                                case 6:
                                    e.t0 = e.sent;
                                case 7:
                                    return n = e.t0, e.t1 = o.Buffer, e.next = 11, Object(c.sha256)(n);
                                case 11:
                                    return e.t2 = e.sent, e.abrupt("return", e.t1.from.call(e.t1, e.t2));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = n(109),
                u = n(7),
                d = n(55).g.PayForFiles,
                b = new u.PublicKey("6FKvsq4ydWFci6nGq9ckbjYMtnmaqAoatz5c9XWjiDuS");

            function j(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = Object(r.a)(i.a.mark((function e(t) {
                    var n, r, a, c, o;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.files, r = t.wallet, e.next = 3, Promise.all(n.map((function(e) {
                                    return s(e)
                                })));
                            case 3:
                                return a = e.sent, e.next = 6, Object(l.c)(n);
                            case 6:
                                return c = e.sent, o = c.lamports, e.abrupt("return", new d({
                                    feePayer: r.publicKey
                                }, {
                                    arweaveWallet: b,
                                    lamports: o,
                                    fileHashes: a
                                }));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var p = n(26);
            new u.PublicKey("AQdVjN6ESkryiRx4UWHnEt3hxfAW6FdSKwiBEgta5rJP");
            var h = new u.PublicKey("AQdVjN6ESkryiRx4UWHnEt3hxfAW6FdSKwiBEgta5rJP");

            function x(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = Object(r.a)(i.a.mark((function e(t) {
                    var n, r, a, c, o, s;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.wallet, r = t.mint, a = t.connection, e.next = 3, a.getParsedAccountInfo(r);
                            case 3:
                                if (null == (c = e.sent.value) || 0 === (null === c || void 0 === c ? void 0 : c.lamports)) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", void 0);
                            case 6:
                                return e.next = 8, p.MetadataProgram.findCollectionAuthorityAccount(r, h);
                            case 8:
                                return o = e.sent, e.next = 11, p.Metadata.getPDA(r);
                            case 11:
                                return s = e.sent, e.abrupt("return", new p.ApproveCollectionAuthority({
                                    feePayer: n.publicKey
                                }, {
                                    collectionAuthorityRecord: o[0],
                                    newCollectionAuthority: h,
                                    updateAuthority: n.publicKey,
                                    metadata: s,
                                    mint: r
                                }));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        181: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n(10),
                a = n(2),
                i = n.n(a),
                c = n(133),
                o = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/collection-job-status?collection=".concat(t, "&authority=").concat(n), {
                                        method: "GET"
                                    }).then(function() {
                                        var e = Object(r.a)(i.a.mark((function e(r) {
                                            var a;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!r.ok) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        return e.next = 3, r.json().then((function(e) {
                                                            return e.status
                                                        }));
                                                    case 3:
                                                        if ("processing" !== (a = e.sent) && "not found" !== a) {
                                                            e.next = 10;
                                                            break
                                                        }
                                                        return e.next = 7, Object(c.a)(5e3);
                                                    case 7:
                                                        return e.next = 9, o(t, n);
                                                    case 9:
                                                        a = e.sent;
                                                    case 10:
                                                        return e.abrupt("return", a);
                                                    case 11:
                                                        return e.abrupt("return", "retry");
                                                    case 12:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 2:
                                    if ("successful" === (a = e.sent) || "retry" === a) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", "failed");
                                case 5:
                                    return e.abrupt("return", a);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        205: function(e, t, n) {
            "use strict";
            (function(e) {
                function r() {
                    return "localStorage" in e ? e.localStorage : null
                }
                n.d(t, "a", (function() {
                    return r
                }))
            }).call(this, n(79))
        },
        278: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return g
                }));
                var r = n(13),
                    a = n(10),
                    i = n(2),
                    c = n.n(i),
                    o = n(45),
                    s = n.n(o),
                    l = n(7),
                    u = n(55),
                    d = n(109),
                    b = n(134),
                    j = n(148),
                    f = n(26),
                    p = n(46),
                    h = u.e.sendTransaction,
                    x = u.e.prepareTokenAccountAndMintTxs;

                function g(e) {
                    return O.apply(this, arguments)
                }

                function O() {
                    return O = Object(a.a)(c.a.mark((function t(n) {
                        var i, o, u, g, O, m, v, w, y, C, _, S, A, k, F, E, T, I, R, z, D, P, M, B, U, L, N, W, V, H, K = arguments;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = n.connection, o = n.wallet, u = n.file, g = n.metadata, O = n.storage, m = n.updateProgress, v = void 0 === m ? function() {} : m, w = K.length > 1 && void 0 !== K[1] ? K[1] : File, y = new b.a(null, v), t.prev = 3, y.setStep(p.a.minting), t.next = 7, y.exec(Object(a.a)(c.a.mark((function e() {
                                        var t, n, r, a, s, l, b, p, h;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = Object(d.b)(g, d.a, w), n = u ? [u, t] : [t], e.next = 4, Object(j.b)({
                                                        wallet: o,
                                                        files: n
                                                    });
                                                case 4:
                                                    return r = e.sent, e.next = 7, x(i, o.publicKey);
                                                case 7:
                                                    return a = e.sent, s = a.mint, l = a.createMintTx, b = a.createAssociatedTokenAccountTx, p = a.mintToTx, e.next = 14, f.Metadata.getPDA(s.publicKey);
                                                case 14:
                                                    return h = e.sent, e.abrupt("return", {
                                                        metadataPDA: h,
                                                        mint: s,
                                                        payForFilesTx: r,
                                                        files: n,
                                                        createMintTx: l,
                                                        createAssociatedTokenAccountTx: b,
                                                        mintToTx: p
                                                    });
                                                case 16:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), p.a.preparing_assets);
                                case 7:
                                    return C = t.sent, _ = C.mint, S = C.payForFilesTx, A = C.files, k = C.createMintTx, F = C.createAssociatedTokenAccountTx, E = C.mintToTx, T = C.metadataPDA, t.next = 17, y.exec((function() {
                                        return h({
                                            connection: i,
                                            wallet: o,
                                            txs: [S]
                                        })
                                    }), p.a.preparing_assets);
                                case 17:
                                    return I = t.sent, y.setStep(p.a.uploading_assets), t.next = 21, y.exec(Object(a.a)(c.a.mark((function e() {
                                        var t, n, r;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!u) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.next = 3, O.upload(A, _.publicKey.toBase58(), I);
                                                case 3:
                                                    return n = e.sent, r = null === (t = n.messages) || void 0 === t ? void 0 : t.find((function(e) {
                                                        return e.filename === u.name
                                                    })), e.abrupt("return", {
                                                        arweaveResultForAsset: n,
                                                        assetFile: r
                                                    });
                                                case 6:
                                                    return e.abrupt("return", {
                                                        arweaveResultForAsset: void 0,
                                                        assetFile: void 0
                                                    });
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), p.a.uploading_assets);
                                case 21:
                                    return R = t.sent, z = R.arweaveResultForAsset, D = R.assetFile, P = (null === D || void 0 === D ? void 0 : D.transactionId) || void 0, t.next = 27, y.exec(Object(a.a)(c.a.mark((function e() {
                                        var t, n, r, a, i;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return P && (n = "https://arweave.net/".concat(P), g.image = n, g.properties.files = [{
                                                        type: "image/png",
                                                        uri: n
                                                    }]), r = Object(d.b)(g, d.a, w), e.next = 4, O.upload([r], _.publicKey.toBase58(), I);
                                                case 4:
                                                    return a = e.sent, i = null === (t = a.messages) || void 0 === t ? void 0 : t.find((function(e) {
                                                        return e.filename === d.a
                                                    })), e.abrupt("return", {
                                                        arweaveResultForJson: a,
                                                        metadataFile: i
                                                    });
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), p.a.uploading_assets);
                                case 27:
                                    if (M = t.sent, B = M.arweaveResultForJson, null !== (U = M.metadataFile) && void 0 !== U && U.transactionId) {
                                        t.next = 32;
                                        break
                                    }
                                    throw new Error("Failed uploading assets.");
                                case 32:
                                    return y.setStep(p.a.preparing_token_transactions), L = U.transactionId, N = y.exec((function() {
                                        var e = g.properties.creators.map((function(e) {
                                                return new f.Creator(e)
                                            })),
                                            t = "https://arweave.net/".concat(L),
                                            n = new f.DataV2({
                                                uri: t,
                                                name: g.name,
                                                symbol: g.symbol,
                                                sellerFeeBasisPoints: g.seller_fee_basis_points,
                                                creators: e,
                                                collection: null,
                                                uses: null
                                            });
                                        return new f.CreateMetadataV2({
                                            feePayer: o.publicKey
                                        }, {
                                            metadata: T,
                                            mint: _.publicKey,
                                            mintAuthority: o.publicKey,
                                            updateAuthority: o.publicKey,
                                            metadataData: n
                                        })
                                    }), p.a.preparing_token_transactions), t.next = 37, y.exec(Object(a.a)(c.a.mark((function t() {
                                        var n, a, i;
                                        return c.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, l.PublicKey.findProgramAddress([e.from(f.MetadataProgram.PREFIX), f.MetadataProgram.PUBKEY.toBuffer(), new l.PublicKey(_.publicKey).toBuffer(), e.from(f.MasterEdition.EDITION_PREFIX)], f.MetadataProgram.PUBKEY);
                                                case 2:
                                                    return n = t.sent, a = Object(r.a)(n, 1), i = a[0], t.abrupt("return", new f.CreateMasterEdition({
                                                        feePayer: o.publicKey
                                                    }, {
                                                        edition: i,
                                                        metadata: T,
                                                        updateAuthority: o.publicKey,
                                                        mint: _.publicKey,
                                                        mintAuthority: o.publicKey,
                                                        maxSupply: new s.a(0)
                                                    }));
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    }))), p.a.preparing_token_transactions);
                                case 37:
                                    return W = t.sent, t.next = 40, Object(j.a)({
                                        connection: i,
                                        wallet: o,
                                        mint: _.publicKey
                                    });
                                case 40:
                                    if (V = t.sent) {
                                        t.next = 43;
                                        break
                                    }
                                    throw new Error("Error adding an Approved Collection Authority");
                                case 43:
                                    return y.setStep(p.a.signing_token_transaction), t.next = 46, y.exec((function() {
                                        return h({
                                            connection: i,
                                            wallet: o,
                                            signers: [_],
                                            txs: [S, k, N, F, E, W, V]
                                        })
                                    }), p.a.signing_token_transaction);
                                case 46:
                                    return H = t.sent, t.next = 49, y.exec((function() {
                                        return i.confirmTransaction(H, "max")
                                    }), p.a.sending_transaction_to_solana);
                                case 49:
                                    return t.next = 51, y.exec((function() {
                                        return i.getParsedTransaction(H, "confirmed")
                                    }), p.a.waiting_for_initial_confirmation);
                                case 51:
                                    return t.abrupt("return", {
                                        arweaveResultForJson: B,
                                        arweaveResultForAsset: z,
                                        txId: H,
                                        mint: _.publicKey,
                                        metadata: T
                                    });
                                case 54:
                                    throw t.prev = 54, t.t0 = t.catch(3), t.t0;
                                case 57:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [3, 54]
                        ])
                    }))), O.apply(this, arguments)
                }
            }).call(this, n(20).Buffer)
        },
        319: function(e, t) {},
        323: function(e, t) {},
        341: function(e, t) {},
        342: function(e, t) {},
        455: function(e, t, n) {},
        46: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return F
            })), n.d(t, "a", (function() {
                return E
            })), n.d(t, "c", (function() {
                return z
            }));
            var r = n(10),
                a = n(2),
                i = n.n(a),
                c = n(27),
                o = n(58),
                s = n(1),
                l = n(12),
                u = n(119);
            var d = n(7),
                b = n(134),
                j = n(278),
                f = n(55),
                p = n(148),
                h = f.e.sendTransaction,
                x = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, r, a, c, o, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.connection, r = t.wallet, a = t.mint, c = t.pipe, e.prev = 1, c.setStep(E.checking_for_existing_collection_authority), e.next = 5, Object(p.a)({
                                        connection: n,
                                        wallet: r,
                                        mint: a
                                    });
                                case 5:
                                    if (!(o = e.sent)) {
                                        e.next = 16;
                                        break
                                    }
                                    return c.setStep(E.approving_collection_authority), e.next = 10, h({
                                        connection: n,
                                        wallet: r,
                                        txs: [o]
                                    });
                                case 10:
                                    return s = e.sent, e.next = 13, n.confirmTransaction(s, "max");
                                case 13:
                                    return e.next = 15, n.getParsedTransaction(s, "confirmed");
                                case 15:
                                    return e.abrupt("return", s);
                                case 16:
                                    return e.abrupt("return", void 0);
                                case 19:
                                    throw e.prev = 19, e.t0 = e.catch(1), e.t0;
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 19]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = n(181),
                O = n(133),
                m = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, r, a) {
                        var c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a.setStep(E.migrating_collection), e.next = 3, v(t, n);
                                case 3:
                                    if (!e.sent) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 7, Object(O.a)(5e3);
                                case 7:
                                    return e.next = 9, Object(g.a)(t.toBase58(), r.publicKey.toBase58());
                                case 9:
                                    if ((c = e.sent) && "successful" === c) {
                                        e.next = 15;
                                        break
                                    }
                                    throw "retry" === c ? a.setStep(E.migrating_error_retry) : a.setStep(E.migrating_error), new Error("Collection Migration failed. Job Status: ".concat(c, " Collection ID: ").concat(t.toBase58(), "."));
                                case 15:
                                    a.setStep(E.migrating_success);
                                case 16:
                                    e.next = 19;
                                    break;
                                case 18:
                                    throw new Error("Failed to start migration: Collection ID ".concat(t.toBase58(), "."));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n.collection_id = t.toBase58(), r = {
                                        method: "POST",
                                        body: JSON.stringify(n)
                                    }, e.next = 4, fetch("https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/create-collection", r).then((function(e) {
                                        return e.ok
                                    }));
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = n(69),
                y = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, r, a, c, o, s, l, u, f, p;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.metadata, r = t.file, a = t.payload, c = t.updateProgress, o = t.setCollectionId, s = t.connection, l = t.wallet, u = t.storage, f = new b.a(null, c), e.prev = 2, !a.collection_id) {
                                        e.next = 9;
                                        break
                                    }
                                    return p = new d.PublicKey(a.collection_id), e.next = 7, x({
                                        connection: s,
                                        wallet: l,
                                        mint: p,
                                        pipe: f
                                    });
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    return e.next = 11, Object(j.a)({
                                        connection: s,
                                        wallet: l,
                                        file: r,
                                        metadata: n,
                                        storage: u,
                                        updateProgress: c
                                    }, File);
                                case 11:
                                    p = e.sent.mint;
                                case 12:
                                    return o(p.toBase58()), m(p, a, l, f), e.abrupt("return", p);
                                case 17:
                                    return e.prev = 17, e.t0 = e.catch(2), f.setStep(E.migrating_error), w.a(e.t0), e.abrupt("return", void 0);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 17]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = n(54),
                _ = C.b.map((function(e) {
                    return new f.a({
                        endpoint: "https://us-central1-metaplex-studios.cloudfunctions.net/uploadFile",
                        env: e
                    })
                })),
                S = n(51),
                A = Object(c.a)({
                    effect: Object(c.d)(function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n, r, a, c, o, s, l, u;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.metadata, r = t.file, a = t.payload, c = t.updateProgress, o = t.setCollectionId, s = t.connection, l = t.wallet, u = t.storage, l) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("Wallet wasn't connected");
                                    case 3:
                                        return e.next = 5, y({
                                            connection: s,
                                            wallet: l,
                                            storage: u,
                                            metadata: n,
                                            file: r,
                                            payload: a,
                                            updateProgress: c,
                                            setCollectionId: o
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    source: {
                        connection: C.a,
                        storage: _,
                        wallet: S.c
                    },
                    mapParams: function(e, t) {
                        return Object(l.a)(Object(l.a)({}, t), e)
                    }
                });

            function k(e, t) {
                var n = {
                        attributes: [],
                        description: e.description,
                        image: "",
                        name: e.name,
                        properties: {
                            files: [{
                                type: "image/png",
                                uri: ""
                            }],
                            category: "image",
                            creators: [{
                                address: t,
                                verified: !0,
                                share: 100
                            }]
                        },
                        seller_fee_basis_points: 0,
                        symbol: e.symbol
                    },
                    r = [e.logoImg].filter((function(e) {
                        return e instanceof File
                    })),
                    a = {
                        mint_list: e.mintList,
                        collection_id: e.collectionId || "",
                        update_authority: t,
                        cluster: Object(C.d)()
                    };
                return {
                    metadata: n,
                    file: r[0],
                    payload: a
                }
            }
            var F, E, T = Object(c.a)({
                effect: Object(c.d)(function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, r, a, c, o, s, l, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.data, r = t.updateProgress, a = t.setCollectionId, c = t.walletAddress) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("Wallet isn't connected");
                                case 3:
                                    return o = k(n, c), s = o.metadata, l = o.file, u = o.payload, e.next = 6, A({
                                        metadata: s,
                                        file: l,
                                        payload: u,
                                        updateProgress: r,
                                        setCollectionId: a
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                source: {
                    walletAddress: S.d
                },
                mapParams: function(e, t) {
                    return {
                        data: e.data,
                        updateProgress: e.updateProgress,
                        setCollectionId: e.setCollectionId,
                        walletAddress: t.walletAddress
                    }
                }
            });

            function I(e) {
                switch (e) {
                    case E.minting:
                        return {
                            title: "Minting",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.preparing_assets:
                        return {
                            title: "Preparing Assets",
                            subtitle: "Approve the transaction from your wallet",
                            status: F.Default
                        };
                    case E.uploading_assets:
                        return {
                            title: "Uploading Assets",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.preparing_token_transactions:
                        return {
                            title: "Preparing Transactions",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.signing_metadata_transaction:
                        return {
                            title: "Signing Metadata Transaction",
                            subtitle: "Approve the transaction from your wallet",
                            status: F.Default
                        };
                    case E.sending_transaction_to_solana:
                        return {
                            title: "Sending Transactions to Solana",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.waiting_for_initial_confirmation:
                        return {
                            title: "Waiting for Initial Confirmation",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.waiting_for_final_confirmation:
                        return {
                            title: "Waiting for Final Confirmation",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.signing_token_transaction:
                        return {
                            title: "Signing Token Transaction",
                            subtitle: "Approve the transaction from your wallet",
                            status: F.Default
                        };
                    case E.checking_for_existing_collection_authority:
                        return {
                            title: "Searching for Collection Authority",
                            subtitle: "This process could take a while, do not close or refresh this page.",
                            status: F.Default
                        };
                    case E.approving_collection_authority:
                        return {
                            title: "Adding an Approved Collection Authority",
                            subtitle: "Approve the transaction from your wallet.",
                            status: F.Default
                        };
                    case E.revoking_collection_authority:
                        return {
                            title: "Revoking Approved Collection Authority",
                            subtitle: "Approve the transaction from your wallet",
                            status: F.Default
                        };
                    case E.migrating_collection:
                        return {
                            title: "Migrating Collection",
                            subtitle: "This process could take a while, please wait.",
                            status: F.Migrating
                        };
                    case E.migrating_success:
                        return {
                            title: "Congrats! Your collection has been successfully migrated!",
                            subtitle: "",
                            status: F.Success
                        };
                    case E.migrating_error_retry:
                        return {
                            title: "An error occurred while migrating your Collection",
                            subtitle: "`Would you like to retry migrating your Collection?",
                            status: F.ErrorRetry
                        };
                    case E.migrating_error:
                        return {
                            title: "An error occurred while migrating your Collection",
                            subtitle: "We cannot migration this collection.",
                            status: F.Error
                        };
                    default:
                        return {
                            title: "",
                            subtitle: "",
                            status: F.Default
                        }
                }
            }

            function R() {
                var e = function(e, t) {
                        var n = Object(u.a)("defaultState"),
                            r = Object(u.a)(t),
                            a = r.$node.map(e),
                            i = r.$node.map((function(e) {
                                return e !== t
                            })),
                            o = n.$node.map((function(e) {
                                return e
                            }));
                        return {
                            $progress: r,
                            $collection: n,
                            $progressIsOpen: i,
                            $progressContent: a,
                            $progressCollectionId: o,
                            $progressMeta: Object(c.c)(a, i, o, (function(e, t, n) {
                                return Object(l.a)(Object(l.a)({}, e), {}, {
                                    isOpen: t,
                                    collectionId: n
                                })
                            }))
                        }
                    }(I, null),
                    t = e.$progressMeta,
                    n = e.$progress,
                    a = e.$collection,
                    o = Object(c.d)((function(e) {
                        n.set(e)
                    })),
                    s = Object(c.d)((function(e) {
                        a.set(e)
                    })),
                    d = Object(c.d)(function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, T({
                                            data: t,
                                            updateProgress: o,
                                            setCollectionId: s
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }());
                return {
                    submitFx: d,
                    closeModalFx: Object(c.d)((function() {
                        n.set(null)
                    })),
                    updateProgressFx: o,
                    setCollectionIdFx: s,
                    $progressMeta: t,
                    $progress: n
                }
            }! function(e) {
                e[e.Default = 0] = "Default", e[e.Migrating = 1] = "Migrating", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error", e[e.ErrorRetry = 4] = "ErrorRetry"
            }(F || (F = {})),
            function(e) {
                e[e.minting = 0] = "minting", e[e.preparing_assets = 1] = "preparing_assets", e[e.uploading_assets = 2] = "uploading_assets", e[e.preparing_token_transactions = 3] = "preparing_token_transactions", e[e.signing_metadata_transaction = 4] = "signing_metadata_transaction", e[e.sending_transaction_to_solana = 5] = "sending_transaction_to_solana", e[e.waiting_for_initial_confirmation = 6] = "waiting_for_initial_confirmation", e[e.waiting_for_final_confirmation = 7] = "waiting_for_final_confirmation", e[e.updating_metadata = 8] = "updating_metadata", e[e.signing_token_transaction = 9] = "signing_token_transaction", e[e.checking_for_existing_collection_authority = 10] = "checking_for_existing_collection_authority", e[e.approving_collection_authority = 11] = "approving_collection_authority", e[e.revoking_collection_authority = 12] = "revoking_collection_authority", e[e.migrating_collection = 13] = "migrating_collection", e[e.migrating_success = 14] = "migrating_success", e[e.migrating_error_retry = 15] = "migrating_error_retry", e[e.migrating_error = 16] = "migrating_error"
            }(E || (E = {}));
            var z = function() {
                var e = Object(s.useMemo)((function() {
                        return R()
                    }), []),
                    t = Object(o.b)(e.$progressMeta);
                return {
                    onSubmit: Object(o.a)(e.submitFx),
                    updateProgress: Object(o.a)(e.updateProgressFx),
                    setCollectionId: Object(o.a)(e.setCollectionIdFx),
                    closeModal: Object(o.a)(e.closeModalFx),
                    progressMeta: t
                }
            }
        },
        462: function(e, t, n) {},
        487: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1),
                a = n(82),
                i = n.n(a),
                c = n(28),
                o = n(12),
                s = n(40),
                l = n(272),
                u = n(499),
                d = n(500),
                b = n(501),
                j = n(502),
                f = n(503),
                p = n(504),
                h = n(58),
                x = n(54),
                g = (n(455), n(129));

            function O(e) {
                return (e.message ? "".concat(e.name, ": ").concat(e.message) : e.name) || "An unknown wallet error has occurred."
            }
            var m = n(81),
                v = n(3),
                w = function(e) {
                    var t = e.text,
                        n = e.children;
                    return Object(v.jsxs)(m.g, {
                        justify: "space-between",
                        spacing: 4,
                        children: [Object(v.jsx)(m.l, {
                            children: t
                        }), n]
                    })
                },
                y = n(165),
                C = n(60),
                _ = (n(459), n(460), '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'),
                S = {
                    heading: "Inter, ".concat(_),
                    body: "Inter, ".concat(_)
                },
                A = {
                    xs: "0.75rem",
                    sm: "0.875rem",
                    md: "1rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                    "2xl": "1.5rem",
                    "3xl": "1.875rem",
                    "4xl": "2rem",
                    "5xl": "2.25rem",
                    "6xl": "3rem",
                    "7xl": "4rem",
                    "8xl": "4.5rem",
                    "9xl": "6rem",
                    "10xl": "8rem"
                },
                k = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "" : t,
                        r = e.onClose;
                    return Object(v.jsxs)(m.f, {
                        w: "full",
                        align: "center",
                        justify: "space-between",
                        children: [Object(v.jsx)(m.h, {
                            variant: "h5",
                            children: n
                        }), Object(v.jsx)(y.b, {
                            "aria-label": "Close",
                            size: "sm",
                            variant: "ghost",
                            onClick: r,
                            children: Object(v.jsx)(C.i, {
                                size: A["2xl"]
                            })
                        })]
                    })
                },
                F = function(e) {
                    var t = e.title,
                        n = e.text,
                        r = e.onClose,
                        a = void 0 === r ? function() {} : r,
                        i = e.children;
                    return Object(v.jsxs)(m.m, {
                        borderRadius: "12px",
                        p: 4,
                        m: 4,
                        spacing: 3,
                        align: "stretch",
                        bgColor: "gray.700",
                        children: [Object(v.jsx)(k, {
                            title: t,
                            onClose: a
                        }), Object(v.jsx)(w, {
                            text: n,
                            children: i
                        })]
                    })
                },
                E = n(269),
                T = function() {
                    var e = Object(E.a)();
                    return function(t) {
                        var n = t.showConnect ? Object(v.jsx)(g.b, {}) : void 0;
                        e(Object(o.a)(Object(o.a)({}, t), {}, {
                            position: "top-right",
                            render: function(e) {
                                var r = e.onClose;
                                return Object(v.jsx)(F, Object(o.a)(Object(o.a)({}, t), {}, {
                                    children: n,
                                    onClose: r
                                }))
                            }
                        }))
                    }
                },
                I = n(51),
                R = ["wallets", "onError", "children"],
                z = function(e) {
                    var t = e.children,
                        n = Object(l.b)(),
                        a = Object(h.a)(I.f);
                    return Object(r.useEffect)((function() {
                        a(n)
                    }), [n]), Object(v.jsx)(v.Fragment, {
                        children: t
                    })
                },
                D = function(e) {
                    var t = e.wallets,
                        n = e.onError,
                        a = e.children,
                        i = Object(s.a)(e, R),
                        c = T(),
                        l = Object(h.c)(x.b, (function(e) {
                            return [Object(d.a)(), Object(b.a)(), Object(j.a)(), Object(f.a)(), Object(p.b)({
                                network: e
                            }), Object(p.a)({
                                network: e
                            })]
                        })),
                        m = Object(r.useCallback)((function(e) {
                            c({
                                title: "Wallet error",
                                description: O(e),
                                status: "error",
                                duration: 2e3,
                                isClosable: !0
                            })
                        }), [c]);
                    return Object(v.jsx)(u.a, Object(o.a)(Object(o.a)({
                        wallets: null !== t && void 0 !== t ? t : l,
                        onError: null !== n && void 0 !== n ? n : m
                    }, i), {}, {
                        children: Object(v.jsx)(g.a, {
                            children: Object(v.jsx)(z, {
                                children: a
                            })
                        })
                    }))
                },
                P = {
                    variants: {
                        solid: function() {
                            return {
                                bg: "white",
                                color: "#121212",
                                display: "flex",
                                alignItems: "center",
                                alignSelf: "center",
                                px: 3,
                                borderRadius: "full",
                                height: 6,
                                fontSize: "sm"
                            }
                        }
                    },
                    defaultProps: {
                        variant: "solid",
                        colorScheme: "whiteAlpha"
                    }
                },
                M = {
                    variants: {
                        lead: {
                            fontSize: "xl"
                        },
                        "body-large": {
                            fontSize: "lg",
                            lineHeight: "short"
                        },
                        body: {
                            fontSize: "md"
                        },
                        "body-bold": {
                            fontSize: "md",
                            fontWeight: "bold"
                        },
                        button: {
                            fontSize: "md",
                            fontWeight: "bold"
                        },
                        "subtitle-bold": {
                            fontSize: "sm",
                            lineHeight: "normal",
                            fontWeight: "bold"
                        },
                        subtitle: {
                            fontSize: "sm",
                            lineHeight: "normal"
                        },
                        "body-short": {
                            fontSize: "md",
                            lineHeight: "short"
                        },
                        "label-bold": {
                            fontSize: "sm",
                            fontWeight: "bold",
                            lineHeight: "tiny",
                            letterSpacing: "wide",
                            textTransform: "uppercase",
                            color: "whiteAlpha.500"
                        },
                        label: {
                            fontSize: "sm",
                            lineHeight: "tiny",
                            letterSpacing: "wide",
                            textTransform: "uppercase",
                            color: "whiteAlpha.500"
                        },
                        small: {
                            fontSize: "xs",
                            fontWeight: "normal",
                            lineHeight: "tiny",
                            letterSpacing: "wide",
                            color: "whiteAlpha.500"
                        },
                        "small-bold": {
                            fontSize: "xs",
                            fontWeight: "bold",
                            lineHeight: "tiny",
                            letterSpacing: "wide",
                            color: "whiteAlpha.500"
                        }
                    }
                },
                B = {
                    baseStyle: {
                        requiredIndicator: {
                            marginStart: 1,
                            color: "inherit"
                        },
                        helperText: Object(o.a)(Object(o.a)({}, M.variants.subtitle), {}, {
                            mt: -2,
                            mb: 5,
                            color: "whiteAlpha.500",
                            whiteSpace: "pre-wrap"
                        })
                    }
                },
                U = {
                    baseStyle: {
                        text: Object(o.a)(Object(o.a)({}, M.variants.subtitle), {}, {
                            color: "pink.500",
                            mt: 2,
                            mx: 5
                        }),
                        icon: {
                            marginEnd: "0.5em",
                            color: "pink.500"
                        }
                    }
                },
                L = {
                    baseStyle: Object(o.a)(Object(o.a)({}, M.variants["label-bold"]), {}, {
                        color: "white",
                        marginEnd: 3,
                        mb: 3
                    })
                },
                N = {
                    variants: {
                        h1: {
                            fontSize: "7xl",
                            lineHeight: "tinier",
                            letterSpacing: "tight"
                        },
                        h2: {
                            fontSize: "6xl",
                            lineHeight: "none"
                        },
                        h3: {
                            fontSize: "4xl",
                            lineHeight: "tiny",
                            letterSpacing: "tight"
                        },
                        h4: {
                            fontSize: "2xl",
                            lineHeight: "tiny"
                        },
                        h5: {
                            fontSize: "lg",
                            lineHeight: "short"
                        },
                        button: Object(o.a)({}, M.variants.button)
                    }
                },
                W = n(8),
                V = {
                    lg: {
                        fontSize: "lg",
                        p: 4,
                        pl: 5,
                        h: 16,
                        borderRadius: "xl"
                    },
                    md: {
                        fontSize: "md",
                        p: 4,
                        pl: 5,
                        h: 14,
                        borderRadius: "xl"
                    },
                    sm: {
                        fontSize: "sm",
                        p: 3,
                        pl: 4,
                        h: 12,
                        borderRadius: "xl"
                    },
                    xs: {
                        fontSize: "xs",
                        p: 2,
                        pl: 3,
                        h: 10,
                        borderRadius: "lg"
                    }
                };
            var H, K, G, $, Y = {
                    variants: {
                        outline: function(e) {
                            var t = e.theme,
                                n = function(e) {
                                    return {
                                        focusBorderColor: e.focusBorderColor || "green.500",
                                        errorBorderColor: e.errorBorderColor || "pink.500"
                                    }
                                }(e),
                                r = n.focusBorderColor,
                                a = n.errorBorderColor;
                            return {
                                field: {
                                    border: "none",
                                    borderColor: "inherit",
                                    bg: "gray.800",
                                    color: "whiteAlpha.700",
                                    _hover: {
                                        color: "white"
                                    },
                                    _readOnly: {
                                        boxShadow: "none !important",
                                        color: "".concat(Object(W.f)(t, "whiteAlpha.700"), " !important"),
                                        fontWeight: "normal !important",
                                        userSelect: "all"
                                    },
                                    _disabled: {
                                        opacity: .4,
                                        color: "".concat(Object(W.f)(t, "whiteAlpha.700"), " !important"),
                                        cursor: "not-allowed"
                                    },
                                    _invalid: {
                                        borderColor: Object(W.f)(t, a),
                                        boxShadow: "inset 0 0 0 1px ".concat(Object(W.f)(t, a))
                                    },
                                    _focus: {
                                        zIndex: 1,
                                        fontWeight: "bold",
                                        color: "white",
                                        boxShadow: "inset 0 0 0 1px ".concat(Object(W.f)(t, r))
                                    }
                                }
                            }
                        }
                    },
                    sizes: {
                        lg: {
                            field: V.lg,
                            addon: V.lg
                        },
                        md: {
                            field: V.md,
                            addon: V.md
                        },
                        sm: {
                            field: V.sm,
                            addon: V.sm
                        },
                        xs: {
                            field: V.xs,
                            addon: V.xs
                        }
                    }
                },
                J = {
                    baseStyle: {
                        transitionProperty: "common",
                        transitionDuration: "fast",
                        transitionTimingFunction: "ease-out",
                        cursor: "pointer",
                        textDecoration: "none",
                        outline: "none",
                        color: "green.500",
                        _hover: {
                            textDecoration: "underline"
                        },
                        _focus: {
                            boxShadow: "outline"
                        }
                    }
                },
                q = n(48),
                X = {
                    bg: "gray.700",
                    p: "2",
                    zIndex: 1,
                    borderRadius: "xl",
                    borderWidth: "0"
                },
                Q = Object(o.a)(Object(o.a)({}, M.variants.subtitle), {}, {
                    p: "2",
                    borderRadius: "base",
                    color: "whiteAlpha.700",
                    fontWeight: "bold",
                    _hover: {
                        bg: "whiteAlpha.100",
                        color: "white"
                    },
                    _focus: {
                        bg: "whiteAlpha.500",
                        color: "white"
                    },
                    _active: {
                        bg: "whiteAlpha.700",
                        color: "white"
                    },
                    _expanded: {
                        bg: "whiteAlpha.500",
                        color: "white"
                    },
                    _disabled: {
                        opacity: .4,
                        cursor: "not-allowed"
                    }
                }),
                Z = {
                    border: 0,
                    borderBottom: "1px solid",
                    borderColor: "whiteAlpha.100",
                    my: "0.5rem"
                },
                ee = {
                    parts: q.l.keys,
                    baseStyle: function() {
                        return {
                            list: X,
                            item: Q,
                            divider: Z
                        }
                    }
                },
                te = {
                    baseStyle: function() {
                        return {
                            content: {
                                _focus: {
                                    outline: 0,
                                    boxShadow: "none"
                                }
                            }
                        }
                    }
                },
                ne = function(e) {
                    var t = e.colorScheme,
                        n = e.theme;
                    return {
                        _focus: {
                            zIndex: 1,
                            boxShadow: "none",
                            _focus: {
                                bg: Object(W.f)(n, "".concat(t, ".300"))
                            }
                        }
                    }
                },
                re = {
                    baseStyle: function(e) {
                        return {
                            tab: ne(e)
                        }
                    },
                    variants: {
                        "soft-rounded": function(e) {
                            var t = e.colorScheme,
                                n = e.theme;
                            return {
                                tab: {
                                    borderRadius: "lg",
                                    fontWeight: "bold",
                                    color: "".concat(t, ".700"),
                                    _selected: {
                                        color: Object(W.f)(n, "white"),
                                        bg: Object(W.f)(n, "".concat(t, ".100"))
                                    }
                                }
                            }
                        }
                    },
                    defaultProps: {
                        size: "md",
                        variant: "soft-rounded",
                        colorScheme: "whiteAlpha"
                    }
                },
                ae = function(e) {
                    var t = e.colorScheme,
                        n = e.theme,
                        r = Object(W.f)(n, "".concat(t, ".700")),
                        a = Object(W.f)(n, "".concat(t, ".100"));
                    return {
                        color: r,
                        boxShadow: "inset 0 0 0px 1px ".concat(a)
                    }
                },
                ie = {
                    defaultProps: {
                        size: "md",
                        variant: "outline",
                        colorScheme: "whiteAlpha"
                    },
                    sizes: {
                        sm: {
                            container: {
                                minH: "1.25rem",
                                minW: "1.25rem",
                                fontSize: "xs",
                                borderRadius: "full",
                                px: 2,
                                py: 1
                            },
                            closeButton: {
                                marginEnd: "-2px",
                                marginStart: "0.35rem"
                            }
                        },
                        md: {
                            container: {
                                minH: "1.5rem",
                                minW: "1.5rem",
                                fontSize: "sm",
                                fontWeight: "bold",
                                borderRadius: "full",
                                px: 4,
                                py: 2
                            }
                        },
                        lg: {
                            container: {
                                minH: 8,
                                minW: 8,
                                fontSize: "md",
                                fontWeight: "bold",
                                borderRadius: "full",
                                px: 6,
                                py: 3
                            }
                        }
                    },
                    variants: {
                        outline: function(e) {
                            return {
                                container: ae(e)
                            }
                        },
                        filled: {
                            container: {
                                bgColor: "whiteAlpha.50",
                                boxShadow: "0px 0px 24px rgba(26, 26, 26, 0.12)",
                                color: "whiteAlpha.700"
                            }
                        }
                    }
                },
                ce = {
                    xs: null !== (H = Y.sizes.xs.field) && void 0 !== H ? H : {},
                    sm: null !== (K = Y.sizes.sm.field) && void 0 !== K ? K : {},
                    md: null !== (G = Y.sizes.md.field) && void 0 !== G ? G : {},
                    lg: null !== ($ = Y.sizes.lg.field) && void 0 !== $ ? $ : {}
                },
                oe = {
                    outline: function(e) {
                        var t;
                        return null !== (t = Y.variants.outline(e).field) && void 0 !== t ? t : {}
                    }
                },
                se = {
                    Badge: P,
                    Button: {
                        baseStyle: {
                            _focus: {
                                boxShadow: "none"
                            }
                        },
                        variants: {
                            primary: {
                                bg: "green.500",
                                color: "gray.900",
                                _hover: {
                                    bg: "green.600",
                                    _disabled: {
                                        bg: "gray.700"
                                    }
                                },
                                _focus: {
                                    bg: "green.700"
                                },
                                _disabled: {
                                    opacity: 1,
                                    boxShadow: "0px 0px 24px rgba(26, 26, 26, 0.12)",
                                    color: "whiteAlpha.500",
                                    bg: "gray.800"
                                },
                                _active: {
                                    bg: "green.400"
                                }
                            },
                            secondary: {
                                bg: "purple.500",
                                color: "white",
                                _hover: {
                                    bg: "purple.300",
                                    _disabled: {
                                        bg: "purple.500"
                                    }
                                },
                                _active: {
                                    bg: "purple.400"
                                }
                            },
                            tertiary: {
                                bg: "gray.700",
                                color: "white",
                                _hover: {
                                    bg: "gray.500",
                                    _disabled: {
                                        bg: "gray.700"
                                    }
                                },
                                _focus: {
                                    bg: "gray.400"
                                },
                                _active: {
                                    bg: "gray.600"
                                }
                            },
                            ghost: {
                                color: "white",
                                _hover: {
                                    bg: "whiteAlpha.100"
                                },
                                _focus: {
                                    bg: "whiteAlpha.200"
                                },
                                _active: {
                                    bg: "whiteAlpha.200"
                                }
                            },
                            solid: {
                                bg: "white",
                                color: "gray.900",
                                _hover: {
                                    bg: "whiteAlpha.900"
                                },
                                _focus: {
                                    bg: "whiteAlpha.700"
                                }
                            },
                            link: {
                                color: "white",
                                _hover: {
                                    color: "whiteAlpha.700",
                                    textDecoration: "none"
                                },
                                _focus: {
                                    color: "whiteAlpha.500",
                                    textDecoration: "none"
                                }
                            }
                        },
                        sizes: {
                            xl: {
                                borderRadius: "8px",
                                minW: 12,
                                fontSize: "lg",
                                px: 6,
                                py: 5
                            },
                            lg: {
                                borderRadius: "6px",
                                minW: 12,
                                fontSize: "lg",
                                px: 6,
                                py: 4
                            },
                            md: {
                                h: 12,
                                minW: 0,
                                fontSize: "lg",
                                px: 4
                            }
                        }
                    },
                    Divider: {
                        baseStyle: {
                            opacity: .1
                        }
                    },
                    Form: B,
                    FormError: U,
                    FormLabel: L,
                    Heading: N,
                    Input: Y,
                    NumberInput: Y,
                    Link: J,
                    Menu: ee,
                    Popover: te,
                    Tabs: re,
                    Tag: ie,
                    Text: M,
                    Textarea: {
                        variants: oe,
                        sizes: ce
                    }
                },
                le = {
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                    xxl: 1440
                },
                ue = Object(W.c)({
                    sm: le.sm.toString() + "px",
                    md: le.md.toString() + "px",
                    lg: le.lg.toString() + "px",
                    xl: le.xl.toString() + "px",
                    "2xl": le.xxl.toString() + "px"
                }),
                de = Object(c.b)({
                    breakpoints: ue,
                    colors: {
                        green: {
                            50: "#E5FFF8",
                            100: "#BDFFEE",
                            200: "#85FFDF",
                            300: "#3DFFCD",
                            400: "#1FFFC5",
                            500: "#00FFBD",
                            600: "#00E0A6",
                            700: "#00C290",
                            800: "#00A379",
                            900: "#008562"
                        },
                        purple: {
                            50: "#EFEAFB",
                            100: "#C3AEEE",
                            200: "#A080E5",
                            300: "#7544D9",
                            400: "#622BD3",
                            500: "#5626BA",
                            600: "#4A21A1",
                            700: "#3F1C87",
                            800: "#33166E",
                            900: "#271154"
                        },
                        pink: {
                            50: "#FCF2FD",
                            100: "#FAE5FC",
                            200: "#F0B2F7",
                            300: "#E372F1",
                            400: "#DD56EE",
                            500: "#D83AEB",
                            600: "#D21EE8",
                            700: "#BE15D2",
                            800: "#A513B7",
                            900: "#8C109B"
                        },
                        gray: {
                            50: "#CECECE",
                            100: "#A7A7A7",
                            200: "#8B8B8B",
                            300: "#686868",
                            400: "#585858",
                            500: "#494949",
                            600: "#3A3A3A",
                            700: "#2A2A2A",
                            800: "#1E1E1E",
                            900: "#121212"
                        },
                        whiteAlpha: {
                            50: "rgba(255, 255, 255, 0.05)",
                            100: "rgba(255, 255, 255, 0.1)",
                            200: "rgba(255, 255, 255, 0.2)",
                            300: "rgba(255, 255, 255, 0.3)",
                            400: "rgba(255, 255, 255, 0.4)",
                            500: "rgba(255, 255, 255, 0.5)",
                            600: "rgba(255, 255, 255, 0.6)",
                            700: "rgba(255, 255, 255, 0.7)",
                            800: "rgba(255, 255, 255, 0.8)",
                            900: "rgba(255, 255, 255, 0.9)"
                        }
                    },
                    components: se,
                    config: {
                        initialColorMode: "dark",
                        useSystemColorMode: !1
                    },
                    fontSizes: A,
                    fonts: S,
                    letterSpacings: {
                        tighter: "-0.03em",
                        tight: "-0.02em",
                        normal: "0",
                        wide: "0.02em",
                        wider: "0.03em",
                        widest: "0.5em"
                    },
                    lineHeights: {
                        normal: "normal",
                        none: 1,
                        tinier: 1.125,
                        tiny: 1.2,
                        shorter: 1.25,
                        short: 1.375,
                        base: 1.5,
                        tall: 1.625,
                        taller: 1.725
                    },
                    shadows: {
                        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
                        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        md: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
                        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
                        none: "none",
                        "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
                    },
                    styles: {
                        global: {
                            body: {
                                bg: "gray.900",
                                color: "white"
                            }
                        }
                    },
                    layerStyles: {
                        base: {
                            bg: "whiteAlpha.50",
                            borderRadius: "2xl",
                            padding: 4
                        },
                        active: {
                            bg: "whiteAlpha.100",
                            borderRadius: "2xl",
                            padding: 4,
                            outline: "1px solid",
                            outlineColor: "green.500"
                        },
                        error: {
                            bg: "whiteAlpha.50",
                            borderRadius: "2xl",
                            padding: 4,
                            outline: "1px solid",
                            outlineColor: "pink.500"
                        }
                    }
                }),
                be = n(38),
                je = n(13),
                fe = n(65),
                pe = n(66),
                he = function(e) {
                    return Object(v.jsx)(pe.a, Object(o.a)(Object(o.a)({
                        viewBox: "0 0 38 24"
                    }, e), {}, {
                        children: Object(v.jsx)("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18.813 16.727a.78.78 0 0 1-.03.843l-3.77 5.428a.78.78 0 0 1-1.314-.051L.94 1.174A.78.78 0 0 1 1.614 0h6.818a.78.78 0 0 1 .67.382l9.71 16.345zm18.246 6.1A.78.78 0 0 1 36.386 24H29.61a.78.78 0 0 1-.673-.386L15.788 1.174A.78.78 0 0 1 16.461 0h6.814a.78.78 0 0 1 .674.386l13.11 22.44zm-30.739.96a.78.78 0 0 0 .671-1.177l-4.675-7.88c-.405-.683-1.45-.396-1.45.397v7.88c0 .432.349.78.78.78H6.32z"
                        })
                    }))
                },
                xe = function(e) {
                    return Object(v.jsx)(pe.a, Object(o.a)(Object(o.a)({
                        viewBox: "0 0 32 32"
                    }, e), {}, {
                        children: Object(v.jsx)("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.0273 11.75H7.18487C7.14817 11.7495 7.11243 11.7382 7.08208 11.7176C7.05172 11.6969 7.0281 11.6678 7.01412 11.6339C7.00015 11.6 6.99644 11.5627 7.00346 11.5266C7.01048 11.4906 7.02792 11.4574 7.05362 11.4312L10.3161 8.165C10.4233 8.05994 10.5672 8.00076 10.7173 8H25.5598C25.5965 8.00052 25.6322 8.01179 25.6626 8.03243C25.6929 8.05306 25.7165 8.08215 25.7305 8.11609C25.7445 8.15003 25.7482 8.18732 25.7412 8.22335C25.7342 8.25937 25.7167 8.29254 25.691 8.31875L22.4285 11.585C22.3213 11.69 22.1774 11.7492 22.0273 11.75ZM22.0273 23.0002H7.18487C7.14817 22.9997 7.11243 22.9884 7.08208 22.9678C7.05172 22.9472 7.0281 22.9181 7.01412 22.8841C7.00015 22.8502 6.99644 22.8129 7.00346 22.7769C7.01048 22.7409 7.02792 22.7077 7.05362 22.6815L10.3161 19.4152C10.4233 19.3102 10.5672 19.251 10.7173 19.2502H25.5598C25.5965 19.2508 25.6322 19.262 25.6626 19.2827C25.6929 19.3033 25.7165 19.3324 25.7305 19.3663C25.7445 19.4003 25.7482 19.4376 25.7412 19.4736C25.7342 19.5096 25.7167 19.5428 25.691 19.569L22.4285 22.8352C22.3213 22.9403 22.1774 22.9995 22.0273 23.0002ZM25.5598 17.375H10.7173C10.5672 17.3742 10.4233 17.315 10.3161 17.21L7.05362 13.9437C7.02792 13.9175 7.01048 13.8844 7.00346 13.8483C6.99644 13.8123 7.00015 13.775 7.01412 13.7411C7.0281 13.7072 7.05172 13.6781 7.08208 13.6574C7.11243 13.6368 7.14817 13.6255 7.18487 13.625H22.0273C22.1774 13.6258 22.3213 13.6849 22.4285 13.79L25.691 17.0562C25.7167 17.0824 25.7342 17.1156 25.7412 17.1516C25.7482 17.1877 25.7445 17.225 25.7305 17.2589C25.7165 17.2928 25.6929 17.3219 25.6626 17.3426C25.6322 17.3632 25.5965 17.3745 25.5598 17.375Z"
                        })
                    }))
                },
                ge = n(251),
                Oe = function(e) {
                    var t = e.focused,
                        n = e.children;
                    return Object(v.jsx)(m.f, {
                        flex: "0 0 auto",
                        w: 344,
                        height: "100vh",
                        overflowY: "auto",
                        borderRightColor: "whiteAlpha.100",
                        borderRightWidth: "1px",
                        p: 8,
                        pt: t ? 4 : 20,
                        children: n
                    })
                },
                me = le.xxl,
                ve = le.xl,
                we = le.lg,
                ye = le.md,
                Ce = le.sm,
                _e = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = e ? 344 : 0,
                        n = Object(ge.a)(["(min-width: ".concat(Ce + t, "px)"), "(min-width: ".concat(ye + t, "px)"), "(min-width: ".concat(we + t, "px)"), "(min-width: ".concat(ve + t, "px)"), "(min-width: ".concat(me + t, "px)")]),
                        r = Object(je.a)(n, 5),
                        a = r[0],
                        i = r[1],
                        c = r[2],
                        o = r[3],
                        s = r[4];
                    return {
                        xxlUp: s,
                        xlUp: o,
                        lgUp: c,
                        mdUp: i,
                        smUp: a,
                        smDown: !a
                    }
                },
                Se = ["transparent", "backgroundBlur", "children"],
                Ae = function(e) {
                    var t = e.transparent,
                        n = e.backgroundBlur,
                        r = e.children,
                        a = Object(s.a)(e, Se),
                        i = n ? "blackAlpha.500" : "gray.900",
                        c = _e().mdUp;
                    return Object(v.jsxs)(m.f, Object(o.a)(Object(o.a)({
                        w: "100%",
                        as: "header",
                        pl: c ? 8 : 6,
                        pr: c ? 10 : 6,
                        height: 16,
                        borderBottomStyle: "solid",
                        borderBottomColor: t ? "rgba(0, 0, 0, 0)" : "whiteAlpha.100",
                        borderBottomWidth: "1px",
                        bgColor: t ? void 0 : i,
                        backdropFilter: n && !t ? "blur(20px)" : void 0,
                        boxShadow: t ? void 0 : "md",
                        transition: "background-color .3s ease; border-color .3s ease box-shadow .3s ease"
                    }, a), {}, {
                        children: [Object(v.jsxs)(m.g, {
                            as: fe.b,
                            to: "/",
                            children: [Object(v.jsx)(he, {
                                w: 9,
                                h: 9
                            }), Object(v.jsx)(m.h, {
                                as: "h1",
                                size: "xs",
                                children: "METAPLEX"
                            })]
                        }), Object(v.jsx)(m.j, {}), r]
                    }))
                },
                ke = n(252),
                Fe = function(e) {
                    var t = e.icon,
                        n = e.children,
                        r = e.active;
                    return Object(v.jsxs)(m.g, {
                        p: 4,
                        bgColor: r ? "whiteAlpha.100" : void 0,
                        borderRadius: "lg",
                        children: [t, Object(v.jsx)(m.l, {
                            variant: "button",
                            color: r ? void 0 : "whiteAlpha.700",
                            children: n
                        })]
                    })
                },
                Ee = ["icon", "variant", "isActive", "children"],
                Te = function(e) {
                    var t = e.icon,
                        n = e.variant,
                        r = e.isActive,
                        a = e.children,
                        i = Object(s.a)(e, Ee),
                        c = "secondary" === n || "step" === n;
                    return "step" === n ? Object(v.jsx)(Fe, {
                        active: r,
                        icon: t,
                        children: a
                    }) : Object(v.jsx)(y.a, Object(o.a)(Object(o.a)({
                        variant: "ghost",
                        flexShrink: 0,
                        h: "56px",
                        isActive: r,
                        isFullWidth: !0,
                        justifyContent: "start",
                        leftIcon: t,
                        color: c ? "whiteAlpha.700" : "white"
                    }, i), {}, {
                        children: a
                    }))
                },
                Ie = function(e) {
                    return "sidebar" === e.variant ? Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)(Te, {
                            children: Object(v.jsx)(m.i, {
                                href: "https://docs.metaplex.com/",
                                children: "The Metaplex Protocol"
                            })
                        }), Object(v.jsx)(Te, {
                            children: Object(v.jsx)(m.i, {
                                href: "https://docs.metaplex.com/token-metadata/specification#collections",
                                children: "Verified Collections Standard"
                            })
                        }), Object(v.jsx)(Te, {
                            children: Object(v.jsx)(m.i, {
                                href: "https://github.com/metaplex-foundation/collection-migration-issues",
                                children: "Report an issue"
                            })
                        })]
                    }) : Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)(ke.c, {
                            children: Object(v.jsx)(m.i, {
                                href: "https://docs.metaplex.com/",
                                children: "The Metaplex Protocol"
                            })
                        }), Object(v.jsx)(ke.c, {
                            children: Object(v.jsx)(m.i, {
                                href: "https://docs.metaplex.com/token-metadata/specification#collections",
                                children: "Verified Collections Standard"
                            })
                        }), Object(v.jsx)(ke.c, {
                            children: Object(v.jsx)(m.i, {
                                href: "https://github.com/metaplex-foundation/collection-migration-issues",
                                children: "Report an issue"
                            })
                        })]
                    })
                },
                Re = function() {
                    return Object(v.jsxs)(ke.a, {
                        gutter: 8,
                        autoSelect: !1,
                        children: [Object(v.jsx)(ke.b, {
                            as: y.a,
                            variant: "ghost",
                            children: "Resources"
                        }), Object(v.jsx)(ke.d, {
                            children: Object(v.jsx)(Ie, {})
                        })]
                    })
                },
                ze = n(253);
            var De = function(e) {
                    var t = e.name,
                        n = e.address;
                    return t || n && function(e) {
                        var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                            a = "number" === typeof r ? r : null !== (t = null === r || void 0 === r ? void 0 : r.chars) && void 0 !== t ? t : 4,
                            i = null !== (n = "object" === typeof r ? null === r || void 0 === r ? void 0 : r.sep : null) && void 0 !== n ? n : "...";
                        return a > 0 && e.length >= 2 * a + i.length - 1 ? "".concat(e.slice(0, a)).concat(i).concat(e.slice(-a)) : e
                    }(n)
                },
                Pe = ["name", "address", "avatarUrl", "notifications"],
                Me = Object(r.forwardRef)((function(e, t) {
                    var n = e.name,
                        r = e.address,
                        a = e.avatarUrl,
                        i = e.notifications,
                        c = Object(s.a)(e, Pe);
                    return Object(v.jsx)(y.a, Object(o.a)(Object(o.a)({
                        ref: t,
                        leftIcon: Object(v.jsxs)(v.Fragment, {
                            children: [i && Object(v.jsx)(m.a, {
                                variant: "solid",
                                mr: 2,
                                children: i
                            }), Object(v.jsx)(ze.a, {
                                size: "sm",
                                src: a
                            })]
                        }),
                        variant: "ghost"
                    }, c), {}, {
                        children: De({
                            name: n,
                            address: r
                        })
                    }))
                })),
                Be = n(254),
                Ue = ["title", "subtitle", "content", "children", "size", "fontWeight"],
                Le = {
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 6
                },
                Ne = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        r = e.content,
                        a = e.children,
                        i = e.size,
                        c = void 0 === i ? "md" : i,
                        l = e.fontWeight,
                        u = Object(s.a)(e, Ue),
                        d = "xs" === c,
                        b = Array.isArray(n) ? n.join("\n") : n;
                    return Object(v.jsxs)(m.f, Object(o.a)(Object(o.a)({
                        align: "stretch",
                        direction: "column"
                    }, u), {}, {
                        children: [Object(v.jsx)(m.l, {
                            fontWeight: l,
                            variant: d ? "small" : "label",
                            mb: b ? 1 : Le[c],
                            children: t
                        }), b && Object(v.jsx)(m.l, {
                            variant: "subtitle",
                            color: "whiteAlpha.500",
                            whiteSpace: "pre-wrap",
                            mb: Le[c],
                            children: b
                        }), r || a]
                    }))
                },
                We = function(e) {
                    var t = e.networks,
                        n = e.currentNetwork,
                        a = e.setNetwork,
                        i = Object(r.useCallback)((function(e) {
                            a(e), window.location.reload()
                        }), [a, t]);
                    return Object(v.jsx)(Ne, {
                        title: "Network",
                        w: "full",
                        children: Object(v.jsx)(m.m, {
                            children: t.map((function(e) {
                                return Object(v.jsxs)(y.a, {
                                    onClick: function() {
                                        return i(e)
                                    },
                                    w: "full",
                                    variant: e === n ? "tertiary" : "ghost",
                                    bgColor: e === n ? "whiteAlpha.50" : void 0,
                                    justifyContent: "space-between",
                                    children: [e, e === n && Object(v.jsx)(m.d, {
                                        size: 1.5,
                                        bgColor: "green.500"
                                    })]
                                }, e)
                            }))
                        })
                    })
                },
                Ve = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    if (null === e) return 0;
                    var n = new RegExp("^-?\\d+(?:\\.\\d{0,".concat(t, "})?"), "g"),
                        r = e.toString().match(n);
                    return null === r ? 0 : +r[0]
                },
                He = ["sol", "usd"],
                Ke = function(e) {
                    var t = e.sol,
                        n = void 0 === t ? 0 : t,
                        r = e.usd,
                        a = void 0 === r ? 0 : r,
                        i = Object(s.a)(e, He);
                    return Object(v.jsxs)(m.g, Object(o.a)(Object(o.a)({}, i), {}, {
                        children: [Object(v.jsx)(m.d, {
                            bg: "whiteAlpha.50",
                            children: Object(v.jsx)(xe, {
                                boxSize: "1.5em"
                            })
                        }), Object(v.jsxs)(m.l, {
                            variant: "button",
                            fontWeight: 700,
                            children: [Ve(n, 5), " SOL"]
                        }), Object(v.jsxs)(m.l, {
                            variant: "button",
                            color: "whiteAlpha.500",
                            children: ["$", Ve(a, 2)]
                        })]
                    }))
                },
                Ge = ["sol", "usd", "title"],
                $e = function(e) {
                    var t = e.sol,
                        n = e.usd,
                        r = e.title,
                        a = void 0 === r ? "Balance" : r,
                        i = Object(s.a)(e, Ge),
                        c = Object(l.b)().disconnect;
                    return Object(v.jsxs)(m.m, Object(o.a)(Object(o.a)({
                        spacing: 4,
                        w: "full"
                    }, i), {}, {
                        children: [Object(v.jsx)(Ne, {
                            title: a,
                            size: "sm",
                            w: "full",
                            children: Object(v.jsx)(Ke, {
                                sol: t,
                                usd: n
                            })
                        }), Object(v.jsxs)(m.g, {
                            w: "full",
                            children: [Object(v.jsx)(y.a, {
                                leftIcon: Object(v.jsx)(C.b, {}),
                                flexGrow: 1,
                                children: "Add Funds"
                            }), Object(v.jsx)(y.a, {
                                onClick: c,
                                variant: "tertiary",
                                flexGrow: 1,
                                children: "Disconnect"
                            })]
                        })]
                    }))
                },
                Ye = n(32),
                Je = function(e) {
                    var t = e.user,
                        n = t.address,
                        r = t.avatarUrl,
                        a = t.name,
                        i = e.variant,
                        c = void 0 === i ? "sidebar" : i,
                        o = Object(Ye.c)(null !== n && void 0 !== n ? n : ""),
                        s = o.hasCopied,
                        l = o.onCopy;
                    return Object(v.jsxs)(m.m, {
                        px: 6,
                        py: 2,
                        spacing: 4,
                        children: [Object(v.jsx)(ze.a, {
                            size: "sidebar" === c ? "2xl" : "md",
                            src: r
                        }), Object(v.jsxs)(m.g, {
                            children: [Object(v.jsx)(m.h, {
                                variant: "sidebar" === c ? "h4" : "h5",
                                children: De({
                                    name: a,
                                    address: n
                                })
                            }), Object(v.jsx)(y.a, {
                                onClick: n ? l : void 0,
                                variant: "ghost",
                                p: 1,
                                color: "whiteAlpha.700",
                                children: s ? Object(v.jsx)(C.f, {
                                    size: A["2xl"]
                                }) : Object(v.jsx)(C.e, {
                                    size: A["2xl"]
                                })
                            })]
                        })]
                    })
                },
                qe = function(e) {
                    var t = e.children,
                        n = e.user,
                        r = e.networks,
                        a = e.setNetwork,
                        i = e.currentNetwork,
                        c = e.balance,
                        o = e.forceOpen;
                    return Object(v.jsxs)(Be.a, {
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                padding: 32
                            }
                        }],
                        isOpen: o,
                        children: [Object(v.jsx)(Be.d, {
                            children: Object(v.jsx)(m.b, {
                                children: t
                            })
                        }), Object(v.jsx)(Be.c, {
                            borderStyle: "none",
                            borderRadius: "xl",
                            children: Object(v.jsxs)(Be.b, {
                                bgColor: "gray.700",
                                borderRadius: "xl",
                                p: 4,
                                children: [Object(v.jsx)(Je, {
                                    user: n,
                                    variant: "profile-popover"
                                }), Object(v.jsx)(m.e, {
                                    my: 4
                                }), Object(v.jsxs)(m.m, {
                                    spacing: 6,
                                    children: [c ? Object(v.jsx)($e, {
                                        sol: c.sol,
                                        usd: c.usd,
                                        p: 0
                                    }) : null, Object(v.jsx)(We, {
                                        networks: r,
                                        currentNetwork: i,
                                        setNetwork: a
                                    })]
                                })]
                            })
                        })]
                    })
                },
                Xe = function(e) {
                    return Object(v.jsx)(y.a, Object(o.a)(Object(o.a)({
                        variant: "ghost",
                        px: 3
                    }, e), {}, {
                        children: Object(v.jsx)(C.g, {
                            size: 24
                        })
                    }))
                },
                Qe = ["notifications", "onClick"],
                Ze = function(e) {
                    var t = e.notifications,
                        n = e.onClick,
                        r = Object(s.a)(e, Qe);
                    return Object(v.jsxs)(y.a, Object(o.a)(Object(o.a)({
                        variant: "ghost",
                        onClick: n,
                        px: 3
                    }, r), {}, {
                        children: [Object(v.jsx)(C.j, {
                            size: A["2xl"]
                        }), t && Object(v.jsx)(m.a, {
                            variant: "solid",
                            children: t
                        })]
                    }))
                },
                et = n(23);

            function tt(e, t) {
                var n = e.$node,
                    a = e.effectFx,
                    i = Object(h.b)(n),
                    c = Object(je.a)(i, 3),
                    o = c[0],
                    s = c[1],
                    l = c[2];
                return Object(r.useEffect)((function() {
                    o || l || s || a()
                }), [o, l, a].concat(Object(et.a)(null !== t && void 0 !== t ? t : []))), {
                    data: o,
                    fail: s,
                    effectFx: a
                }
            }
            var nt = n(55),
                rt = n(27),
                at = n(119),
                it = new nt.b,
                ct = Object(rt.d)((function() {
                    return it.getRate(nt.d.SOL, nt.d.USD)
                })),
                ot = Object(at.b)(ct);
            ot.$node.map((function(e) {
                return Object(je.a)(e, 1)[0]
            }));
            var st = function() {
                    var e = tt(ot),
                        t = e.data,
                        n = e.fail,
                        a = e.effectFx;
                    return {
                        convert: Object(r.useCallback)((function(e) {
                            return function(e, t, n, r) {
                                if (!e || !t) return null;
                                var a = t.find((function(e) {
                                    return e.from === n && e.to === r
                                }));
                                return a ? e * a.rate : null
                            }(e, t, nt.d.SOL, nt.d.USD)
                        }), [t]),
                        fail: n,
                        fetch: a
                    }
                },
                lt = function(e) {
                    var t = e.user,
                        n = e.onToggleSidebar,
                        a = _e().mdUp,
                        i = Object(h.b)(x.b),
                        c = function() {
                            var e, t = tt(I.e),
                                n = t.data,
                                r = t.fail,
                                a = t.effectFx,
                                i = st().convert;
                            return {
                                balance: null === n ? null : {
                                    sol: n,
                                    usd: null !== (e = i(n)) && void 0 !== e ? e : 0
                                },
                                fail: r,
                                fetch: a
                            }
                        }(),
                        s = Object(r.useMemo)((function() {
                            var e, t;
                            return {
                                sol: null === (e = c.balance) || void 0 === e ? void 0 : e.sol,
                                usd: null === (t = c.balance) || void 0 === t ? void 0 : t.usd
                            }
                        }), [c]),
                        l = Object(h.a)(x.e);
                    return Object(v.jsxs)(m.g, {
                        children: [a && Object(v.jsx)(Re, {}), a && (t ? Object(v.jsx)(qe, {
                            user: t,
                            balance: s,
                            networks: x.c,
                            currentNetwork: i,
                            setNetwork: l,
                            children: Object(v.jsx)(Me, Object(o.a)(Object(o.a)({}, t), {}, {
                                variant: "ghost"
                            }))
                        }) : Object(v.jsx)(g.b, {})), !a && Object(v.jsx)(Ze, {
                            notifications: null === t || void 0 === t ? void 0 : t.notifications
                        }), !a && Object(v.jsx)(Xe, {
                            onClick: n
                        })]
                    })
                },
                ut = n(267),
                dt = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = void 0 === n ? function() {} : n,
                        a = e.children;
                    return Object(v.jsxs)(ut.a, {
                        isOpen: t,
                        placement: "left",
                        onClose: r,
                        size: "full",
                        useInert: !0,
                        preserveScrollBarGap: !0,
                        children: [Object(v.jsx)(ut.e, {}), Object(v.jsx)(ut.c, {
                            bgColor: "gray.600",
                            overflowY: "auto",
                            children: a
                        })]
                    })
                },
                bt = function(e) {
                    var t = e.secondaryView,
                        n = e.secondaryViewTitle,
                        r = e.onExitSecondaryView;
                    return _e().smDown ? Object(v.jsx)(ut.d, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        bgColor: "gray.700",
                        position: "sticky",
                        px: t ? 3 : 6,
                        top: 0,
                        zIndex: "sticky",
                        children: t ? Object(v.jsxs)(v.Fragment, {
                            children: [Object(v.jsx)(y.b, {
                                "aria-label": "Back",
                                onClick: r,
                                variant: "ghost",
                                position: "absolute",
                                size: "sm",
                                children: Object(v.jsx)(C.c, {
                                    size: A["2xl"]
                                })
                            }), Object(v.jsx)(m.l, {
                                textAlign: "center",
                                w: "100%",
                                children: n
                            })]
                        }) : Object(v.jsxs)(v.Fragment, {
                            children: [Object(v.jsx)(he, {
                                w: 9,
                                h: 9
                            }), Object(v.jsx)(ut.b, {
                                position: "unset"
                            })]
                        })
                    }) : null
                },
                jt = function(e) {
                    var t = e.onClose;
                    return Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)(bt, {
                            secondaryView: !0,
                            secondaryViewTitle: "Resources",
                            onExitSecondaryView: t
                        }), Object(v.jsx)(Ie, {
                            variant: "sidebar"
                        })]
                    })
                },
                ft = function(e) {
                    var t = e.isOpen,
                        n = void 0 !== t && t,
                        r = e.focused,
                        a = e.onClose,
                        i = e.children;
                    return _e().mdUp && i ? Object(v.jsx)(Oe, {
                        focused: r,
                        children: i
                    }) : Object(v.jsx)(dt, {
                        isOpen: n,
                        onClose: a,
                        children: i || Object(v.jsx)(jt, {
                            onClose: a
                        })
                    })
                },
                pt = function(e) {
                    var t = e.variant,
                        n = e.focused,
                        a = e.gutterBottom,
                        i = e.children,
                        c = e.sidebarContent,
                        o = e.transparentNavbar,
                        s = Object(h.b)(I.b),
                        l = Object(r.useState)(!1),
                        u = Object(je.a)(l, 2),
                        d = u[0],
                        b = u[1],
                        j = Object(r.useState)(!0),
                        f = Object(je.a)(j, 2),
                        p = f[0],
                        x = f[1],
                        g = Object(r.useCallback)((function() {
                            return b((function(e) {
                                return !e
                            }))
                        }), [b]),
                        O = Object(r.useCallback)((function() {
                            return b(!1)
                        }), [b]),
                        w = Object(r.useCallback)((function(e) {
                            return x(!e)
                        }), [x]);
                    return Object(v.jsxs)(m.f, {
                        children: [!n && Object(v.jsx)(Ae, {
                            transparent: o && p,
                            backgroundBlur: o,
                            top: 0,
                            right: 0,
                            left: "auto",
                            position: "fixed",
                            zIndex: "sticky",
                            children: Object(v.jsx)(lt, {
                                user: s,
                                onToggleSidebar: g
                            })
                        }), Object(v.jsx)(ft, {
                            isOpen: d,
                            onClose: O,
                            focused: n,
                            children: c
                        }), Object(v.jsx)(Ot, {
                            variant: t,
                            focused: n,
                            gutterBottom: a,
                            onScrollTrigger: w,
                            children: i
                        })]
                    })
                },
                ht = function(e, t) {
                    var n, r = t.target,
                        a = t.threshold;
                    return r && (e.current = (n = r, "window" in globalThis && n === window ? r.pageYOffset : r.scrollTop)), e.current > a
                },
                xt = "undefined" !== typeof window ? window : null,
                gt = {
                    wide: "1600px",
                    medium: "7xl",
                    narrow: "3xl"
                },
                Ot = function(e) {
                    var t = e.focused,
                        n = e.variant,
                        a = void 0 === n ? "wide" : n,
                        i = e.gutterBottom,
                        c = e.onScrollTrigger,
                        o = e.children,
                        s = Object(r.useState)(null),
                        l = Object(je.a)(s, 2),
                        u = l[0],
                        d = l[1];
                    ! function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xt,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.threshold,
                            a = void 0 === n ? 24 : n,
                            i = t.onTrigger,
                            c = void 0 === i ? function() {} : i,
                            o = Object(r.useRef)(0),
                            s = Object(r.useState)((function() {
                                return ht(o, {
                                    target: e,
                                    threshold: a
                                })
                            })),
                            l = Object(je.a)(s, 2),
                            u = l[0],
                            d = l[1];
                        Object(r.useEffect)((function() {
                            var t = function() {
                                var t = ht(o, {
                                    target: e,
                                    threshold: a
                                });
                                d(t), c(t)
                            };
                            return t(), null === e || void 0 === e || e.addEventListener("scroll", t),
                                function() {
                                    null === e || void 0 === e || e.removeEventListener("scroll", t)
                                }
                        }), [e, c, a])
                    }(u, {
                        onTrigger: c
                    });
                    var b = _e().mdUp,
                        j = Object(r.useCallback)(d, []),
                        f = b ? 12 : 6,
                        p = gt[a];
                    return Object(v.jsx)(m.b, {
                        ref: j,
                        flexGrow: 1,
                        position: "relative",
                        maxH: "100vh",
                        overflowY: "auto",
                        children: Object(v.jsx)(m.f, {
                            direction: "column",
                            maxW: b ? p : "full",
                            w: b ? void 0 : "390px",
                            marginX: "auto",
                            flexGrow: 1,
                            px: f,
                            pt: t ? f : 88,
                            pb: i ? "30vh" : f,
                            children: o
                        })
                    })
                },
                mt = function(e) {
                    var t = e.icon,
                        n = e.text;
                    return n ? Object(v.jsxs)(m.g, {
                        spacing: 6,
                        bgColor: "whiteAlpha.50",
                        px: 6,
                        py: 3,
                        borderRadius: "lg",
                        children: [t && Object(v.jsx)(m.b, {
                            color: "whiteAlpha.700",
                            children: t
                        }), Object(v.jsx)(m.l, {
                            color: "whiteAlpha.700",
                            children: n
                        })]
                    }) : null
                },
                vt = (n(462), ["darkBg"]),
                wt = function(e) {
                    var t = e.darkBg,
                        n = Object(s.a)(e, vt);
                    return Object(v.jsx)(m.b, Object(o.a)(Object(o.a)({}, n), {}, {
                        className: "infinite-progress-spinner ".concat(t ? "spinner-dark-background" : "spinner-light-background")
                    }))
                },
                yt = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        r = e.noteIcon,
                        a = e.noteText,
                        i = _e().mdUp;
                    return Object(v.jsxs)(m.f, {
                        direction: "column",
                        flexGrow: 1,
                        children: [Object(v.jsxs)(m.c, {
                            w: "full",
                            h: "250px",
                            flexDirection: "column",
                            flexGrow: 1,
                            px: i ? 16 : 0,
                            my: i ? 16 : 6,
                            children: [Object(v.jsx)(wt, {
                                mb: 12
                            }), Object(v.jsx)(m.h, {
                                variant: "h4",
                                mb: 1,
                                textAlign: "center",
                                children: t
                            }), Object(v.jsx)(m.l, {
                                align: "center",
                                color: "whiteAlpha.700",
                                children: n
                            })]
                        }), Object(v.jsx)(mt, {
                            icon: r,
                            text: a
                        })]
                    })
                },
                Ct = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "Loading collections" : t;
                    return Object(v.jsx)(pt, {
                        children: Object(v.jsx)(yt, {
                            title: n
                        })
                    })
                },
                _t = n(14),
                St = n(15);
            var At = function() {
                function e(t, n) {
                    Object(_t.a)(this, e), this.path = t, this.staticValue = n
                }
                return Object(St.a)(e, [{
                    key: "toString",
                    value: function() {
                        return this.staticValue ? this.staticValue : this.path
                    }
                }]), e
            }();

            function kt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = "/" + t.join("/"),
                    a = function(e) {
                        var n = null !== e && void 0 !== e ? e : {};
                        return "/" + t.map((function(e) {
                            return "string" === typeof e ? e : e.staticValue ? e.staticValue : n[e.path]
                        })).join("/")
                    },
                    i = a;
                return i.args = t, i.path = r, i
            }
            var Ft, Et = kt("expand-collection", new At(":collectionId", null !== Ft && void 0 !== Ft ? Ft : "")),
                Tt = {
                    home: kt(""),
                    createNewCollection: kt("create-collection"),
                    expandCollection: Et,
                    notFound: kt("404")
                },
                It = function(e) {
                    var t = e.hrefTitle,
                        n = void 0 === t ? "Go Home" : t,
                        r = e.href,
                        a = void 0 === r ? Tt.home() : r,
                        i = e.children;
                    return Object(v.jsx)(m.c, {
                        height: "full",
                        children: Object(v.jsxs)(m.m, {
                            spacing: 4,
                            children: [Object(v.jsx)(m.h, {
                                variant: "h1",
                                children: i || "Page was not found"
                            }), Object(v.jsx)(y.a, {
                                flexGrow: 1,
                                size: "lg",
                                as: fe.b,
                                to: a,
                                children: n
                            })]
                        })
                    })
                },
                Rt = function(e) {
                    var t = e.children;
                    return Object(v.jsx)(pt, {
                        children: Object(v.jsx)(It, {
                            children: t
                        })
                    })
                },
                zt = function(e) {
                    var t = e.children;
                    return Object(v.jsx)(Rt, {
                        children: t || "Access denied"
                    })
                },
                Dt = ["path", "view", "index", "subroute", "guard", "guardView", "guardLoading"];

            function Pt(e, t) {
                var n = e.path,
                    r = e.view,
                    a = e.index,
                    i = e.subroute,
                    c = e.guard,
                    l = e.guardView,
                    u = void 0 === l ? zt : l,
                    d = e.guardLoading,
                    b = void 0 === d ? Ct : d,
                    j = Object(s.a)(e, Dt),
                    f = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    p = void 0 === c || (c instanceof Function ? c() : Object(h.b)(c)),
                    x = "*" === n ? "*" : f ? null === n || void 0 === n ? void 0 : n.path : null === n || void 0 === n ? void 0 : n.routeName,
                    g = !1 === p ? u : null === p ? b : r;
                return Object(v.jsx)(be.a, Object(o.a)(Object(o.a)({}, j), {}, {
                    index: a,
                    path: null !== x && void 0 !== x ? x : "*",
                    element: Object(v.jsx)(g, {}),
                    children: i ? i.map((function(e, n) {
                        return Pt(e, "".concat(t, ".").concat(n), !1)
                    })) : null
                }), t)
            }
            var Mt, Bt, Ut = n(166),
                Lt = n(168),
                Nt = n.p + "static/media/collections-ellipse.60756371.png",
                Wt = n(183),
                Vt = n(10),
                Ht = n(2),
                Kt = n.n(Ht),
                Gt = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e() {
                        var t, n;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = Object(rt.h)(), n = t.getState(I.c)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("Wallet isn't connected!");
                                case 4:
                                    return e.next = 6, fetch("".concat("https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/get-collections?authority=").concat(n.publicKey.toBase58()), {
                                        method: "GET"
                                    }).then(function() {
                                        var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                                            return Kt.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!t.ok) {
                                                            e.next = 4;
                                                            break
                                                        }
                                                        return e.next = 3, t.json().then((function(e) {
                                                            var t = [];
                                                            return e.forEach((function(e) {
                                                                var n = {
                                                                    cluster: e.cluster,
                                                                    collection_id: e.collection_id,
                                                                    collection_size: e.collection_size,
                                                                    status: e.status,
                                                                    successful_mints: e.successful_mints,
                                                                    processing_mints: e.processing_mints,
                                                                    retry_mints: e.retry_mints,
                                                                    failed_mints: e.failed_mints
                                                                };
                                                                t.push(n)
                                                            })), t
                                                        }));
                                                    case 3:
                                                        return e.abrupt("return", e.sent);
                                                    case 4:
                                                        return e.abrupt("return", []);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                $t = n(107),
                Yt = n(7),
                Jt = nt.f.metadata.Metadata,
                qt = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                        var n, r, a, i, c, o, s;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(rt.h)(), r = n.getState(I.c), a = n.getState(x.a), e.next = 5, Jt.getPDA(t);
                                case 5:
                                    return i = e.sent, e.next = 8, a.getParsedAccountInfo(new Yt.PublicKey(i));
                                case 8:
                                    if (c = e.sent, o = new Jt(t, null === c || void 0 === c ? void 0 : c.value), r && o.data.updateAuthority === r.publicKey.toBase58()) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("This wallet does not have Update Authority over this NFT.");
                                case 12:
                                    return s = o.data.data, e.abrupt("return", s.uri);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Xt = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                        var n, r, a;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, qt(t);
                                case 2:
                                    return n = e.sent, e.next = 5, fetch(n);
                                case 5:
                                    return r = e.sent, e.next = 8, r.json();
                                case 8:
                                    return a = e.sent, e.abrupt("return", a);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Qt = n(277),
                Zt = n(133),
                en = function(e) {
                    var t = e.collectionData,
                        n = e.onClickRetry,
                        a = e.refreshCollections,
                        i = Object(r.useState)(!0),
                        c = Object(je.a)(i, 2),
                        o = c[0],
                        s = c[1],
                        l = Object(r.useState)(!1),
                        u = Object(je.a)(l, 2),
                        d = u[0],
                        b = u[1],
                        j = Object(r.useState)(),
                        f = Object(je.a)(j, 2),
                        p = f[0],
                        h = f[1],
                        x = Object(r.useState)(!1),
                        g = Object(je.a)(x, 2),
                        O = g[0],
                        w = g[1],
                        C = Object(r.useState)(!1),
                        _ = Object(je.a)(C, 2),
                        S = _[0],
                        A = _[1],
                        k = Object(r.useCallback)(Object(Vt.a)(Kt.a.mark((function e() {
                            return Kt.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n && n(t.collection_id), !a) {
                                            e.next = 7;
                                            break
                                        }
                                        return A(!0), e.next = 5, Object(Zt.a)(5e3);
                                    case 5:
                                        a(), A(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []);
                    return Object(r.useEffect)((function() {
                        Xt(t.collection_id).then((function(e) {
                            h(e)
                        })).catch((function() {
                            w(!0)
                        }))
                    }), [t.collection_id]), O ? Object(v.jsx)(m.g, {
                        rounded: "md",
                        w: "full",
                        paddingY: 3,
                        spacing: 4,
                        children: Object(v.jsxs)(m.l, {
                            variant: "small-bold",
                            color: "pink.500",
                            children: ["There was an issue loading Collection ID:", t.collection_id]
                        })
                    }) : Object(v.jsxs)(m.g, {
                        rounded: "md",
                        w: "full",
                        paddingY: 3,
                        spacing: 4,
                        h: "96px",
                        children: [o && Object(v.jsx)(m.f, {
                            w: "64px",
                            h: "64px",
                            align: "center",
                            justify: "center",
                            children: Object(v.jsx)(Ut.a, {})
                        }), d && Object(v.jsx)(m.f, {
                            w: "64px",
                            h: "64px",
                            align: "center",
                            justify: "center",
                            children: Object(v.jsx)(he, {
                                w: 9,
                                h: 9
                            })
                        }), p && !d && Object(v.jsx)(Lt.a, {
                            style: {
                                display: o ? "none" : "flex"
                            },
                            rounded: "md",
                            w: "64px",
                            h: "64px",
                            src: null === p || void 0 === p ? void 0 : p.image,
                            onError: function() {
                                s(!1), b(!0)
                            },
                            onLoad: function() {
                                s(!1)
                            }
                        }), Object(v.jsxs)(m.m, {
                            align: "start",
                            children: [Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: p ? null === p || void 0 === p ? void 0 : p.name : "Loading Collection Metadata, please wait..."
                            }), Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: t.collection_id
                            }), "processing" === t.status ? Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                color: "#00E0A6",
                                children: "Your Collection is still being migrated, check back soon\u2026"
                            }) : "retry" === t.status ? Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                color: "pink.500",
                                children: "Failed to migrate ".concat(t.failed_mints.length + t.retry_mints.length, " ").concat(t.failed_mints.length + t.retry_mints.length === 1 ? "NFT" : "NFTs", ", please retry.")
                            }) : "failed" === t.status ? Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                color: "pink.500",
                                children: "We are unable to migrate this collection."
                            }) : Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: "".concat(t.successful_mints.length, " items")
                            })]
                        }), function() {
                            switch (t.status) {
                                case "processing":
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)(m.j, {}), Object(v.jsx)(m.f, {
                                            w: "64px",
                                            h: "64px",
                                            align: "center",
                                            justify: "center",
                                            children: Object(v.jsx)(Ut.a, {})
                                        })]
                                    });
                                case "failed":
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)(m.j, {}), Object(v.jsx)(m.f, {
                                            w: "64px",
                                            h: "64px",
                                            align: "center",
                                            justify: "center",
                                            children: Object(v.jsx)($t.b, {
                                                size: "32",
                                                color: "#D83AEB"
                                            })
                                        })]
                                    });
                                case "retry":
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)(m.j, {}), Object(v.jsx)(m.f, {
                                            h: "48px",
                                            w: "76px",
                                            align: "center",
                                            justify: "center",
                                            children: S ? Object(v.jsx)(Ut.a, {}) : Object(v.jsx)(y.a, {
                                                onClick: function() {
                                                    k()
                                                },
                                                type: "submit",
                                                size: "md",
                                                variant: "tertiary",
                                                children: "Retry"
                                            })
                                        })]
                                    });
                                default:
                                    return Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)(m.j, {}), Object(v.jsx)(y.b, {
                                            "aria-label": "Refresh Collections",
                                            icon: Object(v.jsx)(Qt.a, {}),
                                            bg: "transparent",
                                            color: "#00FFBD",
                                            _hover: {
                                                bg: "#3A3A3A"
                                            },
                                            _focus: {
                                                bg: "#3A3A3A"
                                            },
                                            w: "48px",
                                            h: "48px",
                                            as: fe.b,
                                            to: Tt.expandCollection({
                                                ":collectionId": t.collection_id
                                            })
                                        })]
                                    })
                            }
                        }()]
                    })
                },
                tn = n(46),
                nn = n(181),
                rn = n(69),
                an = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t, n) {
                        var r, a, i;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = Object(rt.h)(), a = r.getState(I.c)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("Wallet isn't connected!");
                                case 4:
                                    if (t && "" !== t) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("No Collection ID to retry.");
                                case 6:
                                    return null === n || void 0 === n || n.setStep(tn.a.migrating_collection), e.next = 9, cn(t, a.publicKey);
                                case 9:
                                    if (!e.sent) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 13, Object(nn.a)(t, a.publicKey.toBase58());
                                case 13:
                                    (i = e.sent) && "successful" === i ? null === n || void 0 === n || n.setStep(tn.a.migrating_success) : ("retry" === i ? null === n || void 0 === n || n.setStep(tn.a.migrating_error_retry) : null === n || void 0 === n || n.setStep(tn.a.migrating_error), rn.a(new Error("Collection Migration failed. Job Status: ".concat(i, " Collection ID: ").concat(t, ".")))), e.next = 18;
                                    break;
                                case 17:
                                    rn.a(new Error("Failed to start migration: Collection ID ".concat(t, ".")));
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                cn = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t, n) {
                        var r;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        method: "POST",
                                        body: JSON.stringify({
                                            collection_id: t,
                                            update_authority: n
                                        })
                                    }, e.next = 3, fetch("https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/retry-collection", r).then((function(e) {
                                        return e.ok
                                    }));
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                on = n(282),
                sn = function(e) {
                    var t = e.collections,
                        n = e.refreshCollections,
                        r = dn(t, Object(x.d)()),
                        a = r.finishedCollections,
                        i = r.pendingAndFailedCollections,
                        c = _e().mdUp;
                    return Object(v.jsx)(m.f, {
                        direction: "column",
                        children: Object(v.jsxs)(pt, {
                            children: [Object(v.jsxs)(m.f, {
                                children: [Object(v.jsx)(m.j, {}), Object(v.jsx)(m.k, {
                                    direction: c ? "row" : "column",
                                    spacing: 4,
                                    children: Object(v.jsx)(y.a, {
                                        leftIcon: Object(v.jsx)(Wt.a, {}),
                                        variant: "primary",
                                        as: fe.b,
                                        to: Tt.createNewCollection(),
                                        children: "New Collection"
                                    })
                                })]
                            }), i.length > 0 && Object(v.jsx)(un, {
                                collections: i,
                                refreshCollections: n
                            }), a.length > 0 && Object(v.jsx)(ln, {
                                collections: a,
                                refreshCollections: n
                            })]
                        })
                    })
                },
                ln = function(e) {
                    var t = e.collections,
                        n = e.refreshCollections;
                    return Object(v.jsxs)(m.f, {
                        direction: "column",
                        children: [Object(v.jsx)(m.h, {
                            variant: "h3",
                            my: 4,
                            marginTop: 63,
                            mb: "32px",
                            children: "Collections"
                        }), t.map((function(e) {
                            return Object(v.jsx)(m.b, {
                                w: "full",
                                bg: "whiteAlpha.50",
                                px: 4,
                                borderRadius: "2xl",
                                borderColor: "white",
                                mb: "16px",
                                children: Object(v.jsx)(en, {
                                    collectionData: e,
                                    refreshCollections: n
                                })
                            }, e.collection_id)
                        }))]
                    })
                },
                un = function(e) {
                    var t = e.collections,
                        n = e.refreshCollections,
                        r = function() {
                            var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                                return Kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, an(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(v.jsxs)(m.f, {
                        direction: "column",
                        children: [Object(v.jsxs)(m.g, {
                            marginTop: 63,
                            children: [Object(v.jsx)(m.h, {
                                variant: "h3",
                                my: 4,
                                mb: "32px",
                                children: "In Progress"
                            }), Object(v.jsx)(m.j, {}), Object(v.jsx)(m.f, {
                                direction: "column",
                                align: "center",
                                justify: "center",
                                children: Object(v.jsx)(y.b, {
                                    "aria-label": "Refresh Collections",
                                    icon: Object(v.jsx)(on.a, {}),
                                    bg: "transparent",
                                    color: "#00FFBD",
                                    _hover: {
                                        color: "#00E0A6"
                                    },
                                    _focus: {
                                        color: "#00E0A6"
                                    },
                                    w: "32px",
                                    h: "32px",
                                    onClick: n
                                })
                            })]
                        }), t.map((function(e) {
                            return Object(v.jsx)(m.b, {
                                w: "full",
                                bg: "whiteAlpha.50",
                                px: 4,
                                borderRadius: "2xl",
                                borderColor: "white",
                                mb: "16px",
                                children: Object(v.jsx)(en, {
                                    collectionData: e,
                                    refreshCollections: n,
                                    onClickRetry: r
                                })
                            }, e.collection_id)
                        }))]
                    })
                },
                dn = function(e, t) {
                    var n = [],
                        r = [];
                    return e.forEach((function(e) {
                        e.cluster === t.toString() && ("successful" === e.status ? n.push(e) : r.push(e))
                    })), {
                        finishedCollections: n,
                        pendingAndFailedCollections: r
                    }
                },
                bn = function() {
                    var e = Object(r.useState)(void 0),
                        t = Object(je.a)(e, 2),
                        n = t[0],
                        a = t[1],
                        i = function() {
                            Gt().then((function(e) {
                                var t = Object(x.d)().toString(),
                                    n = e.filter((function(e) {
                                        return e.cluster === t
                                    }));
                                a(n)
                            })).catch((function() {
                                a([])
                            }))
                        };
                    Object(r.useEffect)((function() {
                        i()
                    }), []);
                    var c = _e().mdUp;
                    return void 0 === n ? Object(v.jsx)(m.c, {
                        marginTop: c ? 400 : 200,
                        children: Object(v.jsx)(pt, {
                            children: Object(v.jsx)(Ut.a, {
                                size: "xl",
                                color: "#00FFBD"
                            })
                        })
                    }) : n.length > 0 ? Object(v.jsx)(sn, {
                        collections: n,
                        refreshCollections: i
                    }) : Object(v.jsxs)(m.c, {
                        marginTop: c ? 400 : 200,
                        children: [Object(v.jsx)(Lt.a, {
                            position: "absolute",
                            maxW: c ? 1e3 : 350,
                            src: Nt,
                            zIndex: -1
                        }), Object(v.jsx)(m.f, {
                            direction: "column",
                            align: "center",
                            justify: "center",
                            children: Object(v.jsxs)(pt, {
                                children: [Object(v.jsx)(m.h, {
                                    textAlign: "center",
                                    variant: "h3",
                                    my: 4,
                                    w: c ? 600 : void 0,
                                    marginTop: -63,
                                    children: "Migrate existing NFT collections to use the new Metaplex Collection Standard"
                                }), Object(v.jsx)(m.c, {
                                    children: Object(v.jsx)(m.l, {
                                        align: "center",
                                        w: c ? 536 : void 0,
                                        mb: 10,
                                        children: "You may choose to create a new Collection NFT, which is the most common scenario. In rare scenarios, you may opt to use an existing NFT created to represent your on-chain Collection."
                                    })
                                }), Object(v.jsx)(m.c, {
                                    children: Object(v.jsx)(y.a, {
                                        leftIcon: Object(v.jsx)(Wt.a, {}),
                                        variant: "primary",
                                        as: fe.b,
                                        to: Tt.createNewCollection(),
                                        children: "New Collection"
                                    })
                                })]
                            })
                        })]
                    })
                },
                jn = n(266),
                fn = n(121),
                pn = n(63);
            ! function(e) {
                e[e.AUDIO = 0] = "AUDIO", e[e.VIDEO = 1] = "VIDEO", e[e.IMAGE = 2] = "IMAGE", e[e.VR = 3] = "VR", e[e.HTML = 4] = "HTML", e[e.CSV = 5] = "CSV"
            }(Bt || (Bt = {}));
            var hn = (Mt = {}, Object(pn.a)(Mt, Bt.HTML, "HTML"), Object(pn.a)(Mt, Bt.IMAGE, ".png,.jpg,.svg,.gif"), Object(pn.a)(Mt, Bt.VIDEO, ".mp4"), Object(pn.a)(Mt, Bt.VR, ".glb"), Object(pn.a)(Mt, Bt.AUDIO, ".mp3"), Object(pn.a)(Mt, Bt.CSV, ".csv"), Mt),
                xn = n(263),
                gn = n(264),
                On = ["onUpload", "accept", "children"],
                mn = function(e) {
                    var t = e.onUpload,
                        n = e.accept,
                        a = void 0 === n ? ".png,.jpg,.gif,.mp4,.svg" : n,
                        i = e.children,
                        c = Object(s.a)(e, On),
                        l = Object(r.useRef)(null);
                    return Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)(y.a, Object(o.a)(Object(o.a)({}, c), {}, {
                            variant: "tertiary",
                            onClick: function() {
                                var e;
                                return null === (e = l.current) || void 0 === e ? void 0 : e.click()
                            },
                            children: i
                        })), Object(v.jsx)("input", {
                            ref: l,
                            multiple: !1,
                            onInput: function() {
                                var e, n;
                                return (null === (e = l.current) || void 0 === e ? void 0 : e.files) && t(null === (n = l.current) || void 0 === n ? void 0 : n.files)
                            },
                            accept: a,
                            hidden: !0,
                            type: "file"
                        })]
                    })
                },
                vn = ["onFileUpload", "children"],
                wn = function(e) {
                    var t = e.onFileUpload,
                        n = e.children,
                        a = Object(s.a)(e, vn),
                        i = Object(r.useState)(!1),
                        c = Object(je.a)(i, 2),
                        l = c[0],
                        u = c[1],
                        d = l ? "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))" : void 0;
                    return Object(v.jsx)(m.b, Object(o.a)(Object(o.a)({
                        bg: d,
                        onDrop: function(e) {
                            if (e.preventDefault(), u(!1), null != e.dataTransfer) {
                                var n = e.dataTransfer.files[0];
                                t(n)
                            }
                        },
                        onDragOver: function(e) {
                            return e.preventDefault()
                        },
                        onDragEnter: function(e) {
                            e.preventDefault(), u(!0)
                        },
                        onDragLeave: function(e) {
                            e.preventDefault(), u(!1)
                        }
                    }, a), {}, {
                        children: n
                    }))
                },
                yn = function(e) {
                    var t = e.onFileChange,
                        n = e.isInvalid,
                        a = e.disabled,
                        i = e.type,
                        c = void 0 === i ? Bt.IMAGE : i,
                        o = Object(r.useRef)(!1),
                        s = Object(r.useState)(""),
                        l = Object(je.a)(s, 2),
                        u = l[0],
                        d = l[1],
                        b = Object(r.useState)(0),
                        j = Object(je.a)(b, 2),
                        f = j[0],
                        p = j[1];
                    return Object(v.jsxs)(m.m, {
                        layerStyle: n ? "error" : "base",
                        p: 8,
                        spacing: 4,
                        align: "start",
                        children: [Object(v.jsx)(xn.c, {
                            onChange: p,
                            defaultIndex: 0,
                            children: Object(v.jsxs)(xn.b, {
                                children: [Object(v.jsx)(xn.a, {
                                    children: "Upload a file"
                                }), Object(v.jsx)(xn.a, {
                                    children: "Enter a URL"
                                })]
                            })
                        }), Object(v.jsx)(wn, {
                            onFileUpload: function(e) {
                                o.current = !0, d(e.name), t(e)
                            },
                            w: "full",
                            children: Object(v.jsxs)(m.g, {
                                w: "full",
                                spacing: 4,
                                children: [Object(v.jsx)(gn.a, {
                                    onClick: function() {
                                        return o.current && d("")
                                    },
                                    value: u,
                                    disabled: a,
                                    onChange: function(e) {
                                        return n = e.target.value, o.current = !1, d(n), void t(n);
                                        var n
                                    },
                                    bg: "whiteAlpha.50",
                                    color: "whiteAlpha.700",
                                    _placeholder: {
                                        color: "whiteAlpha.700"
                                    },
                                    placeholder: "http://example.io/page/image.jpg"
                                }), !f && Object(v.jsx)(mn, {
                                    h: "56px",
                                    disabled: a,
                                    accept: hn[c],
                                    onUpload: function(e) {
                                        var n = e[0];
                                        o.current = !0, d(n.name), t(n)
                                    },
                                    children: "Select File"
                                })]
                            })
                        })]
                    })
                },
                Cn = n(97),
                _n = function(e) {
                    var t = e.wrap,
                        n = e.wrapper,
                        r = e.children;
                    return t ? n(r) : r
                },
                Sn = function(e) {
                    var t = e.variant,
                        n = e.imgUrl,
                        r = e.discardImage,
                        a = _e().mdUp;
                    if (!n) return null;
                    var i = null != n ? "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))" : void 0,
                        c = "logo-preview" === t,
                        o = c ? 216 : 520;
                    return Object(v.jsxs)(v.Fragment, {
                        children: [!c && Object(v.jsx)(Cn.a, {
                            pos: "absolute",
                            top: 4,
                            right: 4,
                            onClick: function() {
                                return r()
                            },
                            hidden: null == n
                        }), Object(v.jsx)(_n, {
                            wrap: c,
                            wrapper: function(e) {
                                return Object(v.jsxs)(m.f, {
                                    maxW: a ? o : void 0,
                                    borderRadius: "2xl",
                                    bg: i,
                                    overflow: "hidden",
                                    pos: "relative",
                                    align: "center",
                                    children: [e, Object(v.jsx)(Cn.a, {
                                        pos: "absolute",
                                        top: 4,
                                        right: 4,
                                        onClick: function() {
                                            return r()
                                        },
                                        hidden: null == n
                                    })]
                                })
                            },
                            children: Object(v.jsx)(Lt.a, {
                                pos: "relative",
                                zIndex: -1,
                                width: "full",
                                objectFit: "cover",
                                src: n
                            })
                        })]
                    })
                };
            var An = ["onFileChange", "isInvalid", "variant", "type", "value", "disabled"],
                kn = function(e) {
                    var t = e.onFileChange,
                        n = e.isInvalid,
                        a = e.variant,
                        i = void 0 === a ? "preview" : a,
                        c = (e.type, e.value),
                        l = e.disabled,
                        u = Object(s.a)(e, An),
                        d = _e().mdUp,
                        b = function(e) {
                            var t = Object(r.useState)("string" === typeof e ? e : null),
                                n = Object(je.a)(t, 2),
                                a = n[0],
                                i = n[1],
                                c = Object(r.useMemo)((function() {
                                    var e = new FileReader;
                                    return e.onload = function() {
                                        if (e.result)
                                            if ("string" === typeof e.result) i(e.result);
                                            else try {
                                                var t = new Blob([new Uint8Array(e.result)], {
                                                        type: "video/mp4"
                                                    }),
                                                    n = URL.createObjectURL(t);
                                                i(n)
                                            } catch (r) {}
                                    }, e.onerror = function() {
                                        return i(null)
                                    }, e
                                }), []);
                            return Object(r.useEffect)((function() {
                                e instanceof File && 1 !== c.readyState && c.readAsDataURL(e), "string" === typeof e && i(e)
                            }), [e, c]), [a, i, function(e) {
                                return c.readAsDataURL(e)
                            }]
                        }(c),
                        j = Object(je.a)(b, 3),
                        f = j[0],
                        p = j[1],
                        h = j[2],
                        x = null != f ? "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))" : void 0,
                        g = "logo-preview" === i,
                        O = g ? 216 : 520;
                    return Object(v.jsx)(m.b, Object(o.a)(Object(o.a)({}, u), {}, {
                        children: Object(v.jsx)(m.b, {
                            layerStyle: n ? "error" : void 0,
                            bg: "whiteAlpha.50",
                            p: d ? 8 : 4,
                            borderRadius: "2xl",
                            borderColor: "white",
                            pos: "relative",
                            children: Object(v.jsx)(wn, {
                                onFileUpload: function(e) {
                                    t(e), h(e)
                                },
                                children: Object(v.jsxs)(m.f, {
                                    minH: d ? O : 216,
                                    maxH: g ? O : void 0,
                                    overflow: "hidden",
                                    pos: "relative",
                                    bg: g ? void 0 : x,
                                    borderRadius: "2xl",
                                    align: "stretch",
                                    children: [Object(v.jsx)(m.c, {
                                        role: "group",
                                        pos: "absolute",
                                        top: 0,
                                        left: 0,
                                        height: "full",
                                        w: "full",
                                        borderRadius: "2xl",
                                        children: Object(v.jsxs)(m.f, {
                                            direction: "column",
                                            align: "center",
                                            children: [null === f && Object(v.jsx)(m.l, {
                                                textAlign: "center",
                                                fontSize: "sm",
                                                color: "whiteAlpha.500",
                                                mt: 2,
                                                children: !g && d ? Object(v.jsxs)(v.Fragment, {
                                                    children: ["Drag and drop your file here", Object(v.jsx)("br", {}), "or use the button to below."]
                                                }) : "PNG, SVG, JPEG or GIF."
                                            }), Object(v.jsx)(mn, {
                                                onUpload: function(e) {
                                                    t(e[0]), h(e[0])
                                                },
                                                accept: hn[Bt.IMAGE],
                                                size: "xl",
                                                mt: 6,
                                                disabled: l,
                                                visibility: null === f ? void 0 : "hidden",
                                                _groupHover: {
                                                    visibility: "visible"
                                                },
                                                children: null === f ? "Choose file" : "Replace file"
                                            })]
                                        })
                                    }), Object(v.jsx)(Sn, {
                                        imgUrl: f,
                                        discardImage: function() {
                                            t(null), p(null)
                                        },
                                        variant: i
                                    })]
                                })
                            })
                        })
                    }))
                },
                Fn = function(e) {
                    var t = e.type,
                        n = void 0 === t ? Bt.IMAGE : t,
                        r = e.onFileChange,
                        a = e.isInvalid,
                        i = e.variant,
                        c = void 0 === i ? "base" : i,
                        o = e.disabled,
                        s = e.value;
                    return "base" === c ? Object(v.jsx)(yn, {
                        onFileChange: r,
                        type: n,
                        isInvalid: a,
                        disabled: o
                    }) : Object(v.jsx)(kn, {
                        variant: c,
                        value: s,
                        onFileChange: r,
                        type: n,
                        disabled: o,
                        isInvalid: a
                    })
                },
                En = n(98),
                Tn = n(265),
                In = ["ref"],
                Rn = function(e) {
                    var t, n = e.id,
                        r = e.type,
                        a = void 0 === r ? "text" : r,
                        i = e.defaultValue,
                        c = void 0 === i ? "" : i,
                        l = e.title,
                        u = e.placeholder,
                        d = void 0 === u ? l : u,
                        b = e.description,
                        j = e.options,
                        f = e.customInputFactory,
                        p = e.controlledInputFactory,
                        h = Object(fn.d)(),
                        x = h.register,
                        g = h.control,
                        O = h.formState.errors,
                        m = null != O[n],
                        w = Object(o.a)(Object(o.a)({}, x(n, j)), {}, {
                            placeholder: d,
                            type: a,
                            defaultValue: c,
                            isInvalid: m
                        }),
                        y = Array.isArray(b) ? b.join("\n") : b;
                    return Object(v.jsxs)(En.a, {
                        id: n,
                        isRequired: null != (null === j || void 0 === j ? void 0 : j.required),
                        isInvalid: m,
                        children: [Object(v.jsx)(En.d, {
                            requiredIndicator: Object(v.jsx)(En.e, {
                                children: "(required)"
                            }),
                            children: l
                        }), y && Object(v.jsx)(En.c, {
                            children: y
                        }), f ? f(w) : p ? Object(v.jsx)(fn.a, {
                            control: g,
                            name: n,
                            defaultValue: c,
                            rules: j,
                            render: p
                        }) : "number" === a ? Object(v.jsx)(fn.a, {
                            control: g,
                            name: n,
                            defaultValue: c,
                            rules: j,
                            render: function(e) {
                                var t = e.field,
                                    n = t.ref,
                                    r = Object(s.a)(t, In);
                                return Object(v.jsx)(Tn.a, Object(o.a)(Object(o.a)({}, r), {}, {
                                    isInvalid: m,
                                    children: Object(v.jsx)(Tn.b, {
                                        ref: n,
                                        name: r.name,
                                        placeholder: d
                                    })
                                }))
                            }
                        }) : Object(v.jsx)(gn.a, Object(o.a)({}, w)), Object(v.jsx)(En.b, {
                            children: null === (t = O[n]) || void 0 === t ? void 0 : t.message
                        })]
                    })
                },
                zn = function(e) {
                    var t = e.title,
                        n = e.subtitle;
                    return Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)(m.h, {
                            variant: "h3",
                            mt: 6,
                            mb: n ? 4 : 12,
                            children: t
                        }), n && Object(v.jsx)(m.l, {
                            color: "whiteAlpha.500",
                            variant: "body-large",
                            mb: 12,
                            children: n
                        })]
                    })
                },
                Dn = ["sol", "usd", "title", "children"],
                Pn = function(e) {
                    var t = e.sol,
                        n = e.usd,
                        r = e.title,
                        a = void 0 === r ? "Price" : r,
                        i = e.children,
                        c = Object(s.a)(e, Dn),
                        l = _e().mdUp;
                    return Object(v.jsxs)(m.k, Object(o.a)(Object(o.a)({
                        direction: l ? "row" : "column",
                        spacing: 4,
                        borderRadius: 6,
                        bgColor: "gray.700",
                        padding: 4,
                        align: "stretch",
                        justify: "space-between"
                    }, c), {}, {
                        children: [Object(v.jsx)(Ne, {
                            title: a,
                            size: "sm",
                            w: "full",
                            children: Object(v.jsx)(Ke, {
                                sol: t,
                                usd: n
                            })
                        }), Object(v.jsx)(m.f, {
                            children: i
                        })]
                    }))
                },
                Mn = n(41),
                Bn = n.n(Mn),
                Un = new Yt.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
                Ln = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                        var n, r, a, i;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = Object(rt.h)(), r = n.getState(I.c), a = n.getState(x.a), r) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("Wallet isn't connected!");
                                case 5:
                                    return e.next = 7, a.getProgramAccounts(Un, {
                                        dataSlice: {
                                            offset: 33,
                                            length: 32
                                        },
                                        filters: [{
                                            dataSize: 679
                                        }, {
                                            memcmp: {
                                                offset: 326,
                                                bytes: t
                                            }
                                        }, {
                                            memcmp: {
                                                offset: 1,
                                                bytes: r.publicKey.toBase58()
                                            }
                                        }]
                                    });
                                case 7:
                                    return i = e.sent, e.abrupt("return", i.map((function(e) {
                                        return Bn.a.encode(e.account.data)
                                    })));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Nn = function(e) {
                    var t = e.creatorId,
                        n = e.addMintAddressesToCollection,
                        a = Object(r.useState)(null),
                        i = Object(je.a)(a, 2),
                        c = i[0],
                        o = i[1],
                        s = Object(r.useState)("Looking for valid NFTs..."),
                        l = Object(je.a)(s, 2),
                        u = l[0],
                        d = l[1];
                    return Object(r.useEffect)((function() {
                        ! function(e) {
                            Ln(e).then((function(e) {
                                0 === e.length ? d("There are no NFTs associated with this Verified Creator or Wallet Authority") : 1 === e.length ? d("Found ".concat(e.length, " NFT")) : d("Found ".concat(e.length, " NFTs")), o(e), n(e)
                            }))
                        }(t)
                    }), [t]), Object(v.jsxs)(m.g, {
                        rounded: "md",
                        w: "full",
                        paddingY: 3,
                        spacing: 4,
                        children: [Object(v.jsx)(m.f, {
                            w: "64px",
                            h: "64px",
                            align: "center",
                            justify: "center",
                            children: c ? c.length > 0 ? Object(v.jsx)($t.a, {
                                size: 32
                            }) : Object(v.jsx)($t.b, {
                                size: 32
                            }) : Object(v.jsx)(Ut.a, {})
                        }), Object(v.jsxs)(m.m, {
                            align: "start",
                            children: [Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: u
                            }), Object(v.jsx)(m.l, {
                                fontSize: "sm",
                                children: t
                            })]
                        })]
                    })
                },
                Wn = n(283),
                Vn = n(284),
                Hn = function(e) {
                    return new Promise((function(t, n) {
                        Object(Vn.parse)(e, {
                            complete: t,
                            error: n
                        })
                    }))
                },
                Kn = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                        var n;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Hn(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Gn = nt.f.metadata.Metadata,
                $n = function() {
                    var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                        var n, r, a, i, c, o;
                        return Kt.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, n = Object(rt.h)(), r = n.getState(I.c), a = n.getState(x.a), r) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("Wallet isn't connected!");
                                case 6:
                                    return e.next = 8, Gn.getPDA(t);
                                case 8:
                                    return i = e.sent, e.next = 11, a.getParsedAccountInfo(new Yt.PublicKey(i));
                                case 11:
                                    if (!(c = e.sent)) {
                                        e.next = 15;
                                        break
                                    }
                                    return o = new Gn(t, null === c || void 0 === c ? void 0 : c.value), e.abrupt("return", o && null != o.data.mint && o.data.updateAuthority === r.publicKey.toBase58());
                                case 15:
                                    e.next = 19;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(0);
                                case 19:
                                    return e.abrupt("return", !1);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 17]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Yn = function(e) {
                    var t = e.file,
                        n = e.addMintAddressesToCollection,
                        a = Object(r.useState)(null),
                        i = Object(je.a)(a, 2),
                        c = i[0],
                        o = i[1],
                        s = Object(r.useState)("Looking for valid NFTs..."),
                        l = Object(je.a)(s, 2),
                        u = l[0],
                        d = l[1],
                        b = function() {
                            var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                                var r, a, i, c, s, l, u, b, j;
                                return Kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Kn(t);
                                        case 2:
                                            if (r = e.sent, a = r.data.filter((function(e) {
                                                    return e[0].length > 1
                                                })).map((function(e) {
                                                    return e[0]
                                                })), i = [], !(a.length > 0)) {
                                                e.next = 37;
                                                break
                                            }
                                            c = !1, s = !1, e.prev = 8, u = Object(Wn.a)(a);
                                        case 10:
                                            return e.next = 12, u.next();
                                        case 12:
                                            if (!(c = !(b = e.sent).done)) {
                                                e.next = 21;
                                                break
                                            }
                                            return j = b.value, e.next = 16, $n(j);
                                        case 16:
                                            if (!e.sent) {
                                                e.next = 18;
                                                break
                                            }
                                            i.push(j);
                                        case 18:
                                            c = !1, e.next = 10;
                                            break;
                                        case 21:
                                            e.next = 27;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(8), s = !0, l = e.t0;
                                        case 27:
                                            if (e.prev = 27, e.prev = 28, !c || null == u.return) {
                                                e.next = 32;
                                                break
                                            }
                                            return e.next = 32, u.return();
                                        case 32:
                                            if (e.prev = 32, !s) {
                                                e.next = 35;
                                                break
                                            }
                                            throw l;
                                        case 35:
                                            return e.finish(32);
                                        case 36:
                                            return e.finish(27);
                                        case 37:
                                            0 === i.length ? d("No valid NFTs were imported from this file.") : 1 === i.length ? d("Found ".concat(i.length, " NFT")) : d("Found ".concat(i.length, " NFTs")), o(i), n(i);
                                        case 40:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [8, 23, 27, 37],
                                    [28, , 32, 36]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(r.useEffect)((function() {
                        b(t)
                    }), [t]), Object(v.jsxs)(m.g, {
                        rounded: "md",
                        w: "full",
                        paddingY: 3,
                        spacing: 4,
                        children: [Object(v.jsx)(m.f, {
                            w: "64px",
                            h: "64px",
                            align: "center",
                            justify: "center",
                            children: c ? c.length > 0 ? Object(v.jsx)($t.a, {
                                size: 32
                            }) : Object(v.jsx)($t.b, {
                                size: 32
                            }) : Object(v.jsx)(Ut.a, {})
                        }), Object(v.jsxs)(m.m, {
                            align: "start",
                            children: [Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: u
                            }), Object(v.jsx)(m.l, {
                                fontSize: "sm",
                                children: t.name
                            })]
                        })]
                    })
                },
                Jn = function(e) {
                    var t = e.mint,
                        n = Object(r.useState)(!0),
                        a = Object(je.a)(n, 2),
                        i = a[0],
                        c = a[1],
                        o = Object(r.useState)(!1),
                        s = Object(je.a)(o, 2),
                        l = s[0],
                        u = s[1],
                        d = Object(r.useState)(),
                        b = Object(je.a)(d, 2),
                        j = b[0],
                        f = b[1],
                        p = Object(r.useState)(!1),
                        h = Object(je.a)(p, 2),
                        x = h[0],
                        g = h[1];
                    return Object(r.useEffect)((function() {
                        Xt(t).then((function(e) {
                            f(e)
                        })).catch((function() {
                            g(!0)
                        }))
                    }), [t]), x ? Object(v.jsx)(m.g, {
                        rounded: "md",
                        w: "full",
                        paddingY: 3,
                        spacing: 4,
                        children: Object(v.jsxs)(m.l, {
                            variant: "small-bold",
                            children: ["There was an issue loading: ", t]
                        })
                    }) : Object(v.jsxs)(m.g, {
                        rounded: "md",
                        w: "full",
                        paddingY: 3,
                        spacing: 4,
                        children: [i && Object(v.jsx)(m.f, {
                            w: "64px",
                            h: "64px",
                            align: "center",
                            justify: "center",
                            children: Object(v.jsx)(Ut.a, {})
                        }), l && Object(v.jsx)(m.f, {
                            w: "64px",
                            h: "64px",
                            align: "center",
                            justify: "center",
                            children: Object(v.jsx)(he, {
                                w: 9,
                                h: 9
                            })
                        }), j && !l && Object(v.jsx)(Lt.a, {
                            style: {
                                display: i ? "none" : "flex"
                            },
                            rounded: "md",
                            w: "64px",
                            h: "64px",
                            src: null === j || void 0 === j ? void 0 : j.image,
                            onError: function() {
                                c(!1), u(!0)
                            },
                            onLoad: function() {
                                c(!1)
                            }
                        }), Object(v.jsxs)(m.m, {
                            align: "start",
                            children: [Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: j ? null === j || void 0 === j ? void 0 : j.name : "Loading, please wait..."
                            }), Object(v.jsx)(m.l, {
                                fontSize: "sm",
                                children: t
                            })]
                        })]
                    })
                },
                qn = function(e) {
                    var t = e.mintAddresses,
                        n = e.creatorIds,
                        a = e.csvFiles,
                        i = e.addMintAddressesToCollection,
                        c = Object(r.useState)(1),
                        o = Object(je.a)(c, 2),
                        s = o[0],
                        l = o[1],
                        u = t.slice(0, 3 * s);
                    return Object(v.jsxs)(v.Fragment, {
                        children: [1 === t.length && Object(v.jsx)(v.Fragment, {
                            children: Object(v.jsxs)(m.l, {
                                variant: "small-bold",
                                children: [t.length, " NFT has been added"]
                            })
                        }), t.length > 1 && Object(v.jsx)(v.Fragment, {
                            children: Object(v.jsxs)(m.l, {
                                variant: "small-bold",
                                children: [t.length, " NFTs have been added"]
                            })
                        }), u.map((function(e, t) {
                            return Object(v.jsxs)(m.b, {
                                w: "full",
                                bg: "whiteAlpha.50",
                                px: 4,
                                borderRadius: "2xl",
                                borderColor: "white",
                                children: [Object(v.jsx)(Jn, {
                                    mint: e
                                }), u.length !== t && Object(v.jsx)(m.e, {})]
                            }, e)
                        })), t.length > u.length && Object(v.jsx)(y.a, {
                            h: "56px",
                            w: "full",
                            variant: "tertiary",
                            onClick: function() {
                                return l(s + 1)
                            },
                            children: "Preview More"
                        }), n.length > 0 && Object(v.jsxs)(v.Fragment, {
                            children: [Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: "First Verified Creators"
                            }), n.map((function(e) {
                                return Object(v.jsx)(m.b, {
                                    w: "full",
                                    bg: "whiteAlpha.50",
                                    px: 4,
                                    borderRadius: "2xl",
                                    borderColor: "white",
                                    children: Object(v.jsx)(Nn, {
                                        creatorId: e,
                                        addMintAddressesToCollection: i
                                    })
                                }, e)
                            }))]
                        }), a.length > 0 && Object(v.jsxs)(v.Fragment, {
                            children: [Object(v.jsx)(m.l, {
                                variant: "small-bold",
                                children: "CSV Files"
                            }), a.map((function(e) {
                                return Object(v.jsx)(m.b, {
                                    w: "full",
                                    bg: "whiteAlpha.50",
                                    px: 4,
                                    borderRadius: "2xl",
                                    borderColor: "white",
                                    children: Object(v.jsx)(Yn, {
                                        file: e,
                                        addMintAddressesToCollection: i
                                    })
                                }, e.name)
                            }))]
                        })]
                    })
                },
                Xn = function(e) {
                    var t = e.setMintList,
                        n = Object(r.useRef)(null),
                        a = Object(r.useRef)(!1),
                        i = T(),
                        c = Object(r.useState)(!1),
                        o = Object(je.a)(c, 2),
                        s = o[0],
                        l = o[1],
                        u = Object(r.useState)(""),
                        d = Object(je.a)(u, 2),
                        b = d[0],
                        j = d[1],
                        f = Object(r.useState)(!1),
                        p = Object(je.a)(f, 2),
                        h = p[0],
                        x = p[1],
                        g = Object(r.useState)([]),
                        O = Object(je.a)(g, 2),
                        w = O[0],
                        C = O[1],
                        _ = Object(r.useState)([]),
                        S = Object(je.a)(_, 2),
                        A = S[0],
                        k = S[1],
                        F = Object(r.useState)(new Set),
                        E = Object(je.a)(F, 2),
                        I = E[0],
                        R = E[1],
                        z = Object(r.useState)(0),
                        D = Object(je.a)(z, 2),
                        P = D[0],
                        M = D[1];
                    Object(r.useEffect)((function() {
                        t(Array.from(I))
                    }), [I]);
                    var B = function(e) {
                            R((function(t) {
                                return new Set([].concat(Object(et.a)(Array.from(t)), Object(et.a)(e)))
                            }))
                        },
                        U = function() {
                            var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                                return Kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return l(!0), e.prev = 1, e.next = 4, qt(t);
                                        case 4:
                                            e.next = 11;
                                            break;
                                        case 6:
                                            return e.prev = 6, e.t0 = e.catch(1), x(!0), l(!1), e.abrupt("return");
                                        case 11:
                                            B([b]), l(!1), j("");
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        L = function(e) {
                            if (l(!0), w.includes(e)) i({
                                duration: 2e3,
                                title: "Already added",
                                text: "This CM id has already been added"
                            });
                            else {
                                l(!1);
                                try {
                                    new Yt.PublicKey(e)
                                } catch (t) {
                                    return l(!1), void x(!0)
                                }
                                C([e].concat(Object(et.a)(w))), j("")
                            }
                        },
                        N = function() {
                            var e = Object(Vt.a)(Kt.a.mark((function e() {
                                return Kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (x(!1), a.current = !0, 1 !== P) {
                                                e.next = 6;
                                                break
                                            }
                                            L(b), e.next = 8;
                                            break;
                                        case 6:
                                            return e.next = 8, U(b);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        W = function() {
                            return s ? Object(v.jsx)(Ut.a, {}) : 2 === P ? "Choose file" : "Add"
                        };
                    return Object(v.jsxs)(m.m, {
                        layerStyle: "base",
                        p: 8,
                        spacing: 4,
                        align: "start",
                        children: [Object(v.jsx)(xn.c, {
                            onChange: function(e) {
                                M(e), j("")
                            },
                            defaultIndex: 0,
                            children: Object(v.jsxs)(xn.b, {
                                children: [Object(v.jsx)(xn.a, {
                                    children: "Individual NFTs"
                                }), Object(v.jsx)(xn.a, {
                                    children: "First Verified Creator"
                                }), Object(v.jsx)(xn.a, {
                                    children: "CSV File"
                                })]
                            })
                        }), Object(v.jsxs)(m.g, {
                            w: "full",
                            spacing: 4,
                            children: [2 !== P && Object(v.jsxs)(v.Fragment, {
                                children: [Object(v.jsx)(gn.a, {
                                    ref: n,
                                    onClick: function() {
                                        return n.current
                                    },
                                    value: b,
                                    onChange: function(e) {
                                        return t = e.target.value, a.current = !1, void j(t);
                                        var t
                                    },
                                    bg: "whiteAlpha.50",
                                    color: "whiteAlpha.700",
                                    placeholder: function() {
                                        switch (P) {
                                            case 0:
                                                return "Enter a NFT address";
                                            case 1:
                                                return "Enter a First Verified Creator address";
                                            case 2:
                                                return "Import CSV File"
                                        }
                                    }(),
                                    isInvalid: h && "" !== b
                                }), Object(v.jsx)(y.a, {
                                    h: "56px",
                                    minW: "150px",
                                    variant: "tertiary",
                                    onClick: N,
                                    opacity: s ? .5 : 1,
                                    disabled: s || "" === b,
                                    children: W()
                                })]
                            }), 2 === P && Object(v.jsx)(m.c, {
                                height: "full",
                                w: "full",
                                borderRadius: "2xl",
                                children: Object(v.jsx)(m.f, {
                                    direction: "column",
                                    align: "center",
                                    children: Object(v.jsx)(mn, {
                                        h: "56px",
                                        accept: hn[Bt.CSV],
                                        onUpload: function(e) {
                                            l(!0), k([].concat(Object(et.a)(Array.from(A)), Object(et.a)(Array.from(e)))), l(!1)
                                        },
                                        children: W()
                                    })
                                })
                            })]
                        }), Object(v.jsx)(m.e, {}), Object(v.jsx)(qn, {
                            mintAddresses: Array.from(I),
                            creatorIds: w,
                            csvFiles: A,
                            addMintAddressesToCollection: B
                        })]
                    })
                },
                Qn = function(e) {
                    var t = e.onSubmit,
                        n = e.collectionId,
                        a = e.title,
                        i = e.buttonText,
                        c = e.defaultValues,
                        s = e.children,
                        l = e.disabled,
                        u = Object(h.b)(I.b),
                        d = st().convert,
                        b = Object(fn.c)({
                            mode: "onChange",
                            defaultValues: c
                        }),
                        j = Object(r.useState)(0),
                        f = Object(je.a)(j, 2),
                        p = f[0],
                        x = f[1];
                    Object(r.useEffect)((function() {
                        if (c)
                            for (var e = 0, t = Object.entries(c); e < t.length; e++) {
                                var n = Object(je.a)(t[e], 2),
                                    r = n[0],
                                    a = n[1];
                                b.setValue(r, a)
                            }
                    }), [c]);
                    var O = n ? 1e-4 : .01,
                        w = d(O),
                        C = function(e) {
                            b.setValue("mintList", e), x(e.length)
                        };
                    return Object(v.jsxs)(v.Fragment, {
                        children: [Object(v.jsx)(zn, {
                            title: a,
                            subtitle: s
                        }), Object(v.jsx)(fn.b, Object(o.a)(Object(o.a)({}, b), {}, {
                            children: Object(v.jsx)("form", {
                                onSubmit: b.handleSubmit(t),
                                children: Object(v.jsxs)(m.k, {
                                    spacing: 8,
                                    children: [n && Object(v.jsx)(Rn, {
                                        id: "collectionId",
                                        title: "Collection NFT Address",
                                        options: {
                                            required: void 0 != n,
                                            value: n
                                        }
                                    }), !n && Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)(Rn, {
                                            id: "name",
                                            title: "Name",
                                            placeholder: "Enter a collection name",
                                            options: {
                                                required: !n,
                                                disabled: l
                                            }
                                        }), Object(v.jsx)(Rn, {
                                            id: "symbol",
                                            title: "Symbol",
                                            placeholder: "Enter a collection symbol"
                                        }), Object(v.jsx)(Rn, {
                                            id: "logoImg",
                                            title: "Logo",
                                            description: "We recommend choosing a PNG, JPG, SVG or a GIF that is at least 600x600 (1:1) pixels and under 100kb in file size.",
                                            options: {
                                                disabled: l
                                            },
                                            controlledInputFactory: function(e) {
                                                var t = e.field,
                                                    n = e.fieldState;
                                                return Object(v.jsx)(Fn, {
                                                    value: t.value ? t.value : void 0,
                                                    isInvalid: n.invalid,
                                                    onFileChange: t.onChange,
                                                    disabled: l,
                                                    variant: "logo-preview"
                                                })
                                            }
                                        }), Object(v.jsx)(Rn, {
                                            id: "description",
                                            title: "Description",
                                            placeholder: "Share a little bit about your collection.",
                                            options: {
                                                disabled: l
                                            },
                                            customInputFactory: function(e) {
                                                return Object(v.jsx)(jn.a, Object(o.a)({}, e))
                                            }
                                        })]
                                    }), Object(v.jsx)(Rn, {
                                        id: "mintList",
                                        title: "Add Collection Items (Required)",
                                        description: "To migrate to your new Collection, add individual NFTs, or use the Verified Creator ID and/or CSV file to import them automatically. You can ONLY import NFTs you have Update Authority on.",
                                        controlledInputFactory: function() {
                                            return Object(v.jsx)(Xn, {
                                                setMintList: C
                                            })
                                        }
                                    }), Object(v.jsx)(m.e, {}), Object(v.jsx)(Pn, {
                                        sol: O,
                                        usd: null !== w && void 0 !== w ? w : 0,
                                        children: null != u ? Object(v.jsx)(y.a, {
                                            isDisabled: l || !b.formState.isValid || 0 === p,
                                            type: "submit",
                                            size: "lg",
                                            variant: "primary",
                                            children: i
                                        }) : Object(v.jsx)(g.a, {
                                            children: Object(v.jsx)(g.b, {
                                                style: {
                                                    minHeight: 48,
                                                    height: "100%"
                                                }
                                            })
                                        })
                                    })]
                                })
                            })
                        }))]
                    })
                },
                Zn = n.p + "static/media/Success.6305898d.svg",
                er = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        r = e.noteIcon,
                        a = e.noteText,
                        i = _e().mdUp;
                    return Object(v.jsxs)(m.f, {
                        direction: "column",
                        flexGrow: 1,
                        children: [Object(v.jsxs)(m.c, {
                            w: "full",
                            h: "250px",
                            flexDirection: "column",
                            flexGrow: 1,
                            px: i ? 16 : 0,
                            my: i ? 16 : 6,
                            children: [Object(v.jsx)(m.f, {
                                marginBottom: 5,
                                children: Object(v.jsx)(Lt.b, {
                                    src: Zn
                                })
                            }), Object(v.jsx)(m.h, {
                                variant: "h4",
                                mb: 1,
                                textAlign: "center",
                                children: t
                            }), Object(v.jsx)(m.l, {
                                align: "center",
                                color: "whiteAlpha.700",
                                children: n
                            })]
                        }), Object(v.jsx)(mt, {
                            icon: r,
                            text: a
                        })]
                    })
                },
                tr = n.p + "static/media/Error.517dfb9f.svg",
                nr = n(134),
                rr = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        r = e.status,
                        a = e.updateProgress,
                        i = e.collectionId,
                        c = function() {
                            var e = Object(Vt.a)(Kt.a.mark((function e(t) {
                                var n;
                                return Kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = new nr.a(null, a), e.next = 3, an(t, n);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(v.jsx)(m.f, {
                        direction: "column",
                        flexGrow: 1,
                        children: Object(v.jsxs)(m.c, {
                            w: "full",
                            h: "250px",
                            flexDirection: "column",
                            flexGrow: 1,
                            px: 16,
                            my: 16,
                            children: [Object(v.jsx)(m.f, {
                                marginBottom: 5,
                                children: Object(v.jsx)(Lt.b, {
                                    src: tr
                                })
                            }), Object(v.jsx)(m.h, {
                                variant: "h4",
                                mb: 1,
                                textAlign: "center",
                                children: t
                            }), Object(v.jsx)(m.l, {
                                textAlign: "center",
                                color: "whiteAlpha.700",
                                children: n
                            }), r === tn.b.ErrorRetry && void 0 !== i && Object(v.jsx)(y.a, {
                                onClick: function() {
                                    c(i)
                                },
                                type: "submit",
                                mt: 4,
                                size: "md",
                                variant: "primary",
                                children: "Retry"
                            })]
                        })
                    })
                },
                ar = function(e) {
                    var t = e.isOpen,
                        n = e.status,
                        a = e.title,
                        i = e.noteIcon,
                        c = e.noteText,
                        o = e.subtitle,
                        s = e.updateProgress,
                        l = e.collectionId,
                        u = Object(be.f)(),
                        d = Object(r.useCallback)((function() {
                            u(Tt.home())
                        }), []);
                    return Object(v.jsxs)(ut.f, {
                        isOpen: t,
                        onClose: d,
                        size: "lg",
                        isCentered: !0,
                        closeOnEsc: !1,
                        closeOnOverlayClick: !1,
                        children: [Object(v.jsx)(ut.j, {}), Object(v.jsxs)(ut.i, {
                            children: [n !== tn.b.Default && Object(v.jsx)(ut.h, {}), Object(v.jsx)(ut.g, {
                                py: 6,
                                display: "flex",
                                flexDirection: "column",
                                children: function() {
                                    switch (n) {
                                        case tn.b.Success:
                                            return Object(v.jsx)(er, {
                                                title: a,
                                                noteIcon: i,
                                                noteText: c,
                                                subtitle: o
                                            });
                                        case tn.b.Error:
                                        case tn.b.ErrorRetry:
                                            return Object(v.jsx)(rr, {
                                                title: a,
                                                noteIcon: i,
                                                noteText: c,
                                                subtitle: o,
                                                status: n,
                                                updateProgress: s,
                                                collectionId: l
                                            });
                                        default:
                                            return Object(v.jsx)(yt, {
                                                title: a,
                                                noteIcon: i,
                                                noteText: c,
                                                subtitle: o
                                            })
                                    }
                                }()
                            })]
                        })]
                    })
                },
                ir = function() {
                    var e = Object(tn.c)(),
                        t = e.onSubmit,
                        n = e.closeModal,
                        r = e.updateProgress,
                        a = e.progressMeta;
                    return Object(v.jsxs)(pt, {
                        variant: "narrow",
                        gutterBottom: !0,
                        children: [Object(v.jsxs)(Qn, {
                            onSubmit: t,
                            title: "Create a new collection",
                            buttonText: "Create Collection",
                            children: ["Before getting started check out our", " ", Object(v.jsx)(m.i, {
                                href: "https://docs.metaplex.com/token-metadata/specification#collections",
                                children: "Collections Standard Overview."
                            })]
                        }), Object(v.jsx)(ar, {
                            isOpen: a.isOpen,
                            title: a.title,
                            subtitle: a.subtitle,
                            status: a.status,
                            onClose: n,
                            updateProgress: r,
                            collectionId: a.collectionId
                        })]
                    })
                },
                cr = n.p + "static/media/collections_bg_static.3f2b1166.png",
                or = function() {
                    var e = _e().mdUp;
                    return Object(v.jsx)(m.c, {
                        children: Object(v.jsxs)(m.f, {
                            direction: "column",
                            align: "center",
                            justify: "center",
                            children: [Object(v.jsx)(g.a, {
                                children: Object(v.jsx)(g.b, {
                                    style: {
                                        height: 48,
                                        marginTop: e ? 250 : 150,
                                        marginBottom: e ? -80 : void 0
                                    },
                                    children: "Connect Wallet"
                                })
                            }), Object(v.jsx)(Lt.a, {
                                maxW: e ? 1e3 : 600,
                                maxH: 550,
                                marginBottom: e ? -115 : -65,
                                src: cr
                            }), Object(v.jsx)(m.h, {
                                textAlign: "center",
                                variant: "h3",
                                w: e ? 600 : void 0,
                                my: 4,
                                children: "Create a Collection"
                            }), Object(v.jsx)(m.l, {
                                align: "center",
                                w: e ? 536 : 300,
                                mb: 10,
                                children: "Connect your wallet and use this tool to convert your NFTs into a verifiable collection using the Metaplex Standard."
                            })]
                        })
                    })
                },
                sr = function(e) {
                    var t = e.collectionId,
                        n = Object(tn.c)(),
                        r = n.onSubmit,
                        a = n.closeModal,
                        i = n.updateProgress,
                        c = n.progressMeta;
                    return Object(v.jsxs)(pt, {
                        variant: "narrow",
                        gutterBottom: !0,
                        children: [Object(v.jsxs)(Qn, {
                            onSubmit: r,
                            title: "Add to an existing collection",
                            buttonText: "Expand Collection",
                            collectionId: t,
                            children: ["Before getting started check out our", " ", Object(v.jsx)(m.i, {
                                href: "https://docs.metaplex.com/token-metadata/specification#collections",
                                children: "Collections Standard Overview."
                            })]
                        }), Object(v.jsx)(ar, {
                            isOpen: c.isOpen,
                            title: c.title,
                            subtitle: c.subtitle,
                            status: c.status,
                            onClose: a,
                            updateProgress: i,
                            collectionId: c.collectionId
                        })]
                    })
                };
            var lr = [{
                    path: Tt.home,
                    view: function() {
                        return Object(v.jsx)(bn, {})
                    },
                    guard: I.a,
                    guardView: or
                }, {
                    path: Tt.createNewCollection,
                    view: function() {
                        return Object(v.jsx)(ir, {})
                    },
                    guard: I.a,
                    guardView: or
                }, {
                    path: Tt.expandCollection,
                    view: function() {
                        var e = function(e, t, n) {
                            if (n && !(e in t)) throw new Error("Must use :".concat(e, " in route"));
                            return t[e]
                        }("collectionId", Object(be.g)());
                        return Object(v.jsx)(sr, {
                            collectionId: e
                        })
                    },
                    guard: I.a,
                    guardView: or
                }],
                ur = function() {
                    return Object(v.jsx)(be.c, {
                        children: lr.map((function(e, t) {
                            return Pt(e, "".concat(t), !0)
                        }))
                    })
                },
                dr = n(286),
                br = n(200),
                jr = n.n(br),
                fr = n(498),
                pr = n(287),
                hr = jr()("error:App"),
                xr = function() {
                    fr.a({
                        dsn: "https://7c29f4a5219b4d4ea029acf8cfc16522@o1150734.ingest.sentry.io/6224162",
                        integrations: [new pr.a],
                        tracesSampleRate: 1
                    });
                    var e = T();
                    try {
                        return Object(v.jsx)(c.a, {
                            theme: de,
                            children: Object(v.jsx)(D, {
                                autoConnect: !0,
                                children: Object(v.jsx)(dr.ErrorBoundary, {
                                    onError: function(t) {
                                        e({
                                            duration: 2e3,
                                            title: t.name,
                                            text: t.message
                                        })
                                    },
                                    fallback: Object(v.jsx)(bn, {}),
                                    children: Object(v.jsx)(ur, {})
                                })
                            })
                        })
                    } catch (t) {
                        return hr.log(t), Object(v.jsx)(v.Fragment, {
                            children: "error"
                        })
                    }
                },
                gr = function(e) {
                    e && e instanceof Function && n.e(5).then(n.bind(null, 557)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            a = t.getFCP,
                            i = t.getLCP,
                            c = t.getTTFB;
                        n(e), r(e), a(e), i(e), c(e)
                    }))
                };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(Object(v.jsx)(r.StrictMode, {
                children: Object(v.jsx)(fe.a, {
                    basename: "".concat("", "/"),
                    children: Object(v.jsx)(xr, {})
                })
            }), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            })), gr()
        },
        51: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "e", (function() {
                return x
            }));
            var r = n(27),
                a = Object(r.e)(),
                i = Object(r.l)(a, null).map((function(e) {
                    return function(e) {
                        return Boolean((null === e || void 0 === e ? void 0 : e.connected) && (null === e || void 0 === e ? void 0 : e.publicKey))
                    }(e) ? e : null
                })),
                c = i.map((function(e) {
                    return !!e
                })),
                o = i.map((function(e) {
                    return (null === e || void 0 === e ? void 0 : e.publicKey.toString()) || null
                })),
                s = o.map((function(e) {
                    return e ? {
                        address: e
                    } : null
                }));
            var l = n(10),
                u = n(2),
                d = n.n(u),
                b = n(16),
                j = n(54),
                f = n(119),
                p = n(7);
            var h = Object(r.a)({
                    effect: Object(r.d)(function() {
                        var e = Object(l.a)(d.a.mark((function e(t) {
                            var n, r, a, i;
                            return d.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.wallet, r = t.connection, n) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("empty wallet");
                                    case 3:
                                        return e.next = 5, b.Account.load(r, n.publicKey);
                                    case 5:
                                        return a = e.sent, c = a.info.lamports, i = c / p.LAMPORTS_PER_SOL, e.abrupt("return", i);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                                var c
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    source: {
                        wallet: i,
                        connection: j.a
                    }
                }),
                x = Object(f.b)(h);
            Object(r.i)({
                from: [a, j.a],
                to: h
            })
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return j
            }));
            var r = n(7),
                a = n(55),
                i = n(205),
                c = n(27),
                o = "networkkey",
                s = ["devnet", "testnet", "mainnet-beta"];

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object(i.a)(),
                    n = null === t || void 0 === t ? void 0 : t.getItem(o);
                return n && s.includes(n) ? n : null !== e && void 0 !== e ? e : "mainnet-beta"
            }
            var u = Object(c.e)(),
                d = Object(c.l)(u, l()),
                b = Object(c.d)((function(e) {
                    var t = e.storage,
                        n = void 0 === t ? Object(i.a)() : t,
                        r = e.network;
                    null === n || void 0 === n || n.setItem(o, r)
                }));
            Object(c.m)({
                clock: d,
                fn: function(e) {
                    return {
                        network: e
                    }
                },
                target: b
            });
            var j = Object(c.c)(d, (function(e) {
                var t = "mainnet-beta" === e ? "https://api.metaplex.solana.com/" : Object(r.clusterApiUrl)(e);
                return new a.c(t)
            }))
        }
    },
    [
        [487, 1, 2]
    ]
]);
//# sourceMappingURL=main.202e6525.chunk.js.map