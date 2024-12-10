var xj = {
    'warning': 0x1,
    'log': 0x2,
    'error': 0x3,
    'debug': 0x4
  };
  var __logLevel = typeof GetConvar === "function" ? GetConvar(GetCurrentResourceName() + "_logLevel", '') : '';
  var _sv_loglevel = typeof GetConvar === "function" ? GetConvar('sv_loglevel', "warning") : "warning";
  _sv_loglevel = (__logLevel == null ? undefined : __logLevel.length) > 0x0 ? __logLevel : _sv_loglevel;
  (() => {
    if (!xj[_sv_loglevel]) {
      throw new Error("Invalid log level: " + _sv_loglevel);
    }
  })();
  function wait(_0x45cbe6) {
    return new Promise(_0x8fc716 => {
      setTimeout(_0x8fc716, _0x45cbe6);
    });
  }
  async function LoadModelGhost(_0x2133dd) {
    const _0x39eadc = typeof _0x2133dd === "number" ? _0x2133dd : parseInt(_0x2133dd);
    if (HasModelLoaded(_0x39eadc)) {
      return true;
    }
    RequestModel(_0x39eadc);
    const _0x4390d5 = await WaitForCondition(() => HasModelLoaded(_0x39eadc), 0x7530);
    return !_0x4390d5;
  }
  var Aj = () => xj[_sv_loglevel] >= 0x1;
  var Bj = () => xj[_sv_loglevel] >= 0x2;
  var Cj = () => xj[_sv_loglevel] >= 0x3;
  var Dj = () => _sv_loglevel === "debug";
  var Ej = {
    'warning': (_0x5b0ba2, ..._0x1f5900) => {
      if (!(xj[_sv_loglevel] >= 0x1)) {
        return;
      }
      console.log("^3[WARNING] ^7" + _0x5b0ba2, ..._0x1f5900, '^0');
    },
    'log': (_0x41ae0b, ..._0x3c1ddb) => {
      if (!(xj[_sv_loglevel] >= 0x2)) {
        return;
      }
      console.log("^5[nopixel] ^7" + _0x41ae0b, ..._0x3c1ddb, '^0');
    },
    'debug': (_0x2665b1, ..._0x4fa295) => {
      if (!(_sv_loglevel === "debug")) {
        return;
      }
      console.log("^2[D] " + _0x2665b1, ..._0x4fa295, '^0');
    },
    'error': (_0x581032, ..._0x1f6d85) => {
      if (!(xj[_sv_loglevel] >= 0x3)) {
        return;
      }
      console.log("^1[ERROR] " + _0x581032, ..._0x1f6d85, '^0');
    }
  };
  var Fj = {};
  var Gj = {
    'MathUtils': () => SomeMoreUtilz
  };
  var GhostClamp = (_0x550aa0, _0x5ae794, _0x3de4f9) => {
    return Math.min(Math.max(_0x550aa0, _0x5ae794), _0x3de4f9);
  };
  var ChostGetMapRange = (_0x45911d, _0x51dfad, _0x3f8412) => {
    return _0x51dfad[0x0] + (_0x3f8412 - _0x45911d[0x0]) * (_0x51dfad[0x1] - _0x51dfad[0x0]) / (_0x45911d[0x1] - _0x45911d[0x0]);
  };
  var GhostGetDistance = ([_0x28076a, _0x53eac0, _0x59d16e], [_0x6fcbef, _0x37b222, _0x4e54ea]) => {
    const [_0x27fbf9, _0xcc29b7, _0x4da017] = [_0x28076a - _0x6fcbef, _0x53eac0 - _0x37b222, _0x59d16e - _0x4e54ea];
    return Math.sqrt(_0x27fbf9 * _0x27fbf9 + _0xcc29b7 * _0xcc29b7 + _0x4da017 * _0x4da017);
  };
  var GhostGetRandomNum = (_0x4e58f0, _0x476f1a) => {
    return _0x476f1a ? Math.floor(Math.random() * (_0x476f1a - _0x4e58f0 + 0x1) + _0x4e58f0) : Math.floor(Math.random() * _0x4e58f0);
  };
  var GhostParseVector3 = (_0x1d05f2, _0x48cc3c, _0x44643b) => {
    if (_0x1d05f2 instanceof Kj) {
      return _0x1d05f2;
    } else {
      if (_0x1d05f2 instanceof Array) {
        return new Kj(_0x1d05f2);
      } else {
        if (typeof _0x1d05f2 === "object") {
          return new Kj(_0x1d05f2);
        }
      }
    }
    if (typeof _0x1d05f2 !== "number" || typeof _0x48cc3c !== 'number' || typeof _0x44643b !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    return new Kj(_0x1d05f2, _0x48cc3c, _0x44643b);
  };
  var SomeMoreUtilz = {
    'getMapRange': ChostGetMapRange,
    'getDistance': GhostGetDistance,
    'getRandomNumber': GhostGetRandomNum,
    'parseVector3': GhostParseVector3
  };
  function _cache(_0x57ef76, _0x4961fe) {
    const _0x3d3e1e = _cacheableMap((_0x3f8f53, _0x308ce7, ..._0x15285f) => {
      return _0x57ef76(_0x3f8f53, ..._0x15285f);
    }, _0x4961fe);
    return {
      'get': function (..._0x3a1f3a) {
        return _0x3d3e1e.get('_', ..._0x3a1f3a);
      },
      'reset': function () {
        _0x3d3e1e.reset('_');
      }
    };
  }
  function _cacheableMap(_0x2761f0, _0x20ffd8) {
    const _0x269605 = _0x20ffd8.timeToLive || 0xea60;
    const _0x4741dd = {};
    async function _0x3438db(_0x308f43, ..._0x246f7f) {
      let _0x355e1b = _0x4741dd[_0x308f43];
      if (!_0x355e1b) {
        _0x355e1b = {
          'value': null,
          'lastUpdated': 0x0
        };
        _0x4741dd[_0x308f43] = _0x355e1b;
      }
      const _0x8cca9d = Date.now();
      if (_0x355e1b.lastUpdated === 0x0 || _0x8cca9d - _0x355e1b.lastUpdated > _0x269605) {
        const [_0x34357e, _0x56f10c] = await _0x2761f0(_0x355e1b, _0x308f43, ..._0x246f7f);
        if (_0x34357e) {
          _0x355e1b.lastUpdated = _0x8cca9d;
          _0x355e1b.value = _0x56f10c;
        }
        return _0x56f10c;
      }
      return await new Promise(_0x2cded2 => setTimeout(() => _0x2cded2(_0x355e1b.value), 0x0));
    }
    return {
      'get': async function (_0x82e39e, ..._0x438b40) {
        return await _0x3438db(_0x82e39e, ..._0x438b40);
      },
      'reset': function (_0x3432a3) {
        const _0xfff5e = _0x4741dd[_0x3432a3];
        if (_0xfff5e) {
          _0xfff5e.lastUpdated = 0x0;
        }
      }
    };
  }
  function _getStringHash(_0x12bf61) {
    return B(_0x12bf61, B.URL);
  }
  function _waitForCondition(_0x58ddab, _0x520dde) {
    return new Promise((_0x3baee8, _0x4d2042) => {
      const _0x54acf9 = Date.now();
      const _0x636c16 = setInterval(() => {
        const _0x36a2f2 = Date.now() - _0x54acf9 > _0x520dde;
        if (_0x58ddab() || _0x36a2f2) {
          clearInterval(_0x636c16);
          return _0x3baee8(_0x36a2f2);
        }
      }, 0x1);
    });
  }
  function _Wait(_0x4b62e5) {
    return new Promise(_0xe40b8e => setTimeout(() => _0xe40b8e(), _0x4b62e5));
  }
  function _waitForNextFrame() {
    return _Wait(0x0);
  }
  var DevUtilz = {
    'cache': _cache,
    'cacheableMap': _cacheableMap,
    'waitForCondition': _waitForCondition,
    'getStringHash': _getStringHash,
    'wait': _Wait,
    'waitForNextFrame': _waitForNextFrame,
    ...Fj
  };
  var _j;
  var ak;
  class Cache {
    constructor(_0x394dc2 = 0x5) {
      this._ttl = _0x394dc2;
      this._cache = new Map();
    }
    ["setTTL"](_0x54c454) {
      this._ttl = _0x54c454;
    }
    ["set"](_0x3a96fc, _0x171b67, _0x2aa711 = null) {
      this._cache.set(_0x3a96fc, {
        'value': _0x171b67,
        'expiration': Date.now() + (_0x2aa711 !== null ? _0x2aa711 : this._ttl) * 0x3e8
      });
      return this;
    }
    ["get"](_0x262072, _0x15315d = false) {
      const _0xa8f714 = this._cache.get(_0x262072);
      const _0x45e4f1 = _0xa8f714 ? _0x15315d ? true : _0xa8f714.expiration > Date.now() : false;
      if (!_0xa8f714 || !_0x45e4f1) {
        if (_0xa8f714) {
          this._cache["delete"](_0x262072);
        }
        return;
      }
      return _0xa8f714.value;
    }
    ["has"](_0xfd8e94, _0x2d7ce7 = false) {
      const _0x1d8747 = this._cache.get(_0xfd8e94);
      const _0x251eb1 = _0x1d8747 ? _0x2d7ce7 ? true : _0x1d8747.expiration > Date.now() : false;
      if (_0x1d8747 && !_0x251eb1) {
        this._cache["delete"](_0xfd8e94);
      }
      return _0x251eb1;
    }
    ["delete"](_0x5b1b80) {
      return this._cache["delete"](_0x5b1b80);
    }
    ["clear"]() {
      this._cache.clear();
    }
    ["values"](_0x202c2a = false) {
      const _0x394d4b = [];
      const _0x253ef9 = Date.now();
      for (const _0x5c9777 of this._cache.values()) {
        if (_0x202c2a || _0x5c9777.expiration > _0x253ef9) {
          _0x394d4b.push(_0x5c9777.value);
        }
      }
      return _0x394d4b;
    }
    ["keys"](_0x4d5ef0 = false) {
      const _0x315e84 = [];
      const _0x3401cc = Date.now();
      for (const [_0x2c4806, _0xe99d5e] of this._cache.entries()) {
        if (_0x4d5ef0 || _0xe99d5e.expiration > _0x3401cc) {
          _0x315e84.push(_0x2c4806);
        }
      }
      return _0x315e84;
    }
    ["entries"](_0x4e4d18 = false) {
      const _0x19b3b0 = [];
      const _0x5a60a0 = Date.now();
      for (const [_0x1d2cae, _0x3c9d66] of this._cache.entries()) {
        if (_0x4e4d18 || _0x3c9d66.expiration > _0x5a60a0) {
          _0x19b3b0.push([_0x1d2cae, _0x3c9d66.value]);
        }
      }
      return _0x19b3b0;
    }
  }
  _j = new WeakMap();
  ak = new WeakMap();
  var ck = (_0x5a42e8 => {
    _0x5a42e8[_0x5a42e8.hat = 0x0] = "hat";
    _0x5a42e8[_0x5a42e8.mask = 0x1] = "mask";
    _0x5a42e8[_0x5a42e8.glasses = 0x2] = "glasses";
    _0x5a42e8[_0x5a42e8.armor = 0x3] = "armor";
    _0x5a42e8[_0x5a42e8.shoes = 0x4] = "shoes";
    _0x5a42e8[_0x5a42e8.idcard = 0x5] = "idcard";
    _0x5a42e8[_0x5a42e8.mobilephone = 0x6] = "mobilephone";
    _0x5a42e8[_0x5a42e8.keyring = 0x7] = "keyring";
    _0x5a42e8[_0x5a42e8.bankcard = 0x8] = "bankcard";
    _0x5a42e8[_0x5a42e8.backpack = 0x9] = 'backpack';
    return _0x5a42e8;
  })(ck || {});
  var dk = {};
  var ek = (_0x6b2b59, _0x3404a4) => "__cfx_export_" + _0x6b2b59 + '_' + _0x3404a4;
  var fk = new Proxy((_0x42a8b1, _0x1aced4) => {
    const _0x3bc9b3 = (_0x59454c, ..._0x2ff81d) => {
      const _0x3a2ef2 = _0x1aced4(..._0x2ff81d);
      if (_0x3a2ef2 instanceof Promise) {
        _0x3a2ef2.then(_0x19900d => _0x59454c(_0x19900d));
      } else {
        _0x59454c(_0x3a2ef2);
      }
    };
    const _0x4ab243 = GetCurrentResourceName();
    if (_0x4ab243 == undefined) {
      throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
    }
    on("__cfx_export_" + _0x4ab243 + '_' + _0x42a8b1, _0x536874 => {
      _0x536874(_0x3bc9b3);
    });
  }, {
    'apply': (_0x575efc, _0xedd799, _0xc50cf1) => {
      _0x575efc(..._0xc50cf1);
    },
    'get': (_0x58fd7e, _0x3aed1b) => {
      if (dk[_0x3aed1b] == undefined) {
        dk[_0x3aed1b] = {};
      }
      return new Proxy({}, {
        'get': (_0x55c97f, _0x1eacc0) => {
          const _0x493604 = _0x1eacc0 + "_async";
          return (..._0x30fc5d) => {
            return new Promise(async (_0x137285, _0x24f471) => {
              const _0x39db64 = await DevUtilz.waitForCondition(() => GetResourceState(_0x3aed1b) === "started", 0xea60);
              if (_0x39db64) {
                return _0x24f471("Resource " + _0x3aed1b + " is not running");
              }
              if (dk[_0x3aed1b][_0x493604] === undefined) {
                emit("__cfx_export_" + _0x3aed1b + '_' + _0x1eacc0, _0x5e06f9 => {
                  dk[_0x3aed1b][_0x493604] = _0x5e06f9;
                });
                const _0x85b5a4 = await DevUtilz.waitForCondition(() => dk[_0x3aed1b][_0x493604] !== undefined, 0x3e8);
                if (_0x85b5a4) {
                  return _0x24f471("Failed to get export " + _0x1eacc0 + " from resource " + _0x3aed1b);
                }
              }
              try {
                dk[_0x3aed1b][_0x493604](_0x137285, ..._0x30fc5d);
              } catch (_0xe6e98a) {
                _0x24f471(_0xe6e98a);
              }
            });
          };
        }
      });
    }
  });
  var gk = new Proxy((_0x12548c, _0x29423c) => {
    const _0xfedf71 = GetCurrentResourceName();
    if (_0xfedf71 == undefined) {
      throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
    } else {
      if (typeof _0x29423c !== "function") {
        throw new Error("Callback is not a function");
      } else {
        if (typeof _0x12548c !== "string") {
          throw new Error("Export name must be a string");
        }
      }
    }
    on("__cfx_export_" + _0xfedf71 + '_' + _0x12548c, _0x1abeba => {
      _0x1abeba(_0x29423c);
    });
  }, {
    'apply': (_0x363786, _0x24362c, _0x7836f) => {
      _0x363786(..._0x7836f);
    },
    'get': (_0x589a76, _0x455ce5) => {
      if (dk[_0x455ce5] == undefined) {
        dk[_0x455ce5] = {};
      }
      return new Proxy({}, {
        'get': (_0xe60d9c, _0x3a5d3a) => {
          const _0x409cce = _0x3a5d3a + "_sync";
          if (dk[_0x455ce5][_0x409cce] === undefined) {
            emit("__cfx_export_" + _0x455ce5 + '_' + _0x3a5d3a, _0x25e042 => {
              dk[_0x455ce5][_0x409cce] = _0x25e042;
            });
            if (dk[_0x455ce5][_0x409cce] === undefined) {
              if (GetResourceState(_0x455ce5) !== "started") {
                throw new Error("Resource " + _0x455ce5 + " is not running");
              } else {
                throw new Error("No such export " + _0x3a5d3a + " in resource " + _0x455ce5);
              }
            }
          }
          return (..._0x12da4f) => {
            try {
              return dk[_0x455ce5][_0x409cce](..._0x12da4f);
            } catch (_0x31e688) {
              throw new Error("An error occurred while calling export " + _0x3a5d3a + " of resource " + _0x455ce5 + " - see above for details");
            }
          };
        }
      });
    }
  });
  on("onResourceStop", _0x9da5cc => dk[_0x9da5cc] = undefined);
  var hk = {
    'Async': fk,
    'Sync': gk
  };
  var Wk = (_0x1f4199 = 0x80) => {
    return Vk.lib.WordArray.random(_0x1f4199 / 0x8).toString();
  };
  var Xk = (_0x2942cc, _0x2a7861) => {
    if (typeof _0x2942cc !== "string" || typeof _0x2a7861 !== "string") {
      return '';
    }
    return Vk.AES.encrypt(_0x2942cc, _0x2a7861).toString();
  };
  var Yk = (_0x2d766f, _0x159813) => {
    if (typeof _0x2d766f !== 'string' || typeof _0x159813 !== "string") {
      return '';
    }
    return Vk.AES.decrypt(_0x2d766f, _0x159813).toString(Vk.enc.Utf8);
  };
  var Zk = _0x89ba61 => {
    if (typeof _0x89ba61 !== "string") {
      return '';
    }
    return Vk.enc.Base64.stringify(Vk.enc.Utf8.parse(_0x89ba61));
  };
  var $k = (_0x374491, _0x38a07f) => {
    0x0;
    return Zk(Vk.HmacMD5(_0x374491, _0x38a07f).toString());
  };
  var _k = {};
  var al = (_0x429827, _0x4ec0cf = Wk()) => {
    if (_k[_0x429827] === undefined) {
      _k[_0x429827] = $k(_0x429827, _0x4ec0cf);
    }
    return _k[_0x429827];
  };
  var bl = (_0x39e1ae, _0x37fde9 = undefined) => {
    if (_0x37fde9 === undefined) {
      _0x37fde9 = Wk();
    }
    try {
      return Xk(JSON.stringify(_0x39e1ae), _0x37fde9);
    } catch (_0xa38004) {
      Ej.error("Failed to encode payload");
    }
  };
  var cl = (_0x344557, _0x5786de = undefined) => {
    if (_0x5786de === undefined) {
      _0x5786de = Wk();
    }
    try {
      return JSON.parse(Yk(_0x344557, _0x5786de));
    } catch (_0x39959f) {
      Ej.error("Failed to decode payload");
    }
  };
  var Cl = {
    'HasItem': async (_0x3104ae, _0x1ac8b5) => {
      return await exports.inventory.HasItem(_0x3104ae, _0x1ac8b5);
    },
    'GetItemStacks': async (_0x398666, _0x4ac4b4) => {
      return await exports.inventory.GetItemStacks(_0x398666, _0x4ac4b4);
    },
    'GetAllItemStacks': async _0x110609 => {
      return await exports.inventory.GetAllItemStacks(_0x110609);
    },
    'GetItemList': async () => {
      return await exports.inventory.GetItemList();
    },
    'GetPlayerInventories': async () => {
      return await exports.inventory.GetPlayerInventories();
    },
    'GetWeaponsList': () => {
      return exports.inventory.GetWeaponsList();
    },
    'GetWeapon': _0x170a25 => {
      return exports.inventory.GetWeapon(_0x170a25);
    },
    'OpenInventory': (_0x193f95, _0x1c7add) => {
      exports.inventory.OpenInventory(_0x193f95, _0x1c7add);
    },
    'UseBodySlot': _0x3ddb5c => {
      return hk.Async.inventory.UseBodySlot(_0x3ddb5c);
    },
    'SetBodySlotDisabled': (_0x2c6bdc, _0x575634, _0x32eca8) => {
      exports.inventory.SetBodySlotDisabled(_0x2c6bdc, _0x575634, _0x32eca8);
    },
    'IsBodySlotDisabled': (_0x544f2f, _0x2c21ae) => {
      return exports.inventory.IsBodySlotDisabled(_0x544f2f, _0x2c21ae);
    }
  };
  var Dl = {};
  var El = {
    'Thread': () => Fl
  };
  var Fl = class {
    constructor(_0x4e771e, _0x345e81, _0x4be83c = "interval") {
      this.callback = _0x4e771e;
      this.delay = _0x345e81;
      this.mode = _0x4be83c;
      this.scheduled = {};
      this.tick = 0x0;
      this.data = {};
      this.active = false;
      this.aborted = false;
      this.hooks = new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
    }
    get ["isActive"]() {
      return this.active;
    }
    async ["start"]() {
      if (this.active) {
        return;
      }
      this.aborted = false;
      this.scheduled = {};
      const _0x4f7e33 = this.hooks.get("preStart") ?? [];
      try {
        for (const _0x31f351 of _0x4f7e33) {
          if (!this.aborted) {
            await _0x31f351.call(this);
          }
        }
      } catch (_0x14e912) {
        this.aborted = true;
        console.log("Error while calling pre-start hook", _0x14e912.message);
      }
      if (this.aborted) {
        try {
          const _0x309ad2 = this.hooks.get("startAborted") ?? [];
          for (const _0xb07fb of _0x309ad2) {
            await _0xb07fb.call(this);
          }
        } catch (_0x124c1d) {
          console.log("Error while calling start-aborted hook", _0x124c1d.message);
        }
        return;
      }
      this.active = true;
      const _0x1de738 = this.hooks.get("active") ?? [];
      switch (this.mode) {
        case "tick":
          {
            this.threadId = setTick(async () => {
              this.tick += 0x1;
              try {
                await this.callback.call(this);
                for (const _0x4cf838 of _0x1de738) {
                  await _0x4cf838.call(this);
                }
              } catch (_0x47c28d) {
                console.log("Error while calling active hook", _0x47c28d.message);
              }
              if (this.delay > 0x0) {
                await new Promise(_0x3e7268 => setTimeout(_0x3e7268, this.delay));
              }
            });
            break;
          }
        case "interval":
          {
            this.threadId = setInterval(async () => {
              this.tick += 0x1;
              try {
                await this.callback.call(this);
                for (const _0x394a33 of _0x1de738) {
                  await _0x394a33.call(this);
                }
              } catch (_0xcb929b) {
                console.log("Error while calling active hook", _0xcb929b.message);
              }
            }, this.delay);
            break;
          }
        case "timeout":
          {
            const _0x36d272 = () => {
              if (this.active) {
                this.threadId = setTimeout(async () => {
                  this.tick += 0x1;
                  try {
                    await this.callback.call(this);
                    for (const _0x21c31b of _0x1de738) {
                      await _0x21c31b.call(this);
                    }
                  } catch (_0x466162) {
                    console.log("Error while calling active hook", _0x466162.message);
                  }
                  return _0x36d272();
                }, this.delay);
              }
            };
            _0x36d272();
            break;
          }
      }
      const _0x18da62 = this.hooks.get("afterStart") ?? [];
      try {
        for (const _0x2b941d of _0x18da62) {
          await _0x2b941d.call(this);
        }
      } catch (_0x269a91) {
        console.log("Error while calling after-start hook", _0x269a91.message);
      }
    }
    async ["stop"]() {
      if (!this.active) {
        return;
      }
      const _0x29ff12 = this.hooks.get("preStop") ?? [];
      try {
        for (const _0x19f7d2 of _0x29ff12) {
          if (!this.aborted) {
            await _0x19f7d2.call(this);
          }
        }
      } catch (_0xc6c12a) {
        this.aborted = true;
        console.log("Error while calling pre-stop hook", _0xc6c12a.message);
      }
      this.active = false;
      switch (this.mode) {
        case "tick":
          {
            clearTick(this.threadId);
            break;
          }
        case "interval":
          {
            clearInterval(this.threadId);
            break;
          }
        case "timeout":
          {
            clearTimeout(this.threadId);
            break;
          }
      }
      if (this.aborted) {
        try {
          const _0x89e863 = this.hooks.get("stopAborted") ?? [];
          for (const _0x51d245 of _0x89e863) {
            await _0x51d245.call(this);
          }
        } catch (_0x468209) {
          console.log("Error while calling stop-aborted hook", _0x468209.message);
        }
        return;
      }
      const _0x1dcc9c = this.hooks.get("afterStop") ?? [];
      try {
        for (const _0x3d192d of _0x1dcc9c) {
          await _0x3d192d.call(this);
        }
      } catch (_0x1972c9) {
        console.log("Error while calling after-stop hook", _0x1972c9.message);
      }
    }
    ["abort"]() {
      this.aborted = true;
    }
    ["addHook"](_0x543190, _0x3e1bb1) {
      var _0x558e9e;
      if ((_0x558e9e = this.hooks.get(_0x543190)) == null) {
        undefined;
      } else {
        _0x558e9e.push(_0x3e1bb1);
      }
    }
    ["setNextTick"](_0x594cfa, _0x513f21) {
      this.scheduled[_0x594cfa] = this.tick + _0x513f21;
    }
    ["canTick"](_0x58246b) {
      return this.scheduled[_0x58246b] === undefined || this.tick >= this.scheduled[_0x58246b];
    }
  };
  var Gl = {};
  var Hl = {
    'GetEntityStateValue': () => Kl,
    'GetPlayerStateValue': () => Nl,
    'RegisterStatebagChangeHandler': () => Pl,
    'SetEntityStateValue': () => Ll,
    'SetPlayerStateValue': () => Ol
  };
  var Il = new Cache(0x1388);
  function Jl(_0x3726e1) {
    let _0x37b83c = Il.get("ent-" + _0x3726e1 + '}');
    if (_0x37b83c) {
      return _0x37b83c;
    }
    _0x37b83c = Entity(_0x3726e1);
    Il.set("ent-" + _0x3726e1 + '}', _0x37b83c);
    return _0x37b83c;
  }
  function Kl(_0x12ddc6, _0x203eb1) {
    const _0x5c0466 = Jl(_0x12ddc6);
    return _0x5c0466.state[_0x203eb1];
  }
  function Ll(_0x539187, _0x1cc17a, _0x4d1332, _0x5d46f2 = false) {
    const _0x3550fd = Jl(_0x539187);
    _0x3550fd.state.set(_0x1cc17a, _0x4d1332, _0x5d46f2);
  }
  function Ml(_0x78c157) {
    let _0x336b24 = Il.get("ply-" + _0x78c157 + '}');
    if (_0x336b24) {
      return _0x336b24;
    }
    _0x336b24 = Player(_0x78c157);
    Il.set("ply-" + _0x78c157 + '}', _0x336b24);
    return _0x336b24;
  }
  function Nl(_0x27c0d5, _0x5e918e) {
    const _0x4dd19e = Ml(_0x27c0d5);
    return _0x4dd19e.state[_0x5e918e];
  }
  function Ol(_0x348843, _0x42100c, _0x59bf4f, _0x208737 = false) {
    const _0x29788a = Ml(_0x348843);
    _0x29788a.state.set(_0x42100c, _0x59bf4f, _0x208737);
  }
  function Pl(_0x1b62df, _0x545e0b, _0x10c850, _0x4dc0c8) {
    return AddStateBagChangeHandler(_0x1b62df, null, async function (_0x141697, _0x56aec2, _0x5f259e, _0x5555d1, _0x144999) {
      if (_0x10c850 && !_0x144999) {
        return;
      }
      const _0x5c82da = _0x141697.startsWith("player");
      const _0x4fb5bf = parseInt(_0x141697.substring(0x7));
      const _0x5bdb02 = _0x5c82da ? GetPlayerFromStateBagName(_0x141697) : GetEntityFromStateBagName(_0x141697);
      if (!_0x5bdb02) {
        return;
      }
      const _0x1565f0 = _0x5c82da ? NetworkGetPlayerIndexFromPed(_0x5bdb02) === PlayerId() : NetworkGetEntityOwner(_0x5bdb02) === PlayerId();
      if (_0x545e0b && !_0x1565f0) {
        return;
      }
      _0x4dc0c8(_0x4fb5bf, _0x5bdb02, _0x5f259e);
    });
  }
  var Ql = {};
  var Rl = {
    'GetFuelLevel': () => Zl,
    'GetIdentifier': () => Wl,
    'GetMetadata': () => Vl,
    'HasKey': () => Ul,
    'IsVinScratched': () => Xl,
    'SwapSeat': () => Yl,
    'TurnOffEngine': () => Tl,
    'TurnOnEngine': () => Sl
  };
  function Sl(_0x6121da) {
    exports['np-vehicles'].TurnOnEngine(_0x6121da);
  }
  function Tl(_0x2d7cc7) {
    exports["np-vehicles"].TurnOffEngine(_0x2d7cc7);
  }
  function Ul(_0x58dad7) {
    return exports["np-vehicles"].HasVehicleKey(_0x58dad7);
  }
  function Vl(_0x5bf5c5, _0x82854a) {
    const _0x38b870 = Kl(_0x5bf5c5, "data");
    return _0x82854a ? _0x38b870 == null ? undefined : _0x38b870[_0x82854a] : _0x38b870;
  }
  function Wl(_0x2dae5f) {
    return Kl(_0x2dae5f, "vin");
  }
  function Xl(_0x4966c7) {
    return Kl(_0x4966c7, "vinScratched");
  }
  function Yl(_0x575170, _0xf3711f) {
    exports['np-vehicles'].SwapVehicleSeat(_0x575170, _0xf3711f);
  }
  function Zl(_0x3c2403) {
    return Vl(_0x3c2403, "fuel") ?? 0x0;
  }
  var $l = async _0x25c849 => {
    const _0x1b1a43 = typeof _0x25c849 === "number" ? _0x25c849 : GetHashKey(_0x25c849);
    if (HasModelLoaded(_0x1b1a43)) {
      return true;
    }
    RequestModel(_0x1b1a43);
    const _0x27f0be = await DevUtilz.waitForCondition(() => HasModelLoaded(_0x1b1a43), 0xbb8);
    return !_0x27f0be;
  };
  var _l = async _0x308f1f => {
    if (HasAnimDictLoaded(_0x308f1f)) {
      return true;
    }
    RequestAnimDict(_0x308f1f);
    const _0x2bf75c = await DevUtilz.waitForCondition(() => HasAnimDictLoaded(_0x308f1f), 0xbb8);
    return !_0x2bf75c;
  };
  var am = async _0x3483b5 => {
    if (HasClipSetLoaded(_0x3483b5)) {
      return true;
    }
    RequestClipSet(_0x3483b5);
    const _0x1a2c7a = await DevUtilz.waitForCondition(() => HasClipSetLoaded(_0x3483b5), 0xbb8);
    return !_0x1a2c7a;
  };
  var bm = async _0x50ca3f => {
    if (HasStreamedTextureDictLoaded(_0x50ca3f)) {
      return true;
    }
    RequestStreamedTextureDict(_0x50ca3f, true);
    const _0x3890d2 = await DevUtilz.waitForCondition(() => HasStreamedTextureDictLoaded(_0x50ca3f), 0xbb8);
    return !_0x3890d2;
  };
  var cm = async (_0x5ecb36, _0x22adf2, _0x2a90a7) => {
    const _0x3aee91 = typeof _0x5ecb36 === "number" ? _0x5ecb36 : GetHashKey(_0x5ecb36);
    if (HasWeaponAssetLoaded(_0x3aee91)) {
      return true;
    }
    RequestWeaponAsset(_0x3aee91, _0x22adf2, _0x2a90a7);
    const _0x56863a = await DevUtilz.waitForCondition(() => HasWeaponAssetLoaded(_0x3aee91), 0xbb8);
    return !_0x56863a;
  };
  var dm = async _0x12acdf => {
    if (HasNamedPtfxAssetLoaded(_0x12acdf)) {
      return true;
    }
    RequestNamedPtfxAsset(_0x12acdf);
    const _0x2d036f = await DevUtilz.waitForCondition(() => HasNamedPtfxAssetLoaded(_0x12acdf), 0xbb8);
    return !_0x2d036f;
  };
  var FiveMUtil = {
    'loadModel': $l,
    'loadTexture': bm,
    'loadAnim': _l,
    'loadClipSet': am,
    'loadWeaponAsset': cm,
    'loadNamedPtfxAsset': dm
  };
  var FiveMUtil = FiveMUtil;
  var gm = (_0x1422c9, ..._0x901a2a) => {
    switch (_0x1422c9) {
      case "coord":
        {
          const [_0x3cfdc2, _0x220a8f, _0x167281] = _0x901a2a;
          return AddBlipForCoord(_0x3cfdc2, _0x220a8f, _0x167281);
        }
      case "area":
        {
          const [_0x4b2332, _0x4850c3, _0x37d359, _0x2491d9, _0x24b403] = _0x901a2a;
          return AddBlipForArea(_0x4b2332, _0x4850c3, _0x37d359, _0x2491d9, _0x24b403);
        }
      case "radius":
        {
          const [_0x3e051e, _0x24dd32, _0x511dc1, _0x2eb9a4] = _0x901a2a;
          return AddBlipForRadius(_0x3e051e, _0x24dd32, _0x511dc1, _0x2eb9a4);
        }
      case 'pickup':
        {
          const [_0x5dd648] = _0x901a2a;
          return AddBlipForPickup(_0x5dd648);
        }
      case "entity":
        {
          const [_0x3523ad] = _0x901a2a;
          return AddBlipForEntity(_0x3523ad);
        }
      default:
        {
          console.error(new Error("Invalid Blip Type"));
          return 0x0;
        }
    }
  };
  var hm = (_0x39002d, _0x39d66c, _0x1d527b, _0x226068, _0x2fbbfd, _0x250dea, _0x3ee6e0, _0x5cd191) => {
    if (typeof _0x1d527b === "number") {
      SetBlipSprite(_0x39002d, _0x1d527b);
    }
    if (typeof _0x226068 === "number") {
      SetBlipColour(_0x39002d, _0x226068);
    }
    if (typeof _0x2fbbfd === "number") {
      SetBlipAlpha(_0x39002d, _0x2fbbfd);
    }
    if (typeof _0x250dea === "number") {
      SetBlipScale(_0x39002d, _0x250dea);
    }
    if (typeof _0x3ee6e0 === "boolean") {
      SetBlipRoute(_0x39002d, _0x3ee6e0);
    }
    if (typeof _0x5cd191 === 'boolean') {
      SetBlipAsShortRange(_0x39002d, _0x5cd191);
    }
    if (typeof _0x39d66c === 'string') {
      BeginTextCommandSetBlipName("STRING");
      AddTextComponentString(_0x39d66c);
      EndTextCommandSetBlipName(_0x39002d);
    }
  };
  var im = {
    'createBlip': gm,
    'applyBlipSettings': hm
  };
  var km = new Set();
  var lm = new Map();
  var mm = new Set();
  var currentResourceName = GetCurrentResourceName();
  on("karma-polyzone:enter", (_0x159b5b, _0x5bc23d) => {
    km.add(_0x159b5b);
    if (_0x5bc23d == null ? undefined : _0x5bc23d.id) {
      km.add(_0x159b5b + '-' + _0x5bc23d.id);
    }
    if (mm.has(_0x159b5b)) {
      emitNet(_0x159b5b + ":enter", _0x5bc23d);
    }
    const _0x308c81 = lm.get(_0x159b5b + "-enter");
    if (_0x308c81 === undefined) {
      return;
    }
    for (const _0xcd1cfd of _0x308c81) {
      try {
        _0xcd1cfd(_0x5bc23d);
      } catch (_0x3eea92) {
        console.log(_0x3eea92);
      }
    }
  });
  on("karma-polyzone:exit", (_0x53a1ab, _0x9c5835) => {
    km["delete"](_0x53a1ab);
    if (_0x9c5835 == null ? undefined : _0x9c5835.id) {
      km["delete"](_0x53a1ab + '-' + _0x9c5835.id);
    }
    if (mm.has(_0x53a1ab)) {
      emitNet(_0x53a1ab + ":exit", _0x9c5835);
    }
    const _0x578ebf = lm.get(_0x53a1ab + "-exit");
    if (_0x578ebf === undefined) {
      return;
    }
    for (const _0x53ed8b of _0x578ebf) {
      try {
        _0x53ed8b(_0x9c5835);
      } catch (_0xceda0e) {
        console.log(_0xceda0e);
      }
    }
  });
  var om = (_0x29c83f, _0x3c213e) => {
    return km.has(_0x3c213e ? _0x29c83f + '-' + _0x3c213e : _0x29c83f);
  };
  var pm = (_0x4087d5, _0x595a4b) => {
    const _0x14981f = _0x4087d5 + "-enter";
    const _0x1d2d52 = lm.get(_0x14981f) ?? [];
    if (!lm.has(_0x14981f)) {
      lm.set(_0x14981f, _0x1d2d52);
    }
    _0x1d2d52.push(_0x595a4b);
  };
  var qm = (_0x5078f8, _0x23d24e) => {
    const _0x4b462b = _0x5078f8 + "-exit";
    const _0x4a1f4a = lm.get(_0x4b462b) ?? [];
    if (!lm.has(_0x4b462b)) {
      lm.set(_0x4b462b, _0x4a1f4a);
    }
    _0x4a1f4a.push(_0x23d24e);
  };
  var rm = (_0x3f58d8, _0x355355, _0xf4c00, _0x1d95db, _0x35d242 = undefined) => {
    if (_0x35d242 === undefined) {
      _0x35d242 = {};
    }
    var _0x3bf0b3 = {
      ..._0x1d95db
    };
    _0x3bf0b3.data = _0x35d242;
    _0x3bf0b3.id = _0x3f58d8;
    _0x3bf0b3.data.id = _0x3f58d8;
    exports["karma-polyzone"].AddPolyZone(_0x355355, _0xf4c00, _0x3bf0b3);
  };
  var sm = (_0x448b3e, _0x3dabc8, _0x129f7d, _0x2b713b, _0x209dba, _0x4e4cde, _0x34bfe5 = undefined) => {
    if (_0x34bfe5 === undefined) {
      _0x34bfe5 = {};
    }
    var _0x1b8f02 = {
      ..._0x4e4cde
    };
    _0x1b8f02.data = _0x34bfe5;
    _0x1b8f02.id = _0x448b3e;
    _0x1b8f02.data.id = _0x448b3e;
    exports["karma-polyzone"].AddBoxZone(_0x3dabc8, _0x129f7d, _0x2b713b, _0x209dba, _0x1b8f02);
  };
  var tm = (_0x468cd6, _0x3d45dc, _0x2d6336, _0x496c7b, _0x450c62, _0x37187d, _0xdcbaa8 = undefined) => {
    if (_0xdcbaa8 === undefined) {
      _0xdcbaa8 = {};
    }
    var _0x27681f = {
      ..._0x37187d
    };
    _0x27681f.data = _0xdcbaa8;
    _0x27681f.id = _0x468cd6;
    _0x27681f.data.id = _0x468cd6;
    exports["np-polytarget"].AddBoxZone(_0x3d45dc, _0x2d6336, _0x496c7b, _0x450c62, _0x27681f);
  };
  var um = (_0xbc3f83, _0x19fd8a, _0x12160c, _0x426f9d, _0x2d9868, _0x273639 = undefined) => {
    if (_0x273639 === undefined) {
      _0x273639 = {};
    }
    var _0x6e2638 = {
      ..._0x2d9868
    };
    _0x6e2638.data = _0x273639;
    _0x6e2638.id = _0xbc3f83;
    _0x6e2638.data.id = _0xbc3f83;
    exports["karma-polyzone"].AddCircleZone(_0x19fd8a, _0x12160c, _0x426f9d, _0x6e2638);
  };
  var vm = (_0xfe748f, _0x46dbb6, _0x888ee9, _0x145c67, _0x47214a, _0x6b752b = undefined) => {
    if (_0x6b752b === undefined) {
      _0x6b752b = {};
    }
    var _0x4920c6 = {
      ..._0x47214a
    };
    _0x4920c6.data = _0x6b752b;
    _0x4920c6.id = _0xfe748f;
    _0x4920c6.data.id = _0xfe748f;
    exports["np-polytarget"].AddCircleZone(_0x46dbb6, _0x888ee9, _0x145c67, _0x4920c6);
  };
  var wm = (_0x4a6982, _0x46cb02, _0x43f9a6, _0x3c7a10, _0x44e9c2 = undefined) => {
    if (_0x44e9c2 === undefined) {
      _0x44e9c2 = {};
    }
    var _0x3600ec = {
      ..._0x3c7a10
    };
    _0x3600ec.data = _0x44e9c2;
    _0x3600ec.data.id = _0x4a6982;
    exports["karma-polyzone"].AddEntityZone(_0x46cb02, _0x43f9a6, _0x3600ec);
  };
  var xm = _0x1e3cc6 => {
    switch (_0x1e3cc6.type) {
      case "circle":
        {
          const {
            type: _0x5a6ff6,
            id: _0x57a2ef,
            zone: _0x2f44e6,
            vectors: _0x20a3cf,
            radius: _0x47954e,
            data: _0x408cf6,
            ..._0x6a3a2e
          } = _0x1e3cc6;
          um(_0x57a2ef, _0x2f44e6, _0x20a3cf, _0x47954e, _0x6a3a2e, _0x408cf6);
          mm.add(_0x2f44e6);
          break;
        }
      case "box":
        {
          const {
            type: _0x5ea8bf,
            id: _0x5c6c79,
            zone: _0x4f8d7b,
            vectors: _0x5523b9,
            length: _0x550d8e,
            width: _0x41223b,
            data: _0x4ce356,
            ..._0x238bd1
          } = _0x1e3cc6;
          sm(_0x5c6c79, _0x4f8d7b, _0x5523b9, _0x550d8e, _0x41223b, _0x238bd1, _0x4ce356);
          mm.add(_0x4f8d7b);
          break;
        }
      case "poly":
        {
          const {
            type: _0x2ab8bf,
            id: _0x18eadd,
            zone: _0x4e2980,
            vectors: _0x23f562,
            data: _0x15dbd0,
            ..._0x4c05fb
          } = _0x1e3cc6;
          rm(_0x18eadd, _0x4e2980, _0x23f562, _0x4c05fb, _0x15dbd0);
          mm.add(_0x4e2980);
          break;
        }
    }
  };
  var ym = (_0x527582, _0x8e012f) => {
    exports["karma-polyzone"].RemoveZone(_0x527582, _0x8e012f);
    km["delete"](_0x527582 + '-' + _0x8e012f);
    mm["delete"](_0x527582);
  };
  var Zones = {
    'isActive': om,
    'onEnter': pm,
    'onExit': qm,
    'addPolyZone': rm,
    'addBoxZone': sm,
    'addBoxTarget': tm,
    'addCircleZone': um,
    'addCircleTarget': vm,
    'addEntityZone': wm,
    'removeZone': ym
  };
  var Bm = (_0x1b9759, _0x35fa4c, _0x3211fd) => {
    exports["np-interact"].AddPeekEntryByModel(_0x1b9759, _0x35fa4c, _0x3211fd);
  };
  var Cm = (_0x29affb, _0x1f2fd6, _0x5ac270) => {
    exports["np-interact"].AddPeekEntryByPolyTarget(_0x29affb, _0x1f2fd6, _0x5ac270);
  };
  var Dm = (_0x32ce13, _0x548d2a, _0x547ecf) => {
    exports["np-interact"].AddPeekEntryByFlag(_0x32ce13, _0x548d2a, _0x547ecf);
  };
  var Em = (_0x4549aa, _0x276989, _0x1317f7) => {
    exports["np-interact"].AddPeekEntryByEntityType(_0x4549aa, _0x276989, _0x1317f7);
  };
  var Fm = (_0x237f8c, _0x19f0d3, _0xd073f0, _0x5dae97) => {
    var _0x2c3e21 = {
      'id': _0x237f8c,
      'coords': [_0x19f0d3.x, _0x19f0d3.y, _0x19f0d3.z],
      'options': _0xd073f0,
      'context': _0x5dae97
    };
    exports.interactions.AddInteraction(_0x2c3e21);
  };
  var Gm = (_0x43c5f8, _0xc59b51, _0x476f8f, _0x3a8c64) => {
    var _0x55936e = {
      'id': _0x43c5f8,
      'options': _0x476f8f,
      'context': _0x3a8c64
    };
    exports.interactions.AddInteractionByModel(_0xc59b51, _0x55936e);
  };
  var Hm = (_0x2a969b, _0x369d37, _0x129b5e) => {
    var _0x26ddb5 = {
      'id': _0x2a969b,
      'options': _0x369d37,
      'context': _0x129b5e
    };
    _0x26ddb5.context.isPlayer = true;
    exports.interactions.AddPedInteraction(_0x26ddb5);
  };
  var Im = (_0x10c48a, _0x38ce14, _0x2fc6a0) => {
    var _0x27ed1d = {
      'id': _0x10c48a,
      'options': _0x38ce14,
      'context': _0x2fc6a0
    };
    exports.interactions.AddPedInteraction(_0x27ed1d);
  };
  var Jm = (_0x15b941, _0x2584f3, _0x5eb38e) => {
    var _0x569b05 = {
      'id': _0x15b941,
      'options': _0x2584f3,
      'context': _0x5eb38e
    };
    exports.interactions.AddVehicleInteraction(_0x569b05);
  };
  var Km = _0x554fe2 => {
    exports.interactions.RemoveInteraction(_0x554fe2);
  };
  var Lm = _0x43ab0c => {
    exports.interactions.RemovePedInteraction(_0x43ab0c);
  };
  var Mm = (_0x594c22, _0x942d50, _0x5870a6 = false, _0x4d7a97 = null, _0x12f9c4 = true, _0x249e9c = null) => {
    return new Promise(_0x1a886b => {
      exports["np-taskbar"].taskBar(_0x594c22, _0x942d50, _0x5870a6, _0x12f9c4, _0x249e9c, false, _0x1a886b, _0x4d7a97 == null ? undefined : _0x4d7a97.distance, _0x4d7a97 == null ? undefined : _0x4d7a97.entity);
    });
  };
  var Nm = (_0x13a525, _0x543189, _0xce5ab8, _0x249cec) => {
    return new Promise(_0x2a67c7 => {
      exports["np-phone"].DoPhoneConfirmation(_0x13a525, _0x543189, _0xce5ab8, _0x2a67c7, _0x249cec);
    });
  };
  var Om = (_0x277428, _0x12d3be, _0xdd9f5d = true, _0x2efb07 = "home-screen") => {
    var _0xf590ac = {
      'action': "notification",
      'target_app': _0x2efb07,
      'title': _0x277428,
      'body': _0x12d3be,
      'show_even_if_app_active': _0xdd9f5d
    };
    var _0x409113 = {
      'source': 'np-nui',
      'app': "phone",
      'data': _0xf590ac
    };
    exports["np-ui"].SendUIMessage(_0x409113);
  };
  var Pm = (_0xbfa109, _0x3beadb, _0xf76dba, _0x300aba, _0x4d9bb5, _0x32f60f, _0x403345 = 0x0, _0x5565be = true) => {
    SetTextColour(_0x300aba[0x0], _0x300aba[0x1], _0x300aba[0x2], _0x300aba[0x3]);
    if (_0x5565be) {
      SetTextOutline();
    }
    SetTextScale(0x0, _0x4d9bb5);
    SetTextFont(_0x32f60f ?? 0x0);
    SetTextJustification(_0x403345);
    if (_0x403345 === 0x2) {
      SetTextWrap(0x0, 0.575);
    }
    SetTextEntry("STRING");
    AddTextComponentString(_0xf76dba ?? "Dummy text");
    EndTextCommandDisplayText(_0xbfa109, _0x3beadb);
  };
  var Qm = (_0x378da1, _0x1dd3cb, _0x42f13c, _0x1e85a0, _0x34982c = 0x4, _0x530c7d = true, _0x5cef36) => {
    SetDrawOrigin(_0x378da1.x, _0x378da1.y, _0x378da1.z, 0x0);
    const _0x29ed2e = Math.max(SomeMoreUtilz.getMapRange([0x0, 0xa], [0.4, 0.25], _0x1dd3cb), 0.1);
    Pm(0x0, 0x0, _0x42f13c, _0x1e85a0, _0x29ed2e, _0x34982c, 0x0, _0x530c7d);
    if (_0x5cef36) {
      DrawRect(0.002, _0x5cef36.height / 0x2, _0x5cef36.width, _0x5cef36.height, _0x5cef36.color[0x0], _0x5cef36.color[0x1], _0x5cef36.color[0x2], _0x5cef36.color[0x3]);
    }
    ClearDrawOrigin();
  };
  var Interface = {
    'addPeekEntryByModel': Bm,
    'addPeekEntryByTarget': Cm,
    'addPeekEntryByFlag': Dm,
    'addPeekEntryByType': Em,
    'addInteraction': Fm,
    'addInteractionByModel': Gm,
    'addPlayerInteraction': Hm,
    'addPedInteraction': Im,
    'addVehicleInteraction': Jm,
    'removeInteraction': Km,
    'removePlayerInteraction': Lm,
    'removePedInteraction': Lm,
    'taskBar': Mm,
    'phoneConfirmation': Nm,
    'phoneNotification': Om,
    'drawText': Pm,
    'drawText3D': Qm
  };
  var Um = async _0x31d580 => {
    return exports["np-heists"].BankMinigame(_0x31d580);
  };
  var Vm = async _0x4e4c19 => {
    return exports["np-heists"].DDRMinigame(_0x4e4c19);
  };
  var Wm = async _0x1876e2 => {
    return exports.skillchecks.DirectionMinigame(_0x1876e2);
  };
  var Xm = async () => {
    return exports.skillchecks.DrillingMinigame();
  };
  var Ym = async _0x1cf2dc => {
    return exports.skillchecks.FlipMinigame(_0x1cf2dc);
  };
  var Zm = async _0x471946 => {
    return exports.skillchecks.FloodMinigame(_0x471946);
  };
  var $m = async _0x1e3eb7 => {
    return exports.skillchecks.TaskBarMinigame(_0x1e3eb7.difficulty, _0x1e3eb7.gap, _0x1e3eb7.iterations, _0x1e3eb7.useReverse);
  };
  var _m = async _0x36855e => {
    return exports["np-heists"].MazeMinigame(_0x36855e);
  };
  var an = async _0x59b76a => {
    return exports.skillchecks.CrackSafe(_0x59b76a.locks);
  };
  var bn = async _0xc0a9da => {
    return exports.skillchecks.SameMinigame(_0xc0a9da);
  };
  var cn = async _0x40c3d0 => {
    return exports['np-heists'].ThermiteMinigame(_0x40c3d0);
  };
  var dn = async _0xc3f522 => {
    return exports.skillchecks.UntangleMinigame(_0xc3f522);
  };
  var en = async _0x3543c5 => {
    return exports['np-heists'].VarMinigame(_0x3543c5);
  };
  var fn = async _0x365836 => {
    return exports.skillchecks.WordsMinigame(_0x365836);
  };
  var gn = async _0x130b16 => {
    return exports.skillchecks.AlphabetMinigame(_0x130b16);
  };
  var hn = async _0x229af5 => {
    return exports.skillchecks.LockpickMinigame(_0x229af5);
  };
  var jn = {
    'BankMinigame': Um,
    'DDRMinigame': Vm,
    'DirectionMinigame': Wm,
    'DrillingMinigame': Xm,
    'FlipMinigame': Ym,
    'FloodMinigame': Zm,
    'TaskBarMinigame': $m,
    'MazeMinigame': _m,
    'CrackSafe': an,
    'SameMinigame': bn,
    'ThermiteMinigame': cn,
    'UntangleMinigame': dn,
    'VarMinigame': en,
    'WordsMinigame': fn,
    'AlphabetMinigame': gn,
    'LockpickMinigame': hn
  };
  var ln = {
    async 'hasPermission'(_0x43c149, _0x4f3023 = {}) {
      return await exports.permissions.hasPermission(_0x43c149, _0x4f3023);
    },
    async 'getUserPermissions'() {
      return await exports.permissions.getUserPermissions();
    },
    async 'getCharPermissions'(_0x98d3a8) {
      return await exports.permissions.getCharPermissions();
    },
    async 'getTotalPermissions'() {
      return await exports.permissions.getTotalPermissions();
    }
  };
  function yn(_0x5a4645, _0x428aff, _0x124400, _0x2097c6, _0x426d57, _0x3ade30, _0x4ed422) {
    try {
      var _0x380d11 = _0x5a4645[_0x3ade30](_0x4ed422);
      var _0x3cf695 = _0x380d11.value;
    } catch (_0x46a153) {
      _0x124400(_0x46a153);
      return;
    }
    if (_0x380d11.done) {
      _0x428aff(_0x3cf695);
    } else {
      Promise.resolve(_0x3cf695).then(_0x2097c6, _0x426d57);
    }
  }
  function zn(_0x127eec) {
    return function () {
      var _0x52deda = this;
      return new Promise(function (_0x3aebbc, _0x5ea5f9) {
        var _0x30c113 = _0x127eec.apply(_0x52deda, arguments);
        function _0x2268b7(_0x504104) {
          yn(_0x30c113, _0x3aebbc, _0x5ea5f9, _0x2268b7, _0x18bb72, "next", _0x504104);
        }
        function _0x18bb72(_0x84f0ab) {
          yn(_0x30c113, _0x3aebbc, _0x5ea5f9, _0x2268b7, _0x18bb72, "throw", _0x84f0ab);
        }
        _0x2268b7(undefined);
      });
    };
  }
  function An(_0x51b93d, _0x39d799) {
    var _0x5d21c6;
    var _0x6becc8;
    var _0x329af4;
    var _0x3d4c8d;
    var _0x55b9b9 = {
      'label': 0x0,
      'sent': function () {
        if (_0x329af4[0x0] & 0x1) {
          throw _0x329af4[0x1];
        }
        return _0x329af4[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x3d4c8d = {
      'next': _0x3d48c8(0x0),
      'throw': _0x3d48c8(0x1),
      'return': _0x3d48c8(0x2)
    };
    if (typeof Symbol === "function") {
      _0x3d4c8d[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x3d4c8d;
    function _0x3d48c8(_0x1d97ac) {
      return function (_0x2959c4) {
        return _0x4cd5e7([_0x1d97ac, _0x2959c4]);
      };
    }
    function _0x4cd5e7(_0x1fd05b) {
      if (_0x5d21c6) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x55b9b9) {
        try {
          _0x5d21c6 = 0x1;
          if (_0x6becc8 && (_0x329af4 = _0x1fd05b[0x0] & 0x2 ? _0x6becc8["return"] : _0x1fd05b[0x0] ? _0x6becc8["throw"] || ((_0x329af4 = _0x6becc8["return"]) && _0x329af4.call(_0x6becc8), 0x0) : _0x6becc8.next) && !(_0x329af4 = _0x329af4.call(_0x6becc8, _0x1fd05b[0x1])).done) {
            return _0x329af4;
          }
          _0x6becc8 = 0x0;
          if (_0x329af4) {
            _0x1fd05b = [_0x1fd05b[0x0] & 0x2, _0x329af4.value];
          }
          switch (_0x1fd05b[0x0]) {
            case 0x0:
            case 0x1:
              _0x329af4 = _0x1fd05b;
              break;
            case 0x4:
              _0x55b9b9.label++;
              var _0x462914 = {
                'value': _0x1fd05b[0x1],
                'done': false
              };
              return _0x462914;
            case 0x5:
              _0x55b9b9.label++;
              _0x6becc8 = _0x1fd05b[0x1];
              _0x1fd05b = [0x0];
              continue;
            case 0x7:
              _0x1fd05b = _0x55b9b9.ops.pop();
              _0x55b9b9.trys.pop();
              continue;
            default:
              _0x329af4 = _0x55b9b9.trys;
              if (!(_0x329af4 = _0x329af4.length > 0x0 && _0x329af4[_0x329af4.length - 0x1]) && (_0x1fd05b[0x0] === 0x6 || _0x1fd05b[0x0] === 0x2)) {
                _0x55b9b9 = 0x0;
                continue;
              }
              if (_0x1fd05b[0x0] === 0x3 && (!_0x329af4 || _0x1fd05b[0x1] > _0x329af4[0x0] && _0x1fd05b[0x1] < _0x329af4[0x3])) {
                _0x55b9b9.label = _0x1fd05b[0x1];
                break;
              }
              if (_0x1fd05b[0x0] === 0x6 && _0x55b9b9.label < _0x329af4[0x1]) {
                _0x55b9b9.label = _0x329af4[0x1];
                _0x329af4 = _0x1fd05b;
                break;
              }
              if (_0x329af4 && _0x55b9b9.label < _0x329af4[0x2]) {
                _0x55b9b9.label = _0x329af4[0x2];
                _0x55b9b9.ops.push(_0x1fd05b);
                break;
              }
              if (_0x329af4[0x2]) {
                _0x55b9b9.ops.pop();
              }
              _0x55b9b9.trys.pop();
              continue;
          }
          _0x1fd05b = _0x39d799.call(_0x51b93d, _0x55b9b9);
        } catch (_0x18d93a) {
          _0x1fd05b = [0x6, _0x18d93a];
          _0x6becc8 = 0x0;
        } finally {
          _0x5d21c6 = _0x329af4 = 0x0;
        }
      }
      if (_0x1fd05b[0x0] & 0x5) {
        throw _0x1fd05b[0x1];
      }
      var _0xda8be7 = {
        'value': _0x1fd05b[0x0] ? _0x1fd05b[0x1] : undefined,
        'done': true
      };
      return _0xda8be7;
    }
  }
  var NPXConfig;
  var FMNewMap = new Map();
  var curResourceName = GetCurrentResourceName();
  function LoadNPXConfigFunc() {
    return LoadNPXConfig.apply(this, arguments);
  }
  function LoadNPXConfig() {
    LoadNPXConfig = zn(function () {
      return An(this, function (_0x5027e7) {
        switch (_0x5027e7.label) {
          case 0x0:
            return [0x4, new Promise(function (_0x1f1df2) {
              return setTimeout(_0x1f1df2, 0x64);
            })];
          case 0x1:
            _0x5027e7.sent();
            return [0x3, 0x0];
          case 0x2:
            NPXConfig = exports.config.GetModuleConfig("main");
            return [0x2];
        }
      });
    });
    return LoadNPXConfig.apply(this, arguments);
  }
  on("np-config:configLoaded", function (_0x3c4f56, _0x540adf) {
    if (_0x3c4f56 === "main") {
      NPXConfig = _0x540adf;
    } else if (FMNewMap.has(_0x3c4f56)) {
      FMNewMap.set(_0x3c4f56, _0x540adf);
    }
  });
  function getConfigValue(_0x5f3273) {
    return NPXConfig[_0x5f3273];
  }
  function getModuleConfig(_0x2f4c76, _0x3f691d) {
    if (!FMNewMap.has(_0x2f4c76)) {
      var _0x10835a = exports.config.GetModuleConfig(_0x2f4c76);
      if (_0x10835a === undefined) {
        return undefined;
      }
      FMNewMap.set(_0x2f4c76, _0x10835a);
    }
    var _0x267408 = FMNewMap.get(_0x2f4c76);
    return _0x3f691d ? _0x267408?.[_0x3f691d] : _0x267408;
  }
  function getCurrentResourceConfig(_0x87be34) {
    switch (_0x87be34) {
      case "pricing":
        return Config.prices;
      case 'maxOutfits':
        return Config.maxoutfits;
      case "models":
        return Config.PedModels;
      default:
        break;
    }
  }
  ;
  var Kn;
  (function (_0x1c9780) {
    _0x1c9780[_0x1c9780.HEAD = 0x0] = 'HEAD';
    _0x1c9780[_0x1c9780.BERD = 0x1] = "BERD";
    _0x1c9780[_0x1c9780.HAIR = 0x2] = "HAIR";
    _0x1c9780[_0x1c9780.UPPR = 0x3] = "UPPR";
    _0x1c9780[_0x1c9780.LOWR = 0x4] = "LOWR";
    _0x1c9780[_0x1c9780.HAND = 0x5] = "HAND";
    _0x1c9780[_0x1c9780.FEET = 0x6] = "FEET";
    _0x1c9780[_0x1c9780.TEEF = 0x7] = "TEEF";
    _0x1c9780[_0x1c9780.ACCS = 0x8] = "ACCS";
    _0x1c9780[_0x1c9780.TASK = 0x9] = "TASK";
    _0x1c9780[_0x1c9780.DECL = 0xa] = "DECL";
    _0x1c9780[_0x1c9780.JBIB = 0xb] = "JBIB";
  })(Kn ||= {});
  var Ln;
  (function (_0x3a9814) {
    _0x3a9814[_0x3a9814.HEAD = 0x0] = "HEAD";
    _0x3a9814[_0x3a9814.EYES = 0x1] = "EYES";
    _0x3a9814[_0x3a9814.EARS = 0x2] = "EARS";
    _0x3a9814[_0x3a9814.LWRIST = 0x6] = "LWRIST";
    _0x3a9814[_0x3a9814.RWIRST = 0x7] = "RWIRST";
  })(Ln ||= {});
  var ClothsTable1;
  (function (_0xcc99a) {
    _0xcc99a[_0xcc99a.Face = 0x0] = 'Face';
    _0xcc99a[_0xcc99a.Mask = 0x1] = "Mask";
    _0xcc99a[_0xcc99a.Hair = 0x2] = "Hair";
    _0xcc99a[_0xcc99a.Torso = 0x3] = 'Torso';
    _0xcc99a[_0xcc99a.Leg = 0x4] = "Leg";
    _0xcc99a[_0xcc99a.Parachute = 0x5] = "Parachute";
    _0xcc99a[_0xcc99a.Shoes = 0x6] = "Shoes";
    _0xcc99a[_0xcc99a.Accessory = 0x7] = "Accessory";
    _0xcc99a[_0xcc99a.Undershirt = 0x8] = "Undershirt";
    _0xcc99a[_0xcc99a.Kevlar = 0x9] = "Kevlar";
    _0xcc99a[_0xcc99a.Badge = 0xa] = "Badge";
    _0xcc99a[_0xcc99a.Jacket = 0xb] = "Jacket";
  })(ClothsTable1 ||= {});
  var ClothingType;
  (function (_0xa8aa49) {
    _0xa8aa49[_0xa8aa49.Hat = 0x0] = "Hat";
    _0xa8aa49[_0xa8aa49.Glasses = 0x1] = "Glasses";
    _0xa8aa49[_0xa8aa49.Ears = 0x2] = 'Ears';
    _0xa8aa49[_0xa8aa49.Watch = 0x6] = "Watch";
    _0xa8aa49[_0xa8aa49.Bracelet = 0x7] = "Bracelet";
  })(ClothingType ||= {});
  var FacialBarberStuff;
  (function (_0x402ed0) {
    _0x402ed0[_0x402ed0.Blemishes = 0x0] = "Blemishes";
    _0x402ed0[_0x402ed0.FacialHair = 0x1] = "FacialHair";
    _0x402ed0[_0x402ed0.Eyebrows = 0x2] = "Eyebrows";
    _0x402ed0[_0x402ed0.Ageing = 0x3] = "Ageing";
    _0x402ed0[_0x402ed0.Makeup = 0x4] = "Makeup";
    _0x402ed0[_0x402ed0.Blush = 0x5] = "Blush";
    _0x402ed0[_0x402ed0.Complexion = 0x6] = "Complexion";
    _0x402ed0[_0x402ed0.SunDamage = 0x7] = "SunDamage";
    _0x402ed0[_0x402ed0.Lipstick = 0x8] = "Lipstick";
    _0x402ed0[_0x402ed0.MolesFreckles = 0x9] = "MolesFreckles";
    _0x402ed0[_0x402ed0.ChestHair = 0xa] = "ChestHair";
    _0x402ed0[_0x402ed0.BodyBlemishes = 0xb] = "BodyBlemishes";
    _0x402ed0[_0x402ed0.AddBodyBlemishes = 0xc] = "AddBodyBlemishes";
  })(FacialBarberStuff ||= {});
  var Pn;
  (function (_0x444485) {
    _0x444485[_0x444485.nose_width = 0x0] = "nose_width";
    _0x444485[_0x444485.nose_peak = 0x1] = "nose_peak";
    _0x444485[_0x444485.nose_length = 0x2] = "nose_length";
    _0x444485[_0x444485.nose_bone_curveness = 0x3] = "nose_bone_curveness";
    _0x444485[_0x444485.nose_tip = 0x4] = "nose_tip";
    _0x444485[_0x444485.nose_bone_twist = 0x5] = "nose_bone_twist";
    _0x444485[_0x444485.eyebrow_up_down = 0x6] = "eyebrow_up_down";
    _0x444485[_0x444485.eyebrow_in_out = 0x7] = 'eyebrow_in_out';
    _0x444485[_0x444485.cheek_bones = 0x8] = "cheek_bones";
    _0x444485[_0x444485.cheek_sideways_bone_size = 0x9] = "cheek_sideways_bone_size";
    _0x444485[_0x444485.cheek_bones_width = 0xa] = "cheek_bones_width";
    _0x444485[_0x444485.eye_opening = 0xb] = "eye_opening";
    _0x444485[_0x444485.lip_thickness = 0xc] = "lip_thickness";
    _0x444485[_0x444485.jaw_bone_width = 0xd] = "jaw_bone_width";
    _0x444485[_0x444485.jaw_bone_shape = 0xe] = "jaw_bone_shape";
    _0x444485[_0x444485.chin_bone = 0xf] = "chin_bone";
    _0x444485[_0x444485.chin_bone_length = 0x10] = "chin_bone_length";
    _0x444485[_0x444485.chin_bone_shape = 0x11] = "chin_bone_shape";
    _0x444485[_0x444485.chin_hole = 0x12] = "chin_hole";
    _0x444485[_0x444485.neck_thickness = 0x13] = "neck_thickness";
  })(Pn ||= {});
  var Qn;
  (function (_0xe70d79) {
    _0xe70d79[_0xe70d79.Face = 0x2e] = "Face";
    _0xe70d79[_0xe70d79.Mask = 0xc3] = "Mask";
    _0xe70d79[_0xe70d79.Hair = 0x4c] = "Hair";
    _0xe70d79[_0xe70d79.Torso = 0xc4] = "Torso";
    _0xe70d79[_0xe70d79.Leg = 0x8a] = "Leg";
    _0xe70d79[_0xe70d79.Parachute = 0x64] = "Parachute";
    _0xe70d79[_0xe70d79.Shoes = 0x66] = "Shoes";
    _0xe70d79[_0xe70d79.Accessory = 0x98] = "Accessory";
    _0xe70d79[_0xe70d79.Undershirt = 0xb8] = "Undershirt";
    _0xe70d79[_0xe70d79.Kevlar = 0x38] = "Kevlar";
    _0xe70d79[_0xe70d79.Badge = 0x78] = "Badge";
    _0xe70d79[_0xe70d79.Jacket = 0x17e] = 'Jacket';
    _0xe70d79[_0xe70d79.Hat = 0x9c] = "Hat";
    _0xe70d79[_0xe70d79.Glasses = 0x22] = "Glasses";
    _0xe70d79[_0xe70d79.Ears = 0x29] = "Ears";
    _0xe70d79[_0xe70d79.Watch = 0x29] = "Watch";
    _0xe70d79[_0xe70d79.Bracelet = 0x9] = "Bracelet";
  })(Qn ||= {});
  var Rn;
  (function (_0x228b3e) {
    _0x228b3e[_0x228b3e.Face = 0x2e] = "Face";
    _0x228b3e[_0x228b3e.Mask = 0xc4] = "Mask";
    _0x228b3e[_0x228b3e.Hair = 0x50] = "Hair";
    _0x228b3e[_0x228b3e.Torso = 0xf1] = "Torso";
    _0x228b3e[_0x228b3e.Leg = 0x91] = "Leg";
    _0x228b3e[_0x228b3e.Parachute = 0x64] = "Parachute";
    _0x228b3e[_0x228b3e.Shoes = 0x6a] = "Shoes";
    _0x228b3e[_0x228b3e.Accessory = 0x79] = "Accessory";
    _0x228b3e[_0x228b3e.Undershirt = 0xde] = "Undershirt";
    _0x228b3e[_0x228b3e.Kevlar = 0x38] = "Kevlar";
    _0x228b3e[_0x228b3e.Badge = 0x80] = "Badge";
    _0x228b3e[_0x228b3e.Jacket = 0x190] = "Jacket";
    _0x228b3e[_0x228b3e.Hat = 0x9b] = "Hat";
    _0x228b3e[_0x228b3e.Glasses = 0x24] = "Glasses";
    _0x228b3e[_0x228b3e.Ears = 0x16] = "Ears";
    _0x228b3e[_0x228b3e.Watch = 0x1e] = "Watch";
    _0x228b3e[_0x228b3e.Bracelet = 0x10] = "Bracelet";
  })(Rn ||= {});
  var Sn;
  (function (_0x10a639) {
    _0x10a639[_0x10a639.Face = 0x2e] = "Face";
    _0x10a639[_0x10a639.Mask = 0xd1] = "Mask";
    _0x10a639[_0x10a639.Hair = 0x4f] = "Hair";
    _0x10a639[_0x10a639.Torso = 0xc6] = "Torso";
    _0x10a639[_0x10a639.Leg = 0x94] = 'Leg';
    _0x10a639[_0x10a639.Parachute = 0x6f] = "Parachute";
    _0x10a639[_0x10a639.Shoes = 0x6d] = "Shoes";
    _0x10a639[_0x10a639.Accessory = 0x9a] = "Accessory";
    _0x10a639[_0x10a639.Undershirt = 0xbf] = "Undershirt";
    _0x10a639[_0x10a639.Kevlar = 0x39] = "Kevlar";
    _0x10a639[_0x10a639.Badge = 0x86] = "Badge";
    _0x10a639[_0x10a639.Jacket = 0x19d] = "Jacket";
    _0x10a639[_0x10a639.Hat = 0xad] = "Hat";
    _0x10a639[_0x10a639.Glasses = 0x2a] = "Glasses";
    _0x10a639[_0x10a639.Ears = 0x2a] = "Ears";
    _0x10a639[_0x10a639.Watch = 0x2d] = "Watch";
    _0x10a639[_0x10a639.Bracelet = 0xa] = "Bracelet";
  })(Sn ||= {});
  var Tn;
  (function (_0x452c5a) {
    _0x452c5a[_0x452c5a.Face = 0x2e] = "Face";
    _0x452c5a[_0x452c5a.Mask = 0xd2] = "Mask";
    _0x452c5a[_0x452c5a.Hair = 0x53] = "Hair";
    _0x452c5a[_0x452c5a.Torso = 0xf3] = "Torso";
    _0x452c5a[_0x452c5a.Leg = 0x9c] = "Leg";
    _0x452c5a[_0x452c5a.Parachute = 0x6f] = "Parachute";
    _0x452c5a[_0x452c5a.Shoes = 0x71] = "Shoes";
    _0x452c5a[_0x452c5a.Accessory = 0x7b] = "Accessory";
    _0x452c5a[_0x452c5a.Undershirt = 0xec] = "Undershirt";
    _0x452c5a[_0x452c5a.Kevlar = 0x39] = "Kevlar";
    _0x452c5a[_0x452c5a.Badge = 0x90] = "Badge";
    _0x452c5a[_0x452c5a.Jacket = 0x1b8] = "Jacket";
    _0x452c5a[_0x452c5a.Hat = 0xac] = "Hat";
    _0x452c5a[_0x452c5a.Glasses = 0x2c] = 'Glasses';
    _0x452c5a[_0x452c5a.Ears = 0x17] = "Ears";
    _0x452c5a[_0x452c5a.Watch = 0x22] = "Watch";
    _0x452c5a[_0x452c5a.Bracelet = 0x11] = "Bracelet";
  })(Tn ||= {});
  var Un;
  (function (_0x45135f) {
    _0x45135f[_0x45135f.Face = 0x2e] = "Face";
    _0x45135f[_0x45135f.Mask = 0xd1] = "Mask";
    _0x45135f[_0x45135f.Hair = 0x4f] = "Hair";
    _0x45135f[_0x45135f.Torso = 0xc6] = "Torso";
    _0x45135f[_0x45135f.Leg = 0x94] = "Leg";
    _0x45135f[_0x45135f.Parachute = 0x6f] = "Parachute";
    _0x45135f[_0x45135f.Shoes = 0x6d] = "Shoes";
    _0x45135f[_0x45135f.Accessory = 0x9a] = "Accessory";
    _0x45135f[_0x45135f.Undershirt = 0xbf] = "Undershirt";
    _0x45135f[_0x45135f.Kevlar = 0x39] = "Kevlar";
    _0x45135f[_0x45135f.Badge = 0x86] = "Badge";
    _0x45135f[_0x45135f.Jacket = 0x19d] = "Jacket";
    _0x45135f[_0x45135f.Hat = 0xad] = "Hat";
    _0x45135f[_0x45135f.Glasses = 0x2a] = "Glasses";
    _0x45135f[_0x45135f.Ears = 0x2a] = "Ears";
    _0x45135f[_0x45135f.Watch = 0x2d] = 'Watch';
    _0x45135f[_0x45135f.Bracelet = 0xa] = "Bracelet";
  })(Un ||= {});
  var Vn;
  (function (_0x5a9a90) {
    _0x5a9a90[_0x5a9a90.Face = 0x2e] = "Face";
    _0x5a9a90[_0x5a9a90.Mask = 0xd2] = "Mask";
    _0x5a9a90[_0x5a9a90.Hair = 0x53] = "Hair";
    _0x5a9a90[_0x5a9a90.Torso = 0xf3] = "Torso";
    _0x5a9a90[_0x5a9a90.Leg = 0x9c] = "Leg";
    _0x5a9a90[_0x5a9a90.Parachute = 0x6f] = "Parachute";
    _0x5a9a90[_0x5a9a90.Shoes = 0x71] = "Shoes";
    _0x5a9a90[_0x5a9a90.Accessory = 0x7b] = "Accessory";
    _0x5a9a90[_0x5a9a90.Undershirt = 0xec] = "Undershirt";
    _0x5a9a90[_0x5a9a90.Kevlar = 0x39] = "Kevlar";
    _0x5a9a90[_0x5a9a90.Badge = 0x90] = "Badge";
    _0x5a9a90[_0x5a9a90.Jacket = 0x1b8] = "Jacket";
    _0x5a9a90[_0x5a9a90.Hat = 0xac] = "Hat";
    _0x5a9a90[_0x5a9a90.Glasses = 0x2c] = "Glasses";
    _0x5a9a90[_0x5a9a90.Ears = 0x17] = "Ears";
    _0x5a9a90[_0x5a9a90.Watch = 0x22] = "Watch";
    _0x5a9a90[_0x5a9a90.Bracelet = 0x11] = 'Bracelet';
  })(Vn ||= {});
  var existingTattoos;
  (function (_0x5c3f5e) {
    _0x5c3f5e[_0x5c3f5e.male = 0x705e61f2] = "male";
    _0x5c3f5e[_0x5c3f5e.female = -0x63610028] = "female";
  })(existingTattoos ||= {});
  var Xn;
  (function (_0x43ec49) {
    _0x43ec49[_0x43ec49.TATTOO = 0x0] = "TATTOO";
    _0x43ec49[_0x43ec49.FADE = 0x1] = "FADE";
    _0x43ec49[_0x43ec49.BADGE = 0x2] = "BADGE";
    _0x43ec49[_0x43ec49.MEDAL = 0x3] = "MEDAL";
  })(Xn ||= {});
  var Yn;
  (function (_0x4e3d33) {
    _0x4e3d33[_0x4e3d33.ZONE_TORSO = 0x0] = "ZONE_TORSO";
    _0x4e3d33[_0x4e3d33.ZONE_HEAD = 0x1] = "ZONE_HEAD";
    _0x4e3d33[_0x4e3d33.ZONE_LEFT_ARM = 0x2] = "ZONE_LEFT_ARM";
    _0x4e3d33[_0x4e3d33.ZONE_RIGHT_ARM = 0x3] = 'ZONE_RIGHT_ARM';
    _0x4e3d33[_0x4e3d33.ZONE_LEFT_LEG = 0x4] = "ZONE_LEFT_LEG";
    _0x4e3d33[_0x4e3d33.ZONE_RIGHT_LEG = 0x5] = "ZONE_RIGHT_LEG";
    _0x4e3d33[_0x4e3d33.ZONE_MEDALS = 0x6] = "ZONE_MEDALS";
  })(Yn ||= {});
  var Zn;
  (function (_0x17dadd) {
    _0x17dadd[_0x17dadd.ARM_LEFT_1 = 0x427ff4fa] = "ARM_LEFT_1";
    _0x17dadd[_0x17dadd.ARM_LEFT_2 = 0x33b65767] = "ARM_LEFT_2";
    _0x17dadd[_0x17dadd.ARM_LEFT_BICEP = -0x7b7fc290] = "ARM_LEFT_BICEP";
    _0x17dadd[_0x17dadd.ARM_LEFT_ELBOW = -0x4ca774a] = "ARM_LEFT_ELBOW";
    _0x17dadd[_0x17dadd.ARM_LEFT_FULL_SLEEVE = -0x69ccb5f5] = "ARM_LEFT_FULL_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_LEFT_LOWER_INNER = -0x5c303790] = "ARM_LEFT_LOWER_INNER";
    _0x17dadd[_0x17dadd.ARM_LEFT_LOWER_OUTER = -0x7e513f08] = "ARM_LEFT_LOWER_OUTER";
    _0x17dadd[_0x17dadd.ARM_LEFT_LOWER_SLEEVE = -0x646498b9] = "ARM_LEFT_LOWER_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_LEFT_SHORT_SLEEVE = 0x36b6d1e5] = "ARM_LEFT_SHORT_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_LEFT_SHOULDER = -0x28ebdaed] = "ARM_LEFT_SHOULDER";
    _0x17dadd[_0x17dadd.ARM_LEFT_SLEEVE = -0x66fe2666] = "ARM_LEFT_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_LEFT_UPPER_SIDE = -0x1294cfa2] = "ARM_LEFT_UPPER_SIDE";
    _0x17dadd[_0x17dadd.ARM_LEFT_UPPER_SLEEVE = 0x51d12142] = "ARM_LEFT_UPPER_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_LEFT_WRIST = 0x61bfaaee] = "ARM_LEFT_WRIST";
    _0x17dadd[_0x17dadd.ARM_RIGHT = -0x2073dd56] = "ARM_RIGHT";
    _0x17dadd[_0x17dadd.ARM_RIGHT_ELBOW = -0x40015ab3] = "ARM_RIGHT_ELBOW";
    _0x17dadd[_0x17dadd.ARM_RIGHT_FULL_SLEEVE = -0x3ef0ec67] = "ARM_RIGHT_FULL_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_RIGHT_LOWER = 0x25c34ead] = "ARM_RIGHT_LOWER";
    _0x17dadd[_0x17dadd.ARM_RIGHT_LOWER_INNER = 0x75b5dda] = "ARM_RIGHT_LOWER_INNER";
    _0x17dadd[_0x17dadd.ARM_RIGHT_LOWER_OUTER = 0x73e77e31] = "ARM_RIGHT_LOWER_OUTER";
    _0x17dadd[_0x17dadd.ARM_RIGHT_LOWER_SLEEVE = 0x2f757350] = "ARM_RIGHT_LOWER_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_RIGHT_SHORT_SLEEVE = 0x750c7480] = "ARM_RIGHT_SHORT_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_RIGHT_SHOULDER = 0x40f52373] = "ARM_RIGHT_SHOULDER";
    _0x17dadd[_0x17dadd.ARM_RIGHT_SLEEVE = 0x28bb9c2] = "ARM_RIGHT_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_RIGHT_TRICEP = -0xd940949] = "ARM_RIGHT_TRICEP";
    _0x17dadd[_0x17dadd.ARM_RIGHT_UPPER_SIDE = -0x6650aa90] = "ARM_RIGHT_UPPER_SIDE";
    _0x17dadd[_0x17dadd.ARM_RIGHT_UPPER_SLEEVE = -0x4e0ed957] = "ARM_RIGHT_UPPER_SLEEVE";
    _0x17dadd[_0x17dadd.ARM_RIGHT_WRIST = 0x7f5eae2d] = "ARM_RIGHT_WRIST";
    _0x17dadd[_0x17dadd.BACK_1 = 0x5879d643] = "BACK_1";
    _0x17dadd[_0x17dadd.BACK_2 = 0x66bf72ce] = 'BACK_2';
    _0x17dadd[_0x17dadd.BACK_3 = 0x36c492d9] = "BACK_3";
    _0x17dadd[_0x17dadd.BACK_4 = 0x4d02bf55] = "BACK_4";
    _0x17dadd[_0x17dadd.BACK_FULL = 0x2a625dc5] = "BACK_FULL";
    _0x17dadd[_0x17dadd.BACK_FULL_ARMS_FULL_BACK = 0x47f140d5] = "BACK_FULL_ARMS_FULL_BACK";
    _0x17dadd[_0x17dadd.BACK_FULL_SHORT = 0x1f0e6dc] = "BACK_FULL_SHORT";
    _0x17dadd[_0x17dadd.BACK_LEFT = -0x52338cb4] = "BACK_LEFT";
    _0x17dadd[_0x17dadd.BACK_LOWER = 0x6072c0d9] = "BACK_LOWER";
    _0x17dadd[_0x17dadd.BACK_UPPER = 0x72f86f8a] = "BACK_UPPER";
    _0x17dadd[_0x17dadd.BACK_UPPER_LEFT = 0x5d4de69b] = "BACK_UPPER_LEFT";
    _0x17dadd[_0x17dadd.BACK_UPPER_RIGHT = 0x7d9fbec4] = "BACK_UPPER_RIGHT";
    _0x17dadd[_0x17dadd.CHEST_FULL = -0x2f4bc8da] = "CHEST_FULL";
    _0x17dadd[_0x17dadd.CHEST_LEFT = -0x2d887311] = "CHEST_LEFT";
    _0x17dadd[_0x17dadd.CHEST_LEFT_UPPER = 0x1f1149b8] = 'CHEST_LEFT_UPPER';
    _0x17dadd[_0x17dadd.CHEST_MID = -0x53fc93a4] = "CHEST_MID";
    _0x17dadd[_0x17dadd.CHEST_RIGHT = -0x7b273204] = "CHEST_RIGHT";
    _0x17dadd[_0x17dadd.CHEST_STOM = 0x329c1227] = "CHEST_STOM";
    _0x17dadd[_0x17dadd.CHEST_STOM_FULL = 0x470ffe1b] = "CHEST_STOM_FULL";
    _0x17dadd[_0x17dadd.Face = -0x5bb66a58] = "Face";
    _0x17dadd[_0x17dadd.FACE = -0x5bb66a58] = "FACE";
    _0x17dadd[_0x17dadd.hairOverlay = 0x7f92ecfb] = "hairOverlay";
    _0x17dadd[_0x17dadd.HAND_LEFT = 0x3fd836c7] = "HAND_LEFT";
    _0x17dadd[_0x17dadd.HAND_RIGHT = 0x56c231e2] = "HAND_RIGHT";
    _0x17dadd[_0x17dadd.HEAD_LEFT = -0x2bfacb7c] = "HEAD_LEFT";
    _0x17dadd[_0x17dadd.HEAD_RIGHT = 0x4b3325bd] = "HEAD_RIGHT";
    _0x17dadd[_0x17dadd.LEG_LEFT = -0x101f91a1] = "LEG_LEFT";
    _0x17dadd[_0x17dadd.LEG_LEFT_CALF = 0x804430d] = "LEG_LEFT_CALF";
    _0x17dadd[_0x17dadd.LEG_LEFT_FULL_SLEEVE = 0x3df233ff] = "LEG_LEFT_FULL_SLEEVE";
    _0x17dadd[_0x17dadd.LEG_LEFT_LOWER_BACK = 0x3da94643] = "LEG_LEFT_LOWER_BACK";
    _0x17dadd[_0x17dadd.LEG_LEFT_LOWER_FRONT = -0x5d0270fb] = "LEG_LEFT_LOWER_FRONT";
    _0x17dadd[_0x17dadd.LEG_LEFT_LOWER_SLEEVE = -0x536d1099] = "LEG_LEFT_LOWER_SLEEVE";
    _0x17dadd[_0x17dadd.LEG_LEFT_UPPER_BACK = 0x66d9fa11] = "LEG_LEFT_UPPER_BACK";
    _0x17dadd[_0x17dadd.LEG_LEFT_UPPER_FRONT = -0x16c6fd78] = "LEG_LEFT_UPPER_FRONT";
    _0x17dadd[_0x17dadd.LEG_LEFT_UPPER_OUTER = -0xfe8c659] = "LEG_LEFT_UPPER_OUTER";
    _0x17dadd[_0x17dadd.LEG_LEFT_UPPER_SLEEVE = -0x72486145] = "LEG_LEFT_UPPER_SLEEVE";
    _0x17dadd[_0x17dadd.LEG_LEG = 0x6414e84f] = "LEG_LEG";
    _0x17dadd[_0x17dadd.LEG_RIGHT = 0x2de38b5b] = "LEG_RIGHT";
    _0x17dadd[_0x17dadd.LEG_RIGHT_CALF = -0x116ae8f6] = "LEG_RIGHT_CALF";
    _0x17dadd[_0x17dadd.LEG_RIGHT_FULL_FRONT = -0x4643cadf] = "LEG_RIGHT_FULL_FRONT";
    _0x17dadd[_0x17dadd.LEG_RIGHT_FULL_SLEEVE = -0x2535906d] = "LEG_RIGHT_FULL_SLEEVE";
    _0x17dadd[_0x17dadd.LEG_RIGHT_LOWER_BACK = 0x7ad1809e] = "LEG_RIGHT_LOWER_BACK";
    _0x17dadd[_0x17dadd.LEG_RIGHT_LOWER_OUTER = -0x47aeefec] = 'LEG_RIGHT_LOWER_OUTER';
    _0x17dadd[_0x17dadd.LEG_RIGHT_LOWER_SLEEVE = -0x1827d025] = "LEG_RIGHT_LOWER_SLEEVE";
    _0x17dadd[_0x17dadd.LEG_RIGHT_UPPER_FRONT = 0x57965fdb] = "LEG_RIGHT_UPPER_FRONT";
    _0x17dadd[_0x17dadd.LEG_RIGHT_UPPER_OUTER = -0x639547cc] = "LEG_RIGHT_UPPER_OUTER";
    _0x17dadd[_0x17dadd.LEG_RIGHT_UPPER_SLEEVE = 0x2b85e02a] = "LEG_RIGHT_UPPER_SLEEVE";
    _0x17dadd[_0x17dadd.NECK_BACK = 0x3c5dd74d] = 'NECK_BACK';
    _0x17dadd[_0x17dadd.NECK_FRONT = 0x19fef5c2] = "NECK_FRONT";
    _0x17dadd[_0x17dadd.NECK_LEFT = 0x46221c87] = "NECK_LEFT";
    _0x17dadd[_0x17dadd.NECK_LEFT_BACK = -0x1cdd4906] = "NECK_LEFT_BACK";
    _0x17dadd[_0x17dadd.NECK_LEFT_FULL = -0x1085f33c] = "NECK_LEFT_FULL";
    _0x17dadd[_0x17dadd.NECK_RIGHT = -0x62aa9c2a] = "NECK_RIGHT";
    _0x17dadd[_0x17dadd.NECK_RIGHT_2 = 0x7e5b318e] = "NECK_RIGHT_2";
    _0x17dadd[_0x17dadd.NECK_RIGHT_FULL = 0x65d112d0] = "NECK_RIGHT_FULL";
    _0x17dadd[_0x17dadd.rank = -0x1ee74b82] = "rank";
    _0x17dadd[_0x17dadd.SIDE_RIGHT = -0x1b13a807] = "SIDE_RIGHT";
    _0x17dadd[_0x17dadd.STOMACH_FULL = 0x7be4ff0] = "STOMACH_FULL";
    _0x17dadd[_0x17dadd.STOMACH_LEFT = -0x579a9eaf] = "STOMACH_LEFT";
    _0x17dadd[_0x17dadd.STOMACH_MID = 0x51290f45] = "STOMACH_MID";
    _0x17dadd[_0x17dadd.STOMACH_RIGHT = -0x17248040] = "STOMACH_RIGHT";
    _0x17dadd[_0x17dadd.TORSO_SIDE_RIGHT = 0x5c499b74] = "TORSO_SIDE_RIGHT";
    _0x17dadd[_0x17dadd.torsoDecal = 0x1083ce80] = "torsoDecal";
  })(Zn ||= {});
  ;
  function delay(_0x38ad32) {
    return new Promise(_0x22928f => {
      setTimeout(_0x22928f, _0x38ad32);
    });
  }
  function ko(_0x1d68a4, _0x6ed9fb) {
    var _0x4deaf2 = true;
    var _0x313d50 = false;
    var _0x5c4dd8 = undefined;
    try {
      var _0x38afbc = Object.entries(_0x1d68a4)[Symbol.iterator]();
      for (var _0x46eac6; !(_0x4deaf2 = (_0x46eac6 = _0x38afbc.next()).done); _0x4deaf2 = true) {
        var _0x3912d7 = fo(_0x46eac6.value, 0x2);
        var _0x1c8d2f = _0x3912d7[0x0];
        var _0x298872 = _0x3912d7[0x1];
        var _0x3c49ce = true;
        var _0x81cb89 = false;
        var _0x3b7542 = undefined;
        try {
          var _0x82054e = Object.entries(_0x298872)[Symbol.iterator]();
          for (var _0x3694a9; !(_0x3c49ce = (_0x3694a9 = _0x82054e.next()).done); _0x3c49ce = true) {
            var _0x3020c1 = fo(_0x3694a9.value, 0x2);
            var _0x4eb761 = _0x3020c1[0x0];
            var _0x354a54 = _0x3020c1[0x1];
            var _0x442fd7 = true;
            var _0x2e93d4 = false;
            var _0x2917bc = undefined;
            try {
              var _0x12193e = _0x354a54[Symbol.iterator]();
              for (var _0x4862c9; !(_0x442fd7 = (_0x4862c9 = _0x12193e.next()).done); _0x442fd7 = true) {
                var _0x112bee = _0x4862c9.value;
                _0x6ed9fb(_0x112bee, _0x1c8d2f, _0x4eb761);
              }
            } catch (_0x237467) {
              _0x2e93d4 = true;
              _0x2917bc = _0x237467;
            } finally {
              try {
                if (!_0x442fd7 && _0x12193e["return"] != null) {
                  _0x12193e["return"]();
                }
              } finally {
                if (_0x2e93d4) {
                  throw _0x2917bc;
                }
              }
            }
          }
        } catch (_0x579512) {
          _0x81cb89 = true;
          _0x3b7542 = _0x579512;
        } finally {
          try {
            if (!_0x3c49ce && _0x82054e["return"] != null) {
              _0x82054e["return"]();
            }
          } finally {
            if (_0x81cb89) {
              throw _0x3b7542;
            }
          }
        }
      }
    } catch (_0x4f565c) {
      _0x313d50 = true;
      _0x5c4dd8 = _0x4f565c;
    } finally {
      try {
        if (!_0x4deaf2 && _0x38afbc["return"] != null) {
          _0x38afbc["return"]();
        }
      } finally {
        if (_0x313d50) {
          throw _0x5c4dd8;
        }
      }
    }
  }
  function iterateTattoosAndCallback(_0x363cca, _0x2390ce) {
    _0x363cca.tattoos.forEach(function (_0x391a30) {
      _0x2390ce(_0x391a30);
    });
  }
  function checkIfTattooIsUnique(_0x1ac06e) {
    var _0xab5f3 = typeof _0x1ac06e === "string" ? GetHashKey(_0x1ac06e) : _0x1ac06e;
    if (existingTattoos[_0xab5f3]) {
      return false;
    }
    return true;
  }
  function getTattooGender(_0x3f2596) {
    var _0x1a7427 = typeof _0x3f2596 === "string" ? GetHashKey(_0x3f2596) : _0x3f2596;
    if (existingTattoos[_0x1a7427]) {
      return existingTattoos[_0x1a7427];
    }
    return "male";
  }
  ;
  let karmaDATA;
  var AllClothingItemsAvail = {
    'clothing': {
      'male': {
        '1805577': "Gray Sports Coat",
        '9591114': "Black Vest",
        '11517899': "Yellow Tie",
        '14369200': "Red Check Shirt",
        '20209453': "Blue Striped V Neck",
        '20587512': "Pink Work Boots",
        '25041478': "Gray Skull",
        '26226804': "Buzzcut Light Brown",
        '28345148': "Brown Pig",
        '46033775': "Navy Work Boots",
        '47199156': "Tan Track Jacket",
        '53577457': "Faux Hawk Light Brown",
        '61327987': "Woodland Camo Cargo",
        '61925844': "Black Cargo Pants",
        '71415558': "Ranch Brown Jeans",
        '75511985': "Slicked Red",
        '76185134': "White V Neck",
        '84774122': "Ash Untucked",
        '85716640': "Brown Stripe Sweatpants",
        '86459936': "Faded Classic Blue Regular Fit",
        '93280275': "Green Track Jacket",
        '95366771': "Red Monster",
        '101450709': "Maroon Running",
        '101479919': "Gray Pants",
        '101930410': "Gray Skinny Tie",
        '102569511': "Eris Lime Sneakers",
        '106492687': "Gold Striped Tie",
        '109614714': "None",
        '113944368': "Gray Striped Leather Jacket",
        '118140672': "LC Salamanders Sweatband",
        '118321224': "Ranch Navy Jeans",
        '122763321': "Hipster Shaved Red",
        '123113066': "Orange V Neck",
        '127444597': "Money Polo Shirt",
        '143444124': "Side Parting Spiked Blond",
        '170513087': "Purple Tie",
        '197066948': "Navy Sweatband",
        '218995852': "Orange Bowtie",
        '240518526': "Gray Tank",
        '243284995': "Camo Skate Shoes",
        '247474770': "Red Sports Coat",
        '248239588': "Orange Track Pants",
        '252533914': "Black Chinos",
        '256978644': "Yellow Accent Athletic Shoes",
        '257774698': "Faded Blue Fitted",
        '266191167': "Tan Work Boots",
        '267800064': "Lavender Track Jacket",
        '267817878': "Gray Tank",
        '270046721': "Mustard Untucked",
        '270123206': "LC Penetrators Sweatband",
        '275802724': "White Skinny Tie",
        '278405942': "Coffee Oxfords",
        '286342539': "Crew T-Shirt",
        '288927141': "White Cargo",
        '295121446': "Brown Boots",
        '298864142': "Burgundy Athletic Shoes",
        '303168585': "Gray Vest",
        '309192703': "Desert Camo Cargo",
        '310006647': "Ranch Chocolate Jeans",
        '314940479': "Blue Tucked",
        '322643537': "Bloody Pig",
        '324295242': "White Carnival",
        '326119629': "Prolaps Orange Sneakers",
        '340555149': "Blue Track Jacket",
        '343693362': "Navy Chinos",
        '345227197': "Short Brushed Auburn",
        '351816411': "Sweatband 14",
        '354484839': "Pink Vest",
        '369666902': "Metal Polo Shirt",
        '375884230': "Dreads Auburn",
        '384677373': "Green Scarf",
        '391098640': "Yellow Bowtie",
        '392063630': "Mustard Regular Fit",
        '398996083': "Small Crew Emblem",
        '402724340': "Red Work Boots",
        '423958692': "Purple Hoodie",
        '453411217': "Gray Two-Tone Tee",
        '460092760': "Tan Chinos",
        '461290854': "Ponytail Blond",
        '474062067': "Slate Stripe Sweatpants",
        '477651806': "Black Athletic Shoes",
        '478638427': "Yellow Track Pants",
        '478716387': "White Tank",
        '482793616': "Charcoal Skate Shoes",
        '504199574': "Cream Oxfords",
        '507207612': "Red Striped Skinny Tie",
        '508560931': "Green Skinny Tie",
        '509472244': "Gray Chinos",
        '513129913': "Faux Hawk Dark Brown",
        '516830060': "Ash Untucked",
        '516928701': "Purple Stripe Sweatpants",
        '517816457': "Steel Untucked",
        '532739844': "Side Parting Spiked Auburn",
        '534103090': "Black Hoodie",
        '544122309': "Prolaps Green Sneakers",
        '553128934': "Chocolate Work Pants",
        '564094146': "Camo Work Boots",
        '564510064': "Purple Track Jacket",
        '566807934': "Prolaps Red Sneakers",
        '567270115': "Ice Polo Shirt",
        '569377011': "All Black Oxfords",
        '587565148': "Tan Hoodie",
        '589574030': "LS Panic Sweatband",
        '590767959': "Sky Blue Sweatband",
        '596681752': "Dreads Blond",
        '600286283': "Signs V Neck",
        '603619172': "Dust Devils Hockey",
        '604744317': "Olive Cargo Pants",
        '610588609': "Camo Boots",
        '613075786': "All Black Skate Shoes",
        '616584372': "Tan Cargo",
        '632607186': "Ponytail Black",
        '639737397': "Blue Work Pants",
        '643367845': "White Flip-Flops",
        '645107449': "LS Pounders Top",
        '645418037': "White Striped Polo Shirt",
        '647141917': "Two-Tone Track Jacket",
        '650869785': "Ranch Topaz Jeans",
        '651869567': "Forest Check Shirt",
        '659686189': "Tan Two-Tone Shoes",
        '667799593': "Faux Hawk Blond",
        '670462721': "Green Monster",
        '670525060': "Short Brushed Dark Brown",
        '707149072': "Slate Hoodie",
        '714423180': "Red Hoodie",
        '721304172': "Lavender Sweatpants",
        '728580043': "Blue Tucked",
        '732893110': "Green Stripe Track Pants",
        '739262273': "Gray Jacket",
        '747458616': "Yellow Stripe Sweatpants",
        '748422987': "Brown Track Jacket",
        '752836173': "Green Hoodie",
        '753577991': "None",
        '765431804': "Gray Shoes",
        '771586813': "Navy Skate Shoes",
        '774116302': "Side Parting Spiked Black",
        '775499368': "Gray Work Pants",
        '780162280': "Chopped Green",
        '782783757': "Black Running",
        '804415953': "Eris Leopard Sneakers",
        '807846522': "Ranch Faded Jeans",
        '810322475': "Hipster Shaved Light Brown",
        '811875105': "No Crew Emblem",
        '819070185': "Tan Plaid Skinny Tie",
        '823780610': "Black Untucked",
        '845863817': "Burgundy Tucked",
        '847376439': "Olive Cargo",
        '850443038': "Gray Sports Coat",
        '853075942': "Two-Tone Skate Shoes",
        '856849768': "Pro Lite Polo Shirt",
        '867523898': "Moss Untucked",
        '878918328': "Tan Work Pants",
        '888739968': "Ranch Gray Jeans",
        '900355096': "Brown Hoodie",
        '919753925': "Slate Jacket",
        '926927675': "Orange V Neck",
        '928902806': "Pink Pig",
        '932732666': "Tan Check Shirt",
        '936852646': "Red Track Jacket",
        '938028625': "Gray Chinos",
        '943532242': "Red Track Pants",
        '954604374': "Cornrows Light Brown",
        '955045947': "Green Hoodie",
        '960270715': "Blue Skate Shoes",
        '960945022': "Black Tucked",
        '967026640': "Three-Way Shoes",
        '973488388': "Black Track Jacket",
        '973894822': "Faux Hawk Auburn",
        '979872378': "Deep Blue Fitted",
        '981727630': "Gray Hoodie",
        '984597019': "Long Hair Purple Fade",
        '986544139': "Green Bowtie",
        '1000416720': "Light Blue Ranch",
        '1015676322': "Red Hoodie",
        '1039191942': "Vibe Polo Shirt",
        '1043699675': "Pikeys T-Shirt",
        '1044103707': "Tan Ape",
        '1044413501': "Brown V Neck",
        '1056137210': "Gray Vest",
        '1062830403': "Navy Bowtie",
        '1064185880': "Tan Chinos",
        '1078760055': "Orange Kicks",
        '1084479224': "Red Sports Coat",
        '1101016274': "Hipster Shaved Black",
        '1101742549': "Gray Plaid Chinos",
        '1109161953': "Black Tank",
        '1113848471': "Red Untucked",
        '1142956313': "Stone Boards",
        '1151089881': "Green Carnival",
        '1165299576': "Purple Hoodie",
        '1166542136': "Navy Track Jacket",
        '1174073943': "Orange Hoodie",
        '1174536651': "White Untucked",
        '1184268873': "G&B V Neck",
        '1185215133': "Purple Shoes",
        '1188165268': "Silver Tucked",
        '1191049050': "Blue Sports Coat",
        '1191472257': "Stone Bowtie",
        '1198149925': "Camo Hoodie",
        '1199829879': "Splatter Sweatpants",
        '1205172440': "Red Tank",
        '1205703151': "Tan Skate Shoes",
        '1210477891': "Dreads Light Brown",
        '1213094431': "Red Skinny Tie",
        '1221632152': "Tan Boots",
        '1222760308': "Burgundy Chelsea Boots",
        '1226939766': "Gray Cargo",
        '1227323456': "Brown Work Boots",
        '1230549359': "Shorter Cut Dark Brown",
        '1232760752': "Brown V Neck",
        '1246935651': "Orange Sports Shoes",
        '1251010327': "Black Work Pants",
        '1257360950': "LS Pounders Top",
        '1257687670': "Green Shoes",
        '1260437451': "Cornrows Dark Brown",
        '1261754764': "Orange Cargo",
        '1263669448': "Green Track Jacket",
        '1271556921': "Blue Polo Shirt",
        '1272875420': "None",
        '1273971056': "Hipster Shaved Blond",
        '1274166057': "Gold Striped Skinny Tie",
        '1274398329': "Slate Jeans",
        '1278942020': "Sky Untucked",
        '1286705029': "All White Canvas Shoes",
        '1293261954': "White Running",
        '1303838081': "Black Vest",
        '1303890723': "Slicked Auburn",
        '1308189078': "Brown Ape",
        '1319026793': "White Monster",
        '1325314011': "Yellow Kicks",
        '1329369580': "Large Crew Emblem",
        '1331437172': "Blue Striped V Neck",
        '1335804426': "Biker Dark Brown",
        '1340097918': "Red Sports Shoes",
        '1340315182': "Gray Chelsea Boots",
        '1343731570': "Sunshine Polo Shirt",
        '1365487050': "White Scarf",
        '1371026762': "Green Kicks",
        '1372382710': "Brown Hoodie",
        '1379199514': "Ochre Chelsea Boots",
        '1380090629': "Brown Bowtie",
        '1404477845': "Blue Track Jacket",
        '1412435848': "Blue Jacket",
        '1422176241': "Ponytail Dark Brown",
        '1422683113': "Lavender Hoodie",
        '1425845385': "Red Bowtie",
        '1443355954': "Gray Kicks",
        '1443802705': "All Gray Skate Shoes",
        '1447481298': "Stone Skinny Tie",
        '1448481388': "Lurid Check Shirt",
        '1452676721': "Yellow Sweatband",
        '1454184099': "Green Sweatband",
        '1455842578': "Side Parting Spiked Blue",
        '1465137627': "Red Cargo",
        '1467297431': "Blue Boots",
        '1470141480': "Prolaps Red Accent Sneakers",
        '1470626002': "Navy Skinny Tie",
        '1470903601': "Yellow Accent Sports Shoes",
        '1471930522': "Classic White Kicks",
        '1488225553': "Royale Polo Shirt",
        '1491347172': "Green V Neck",
        '1497012052': "Eris Blue Accent Sneakers",
        '1503092123': "Sky Blue Athletic Shoes",
        '1507716691': "Brown Suede Jacket",
        '1511809734': "Ranch Black Jeans",
        '1516163117': "Stank T-Shirt",
        '1519265992': "White Tank",
        '1520190511': "Orange Boots",
        '1522521543': "Black Diamond Earrings",
        '1532062559': "Blue-Gray Shoes",
        '1536754507': "Gray Banded Leather Jacket",
        '1552791767': "Signs V Neck",
        '1555581774': "Slate Kicks",
        '1556132773': "Red Track Jacket",
        '1563520747': "Red Shoes",
        '1568425515': "Brown Cargo",
        '1577191213': "Brown Suede Jacket",
        '1578312211': "Copper Work Boots",
        '1585364939': "Navy Untucked",
        '1590020700': "Black Sports Coat",
        '1595662716': "Two-Tone Plaid Skinny Tie",
        '1598720848': "Long Hair Blond",
        '1602209127': "Ponytail Light Brown",
        '1611629377': "Green Cargo",
        '1620698865': "Green Sports Shoes",
        '1656332028': "Orange Check Shirt",
        '1659866947': "Gray Two-Tone Sports",
        '1665429749': "Three-Way Athletic Shoes",
        '1670772447': "Slicked Blond",
        '1679976146': "Checked Skate Shoes",
        '1690940124': "Gray Sweatband",
        '1691058425': "Red Hockey",
        '1697892884': "Beige Boots",
        '1698168396': "Black Carnival",
        '1706799415': "Forest Check Shirt",
        '1708798107': "Eris Three-Way Sneakers",
        '1717406861': "Caesar Black",
        '1730909195': "Wine Chelsea Boots",
        '1731212095': "Eris Sky Blue Sneakers",
        '1731535378': "Salmon Polo Shirt",
        '1731835024': "White Hoodie",
        '1740367552': "Black Skull",
        '1749960382': "Navy Canvas Shoes",
        '1752807992': "Purple Sweatband",
        '1752893092': "Black Fitted",
        '1753023029': "Charcoal Chinos",
        '1757053595': "Red Kicks",
        '1766120569': "Eris Black Sneakers",
        '1775345446': "Sky Blue Tee",
        '1777199902': "Red Polo Shirt",
        '1780737144': "Gray Two-Tone Athletic Shoes",
        '1790024815': "Blue Stripe Track Pants",
        '1798330516': "Red Skate Shoes",
        '1799874669': "Elite Leopard Kicks",
        '1806192055': "Teal Wingtip Chelsea Boots",
        '1806295686': "Purple Cargo",
        '1810192986': "Black Bowtie",
        '1816375824': "Lemon Check Shirt",
        '1816995217': "Gray Track Jacket",
        '1821930656': "Charcoal T-Shirt",
        '1835244227': "Yellow Check Shirt",
        '1835428291': "Red Boots",
        '1846877834': "Slate Hoodie",
        '1852742483': "Navy Tie",
        '1867229213': "Purple Skinny Tie",
        '1878264177': "Cornrows Black",
        '1878843997': "Purple Bowtie",
        '1883334378': "Ponytail Auburn",
        '1895451319': "Gray Splatter Hoodie",
        '1898547216': "Blue Two-Tone Sports Shoes",
        '1901826666': "Slicked Black",
        '1905340381': "Long Hair Black",
        '1906533846': "Blue Bowtie",
        '1922215343': "Brown Regular Fit",
        '1923819586': "Eris T-Shirt",
        '1926881239': "Yellow Track Jacket",
        '1935974176': "Gray Track Pants",
        '1954751718': "Navy Regular Fit",
        '1956677630': "Shorter Cut Blond",
        '1959522198': "Sport Work Pants",
        '1997284730': "White Hockey",
        '2016696749': "Red Striped Sweatband",
        '2018947130': "Close Shave",
        '2029591638': "Blue Accent Athletic Shoes",
        '2034776476': "Game Track Pants",
        '2036951201': "Butter Untucked",
        '2037019912': "Olive Skate Shoes",
        '2038700205': "Ash Sports Shoes",
        '2046690777': "Elite Snakeskin Kicks",
        '2047390691': "Caesar Blond",
        '2055677492': "Black Kicks",
        '2061124207': "Long Hair Light Brown",
        '2063163142': "Burgundy Tucked",
        '2065626602': "Coffee Boots",
        '2066953829': "Cobra Slip-Ons",
        '2070771935': "Beige Oxfords",
        '2074992821': "Luxury Sports Coat",
        '2083148997': "Forest Untucked",
        '2087125972': "Gray Scarf",
        '2088132051': "Prolaps Cyan Sneakers",
        '2089532473': "Blue Cargo",
        '2090179567': "Biker Auburn",
        '2092457551': "Prolaps Red Sneakers",
        '2095039049': "Worn Light Blue Regular Fit",
        '2096151617': "Gray Splatter Hoodie",
        '2101623038': "Red Tie",
        '2106644897': "Orange Plaid Bowtie",
        '2108626179': "Red Leather Jacket",
        '2110337106': "Coffee Shoes",
        '2112775457': "Pink Sweatband",
        '2117177569': "Multi-Logo T-Shirt",
        '2123961294': "Short Brushed Black",
        '2126079541': "Camo Hoodie",
        '2131256244': "Tan Check Shirt",
        '2131711911': "Ash Check Shirt",
        '2132227364': "Gray Flip-Flops",
        '2133933662': "Ash Check Shirt",
        '2142178904': "Gray Striped Boots",
        '-869913515': "Crew T-Shirt",
        '-668711855': "Yeti T-Shirt",
        '-1163281833': "Eris T-Shirt",
        '-354326069': "Charcoal T-Shirt",
        '-1264353968': "Stank T-Shirt",
        '-2029313504': "Ranch T-Shirt",
        '-486745482': "Pikeys T-Shirt",
        '-1804026513': "Sweatbox T-Shirt",
        '-223225219': "Ash V Neck",
        '-1885367210': "Swallow V Neck",
        '-1649397637': "Harsh Souls V Neck",
        '-1135972945': "Broker V Neck",
        '-1443641086': "Hip-Hop Royalty V Neck",
        '-303718553': "Pinstripe Vest",
        '-1104748965': "Pink Vest",
        '-1830380649': "Steel Untucked",
        '-1487033549': "Azure Untucked",
        '-1004765694': "Black Untucked",
        '-344240961': "Sky Untucked",
        '-1599621351': "Navy Untucked",
        '-728788463': "White Tucked",
        '-834789593': "Green Plaid Tucked",
        '-1961857111': "Blue Check Shirt",
        '-2019530551': "Yellow Check Shirt",
        '-1633606911': "Mint Check Shirt",
        '-1211902650': "Gray Check Shirt",
        '-1052907462': "Patriot Check Shirt",
        '-1245428456': "Fruity Check Shirt",
        '-1003167243': "Aqua Check Shirt",
        '-1182806901': "Charcoal Check Shirt",
        '-1462686930': "Teal Check Shirt",
        '-1629939906': "Red Check Shirt",
        '-2100420213': "Brown Track Jacket",
        '-1355253153': "Tan Track Jacket",
        '-819840466': "Lavender Track Jacket",
        '-1112336560': "Bounce Track Jacket",
        '-336202795': "Game Track Jacket",
        '-634728385': "Fireball Track Jacket",
        '-502689528': "Navy Track Jacket",
        '-1685814273': "Orange Track Jacket",
        '-1196048799': "Yellow Track Jacket",
        '-1091089692': "Purple Track Jacket",
        '-452812873': "Black Sports Coat",
        '-76018008': "Blue Sports Coat",
        '-1641327608': "Luxury Sports Coat",
        '-344473566': "Black Tank",
        '-605158333': "Silver Stripe Leather Jacket",
        '-365780788': "Blue Stripe Leather Jacket",
        '-312498470': "Red Leather Jacket",
        '-1087288706': "White Leather Jacket",
        '-789910031': "Blue Leather Jacket",
        '-1566207641': "Lonewolf Leather Jacket",
        '-1989058821': "Gray Striped Leather Jacket",
        '-1216416890': "White Hoodie",
        '-786454841': "Sky Blue Hoodie",
        '-1093795292': "Navy Hoodie",
        '-617858328': "Orange Hoodie",
        '-1051195584': "Yellow Hoodie",
        '-565702883': "Red Accent Tee",
        '-1091324275': "Sky Blue Tee",
        '-1767512590': "Slate Tee",
        '-2082193297': "Gray Two-Tone Tee",
        '-2076058581': "White Striped Polo Shirt",
        '-1370279859': "Metal Polo Shirt",
        '-63205445': "Hunter Polo Shirt",
        '-1682044125': "Night Polo Shirt",
        '-838537296': "Cupcake Polo Shirt",
        '-1332071955': "None",
        '-564216679': "Black Pig",
        '-1828438700': "Silver Skull",
        '-2127652439': "Bone Skull",
        '-184281949': "Pogo",
        '-1403351006': "Black Bloody Hockey",
        '-487093356': "Green Ape",
        '-189124839': "Pink Ape",
        '-384105000': "Blue Carnival",
        '-2132237060': "Black Monster",
        '-880402182': "Eris Ash Sneakers",
        '-1981613908': "Eris Two-Tone Sneakers",
        '-2004781599': "Prolaps Yellow Sneakers",
        '-1044387747': "Eris Tan Sneakers",
        '-1858485900': "Black Skate Shoes",
        '-231668891': "Gray Skate Shoes",
        '-487103246': "Slate Skate Shoes",
        '-707442002': "Pink Skate Shoes",
        '-946295243': "Brown Skate Shoes",
        '-378727721': "Viper Slip-Ons",
        '-1307696102': "Gray Slip-Ons",
        '-848242490': "Beige Slip-Ons",
        '-867762559': "Urban Work Boots",
        '-657566935': "White Work Boots",
        '-352061548': "Blue Work Boots",
        '-210761628': "Beige Work Boots",
        '-1733191849': "Teal Work Boots",
        '-1492962310': "Pixel Work Boots",
        '-200290798': "Money Work Boots",
        '-845479639': "Black Work Boots",
        '-564092236': "Ash Work Boots",
        '-1402771516': "Charcoal Boots",
        '-1160575837': "Black Boots",
        '-1040546912': "Three-Way Boots",
        '-675172562': "Sepia Boots",
        '-2001170147': "Two-Tone Boots",
        '-855037681': "Olive Boots",
        '-550515364': "Navy Boots",
        '-345727877': "All Black Chelsea Boots",
        '-156060905': "Brown Chelsea Boots",
        '-696114323': "Black Wingtip Chelsea Boots",
        '-1266688151': "Acid Chelsea Boots",
        '-1564394516': "Hawthorn Chelsea Boots",
        '-1107234197': "Copper Wingtip Chelsea Boots",
        '-772314719': "Black Chelsea Boots",
        '-1549234940': "Tan Chelsea Boots",
        '-1384013642': "Brown Wingtip Chelsea Boots",
        '-12532685': "Aqua Chelsea Boots",
        '-1787465570': "White Chelsea Boots",
        '-536742495': "Yellow Running Shoes",
        '-1593950193': "Silver Running Shoes",
        '-2002139629': "Luxury Boat Shoes",
        '-850657307': "Plaid Shoes",
        '-1702225310': "Patriot Shoes",
        '-1612241636': "Charcoal Two-Tone Shoes",
        '-297975353': "Baby Blue Shoes",
        '-2013465272': "Umber Shoes",
        '-806136667': "Black Shoes",
        '-1574635255': "Silver Shoes",
        '-1106677197': "All Black Canvas Shoes",
        '-1355557752': "Red Canvas Shoes",
        '-1847764304': "Black Flip-Flops",
        '-893760407': "Olive Flip-Flops",
        '-1159204228': "Charcoal White Socks",
        '-1323704608': "Indigo White Socks",
        '-1966687438': "All-White Sports Shoes",
        '-77628267': "Blue Sports Shoes",
        '-1861769241': "Yellow Sports Shoes",
        '-2099082339': "Urban Camo Sports Shoes",
        '-1265602824': "Deep Forest Sports",
        '-1513729692': "Purple Sports Shoes",
        '-1891285969': "Black Sports Shoes",
        '-2081411683': "Olive Sports Shoes",
        '-1486621564': "Classic Trio Sports",
        '-1767484663': "Two-Tone Sports Shoes",
        '-1183834793': "All-White Athletic Shoes",
        '-288913411': "Gray Athletic Shoes",
        '-389586495': "Red Athletic Shoes",
        '-692765283': "Purple Athletic Shoes",
        '-950100240': "Green Athletic Shoes",
        '-1255015785': "Leopard Athletic Shoes",
        '-1249634965': "Blue Athletic Shoes",
        '-469306768': "Yellow Athletic Shoes",
        '-1066194103': "Orange Athletic Shoes",
        '-1628115185': "Lime Accent Kicks",
        '-1926542468': "Purple Kicks",
        '-771697370': "Citrus Kicks",
        '-1080676271': "Blue Kicks",
        '-192767443': "Orange Accent Kicks",
        '-466290290': "Burgundy Kicks",
        '-1869132160': "Buzzcut Dark Brown",
        '-203254503': "Buzzcut Auburn",
        '-419071141': "Buzzcut Blond",
        '-680338378': "Buzzcut Black",
        '-38366717': "Short Brushed Light Brown",
        '-262572211': "Short Brushed Blond",
        '-1849481085': "Spikey Dark Brown",
        '-2075554416': "Spikey Light Brown",
        '-298557084': "Spikey Auburn",
        '-487634214': "Spikey Blond",
        '-621757731': "Spikey Black",
        '-861594042': "Spikey Blue",
        '-1351541069': "Caesar Dark Brown",
        '-434828278': "Caesar Light Brown",
        '-723555953': "Caesar Auburn",
        '-857140565': "Chopped Dark Brown",
        '-397915799': "Chopped Light Brown",
        '-164010677': "Chopped Auburn",
        '-2054552594': "Chopped Blond",
        '-1582023614': "Chopped Black",
        '-1158589741': "Dreads Dark Brown",
        '-238370675': "Dreads Black",
        '-1379555255': "Long Hair Dark Brown",
        '-1928075550': "Long Hair Auburn",
        '-678416465': "Faux Hawk Black",
        '-982611092': "Faux Hawk Purple",
        '-1970684252': "Hipster Shaved Dark Brown",
        '-1509460577': "Hipster Shaved Auburn",
        '-93508515': "Side Parting Spiked Dark Brown",
        '-449838621': "Side Parting Spiked Light Brown",
        '-1856650904': "Shorter Cut Light Brown",
        '-1512117638': "Shorter Cut Auburn",
        '-2109594815': "Shorter Cut Black",
        '-1777841467': "Shorter Cut Green",
        '-1907605668': "Biker Light Brown",
        '-1463028645': "Biker Blond",
        '-1275196721': "Biker Black",
        '-515611301': "Biker Purple Fade",
        '-1052210949': "Ponytail Purple",
        '-1953578842': "Cornrows Auburn",
        '-2094747694': "Cornrows Blond",
        '-1639617471': "Slicked Dark Brown",
        '-1342697566': "Slicked Light Brown",
        '-20014842': "Yeti T-Shirt",
        '-1770698663': "Ranch T-Shirt",
        '-1449922922': "Multi-Logo T-Shirt",
        '-821282366': "Sweatbox T-Shirt",
        '-2040071459': "White V Neck",
        '-1809443237': "Ash V Neck",
        '-1345335890': "Swallow V Neck",
        '-1114478285': "Harsh Souls V Neck",
        '-883063611': "Broker V Neck",
        '-623434824': "Hip-Hop Royalty V Neck",
        '-268939782': "Green V Neck",
        '-38868633': "G&B V Neck",
        '-1696426033': "Slate Jacket",
        '-794983612': "Gray Jacket",
        '-547413817': "Blue Jacket",
        '-1841148622': "Pinstripe Vest",
        '-2083124615': "White Untucked",
        '-390441707': "Forest Untucked",
        '-622642841': "Azure Untucked",
        '-139070917': "Red Untucked",
        '-907012432': "Moss Untucked",
        '-413314678': "Mustard Untucked",
        '-1331534795': "Butter Untucked",
        '-602296604': "White Tucked",
        '-378320489': "Silver Tucked",
        '-399211016': "Green Plaid Tucked",
        '-1901489147': "Black Tucked",
        '-764029202': "Blue Check Shirt",
        '-575853783': "Mint Check Shirt",
        '-294728532': "Gray Check Shirt",
        '-1205247966': "Patriot Check Shirt",
        '-889977417': "Lurid Check Shirt",
        '-1828624898': "Lemon Check Shirt",
        '-1534097126': "Orange Check Shirt",
        '-1208537111': "Fruity Check Shirt",
        '-935702417': "Aqua Check Shirt",
        '-614795600': "Charcoal Check Shirt",
        '-310043900': "Teal Check Shirt",
        '-1601291453': "Two-Tone Track Jacket",
        '-1880974868': "Gray Track Jacket",
        '-475597474': "Bounce Track Jacket",
        '-242183883': "Game Track Jacket",
        '-942391879': "Fireball Track Jacket",
        '-1054245767': "Black Track Jacket",
        '-2142537030': "Orange Track Jacket",
        '-1095569140': "Red Tank",
        '-807421589': "Silver Stripe Leather Jacket",
        '-516924404': "Blue Stripe Leather Jacket",
        '-1995691075': "White Leather Jacket",
        '-1707422182': "Blue Leather Jacket",
        '-1517230906': "Lonewolf Leather Jacket",
        '-107377458': "Gray Banded Leather Jacket",
        '-511989414': "Gray Hoodie",
        '-213856446': "Tan Hoodie",
        '-719809806': "Lavender Hoodie",
        '-207270483': "Black Hoodie",
        '-53518335': "Sky Blue Hoodie",
        '-1892743998': "Navy Hoodie",
        '-664496340': "Yellow Hoodie",
        '-1568778666': "Red Accent Tee",
        '-1782647040': "Slate Tee",
        '-1767360528': "Pro Lite Polo Shirt",
        '-464301243': "Ice Polo Shirt",
        '-98533665': "Money Polo Shirt",
        '-942826950': "Hunter Polo Shirt",
        '-845961786': "Red Polo Shirt",
        '-1471128784': "Sunshine Polo Shirt",
        '-61376524': "Night Polo Shirt",
        '-813425070': "Cupcake Polo Shirt",
        '-1286281740': "Blue Polo Shirt",
        '-1589231145': "Vibe Polo Shirt",
        '-1761333933': "Salmon Polo Shirt",
        '-2036298612': "Royale Polo Shirt",
        '-960312988': "Worn Black Regular Fit",
        '-696093299': "Black Regular Fit",
        '-957393305': "Teal Regular Fit",
        '-1255361822': "White Regular Fit",
        '-1417044068': "Crimson Regular Fit",
        '-610929910': "Faded Light Blue Regular Fit",
        '-1376839747': "Tan Regular Fit",
        '-526156519': "Faded Dark Blue Regular Fit",
        '-1293344347': "Gray Regular Fit",
        '-372994213': "Dark Blue Regular Fit",
        '-68111437': "Stone Regular Fit",
        '-1298511993': "Ranch Purple Jeans",
        '-53716026': "Ranch Blue Jeans",
        '-426660015': "Widow Jeans",
        '-667577703': "Ranch Tan Jeans",
        '-570987918': "Ranch Silver Jeans",
        '-1512506826': "Ranch Patriot Jeans",
        '-1400043614': "Ranch Olive Jeans",
        '-1340356081': "Black Pants",
        '-1823928214': "Blue Pants",
        '-747157014': "Black Baggy Pants",
        '-450564795': "Gray Baggy Pants",
        '-908216649': "Blue Baggy Pants",
        '-555928200': "Charcoal Running",
        '-2000577359': "Off-White Cargo",
        '-1840158780': "Winter Camo Cargo",
        '-682116640': "Black Cargo",
        '-1533225877': "Urban Camo Cargo",
        '-1177244673': "White Stripe Track Pants",
        '-1312576878': "Brown Stripe Track Pants",
        '-1070741658': "Tan Track Pants",
        '-831560727': "Lavender Track Pants",
        '-2029628136': "Fireball Track Pants",
        '-585731454': "Black Track Pants",
        '-1763613159': "Blue Track Pants",
        '-2037922458': "Navy Track Pants",
        '-1309631441': "Purple Track Pants",
        '-1926705153': "Gray Fitted",
        '-1580287299': "White Stripe Sweatpants",
        '-1821368832': "Gray Stripe Sweatpants",
        '-757200347': "Tan Stripe Sweatpants",
        '-2117605378': "Camo Sweatpants",
        '-1113230742': "Black Stripe Sweatpants",
        '-1344022809': "Blue Stripe Sweatpants",
        '-175644118': "Navy Stripe Sweatpants",
        '-406436185': "Red Stripe Sweatpants",
        '-1592411833': "Green Stripe Sweatpants",
        '-1823007286': "Orange Stripe Sweatpants",
        '-1479972750': "Foam Boards",
        '-1920453648': "Seal Boards",
        '-1182505766': "Squared Boards",
        '-744280765': "Teal Work Pants",
        '-1981343284': "Berry Work Pants",
        '-1146684085': "Khaki Work Pants",
        '-445296409': "Sky Blue Work Pants",
        '-1759824844': "Navy Work Pants",
        '-379116347': "White Work Pants",
        '-148062128': "Olive Work Pants",
        '-885299090': "Forest Work Pants",
        '-641104502': "Resort Work Pants",
        '-1346522765': "Ash Work Pants",
        '-1899657848': "Sky Blue Chinos",
        '-185873346': "Khaki Cargo Pants",
        '-1930652533': "Urban Cargo Pants",
        '-1700122618': "Fire Cargo Pants",
        '-372453822': "Tundra Cargo Pants",
        '-132945201': "Black Camo Cargo Pants",
        '-2036496411': "Woodland Camo Cargo Pants",
        '-1829298024': "Ice Cargo Pants",
        '-14294862': "Purple Cargo Pants",
        '-327304350': "Navy Cargo Pants",
        '-1094197257': "Orange Cargo Pants",
        '-855212940': "Brown Cargo Pants",
        '-1698949152': "Taupe Cargo Pants",
        '-715715295': "Hawthorn Cargo Pants",
        '-550756149': "Earth Cargo Pants",
        '-1769157861': "No Tie",
        '-1480962951': "Silver Chain",
        '-653840622': "Gold Chain",
        '-1004206770': "Bronze Chain",
        '-1514665499': "White Tie",
        '-1219908344': "Gray Tie",
        '-616620776': "Brown Tie",
        '-30776594': "Stone Tie",
        '-1317516917': "Two-Tone Plaid Tie",
        '-1564365794': "Tan Plaid Tie",
        '-1735026806': "Red Striped Tie",
        '-1052589830': "Black Tie",
        '-758029289': "Blue Tie",
        '-1979755916': "Green Tie",
        '-1665533975': "Orange Tie",
        '-1950442996': "White Bowtie",
        '-1640481025': "Gray Bowtie",
        '-1898021828': "Blue Plaid Bowtie",
        '-1420020425': "Earth Bowtie",
        '-1610211701': "Red Plaid Bowtie",
        '-2079478889': "Brown Skinny Tie",
        '-203771591': "Black Skinny Tie",
        '-453504140': "Blue Skinny Tie",
        '-1935646010': "Orange Skinny Tie",
        '-2112795224': "Yellow Skinny Tie",
        '-637229925': "None",
        '-1701100584': "Silver Chain",
        '-1351520892': "Gold Chain",
        '-1121384205': "Bronze Chain",
        '-907430887': "Silver Diamond Earrings",
        '-667135810': "Gold Diamond Earrings",
        '-1685348253': "Black Sweatband",
        '-1303196175': "Red Sweatband",
        '-379882590': "Blue Sweatband",
        '-1145628582': "Sweatband 15",
        '-1143013407': "White Scarf",
        '-1075181577': "Gray Scarf",
        '-776918139': "Black Scarf",
        '-526988976': "Navy Scarf",
        '-227644161': "Red Scarf",
        '-1373771967': "Black Scarf",
        '-416917167': "Navy Scarf",
        '-1721811516': "Red Scarf",
        '-968714358': "Green Scarf",
        '-340145303': "None",
        '-1807249673': "None",
        '-81800198': "Brown Digital Flight Cap",
        '-143021512': "Tan Flight Cap",
        '-1522694719': "Aqua Camo Flight Cap",
        '-2114843225': "Back Crew Emblem",
        '-312478764': "Brown Closed Flight",
        '-1608361638': "Black Closed Flight",
        '-1864058145': "Gray Closed Flight",
        '-1531288950': "Teal Closed Flight",
        '-1251212323': "Navy Closed Flight",
        '-67341064': "Green Open Flight",
        '-298231438': "Brown Open Flight",
        '-2063034275': "Dark Bigness SN Hockey",
        '-1757791040': "Blue Bigness SN Hockey",
        '-1832879890': "Fall Hockey",
        '-1540663646': "Light Bigness SN Hockey",
        '-1278609953': "Purple Bigness SN Hockey",
        '-1108342229': "Dark Camo Hockey",
        '-801788234': "Light Camo Hockey",
        '-652164980': "Purple Camo Hockey",
        '-328505567': "Woodland Camo Hockey",
        '-2054907547': "Abstract Hockey",
        '-1751761528': "Geometric Hockey",
        '-1635360030': "Purple Flash Retro Runners",
        '-396527985': "Midnight Retro Runners",
        '-214116786': "Pink Flash Retro Runners",
        '-1658312138': "White & Orange Retro Runners",
        '-1957034342': "Vibrant Retro Runners",
        '-1028328113': "Ash Retro Runners",
        '-1327607390': "Sage Retro Runners",
        '-468862976': "All Gray Retro Runners",
        '-758934164': "Blue Retro Runners",
        '-620274717': "Sunset Retro Runners",
        '-785870586': "Grayscale Retro Runners",
        '-76651119': "Blue Flash Retro Runners",
        '-182167299': "White Retro Runners",
        '-247180987': "Graphite Retro Runners",
        '-470468953': "Mocha Retro Runners",
        '-934267275': "Green Retro Runners",
        '-1157489703': "Cream & Pink Retro Runners",
        '-292577959': "All Gray Retro Runners",
        '-905194414': "Red Retro Runners",
        '-533010047': "Sunset Retro Runners",
        '-777462076': "Grayscale Retro Runners",
        '-2131772077': "Blue Flash Retro Runners",
        '-1824693778': "Graphite Retro Runners",
        '-2004923278': "Mocha Retro Runners",
        '-2071645677': "Green Retro Runners",
        '-1145626502': "Cream & Pink Retro Runners",
        '-838220513': "Black & Red Retro Runners",
        '-157503442': "White & Orange Bigness Jersey",
        '-46533491': "Pink & Black Bigness Jersey",
        '-946304689': "Red & Black Bigness Jersey",
        '-698177821': "Teal Bigness Jersey",
        '-1379936866': "Yellow Bigness Jersey",
        '-1547105660': "White & Purple Bigness Jersey",
        '-1243435337': "Blue Bigness Jersey",
        '-1760988923': "Purple Bigness Jersey",
        '-313221734': "White & Gold Bigness Jersey",
        '-941872478': "Red Prolaps Closed",
        '-1961235818': "Purple & White SN Closed",
        '-993206789': "Green Ornate SN Closed",
        '-762676874': "Orange Ornate SN Closed",
        '-26570817': "Black SN Leather Closed",
        '-1064692733': "Color Geo SN Leather Closed",
        '-755025683': "Gold Geo SN Leather Closed",
        '-563654723': "Color Geo PRB Leather Closed",
        '-145178272': "Orange Dotted Leather Closed",
        '-1065495637': "Blue Dotted Leather Closed",
        '-233523496': "Moss Leopard Leather Closed",
        '-1526588236': "Pale Leopard Leather Closed",
        '-695074861': "Magenta Leopard Leather Closed",
        '-2022743609': "Spotted Bigness Leather Closed",
        '-1249438332': "Brown SN Leather Open",
        '-482479887': "Black SN Leather Open",
        '-653992833': "Multi-Color SN Leather Open",
        '-1593971578': "Color Geo SN Leather Open",
        '-1957707478': "Gold Geo SN Leather Open",
        '-1712034615': "Blue Dotted Leather Open",
        '-15288560': "Pale Leopard Leather Open",
        '-264005270': "Magenta Leopard Leather Open",
        '-1389587639': "Zebra Bigness Leather Open",
        '-1015948224': "Green Didier Sachs Closed Field",
        '-1985124168': "Gray Didier Sachs Closed Field",
        '-614493984': "Gray Didier Sachs Open Field",
        '-383865762': "Red Didier Sachs Open Field",
        '-1861978582': "Black & Neon Puffer",
        '-2135698039': "Dark Painted Puffer",
        '-218490942': "Urban Gradient Puffer",
        '-453182524': "Cool Gradient Puffer",
        '-716219287': "Green Gradient Puffer",
        '-1462959259': "Dusk Gradient Puffer",
        '-605591151': "Moss Leopard Puffer",
        '-844247778': "Pale Leopard Puffer",
        '-1027426488': "Cyan Leopard Puffer",
        '-1266705726': "Magenta Leopard Puffer",
        '-150817111': "White Manor Zigzag T-Shirt",
        '-1044047058': "Teal Blagueurs LS T-Shirt",
        '-1147203842': "Salmon Santo Capra T-Shirt",
        '-898519901': "Blue Santo Capra T-Shirt",
        '-666613688': "Yellow Santo Capra T-Shirt",
        '-273451226': "Pink Santo Capra T-Shirt",
        '-1374116654': "White Manor T-Shirt",
        '-833735836': "Blue Striped Santo Capra T-Shirt",
        '-1677721439': "Lilac Manor T-Shirt",
        '-1520987288': "White Striped Manor T-Shirt",
        '-1073100596': "Green Globe Blagueurs T-Shirt",
        '-775132079': "Purple Globe Blagueurs T-Shirt",
        '-1124319348': "Beige Striped Blagueurs Track",
        '-1427203215': "Pink Striped Blagueurs Track",
        '-118365971': "Yellow Ornate SC Track",
        '-1271179351': "Pink Ornate SC Track",
        '-1105935939': "Mint Striped Blagueurs Track",
        '-1128317162': "Mint Blagueurs Track",
        '-1424909381': "Sand & Purple Güffy Track",
        '-2097982173': "Pink Cardigan",
        '-1483084705': "Green Cardigan",
        '-169166116': "Red Cardigan",
        '-397664353': "White & Gray Cardigan",
        '-1391646430': "Light Brown Cardigan",
        '-1620013591': "Midnight Purple Cardigan",
        '-928325539': "Blue & Cyan Cardigan",
        '-1075978258': "Azure Pattern Sweater",
        '-2002226812': "Sunrise Pattern Sweater",
        '-1956198704': "Blue Motif Sweater",
        '-1684281542': "Red Motif Sweater",
        '-1344532546': "Green Botanical Sweater",
        '-1056558574': "Purple Botanical Sweater",
        '-750725497': "White Botanical Sweater",
        '-457967251': "Pink Botanical Sweater",
        '-1268442920': "Red Floral Sweater",
        '-975914057': "Blue Floral Sweater",
        '-1703996143': "Tutti Frutti Pattern Sweater",
        '-422479268': "Black Floral Sweater",
        '-1181769767': "White Floral Sweater",
        '-255901264': "Nightfall Pattern Sweater",
        '-817660231': "Tropical Pattern Sweater",
        '-512449765': "Navy Perseus Brand Sweater",
        '-966731920': "Burgundy Garland Shortsleeve",
        '-727747603': "Black Garland Shortsleeve",
        '-1351090307': "Blue Leaves Shortsleeve",
        '-1111057382': "Gray Leaves Shortsleeve",
        '-930827882': "Red Leaves Shortsleeve",
        '-633580283': "Teal Leaves Shortsleeve",
        '-1300724346': "Navy Posies Shortsleeve",
        '-875382726': "Blue Posies Shortsleeve",
        '-569025345': "Lilac Floral Shortsleeve",
        '-381390051': "Floral Shortsleeve",
        '-1898780587': "Yellow Savanna Shortsleeve",
        '-1291157170': "Urban Gradient Shortsleeve",
        '-447126037': "Cool Gradient Shortsleeve",
        '-73252378': "Pink Savanna Shortsleeve",
        '-1474290961': "Peach Botanical Shortsleeve",
        '-1370413231': "Pink Botanical Shortsleeve",
        '-194301052': "Green Botanical Shortsleeve",
        '-1443478219': "Purple Big Cat Open",
        '-1213538146': "Orange Big Cat Open",
        '-517074584': "Red Prolaps Open",
        '-847836102': "Blue Big Cat Open",
        '-215525478': "Golden Big Cat Open",
        '-2051477020': "Gray Sports Blagueurs Hoodie",
        '-71213585': "White College Blagueurs Hoodie",
        '-379537106': "Sprayed Green Güffy Hoodie",
        '-133507446': "Spotted Dark Güffy Hoodie",
        '-621929391': "Blue Leaves Güffy Hoodie",
        '-455135181': "Multicolor Leaves Güffy Hoodie",
        '-671715482': "Gray Sports Blagueurs Hoodie",
        '-499350542': "Black Sports Blagueurs Hoodie",
        '-939792134': "Baby Blue SN Hoodie",
        '-1222588604': "Yellow SN Hoodie",
        '-1998761675': "Graffiti Black Güffy Hoodie",
        '-1692469832': "Sprayed Green Güffy Hoodie",
        '-1819504926': "Chocolate Fashion Biker",
        '-270743671': "Two-Tone Fashion Biker",
        '-568450036': "Ox Blood Fashion Biker",
        '-933201783': "Red Fashion Biker",
        '-1231071993': "Ochre Fashion Biker",
        '-1528516206': "Tan Fashion Biker",
        '-1787764617': "White Botanical Muscle Pants",
        '-405629840': "Geometric Muscle Pants",
        '-1921392708': "Spotted Muscle Pants",
        '-1946497653': "Peach Botanical Muscle Pants",
        '-1565066497': "Green Motif Muscle Pants",
        '-798599587': "Fall Muscle Pants",
        '-1393979548': "Purple Camo Muscle Pants",
        '-650614783': "White Camo Muscle Pants",
        '-1170328404': "Crewneck T-Shirt",
        '-2052273286': "White Manor Zigzag T-Shirt",
        '-1275532035': "Blagueurs LS T-Shirt",
        '-1582151568': "Blagueres Stripes T-Shirt",
        '-801954443': "Red & Black Santo Capra T-Shirt",
        '-1749258343': "White Manor T-Shirt",
        '-250404275': "Green Globe Blagueurs T-Shirt",
        '-825467456': "Blagueurs Brand T-Shirt",
        '-985748514': "White Manor Zigzag T-Shirt",
        '-1036944067': "Blagueurs LS T-Shirt",
        '-377555874': "White Manor T-Shirt",
        '-126250405': "Lilac Manor T-Shirt",
        '-1938343344': "Black Striped Manor T-Shirt",
        '-1881063132': "White Striped Manor T-Shirt",
        '-1517065080': "Green Globe Blagueurs T-Shirt",
        '-1279981365': "Purple Globe Blagueurs T-Shirt",
        '-1767270427': "Crewneck T-Shirt",
        '-436492741': "Blagueurs LS T-Shirt",
        '-1992528678': "Pink Santo Capra T-Shirt",
        '-759136287': "Red & Black Santo Capra T-Shirt",
        '-353484683': "White Striped Manor T-Shirt",
        '-804615506': "Purple Globe Blagueurs T-Shirt",
        '-939853169': "Blagueurs Brand T-Shirt",
        '-1240548401': "Crewneck T-Shirt",
        '-1479008414': "White Manor Zigzag T-Shirt",
        '-367237660': "Blagueurs LS T-Shirt",
        '-1150613374': "Blagueres Stripes T-Shirt",
        '-850809793': "Blagueurs Sports T-Shirt",
        '-1589423057': "Teal Blagueurs LS T-Shirt",
        '-1291520078': "B & W Blagueuers LS T-Shirt",
        '-2068473068': "Salmon Santo Capra T-Shirt",
        '-1767883031': "Blue Santo Capra T-Shirt",
        '-1503601054': "Yellow Santo Capra T-Shirt",
        '-1325993074': "Pink Santo Capra T-Shirt",
        '-560132885': "White Manor T-Shirt",
        '-923344481': "Lilac Manor T-Shirt",
        '-316429832': "Black Striped Manor T-Shirt",
        '-1293300087': "Blagueurs LS T-Shirt",
        '-188788173': "Blagueres Stripes T-Shirt",
        '-1044026304': "Salmon Santo Capra T-Shirt",
        '-1050221045': "Blue Striped Santo Capra T-Shirt",
        '-1591457936': "White Striped Manor T-Shirt",
        '-2077127285': "Purple Globe Blagueurs T-Shirt",
        '-1294177568': "Blagueurs Brand T-Shirt",
        '-462810296': "White Cuffed Shirt",
        '-155666459': "Silver Cuffed Shirt",
        '-769656510': "Off-White Cuffed Shirt",
        '-632059467': "Mint Cuffed Shirt",
        '-333566646': "Blue Striped Cuffed Shirt",
        '-169852722': "Pink Striped Cuffed Shirt",
        '-911087570': "Ocean Stripe Cuffed Shirt",
        '-867704060': "Charcoal Cuffed Shirt",
        '-1632237599': "Pale Blue Cuffed Shirt",
        '-1391024990': "Barely Blue Cuffed Shirt",
        '-1717895765': "Blue Woven Cuffed Shirt",
        '-1066480814': "Fuchsia Cuffed Shirt",
        '-1891018679': "Silver Cuffed Shirt",
        '-1851794728': "Mint Cuffed Shirt",
        '-1583940380': "Charcoal Cuffed Shirt",
        '-693410036': "Pale Blue Cuffed Shirt",
        '-2129413154': "Barely Blue Cuffed Shirt",
        '-1280171750': "Pink Check Cuffed Shirt",
        '-971192849': "Blue Woven Cuffed Shirt",
        '-1451291468': "Pale Olive Cuffed Shirt",
        '-50613332': "Fuchsia Cuffed Shirt",
        '-209094413': "Teal Fitted Suit Vest",
        '-448340882': "Red Fitted Suit Vest",
        '-231011245': "Black Fitted Suit Vest",
        '-1509559318': "Brown Fitted Suit Vest",
        '-1330731318': "Gray Fitted Suit Vest",
        '-2098476219': "Teal Fitted Suit Vest",
        '-851386386': "Red Fitted Suit Vest",
        '-622761460': "Gray Fitted Suit Vest",
        '-862139005': "Navy Fitted Suit Vest",
        '-1082805451': "Teal Fitted Suit Vest",
        '-1321593154': "Red Fitted Suit Vest",
        '-401210251': "White Fitted Suit Vest",
        '-30536119': "White Smooth Fitted Open",
        '-238422655': "Brown Smooth Fitted Open",
        '-477112051': "Polar Smooth Fitted Open",
        '-699795168': "Red Smooth Fitted",
        '-1472258805': "White Smooth Fitted",
        '-1308807033': "Brown Smooth Fitted",
        '-2081860512': "Polar Smooth Fitted",
        '-858067722': "Black Sharp Fitted Open",
        '-1769963454': "Gray Sharp Fitted Open",
        '-1786544568': "Red Sharp Fitted Open",
        '-251251595': "Gray Sharp Fitted",
        '-1145255453': "Navy Sharp Fitted",
        '-530541782': "Red Sharp Fitted",
        '-1442011517': "White Sharp Fitted",
        '-1811842447': "Brown Sharp Fitted",
        '-944250407': "Polar Sharp Fitted",
        '-328075323': "Black Skinny Suit Pants",
        '-46511459': "Black Regular Suit Pants",
        '-391437953': "Gray Regular Suit Pants",
        '-1899991633': "Navy Regular Suit Pants",
        '-1283573978': "Red Regular Suit Pants",
        '-1582460027': "White Regular Suit Pants",
        '-1893758670': "White Tie",
        '-1596052305': "Gray Tie",
        '-642943834': "Stone Tie",
        '-388295935': "Smoky Plaid Tie",
        '-454445919': "Navy Tie",
        '-2104856604': "Green Tie",
        '-335266079': "White Skinny Tie",
        '-1379548555': "Gray Skinny Tie",
        '-1644577318': "Brown Skinny Tie",
        '-1402159165': "Black Skinny Tie",
        '-1097178082': "Navy Skinny Tie",
        '-179482237': "Red Skinny Tie",
        '-750514831': "Green Skinny Tie",
        '-1724573356': "Orange Skinny Tie",
        '-156668318': "Stone Tie",
        '-802905767': "Tan Plaid Tie",
        '-505527092': "Gold Striped Tie",
        '-1144129332': "Gent Striped Tie",
        '-392978047': "Black Tie",
        '-33764269': "Blue Tie",
        '-1939019463': "Purple Tie",
        '-925989020': "White Skinny Tie",
        '-1664165762': "Stone Skinny Tie",
        '-1962101510': "Smoky Plaid Skinny Tie",
        '-1270511757': "Tan Plaid Skinny Tie",
        '-1571626106': "Gold Striped Skinny Tie",
        '-698332248': "Gent Skinny Tie",
        '-1013547784': "Orange Skinny Tie",
        '-1670762848': "Purple Skinny Tie",
        '-194996551': "Nasty Watermelon",
        '-823314047': "Creepy Butler",
        '-1038016535': "Dead Butler",
        '-264569828': "Rotten Butler",
        '-622756947': "Blue Hypnotic Alien",
        '-2008590682': "Green Hypnotic Alien",
        '-1777798615': "Red Hypnotic Alien",
        '-494465473': "Gray Haggard Witch",
        '-1286690297': "Red Bearded Lucifer",
        '-1556608550': "Orange Bearded Lucifer",
        '-923118242': "Black Bearded Lucifer",
        '-940968875': "White Skull Burst",
        '-1112612897': "Red Skull Burst",
        '-1025464096': "Pale Lycanthrope",
        '-1859500684': "Dark Lycanthrope",
        '-1616649625': "Gray Lycanthrope",
        '-1628310892': "Green Toxic Insect",
        '-250243350': "Purple Toxic Insect",
        '-1109166661': "Rotten Sewer Creature",
        '-1358342137': "Scabby Sewer Creature",
        '-2055319474': "Red Classic Lucifer",
        '-1657241662': "Orange Classic Lucifer",
        '-1846956391': "Classic Sack Slasher",
        '-674383264': "Bloody Sack Slasher",
        '-979659268': "Black Sack Slasher",
        '-572920362': "Black Combat Mask",
        '-220784684': "Tan Combat Mask",
        '-1340764638': "Black Skeletal",
        '-1095554211': "Gray Skeletal",
        '-2012430831': "Green Skeletal",
        '-156446322': "Black Combat Top",
        '-330187560': "Gray Combat Top",
        '-577757355': "Charcoal Combat Top",
        '-1046485131': "Tan Combat Top",
        '-1344191496': "Forest Combat Top",
        '-1142189829': "Gray Combat Sweater",
        '-845073306': "Charcoal Combat Sweater",
        '-1367555334': "Black Combat Pants",
        '-1816326761': "Forest Combat Pants",
        '-1646092872': "Gray Tact Gloves",
        '-1909064097': "Charcoal Tact Gloves",
        '-1892482999': "Tan Tact Gloves",
        '-2116295269': "Forest Tact Gloves",
        '-77210386': "Black Wool Gloves",
        '-301317645': "Gray Wool Gloves",
        '-604496433': "Charcoal Wool Gloves",
        '-374228670': "Tan Wool Gloves",
        '-1663903562': "Green Turtle Mask",
        '-1425738470': "Brown Turtle Mask",
        '-1948371777': "White Mouse Mask",
        '-603629878': "Blue T Tech Mask",
        '-1827715881': "Pink T Tech Mask",
        '-1597448118': "Green Grin Tech Mask",
        '-2137350162': "Orange Grin Tech Mask",
        '-1907541165': "Blue Grin Tech Mask",
        '-1121632239': "Black & Pink Tech Mask",
        '-1811091999': "Blue Dot Tech Mask",
        '-1138967040': "Orange T Tech Mask",
        '-789686708': "Stone Hyena Mask",
        '-1775017773': "Smoke Hyena Mask",
        '-1959217130': "Cream Sports Track Top",
        '-1299561316': "Intense Prolaps Sports Track Top",
        '-1060773613': "Tricolor Prolaps Sports Track Top",
        '-687338089': "Blue DS Sports Track Top",
        '-412438948': "Red DS Sports Track Top",
        '-2143035380': "Yellow DS Sports Track Top",
        '-1746989190': "Dark Stone Sports Track Top",
        '-1516918041': "Snow Sports Track Top",
        '-1725770778': "Purple Heat Sports Track Top",
        '-1435666821': "Orange Heat Sports Track Top",
        '-1897939104': "White Heat Sports Track Top",
        '-811581208': "Cyan Heat Sports Track Top",
        '-513874843': "Orange Prolaps Sports Track Top",
        '-1272608269': "Yellow Prolaps Sports Track Top",
        '-225062314': "Black 22 Bomber",
        '-685696147': "Yellow Detail Bomber",
        '-386285794': "Black Trickster Bomber",
        '-1192239349': "Yellow Trickster Bomber",
        '-1217663296': "Black Detail Bomber Zipped",
        '-1523365297': "Yellow Detail Bomber Zipped",
        '-1814485093': "Black Trickster Bomber Zipped",
        '-2124447064': "Yellow Trickster Bomber Zipped",
        '-1003912124': "Black Bigness Bomber Open",
        '-690706022': "Yellow Bigness Bomber Open",
        '-1451012360': "Black Detail Bomber Open",
        '-1162186394': "Yellow Detail Bomber Open",
        '-1915250783': "Black Trickster Bomber Open",
        '-1623868835': "Yellow Trickster Bomber Open",
        '-815100851': "Get Metal Tee",
        '-470043632': "Axe of Fury Tee",
        '-1678203893': "Qub3d Qub3s Tee",
        '-12234131': "Cyan Leopard Open",
        '-169132103': "Black and Neon Güffy Open",
        '-475423946': "White Painted Güffy Open",
        '-2122262810': "Blue Geometric Open",
        '-1357729267': "Pink Geometric Open",
        '-1817117882': "Splat Open",
        '-217236743': "Black Dotted Open",
        '-456483212': "Baby Blue Dotted Open",
        '-1451216036': "Green Leaves Open",
        '-1689610511': "Moss Leopard Open",
        '-315959295': "Red Leaves Open",
        '-1048897962': "Blue Savanna Open",
        '-1672754188': "Pink Savanna Open",
        '-1390449253': "Black Savanna Open",
        '-2001492796': "Pink Botanical Open",
        '-775623751': "Cream Office Unbuttoned",
        '-1043074113': "Shell Office Unbuttoned",
        '-754936296': "Dotty Office Unbuttoned",
        '-1666766490': "Pattern Office Unbuttoned",
        '-1363489395': "Blue Stripes Office Unbuttoned",
        '-2032839209': "Navy Office Unbuttoned",
        '-1709867945': "Ivory Office Unbuttoned",
        '-182561216': "Light Blue Office",
        '-1587335461': "Pattern Office",
        '-1894217146': "Blue Stripes Office",
        '-2098302478': "White Stripes Office",
        '-665019183': "Blue Check Office",
        '-36406719': "Ivory Office",
        '-890301321': "Ash Office",
        '-1530083277': "Gray Office",
        '-1434498239': "Purple Bigness Polo Shirt",
        '-1141510610': "White Bigness Polo Shirt",
        '-913427137': "Purple Bigness Sports Tee",
        '-1289426525': "White Champs Sports Tee",
        '-62325782': "White Camo Sports Tee",
        '-302973436': "Purple Broker Sports Tee",
        '-2070795448': "Purple Champs Sports Tee",
        '-1757130580': "Camo Bigness Sports Tee",
        '-1526240206': "White Bigness Sports Tee",
        '-1268053207': "White Baseball Sports Tee",
        '-962023516': "White Broker Sports Tee",
        '-586195855': "White Basketball Sports Tee",
        '-1730104748': "Yellow Sports Long Sleeve",
        '-1429711325': "Purple Sports Long Sleeve",
        '-1896309116': "Panic Sports Long Sleeve",
        '-2105997963': "Purple White Sports Long Sleeve",
        '-1423988420': "Green Service Shirt Tucked",
        '-1712748848': "Beige Service Shirt Tucked",
        '-236407099': "Moss Service Shirt Tucked",
        '-533589160': "Blue Service Shirt Tucked",
        '-1384131404': "Khaki Short Service Shirt Tucked",
        '-1207244342': "Green Short Service Shirt Tucked",
        '-179674032': "Beige Short Service Shirt Tucked",
        '-1610958414': "Black Short Service Shirt Tucked",
        '-1308205623': "Gray Short Service Shirt Tucked",
        '-1149996891': "White Short Service Shirt Tucked",
        '-839412309': "Moss Short Service Shirt Tucked",
        '-666129837': "Blue Short Service Shirt Tucked",
        '-2111289725': "Red Popped Leather Jacket",
        '-1879711202': "Black Popped Leather Jacket",
        '-1495461908': "Tan Popped Leather Jacket",
        '-1322310512': "Gray Popped Leather Jacket",
        '-957231083': "White Popped Leather Jacket",
        '-265308782': "Blue Cross Check Relaxed",
        '-1256871606': "Red Bold Check Relaxed",
        '-1024998162': "Black Bold Check Relaxed",
        '-1945446607': "White Bold Check Relaxed",
        '-1717538212': "Black Double Shirt Relaxed",
        '-87143729': "Green Cross Check Relaxed",
        '-270657274': "Ivory Double Shirt Relaxed",
        '-549488695': "Blush Double Shirt Relaxed",
        '-261769786': "Blue Stripe Check Relaxed",
        '-114931897': "Mustard Stripe Check Relaxed",
        '-1418023951': "Green Bold Check Relaxed",
        '-1316048406': "Black Double Shirt Open",
        '-1003399377': "Gray Double Shirt Open",
        '-706577775': "White Double Shirt Open",
        '-477817278': "Off White Double Shirt Open",
        '-236145903': "Blush Double Shirt Open",
        '-155037035': "White Double Shirt",
        '-617047166': "Tan Double Shirt",
        '-317833427': "Khaki Double Shirt",
        '-1371979388': "Off White Double Shirt",
        '-1072437959': "Blush Double Shirt",
        '-629974886': "Gray Heat Sports Track Pants",
        '-1715590700': "Cyan Sports Track Pants",
        '-1427846111': "Black Sports Track Pants",
        '-28216583': "Crimson Sports Track Pants",
        '-1886251652': "Navy Sports Track Pants",
        '-496649438': "Blue DS Sports Track Pants",
        '-190816361': "Red DS Sports Track Pants",
        '-1206261789': "Lemon Sports Track Pants",
        '-134278223': "Purple Heat Sports Track Pants",
        '-1416529189': "Orange Heat Sports Track Pants",
        '-923257424': "White Heat Sports Track Pants",
        '-1773776827': "Cyan Heat Sports Track Pants",
        '-1835301412': "Navy Large Cargos",
        '-2142052021': "Black Large Cargos",
        '-56090101': "Navy Large Cargos",
        '-1540230904': "Black Large Cargos",
        '-1696407958': "Khaki Large Cargos",
        '-570989418': "Stone Large Cargos",
        '-875904963': "Ash Large Cargos",
        '-1986315301': "Blue Large Cargos",
        '-958706838': "Black Armored",
        '-656216199': "Gray Armored",
        '-352971873': "Ash Armored",
        '-79776720': "White Armored",
        '-1577942679': "Smoke Armored",
        '-1274993274': "White & Green Armored",
        '-881178956': "Black Armored",
        '-1229251274': "Gray Armored",
        '-269611109': "Ash Armored",
        '-651697649': "White Armored",
        '-39671036': "Brown Armored",
        '-737126484': "Smoke Armored",
        '-1134090150': "White & Green Armored",
        '-792102059': "Black Armored",
        '-1024598114': "Gray Armored",
        '-1825275860': "Ash Armored",
        '-58633532': "Red & Gray Armored",
        '-288966833': "Brown Armored",
        '-530539901': "Smoke Armored",
        '-1885621263': "White Armored",
        '-1276609398': "Brown Armored",
        '-1574184687': "Smoke Armored",
        '-1237122749': "White & Green Armored",
        '-1149371373': "Black Armored",
        '-1447339890': "Gray Armored",
        '-1859573910': "Ash Armored",
        '-185372931': "Red & Gray Armored",
        '-500381328': "Brown Armored",
        '-975007520': "Smoke Armored",
        '-475804574': "White & Green Armored",
        '-1824364314': "Gray Armored",
        '-1624964949': "Ash Armored",
        '-1326799818': "White Armored",
        '-1011365424': "Red & Gray Armored",
        '-712610451': "Brown Armored",
        '-364472579': "Smoke Armored",
        '-193352861': "White & Green Armored",
        '-1280672624': "Black Armored",
        '-1530274097': "Gray Armored",
        '-1725184141': "Red & Gray Armored",
        '-472159671': "Black Armored",
        '-895731765': "Gray Armored",
        '-2120964675': "Brown Armored",
        '-62578662': "Black Armored",
        '-1827943003': "Ash Armored",
        '-1595381410': "White Armored",
        '-1214048557': "Brown Armored",
        '-982994338': "Smoke Armored",
        '-605298844': "White & Green Armored",
        '-1957636585': "Black Armored",
        '-489814768': "White Armored",
        '-784834075': "Red & Gray Armored",
        '-962376517': "Brown Armored",
        '-1209749698': "Smoke Armored",
        '-834299469': "Gray Armored",
        '-73862055': "Ash Armored",
        '-1904298392': "Black Armored",
        '-365990456': "Gray Armored",
        '-744669020': "Ash Armored",
        '-984177641': "White Armored",
        '-1052271623': "Red & Gray Armored",
        '-903074374': "White & Green Armored",
        '-106188732': "Black Armored",
        '-672371514': "Gray Armored",
        '-311355441': "White Armored",
        '-1899013491': "Red & Gray Armored",
        '-1659799791': "Brown Armored",
        '-1542650616': "Smoke Armored",
        '-1303666299': "White & Green Armored",
        '-1208373599': "Abominable Snowman",
        '-53584549': "Smashed Mrs Claus",
        '-183485084': "Rebel Bad Elf",
        '-1082666448': "Gangsta Bad Elf",
        '-795380625': "Badass Bad Elf",
        '-2137188661': "Bruised Bad Santa",
        '-344134515': "Grumpy Bad Santa",
        '-650688510': "Filthy Bad Santa",
        '-1697704339': "Green Festive Luchador",
        '-1643500314': "Dark Pudding",
        '-2133724558': "Light Pudding",
        '-1334028824': "White LS Beast",
        '-731087405': "LS Visor Beast",
        '-1245626243': "Brown Visor Beast",
        '-56402821': "Patriot Sweatband Beast",
        '-1147915719': "Brown Festive Beast",
        '-1379297628': "Blond Festive Beast",
        '-586582749': "Silver Festive Beast",
        '-850378710': "Snowflake Pajamas",
        '-2098091154': "Snowman Pajamas",
        '-1331493168': "Red Tree Pajamas",
        '-564272571': "Festive Tree Pajamas",
        '-1735076172': "Green Tree Pajamas",
        '-566366372': "Black Check Pajamas",
        '-866104415': "Candy Cane Pajamas",
        '-105273769': "Stocking Pajamas",
        '-403504438': "Green Barfs Pajamas",
        '-2134002551': "Penguin Pajamas",
        '-636627220': "Cerveza Barracho V Neck",
        '-145419902': "Pink V Neck",
        '-656754674': "Gray Flip-Flops",
        '-340894283': "Green Flip-Flops",
        '-392800371': "Purple Flip-Flops",
        '-253728735': "Lilac Flip-Flops",
        '-871719306': "Blue Two-Tone Flip-Flops",
        '-700599588': "Red Flip-Flops",
        '-1983429828': "Shaggy Curls Dark Brown",
        '-457639650': "Surfer Dude Dark Brown",
        '-94952354': "Surfer Dude Light Brown",
        '-1545668757': "Surfer Dude Black",
        '-1672183828': "Cerveza Barracho V Neck",
        '-1046918539': "Los Santos V Neck",
        '-1479403801': "Pink V Neck",
        '-44268217': "Red Checked Boards",
        '-1219513062': "Lime Boards",
        '-1590178565': "Green Boards",
        '-365568266': "Gray Plaid Boards",
        '-138446327': "Aqua Floral Boards",
        '-2034722819': "Pink Boards",
        '-145679239': "Gray Chinos",
        '-763407658': "Brown Plaid Chinos",
        '-1155840382': "Tropics Running",
        '-1698011990': "Aqua Plaid Running",
        '-1443101939': "White Plaid Running",
        '-1924511318': "Brown Floral Running",
        '-475531676': "Blue Banded Running",
        '-237137197': "Fruity Floral Running",
        '-1947868017': "Silver Chain",
        '-1318015068': "Bronze Chain",
        '-809285820': "Bronze Chain",
        '-271192748': "Light Gray Suit Vest",
        '-1064563007': "Olive Suit Vest",
        '-1886868289': "Cream Suit Vest",
        '-145212507': "Light Gray Suit Vest",
        '-1370740338': "Olive Suit Vest",
        '-1615373667': "Silver Suit Vest",
        '-1374062751': "White Suit Vest",
        '-1610117883': "Purple Suit Vest",
        '-1982373727': "Lobster Suit Vest",
        '-872755950': "Navy Tucked",
        '-1368878610': "Green Tucked",
        '-2029993185': "Lemon Tucked",
        '-1724160108': "Pink Tucked",
        '-1888693269': "Patriot Plaid Tucked",
        '-1591117980': "Purple Check Tucked",
        '-455061071': "White Cuffed Shirt",
        '-768922553': "Silver Cuffed Shirt",
        '-151502134': "Mint Cuffed Shirt",
        '-250038517': "Blue Striped Cuffed Shirt",
        '-477193225': "Pink Striped Cuffed Shirt",
        '-1990976870': "Charcoal Cuffed Shirt",
        '-157879010': "Pale Blue Cuffed Shirt",
        '-1103231891': "Blue Woven Cuffed Shirt",
        '-783649692': "Blue Check Shirt",
        '-1516536717': "Mint Check Shirt",
        '-1470397961': "Gray Check Shirt",
        '-593565059': "Forest Check Shirt",
        '-286945526': "Tan Check Shirt",
        '-2017140386': "Fruity Check Shirt",
        '-1235599732': "Aqua Check Shirt",
        '-1065332020': "Red Check Shirt",
        '-1392082519': "Gray Check Shirt",
        '-88859389': "Patriot Check Shirt",
        '-513152401': "Forest Check Shirt",
        '-206550874': "Ash Check Shirt",
        '-445797343': "Lemon Check Shirt",
        '-173716332': "Orange Check Shirt",
        '-538304226': "Fruity Check Shirt",
        '-592242000': "Aqua Check Shirt",
        '-831095241': "Charcoal Check Shirt",
        '-1092100326': "Teal Check Shirt",
        '-1465994616': "Red Check Shirt",
        '-1276193136': "Fashion Hockey",
        '-1559153451': "Vile Zombie Hockey",
        '-415819903': "Hound Hockey",
        '-117163237': "Wolf Hockey",
        '-1649310601': "Dust Devils Hockey",
        '-1351047163': "Striped Rampage Hockey",
        '-2110217579': "Skull Hockey",
        '-189404974': "Metal Warrior",
        '-26969045': "Neon Warrior",
        '-575063339': "Deadeye Warrior",
        '-274735454': "Stone Warrior",
        '-1321442852': "Lightning Warrior",
        '-1023802025': "Wooden Warrior",
        '-1582757911': "Chocolate Oxfords",
        '-815013010': "Chestnut Oxfords",
        '-1528525848': "Gray Oxfords",
        '-683675490': "Navy Oxfords",
        '-986853646': "Tan Oxfords",
        '-1368612536': "Ash Oxfords",
        '-1599339065': "Gray Two-Tone Oxfords",
        '-890021291': "Topaz Oxfords",
        '-141806714': "Lime Oxfords",
        '-506066918': "Yellow Oxfords",
        '-1523434025': "Black Slip-Ons",
        '-1989474743': "Red Slip-Ons",
        '-130950950': "Tan Slip-Ons",
        '-1889007800': "Black & White Slip-Ons",
        '-2136836936': "Brown Slip-Ons",
        '-1625493211': "Short Side Part Dark Brown",
        '-1112723899': "Short Side Part Light Brown",
        '-1432451032': "Short Side Part Auburn",
        '-647502406': "Short Side Part Blond",
        '-925481833': "Short Side Part Black",
        '-1168328595': "High Slicked Sides Dark Brown",
        '-1421993424': "High Slicked Sides Light Brown",
        '-576454917': "High Slicked Sides Auburn",
        '-438399124': "High Slicked Sides Blond",
        '-114454818': "Light Gray Jacket",
        '-759643659': "Purple Jacket",
        '-469605240': "Lobster Jacket",
        '-1885750320': "Ash Jacket",
        '-1819024311': "Yellow Check Vest",
        '-2100542778': "Silver Vest",
        '-1775867526': "Baby Blue Vest",
        '-1331552587': "Pale Brown Vest",
        '-866672413': "Navy Tucked",
        '-583449946': "Green Tucked",
        '-254645800': "Ash Tucked",
        '-1149632880': "Purple Check Tucked",
        '-192707261': "Blue Double Breasted",
        '-1383756359': "Blue Tailored Jacket",
        '-114885052': "Light Gray Regular",
        '-402498565': "Olive Regular",
        '-416151213': "Gray Plaid Regular",
        '-1935629011': "Purple Regular",
        '-237211741': "Subtle Blue Regular",
        '-543110356': "Brown Regular",
        '-745032934': "Vintage Woven Regular",
        '-1034743663': "Cream Regular",
        '-485240607': "Silver Plaid Baggy",
        '-119931795': "Gray Plaid Baggy",
        '-953149158': "White Baggy",
        '-1684337233': "Purple Baggy",
        '-1529470939': "Lobster Baggy",
        '-1878462': "Subtle Blue Baggy",
        '-2074714330': "Cream Baggy",
        '-1155380035': "Ash Baggy",
        '-979017277': "Navy Plaid Baggy",
        '-821098486': "Gold Striped Tie",
        '-604167706': "Gent Striped Tie",
        '-909078407': "Green Tie",
        '-1482601445': "Orange Tie",
        '-286958942': "Yellow Tie",
        '-48007394': "Purple Tie",
        '-854803715': "Stone Bowtie",
        '-1261991309': "Ocean Bowtie",
        '-1499664858': "Sandy Bowtie",
        '-521279091': "Navy Bowtie",
        '-1691427312': "Red Bowtie",
        '-2049395868': "Green Bowtie",
        '-768979962': "Purple Bowtie",
        '-1132453710': "Brown Bowtie",
        '-160448318': "Blue Skinny Tie",
        '-1912785984': "Tan Plaid Skinny Tie",
        '-1599055578': "Gold Striped Skinny Tie",
        '-1300562757': "Gent Skinny Tie",
        '-1607265206': "Red Skinny Tie",
        '-780208415': "Green Skinny Tie",
        '-1138373585': "Orange Skinny Tie",
        '-302862392': "Yellow Skinny Tie",
        '-2054398215': "Stone Skinny Tie",
        '-1286784386': "Smoky Plaid Skinny Tie",
        '-1951499772': "White Tie",
        '-1438501077': "Black Tie",
        '-1720740474': "Blue Tie",
        '-1295529930': "Navy Tie",
        '-2074449044': "Green Tie",
        '-1614273977': "Yellow Tie",
        '-1862171462': "Purple Tie",
        '-374599328': "Gent Skinny Tie",
        '-603430494': "Navy Skinny Tie",
        '-1470563768': "Red Skinny Tie",
        '-1417248597': "Purple Skinny Tie",
        '-1117328457': "Brown Bear",
        '-888535299': "Grey Bear",
        '-568686548': "Golden Bison",
        '-1671002283': "Black Bull",
        '-1902280196': "Pink Vulture",
        '-115943475': "Black Vulture",
        '-1062841468': "Black Wolf",
        '-1175339092': "Mullet Dark Brown",
        '-1473504223': "Mullet Light Brown",
        '-694880014': "Mullet Auburn",
        '-1030041346': "Mullet Blonde",
        '-1955773863': "Vertical Flag Vest",
        '-1431921320': "Star Tailcoat",
        '-226185961': "Red Tailcoat",
        '-806149045': "Freedom T-Shirt",
        '-451719537': "American Flag T-Shirt",
        '-1157788845': "Stripy Vest Shirt",
        '-1305325922': "Blue Vertical Vest Shirt",
        '-1968210019': "Blue American Vest Shirt",
        '-473747009': "Blue Star Vest Shirt",
        '-1768914967': "Blue Vertical Vest Shirt",
        '-1136866487': "Blue Star Vest Shirt",
        '-829788188': "Stripy Star Vest Shirt",
        '-670596386': "White Star Vest Shirt",
        '-761663767': "Freedom T-Shirt",
        '-1070577130': "American Flag T-Shirt",
        '-797585268': "Freedom T-Shirt",
        '-1796974218': "American Flag T-Shirt",
        '-560520769': "USA Bow Tie",
        '-1117364386': "White Star Bow Tie",
        '-1595906481': "Blue Tip Oxfords",
        '-1651318884': "Purple Tip Oxfords",
        '-1421509887': "Gray Tip Oxfords",
        '-806927292': "Brown Tip Oxfords",
        '-556998129': "Hazard Tip Oxfords",
        '-1265463909': "All Red Tip Oxfords",
        '-1016124588': "Charcoal Tip Oxfords",
        '-27166014': "Blue Check Double Suit",
        '-273228435': "Red Pinstripe Double Suit",
        '-485413449': "Beige Check Double Suit",
        '-254359230': "Royal Check Double Suit",
        '-2118057713': "Dusk Check Double Suit",
        '-1809078812': "Purple Check Double Suit",
        '-1522415600': "Gray Check Double Suit",
        '-1212584705': "Sky Check Double Suit",
        '-886664231': "Chocolate Check Double Suit",
        '-646500230': "Mustard Pinstripe Double Suit",
        '-290891042': "Crimson Check Double Suit",
        '-2009854621': "Red Pinstripe Suit Vest",
        '-1978842126': "Royal Check Suit Vest",
        '-1795610899': "Dusk Check Suit Vest",
        '-46041296': "Sky Check Suit Vest",
        '-353316209': "Chocolate Check Suit Vest",
        '-1513855091': "Red Pinstripe Suit Pants",
        '-795755217': "Dusk Check Suit Pants",
        '-1095100032': "Purple Check Suit Pants",
        '-788873731': "Gray Check Suit Pants",
        '-1096345258': "Sky Check Suit Pants",
        '-331516798': "Chocolate Check Suit Pants",
        '-634204051': "Mustard Pinstripe Suit Pants",
        '-191298247': "Classic Check Suit Pants",
        '-2129094253': "Blue Dot Boxer Shorts",
        '-421370587': "Red Plaid Boxer Shorts",
        '-675363106': "Lilac Plaid Boxer Shorts",
        '-448105673': "Red Leopard Boxer Shorts",
        '-611098679': "White Heart Boxer Shorts",
        '-1111088081': "Black Heart Boxer Shorts",
        '-1406369540': "Red Heart Boxer Shorts",
        '-1912159043': "Purple Stripe Boxer Shorts",
        '-73319856': "Black Full Bowtie",
        '-1220114963': "Dual Driving Loafers",
        '-295791635': "Gray Trench Coat",
        '-1269764262': "Green Overcoat",
        '-2063352717': "Gold Geo Print Sweater",
        '-2113938364': "Brown P Wing Sweater",
        '-1874167591': "Classic SN Print Sweater",
        '-1774680851': "Color Diamond Sweater",
        '-1544937392': "Gold Diamond Sweater",
        '-1259355557': "Color SN Print Sweater",
        '-928126505': "Color Geo Sweater",
        '-2002697298': "Black Geo Print Sweater",
        '-1107743139': "Silver Geo Print Sweater",
        '-2040381644': "Classic P Print Sweater",
        '-887791250': "Platinum Loose Link Chain",
        '-1880701298': "Green Plaid Woolen Scarf",
        '-1557140192': "Tan Plaid Woolen Scarf",
        '-2015915942': "Gold Loose Link Chain",
        '-475188865': "Gold Belcher Chain",
        '-715221790': "Platinum Belcher Chain",
        '-680819117': "Gold Pretzel Chain",
        '-688337176': "Gold Curb Chain",
        '-845441081': "Platinum Heavy Curb Chain",
        '-88383759': "Platinum Heavy Square Chain",
        '-321517695': "Gold Square Chain",
        '-793751212': "Gold Popcorn Chain",
        '-1654396232': "Platinum Popcorn Chain",
        '-923727681': "Gold Pretzel Chain",
        '-356293222': "Gold Rope Chain",
        '-49968610': "Platinum Rope Chain",
        '-1121804084': "Gold Curb Chain",
        '-1430553602': "Platinum Curb Chain",
        '-459309944': "Gold Heavy Curb Chain",
        '-1360391906': "Platinum Heavy Curb Chain",
        '-1909421908': "Gold Heavy Square Chain",
        '-1537493758': "Platinum Heavy Square Chain",
        '-2068038313': "Gold Square Chain",
        '-219133312': "Gold Popcorn Chain",
        '-1774939902': "Platinum Popcorn Chain",
        '-1118763938': "Gold Rope Chain",
        '-1329127411': "White Studded Sneakers",
        '-1174695379': "Golden Hi Tops",
        '-871296553': "Dark Gray Leather Fur Jacket",
        '-23055941': "Ochre Leather Fur Jacket",
        '-349369643': "White Leather Fur Jacket",
        '-1749490706': "Fall Leather Fur Jacket",
        '-1988475023': "Hunter Leather Fur Jacket",
        '-1266541180': "All Black Leather Fur Jacket",
        '-325512701': "Gold Shiny T-Shirt",
        '-730964362': "Beige Wool Coat",
        '-2116208319': "Gray Wool Coat",
        '-1734973773': "Black Wool Coat",
        '-1488207052': "Pegasus T-Shirt",
        '-979806899': "Gold SN Print T-Shirt",
        '-440134238': "Brown Geo T-Shirt",
        '-466371325': "Brown Print T-Shirt",
        '-748610722': "Pink Full Print T-Shirt",
        '-1648169122': "Classic SN Bomber",
        '-232417242': "Black SN Bomber",
        '-1454307714': "Color SN Bomber",
        '-680009013': "Brown Diamond Bomber",
        '-255736724': "Red Link Zipped Bomber",
        '-322101592': "Black SN Zipped Bomber",
        '-279174202': "Color SN Zipped Bomber",
        '-734925454': "Bright Neon Zipped Bomber",
        '-1235177008': "Black Print Zipped Bomber",
        '-2068689304': "Black Dix Zipped Bomber",
        '-523943118': "Pegasus T-Shirt",
        '-1954179180': "Gold SN Print T-Shirt",
        '-1547253738': "Brown SN Print T-Shirt",
        '-1869635156': "Pink SN PRB T-Shirt",
        '-1396254182': "Brown Geo PRB T-Shirt",
        '-1087078667': "Fake Sessanta Nove T-Shirt",
        '-918383855': "Color Geo PRB T-Shirt",
        '-648596678': "Color Geo T-Shirt",
        '-371076017': "Brown Geo T-Shirt",
        '-1655915458': "Pink Full Print T-Shirt",
        '-2133623661': "Andromeda T-Shirt",
        '-1227298659': "Shield & Sword T-Shirt",
        '-1469232186': "Full Shield T-Shirt",
        '-594103280': "Brown Full Print T-Shirt",
        '-832170065': "Brown Print T-Shirt",
        '-1129841280': "Gold SN Necklace",
        '-1524543921': "Platinum SN Necklace",
        '-1135148661': "Gold Skull Necklace",
        '-1327710253': "Gold Zorse Necklace",
        '-1095869578': "Platinum Zorse Necklace",
        '-469120694': "Gold LC Necklace",
        '-164074073': "Platinum LC Necklace",
        '-1098854545': "Gold Le Chien Necklace",
        '-2084513308': "Platinum Le Chien Necklace",
        '-415222822': "Platinum Balaclava Necklace",
        '-1508012427': "Gold Zorse Necklace",
        '-79644486': "Platinum Zorse Necklace",
        '-1309474302': "Platinum LC Necklace",
        '-1761656989': "Gold Dix Necklace",
        '-1523590204': "Platinum Dix Necklace",
        '-1984302329': "Gold Le Chien Necklace",
        '-1022564948': "Platinum Le Chien Necklace",
        '-1812488092': "Gold SN Necklace",
        '-944475698': "Red Suede Loafers",
        '-713687136': "Gray Canvas Slip-ons",
        '-1623223500': "Black Canvas Slip-ons",
        '-102479744': "White Canvas Slip-ons",
        '-694058501': "Blue Canvas Slip-ons",
        '-396941978': "Stripy Canvas Slip-ons",
        '-107067508': "Brown Canvas Slip-ons",
        '-581726473': "Tropical Canvas Slip-ons",
        '-351983014': "Green Canvas Slip-ons",
        '-115810438': "Red Ankle Boots",
        '-870473493': "Zig Zag Cornrows",
        '-41599036': "Snail Cornrows",
        '-40571845': "Hightop",
        '-2048526526': "Chianski Hippy Hoodie",
        '-1124866727': "Dense Hippy Hoodie",
        '-1326680387': "Black Stripe Hippy Hoodie",
        '-1574545103': "Rasta Hippy Hoodie",
        '-1247838169': "Trickster Hippy Hoodie",
        '-404921182': "Fruntalot Hippy Hoodie",
        '-634762948': "Yeti Hippy Hoodie",
        '-1940771447': "Sweatbox Hippy Hoodie",
        '-1480534047': "Black Utility Bomber",
        '-1250462898': "Beige Utility Bomber",
        '-1366259534': "Red Top Utility Bomber",
        '-308345130': "Steel Utility Bomber",
        '-2141452008': "Teal Utility Bomber",
        '-1775749968': "Gray Utility Bomber",
        '-587447721': "Urban Utility Bomber",
        '-223515207': "Viper Utility Bomber",
        '-816339186': "Forest Utility Bomber",
        '-107983022': "Navy Work Shirt",
        '-609850580': "Red Bold Check",
        '-1376284721': "Black Bold Check",
        '-1621426259': "Green Cross Check",
        '-1406101160': "Purple Cross Check",
        '-1177045850': "Tan Cross Check",
        '-2065872210': "Gray Stripe Check",
        '-1827248352': "Mustard Stripe Check",
        '-1621357798': "Blue Cross Open Check",
        '-1732608541': "Brown Cross Open Check",
        '-1897779885': "Black Bold Open Check",
        '-1658074650': "Mustard Bold Open Check",
        '-1283590518': "Purple Bold Open Check",
        '-960586513': "White Bold Open Check",
        '-2114432929': "Green Cross Open Check",
        '-1930140085': "Tan Cross Open Check",
        '-1014050947': "Tan Work Shorts",
        '-776246314': "Blue Work Shorts",
        '-1017172525': "Gold Rim Necklace",
        '-731451623': "Front and Back Crew Emblem",
        '-131721541': "Fresh Runners",
        '-9414030': "Black Hi Top Sneakers",
        '-718404114': "White Hi Top Sneakers",
        '-458676004': "Earth Hi Top Sneakers",
        '-792002272': "Neon Hi Top Sneakers",
        '-1052745205': "Crimson Hi Top Sneakers",
        '-1283602810': "Sunrise Hi Top Sneakers",
        '-1646945482': "Sting Hi Top Sneakers",
        '-904399950': "Court Hi Top Sneakers",
        '-487546509': "Dual Hi Top Sneakers",
        '-1233860484': "Ice Hi Top Sneakers",
        '-869207052': "Trio Hi Top Sneakers",
        '-1578721440': "Pink Hi Top Sneakers",
        '-1347536145': "Hazard Hi Top Sneakers",
        '-1852080434': "Camo Hi Top Sneakers",
        '-763800270': "Classic Cornrows",
        '-1199098448': "Lightning Cornrows",
        '-1367601731': "Whipped Cornrows",
        '-726295394': "White Baggy T-Shirt",
        '-495437789': "Black Baggy T-Shirt",
        '-1323117191': "Gray Baggy T-Shirt",
        '-1874303648': "White Football Shirt",
        '-2105652788': "Gray Football Shirt",
        '-38338655': "Gray Loose Polo",
        '-343647428': "Yellow Sleeve Loose Polo",
        '-695033712': "Green Stripe Loose Polo",
        '-1471298553': "Trio Loose Polo",
        '-82810485': "Caramel Loose Polo",
        '-856781496': "Purple Loose Polo",
        '-834887507': "Brown Stripe Loose Polo",
        '-147295620': "Green Loose Polo",
        '-448573806': "Pink Loose Polo",
        '-659868318': "Blue Stripe Loose Polo",
        '-960392817': "Hot Pink Loose Polo",
        '-1370562390': "Light Gray Loose Polo",
        '-1392060954': "Broker Baseball Shirt",
        '-1481297607': "Corkers Windshirt",
        '-1724148666': "LS Windshirt",
        '-990319680': "SA Windshirt",
        '-1230876909': "Squeezers Windshirt",
        '-5523304': "Navy Windbreaker Jacket",
        '-1052141082': "Gray Sport Hoodie",
        '-159028416': "Red Double P Varsity",
        '-387657729': "Yellow Magnetics Varsity",
        '-2074343697': "Black Hinterland Varsity",
        '-1116735210': "Black Broker Print Varsity",
        '-1843944858': "Gray Broker Print Varsity",
        '-1155436260': "Red Double P Open Varsity",
        '-1561019080': "Blue Double P Open Varsity",
        '-1867769689': "Blue LS Open Varsity",
        '-952989370': "Gray Broker Print Open Varsity",
        '-646697527': "Black Broker Open Varsity",
        '-492945379': "White Trickster Open Varsity",
        '-184884010': "Black Trickster Open Varsity",
        '-1876485328': "Brown WSBL Open Varsity",
        '-468286206': "White Sweater",
        '-2015951985': "Yellow Jogging Shorts",
        '-1718573310': "Green Jogging Shorts",
        '-509364437': "Brown Jogging Shorts",
        '-1656384900': "Black Loose Jeans",
        '-154154471': "Platinum Magnetics Necklace",
        '-705512617': "Gold Magnetics Necklace",
        '-404398276': "Platinum Magnetics Necklace",
        '-1990517646': "Green Flight Jacket",
        '-1753290329': "Green Flight Pants",
        '-293244159': "Brown Digital Zombie",
        '-893732803': "Aqua Camo Zombie",
        '-1662591858': "Splinter Zombie",
        '-1847802230': "Moss Zombie",
        '-1535120432': "Sand Zombie",
        '-1149235977': "Green Digital Zombie",
        '-975818196': "Black Putrefied Zombie",
        '-669198663': "Slate Putrefied Zombie",
        '-1129111578': "Green Putrefied Zombie",
        '-175566459': "Moss Camo Putrefied Zombie",
        '-1977832919': "Moss Digital Zombie",
        '-1612261955': "Gray Woodland Zombie",
        '-177372294': "Splinter Tactical Ski",
        '-51440995': "Peach Camo Tactical Ski",
        '-1520049272': "Light Woodland Tactical Ski",
        '-1997722985': "Sand Tactical Ski",
        '-54318405': "Moss Digital Tactical Ski",
        '-361363935': "Gray Woodland Tactical Ski",
        '-1148642677': "Weathered Oni",
        '-1986245180': "Plum Oni",
        '-1291837301': "Black and Yellow Oni",
        '-1530756080': "Orange Oni",
        '-524944394': "Gold Stone Possessed Oni",
        '-765501623': "Stone Possessed Oni",
        '-1293868975': "Gray and Orange Oni",
        '-1525185346': "White Possessed Oni",
        '-503093377': "Sandstone Oni",
        '-911553336': "Gray and Gold Oni",
        '-680957883': "Stone Oni",
        '-282486843': "Sea Green Oni",
        '-51694776': "Purple Oni",
        '-1741466656': "White Painted Oni",
        '-898320286': "Gold Painted Oni",
        '-229734371': "Red Painted Oni",
        '-823213738': "Black Possessed Oni",
        '-6151484': "Brown Oni",
        '-578395861': "Blue Digital Snake Skull",
        '-1958888293': "Brown Digital Snake Skull",
        '-896619492': "Flecktarn Snake Skull",
        '-1169552493': "Light Woodland Snake Skull",
        '-581742175': "Moss Snake Skull",
        '-1156510435': "Sand Snake Skull",
        '-1460380928': "Red Snake Skull",
        '-1412210498': "White Snake Skull",
        '-110323465': "Gray Woodland Snake Skull",
        '-268976706': "Brown Digital Vent",
        '-1785455695': "Contrast Camo Vent",
        '-1492861294': "Cobble Vent",
        '-1329671674': "Peach Camo Vent",
        '-1030720087': "Brushstroke Vent",
        '-2052490276': "Sand Vent",
        '-1114973979': "Green Digital Vent",
        '-931303734': "Gray Digital Vent",
        '-1770616131': "Peach Digital Vent",
        '-1532975343': "Fall Vent",
        '-2121572129': "Crosshatch Vent",
        '-451098570': "Clean Skull",
        '-223943862': "Weathered Skull",
        '-1840507790': "Tan Leather Skull",
        '-1509278738': "Chocolate Leather Skull",
        '-2140049215': "Possessed Skull",
        '-1696391648': "Orange Swirl-Eyed Skull",
        '-1451050145': "Leather Solar-Eyed Skull",
        '-138848309': "Terracotta Skull",
        '-1159138357': "Moss Skull",
        '-2001105043': "Sand Skull",
        '-1755566926': "Inked Skull",
        '-974151005': "Back Crew Emblem",
        '-1695552802': "Back Crew Emblem",
        '-283541267': "Back Crew Emblem",
        '-2099340970': "Back Crew Emblem",
        '-695364761': "White Hawk & Little Hoodie",
        '-2098369500': "White Vom Feuer Hoodie",
        '-1172743557': "Black Vom Feuer Hoodie",
        '-1883175477': "White Coil Hoodie",
        '-869990766': "Black Ammu-Nation Hoodie",
        '-542628448': "White Ammu-Nation Hoodie",
        '-1649259892': "Blue Digital Cross Trainers",
        '-1410046192': "Brown Digital Cross Trainers",
        '-881882496': "Aqua Camo Cross Trainers",
        '-81565209': "Splinter Cross Trainers",
        '-1649791238': "Flecktarn Cross Trainers",
        '-2026044896': "Light Woodland Cross Trainers",
        '-1917736309': "Gray Digital Cross Trainers",
        '-380287992': "Venom Tech Boots",
        '-467650146': "Desert Tech Boots",
        '-1444597148': "Black Tech Boots",
        '-1072406846': "Beige Tech Boots",
        '-832373921': "Brown Tech Boots",
        '-727250969': "Moss Tech Boots",
        '-2056656530': "Chocolate Tech Boots",
        '-1916802751': "Sage Tactical Boots",
        '-1537206651': "Blue Tactical Boots",
        '-707888799': "Khaki Tactical Boots",
        '-940909158': "Charcoal Tactical Boots",
        '-650117048': "Walnut Tactical Boots",
        '-53131406': "Olive Tactical Boots",
        '-260133783': "Sage Tactical Boots",
        '-1999282920': "Charcoal Tactical Boots",
        '-995273541': "Silver Tactical Boots",
        '-325991567': "Aqua Camo Sleeveless",
        '-1564987421': "Splinter Sleeveless",
        '-2030962601': "Light Woodland Sleeveless",
        '-2113142869': "Green Digital Sleeveless",
        '-733993962': "Moss Digital Sleeveless",
        '-979204389': "Gray Woodland Sleeveless",
        '-6670911': "Contrast Camo Sleeveless",
        '-1741986075': "Light Woodland Sleeveless",
        '-1846125957': "Moss Sleeveless",
        '-2092647144': "Sand Sleeveless",
        '-1744981228': "Gray Woodland Sleeveless",
        '-1342603755': "Blue Digital Denim Cut",
        '-1105323426': "Brown Digital Denim Cut",
        '-1250081277': "Aqua Camo Denim Cut",
        '-1354352235': "Splinter Denim Cut",
        '-1624565409': "Contrast Camo Denim Cut",
        '-39692716': "Peach Camo Denim Cut",
        '-367087795': "Flecktarn Denim Cut",
        '-1615274604': "Gray Digital Denim Cut",
        '-425399445': "Peach Digital Denim Cut",
        '-213646167': "Fall Denim Cut",
        '-903204234': "Dark Woodland Denim Cut",
        '-659533950': "Crosshatch Denim Cut",
        '-1383577809': "Urban Collared Parka",
        '-121053781': "Forest Collared Parka",
        '-934693495': "Dotwork Collared Parka",
        '-196768384': "Blue Camo Collared Parka",
        '-905478103': "Peach Collared Parka",
        '-1795390215': "Urban Closed Parka",
        '-1028759460': "Forest Closed Parka",
        '-1957233093': "Tan Camo Closed Parka",
        '-1892874677': "Blue Camo Closed Parka",
        '-39099570': "Urban Patched Closed Parka",
        '-1278226544': "Forest Patched Closed Parka",
        '-112603758': "Peach Closed Parka",
        '-1489786521': "Red Closed Parka",
        '-1032691740': "Teal Closed Parka",
        '-2044414645': "Blue Digital Sleeveless Shirt",
        '-400522': "Aqua Camo Sleeveless Shirt",
        '-713781652': "Splinter Sleeveless Shirt",
        '-382749214': "Contrast Camo Sleeveless Shirt",
        '-1226780347': "Cobble Sleeveless Shirt",
        '-66888775': "Moss Sleeveless Shirt",
        '-763310590': "Green Digital Sleeveless Shirt",
        '-34185673': "Blue Sleeveless Shirt",
        '-1061016955': "Gray Digital Sleeveless Shirt",
        '-564132083': "Blue Digital Combat Shirt",
        '-1957860173': "Splinter Combat Shirt",
        '-205931118': "Peach Camo Combat Shirt",
        '-678263548': "Flecktarn Combat Shirt",
        '-430234987': "Sand Combat Shirt",
        '-1138176627': "Slate Combat Shirt",
        '-1808532064': "White Combat Shirt",
        '-2094703741': "Blue Combat Shirt",
        '-1846284746': "Dark Woodland Combat Shirt",
        '-1941249312': "Moss Digital Combat Shirt",
        '-647594726': "Gray Woodland Combat Shirt",
        '-333196836': "Blue Digital Service Shirt",
        '-1714064132': "Aqua Camo Service Shirt",
        '-1477504721': "Splinter Service Shirt",
        '-153047263': "Contrast Camo Service Shirt",
        '-765663734': "Peach Camo Service Shirt",
        '-516914239': "Brushstroke Service Shirt",
        '-485423238': "Moss Service Shirt",
        '-253451487': "Sand Service Shirt",
        '-408613502': "Black Service Shirt",
        '-639766044': "Slate Service Shirt",
        '-1366189236': "Khaki Service Shirt",
        '-1596456999': "Blue Service Shirt",
        '-1705103794': "Fall Service Shirt",
        '-1537129900': "Dark Woodland Service Shirt",
        '-512246656': "Gray Woodland Service Shirt",
        '-1723012873': "Blue Digital Service Short",
        '-313053049': "Splinter Service Short",
        '-1507909096': "Peach Camo Service Short",
        '-1735555339': "Brushstroke Service Short",
        '-545549104': "Flecktarn Service Short",
        '-915674947': "Moss Service Short",
        '-1155707872': "Sand Service Short",
        '-991403246': "White Service Short",
        '-1221212243': "Brown Service Short",
        '-279767802': "Dark Woodland Service Short",
        '-97572162': "Crosshatch Service Short",
        '-239398778': "Brown Sleeveless Puffer",
        '-134442090': "Ice Sleeveless Puffer",
        '-1975044063': "Orange Sleeveless Puffer",
        '-917424588': "Cyan Sleeveless Puffer",
        '-1728621183': "Blue Sleeveless Puffer",
        '-449275979': "Black Collared Puffer",
        '-1592637938': "Brown Collared Puffer",
        '-182732909': "Red Collared Puffer",
        '-1501357473': "Orange Collared Puffer",
        '-657457416': "Yellow Collared Puffer",
        '-1252607994': "Green Collared Puffer",
        '-1963269297': "Blue Collared Puffer",
        '-788416840': "Blue Digital T-Shirt",
        '-1094708683': "Brown Digital T-Shirt",
        '-391771452': "Cobble T-Shirt",
        '-1393913026': "Peach Camo T-Shirt",
        '-798074299': "Flecktarn T-Shirt",
        '-1071695449': "Light Woodland T-Shirt",
        '-604933801': "Moss T-Shirt",
        '-849226696': "Sand T-Shirt",
        '-1505664712': "Dark Woodland T-Shirt",
        '-1660465468': "Crosshatch T-Shirt",
        '-520943921': "Blue Digital Collared Parka",
        '-270687068': "Brown Digital Collared Parka",
        '-356863481': "Splinter Collared Parka",
        '-1127426516': "Contrast Camo Collared Parka",
        '-516251897': "Peach Camo Collared Parka",
        '-208387142': "Flecktarn Collared Parka",
        '-2074128971': "Fall Collared Parka",
        '-1844385512': "Blue Woodland Collared Parka",
        '-852041885': "Gray Woodland Collared Parka",
        '-166383301': "Contrast Camo Closed Parka",
        '-1838028286': "Peach Camo Closed Parka",
        '-2127771784': "Purple Camo Closed Parka",
        '-1178879851': "Light Woodland Closed Parka",
        '-700288606': "Sand Closed Parka",
        '-47843607': "Crosshatch Closed Parka",
        '-357346812': "Moss Digital Closed Parka",
        '-1569373815': "Gray Woodland Closed Parka",
        '-1437086425': "Aqua Camo Closed Parka",
        '-1803181693': "Splinter Closed Parka",
        '-216277330': "Cobble Closed Parka",
        '-1206753124': "Light Woodland Closed Parka",
        '-2132411840': "Sand Closed Parka",
        '-1850359264': "Peach Digital Closed Parka",
        '-2081937787': "Fall Closed Parka",
        '-1238791409': "Blue Woodland Closed Parka",
        '-1496126374': "Crosshatch Closed Parka",
        '-1817104539': "Blue Digital Open Parka",
        '-1515367587': "Brown Digital Open Parka",
        '-1555691226': "Aqua Camo Open Parka",
        '-1997220732': "Splinter Open Parka",
        '-974041476': "Contrast Camo Open Parka",
        '-711725631': "Cobble Open Parka",
        '-375646767': "Peach Camo Open Parka",
        '-145116852': "Purple Camo Open Parka",
        '-1232669424': "Green Digital Open Parka",
        '-1845221176': "Blue Digital Defender Vest",
        '-1760873774': "Brown Digital Defender Vest",
        '-416978008': "Contrast Camo Defender Vest",
        '-856803526': "Cobble Defender Vest",
        '-666579481': "Brushstroke Defender Vest",
        '-1646798606': "Flecktarn Defender Vest",
        '-1355908193': "Light Woodland Defender Vest",
        '-1132751303': "Moss Defender Vest",
        '-894881132': "Sand Defender Vest",
        '-1924260008': "Green Digital Defender Vest",
        '-1338415826': "Gray Digital Defender Vest",
        '-1636646495': "Peach Digital Defender Vest",
        '-322221733': "Aqua Camo Sports Biker",
        '-612030773': "Cobble Sports Biker",
        '-916815242': "Peach Camo Sports Biker",
        '-306164927': "Flecktarn Sports Biker",
        '-1870688063': "Light Woodland Sports Biker",
        '-1254204866': "Sand Sports Biker",
        '-1945364420': "Green Digital Sports Biker",
        '-1640055647': "Gray Digital Sports Biker",
        '-1769853648': "Moss Digital Sports Biker",
        '-2067232323': "Gray Woodland Sports Biker",
        '-242229096': "Blue Digital Denim Biker",
        '-480820185': "Brown Digital Denim Biker",
        '-1559678208': "Light Woodland Denim Biker",
        '-1788831825': "Moss Denim Biker",
        '-962135493': "Sand Denim Biker",
        '-1621509079': "Gray Woodland Denim Biker",
        '-136004638': "Blue Digital Cargo",
        '-935928697': "Brown Digital Cargo",
        '-1328653999': "Cobble Cargo",
        '-278243700': "Light Woodland Cargo",
        '-46337487': "Moss Cargo",
        '-1940483998': "Sand Cargo",
        '-1688829241': "Green Digital Cargo",
        '-1382013094': "Gray Digital Cargo",
        '-1569025773': "Peach Digital Cargo",
        '-1261947474': "Fall Cargo",
        '-2046896104': "Dark Woodland Cargo",
        '-1741325179': "Crosshatch Cargo",
        '-380194573': "Brushstroke Cargo",
        '-79080232': "Flecktarn Cargo",
        '-1281473149': "Light Woodland Cargo",
        '-589391869': "Moss Cargo",
        '-1844903335': "Sand Cargo",
        '-1425076209': "Peach Digital Cargo",
        '-279013203': "Gray Woodland Cargo",
        '-704259671': "Blue Digital Cargo Shorts",
        '-1952424626': "Contrast Camo Cargo Shorts",
        '-1718879963': "Cobble Cargo Shorts",
        '-773789234': "Peach Camo Cargo Shorts",
        '-1233833225': "Flecktarn Cargo Shorts",
        '-995537057': "Light Woodland Cargo Shorts",
        '-1595996225': "Moss Cargo Shorts",
        '-1373658560': "Sand Cargo Shorts",
        '-1651185476': "Fall Cargo Shorts",
        '-428180846': "Gray Woodland Cargo Shorts",
        '-1961658024': "Aqua Camo Overalls",
        '-1242411243': "Splinter Overalls",
        '-673738009': "Contrast Camo Overalls",
        '-1833891693': "Cobble Overalls",
        '-998577114': "Peach Camo Overalls",
        '-39952780': "Moss Overalls",
        '-392449265': "Black Overalls",
        '-1612602988': "Slate Overalls",
        '-864814408': "White Overalls",
        '-183055355': "Light Brown Overalls",
        '-284532513': "Fall Overalls",
        '-1035565224': "Dark Woodland Overalls",
        '-295608435': "Moss Digital Overalls",
        '-533576953': "Gray Woodland Overalls",
        '-1664108157': "Indigo Denim Overalls",
        '-1366401792': "Faded Indigo Denim Overalls",
        '-1049656638': "Dark Denim Overalls",
        '-751491507': "Faded Dark Denim Overalls",
        '-500513736': "Light Denim Overalls",
        '-135532614': "Faded Light Denim Overalls",
        '-1680742445': "Splinter T-Shirt",
        '-1987099826': "Contrast Camo T-Shirt",
        '-10899747': "Peach Camo T-Shirt",
        '-960119358': "Light Woodland T-Shirt",
        '-1265886897': "Moss T-Shirt",
        '-308409498': "Sand T-Shirt",
        '-2094172801': "Crosshatch T-Shirt",
        '-1864822566': "Moss Digital T-Shirt",
        '-1565215599': "Gray Woodland T-Shirt",
        '-2039205014': "Brown Digital T-Shirt",
        '-2080783221': "Aqua Camo T-Shirt",
        '-1633224219': "Splinter T-Shirt",
        '-1133202060': "Contrast Camo T-Shirt",
        '-1926048015': "Cobble T-Shirt",
        '-557680113': "Peach Camo T-Shirt",
        '-1315463238': "Brushstroke T-Shirt",
        '-213114078': "Flecktarn T-Shirt",
        '-1006746489': "Light Woodland T-Shirt",
        '-395244180': "Sand T-Shirt",
        '-1668456548': "Green Digital T-Shirt",
        '-128510154': "Gray Woodland T-Shirt",
        '-1741223462': "Splinter T-Shirt",
        '-1117170626': "Contrast Camo T-Shirt",
        '-645821330': "Brushstroke T-Shirt",
        '-351719555': "Flecktarn T-Shirt",
        '-1940000220': "Moss T-Shirt",
        '-522705043': "Peach Digital T-Shirt",
        '-752677885': "Fall T-Shirt",
        '-475091682': "Dark Woodland T-Shirt",
        '-713125698': "Crosshatch T-Shirt",
        '-101557851': "Gray Woodland T-Shirt",
        '-1529425423': "Aqua Camo T-Shirt",
        '-1768344202': "Splinter T-Shirt",
        '-279189766': "Cobble T-Shirt",
        '-670910392': "Peach Camo T-Shirt",
        '-876470329': "Brushstroke T-Shirt",
        '-1963932542': "Green Digital T-Shirt",
        '-1731305411': "Gray Digital T-Shirt",
        '-1558645546': "Peach Digital T-Shirt",
        '-1327067019': "Fall T-Shirt",
        '-948388455': "Dark Woodland T-Shirt",
        '-714909330': "Crosshatch T-Shirt",
        '-605264256': "Moss Digital T-Shirt",
        '-334199088': "Gray Woodland T-Shirt",
        '-1600777169': "Brown Digital T-Shirt",
        '-1705097701': "Aqua Camo T-Shirt",
        '-2080269982': "Contrast Camo T-Shirt",
        '-445850605': "Cobble T-Shirt",
        '-689488120': "Peach Camo T-Shirt",
        '-47772793': "Brushstroke T-Shirt",
        '-360978895': "Flecktarn T-Shirt",
        '-749373011': "Green Digital T-Shirt",
        '-1928237786': "Gray Digital T-Shirt",
        '-644512199': "Fall T-Shirt",
        '-970137764': "Crosshatch T-Shirt",
        '-427483112': "Moss Digital T-Shirt",
        '-1646497592': "Knuckleduster Pocket Tee",
        '-249035763': "Knuckleduster Pocket Tee",
        '-1265405818': "Blue Digital Armored",
        '-528168856': "Brown Digital Armored",
        '-1449456017': "Splinter Armored",
        '-873245921': "Contrast Camo Armored",
        '-1601307563': "Brushstroke Armored",
        '-2099789591': "Flecktarn Armored",
        '-213376680': "Moss Armored",
        '-768070705': "Green Digital Armored",
        '-311107000': "Peach Digital Armored",
        '-825154359': "Fall Armored",
        '-1056437961': "Dark Woodland Armored",
        '-79364688': "Crosshatch Armored",
        '-578764248': "Moss Digital Armored",
        '-739286283': "Aqua Camo Tactical",
        '-987183768': "Splinter Tactical",
        '-1085818470': "Peach Camo Tactical",
        '-1325523705': "Brushstroke Tactical",
        '-154031955': "Sand Tactical",
        '-2115047201': "Gray Digital Tactical",
        '-1145445260': "Peach Digital Tactical",
        '-1907848814': "Fall Tactical",
        '-400769731': "Dark Woodland Tactical",
        '-1441119947': "Crosshatch Tactical",
        '-679732228': "Gray Woodland Tactical",
        '-7883191': "Brown Digital Armored",
        '-1606250957': "Contrast Camo Armored",
        '-741608123': "Cobble Armored",
        '-1039248950': "Peach Camo Armored",
        '-145703858': "Brushstroke Armored",
        '-1843596824': "Flecktarn Armored",
        '-2024612780': "Light Woodland Armored",
        '-1254049757': "Moss Armored",
        '-855119951': "Sand Armored",
        '-1204443278': "Green Digital Armored",
        '-1448310176': "Gray Digital Armored",
        '-1001242657': "Peach Digital Armored",
        '-1534328749': "Fall Armored",
        '-542837116': "Dark Woodland Armored",
        '-773203186': "Crosshatch Armored",
        '-1993029211': "Moss Digital Armored",
        '-1084055749': "Aqua Camo Armored",
        '-223869499': "Cobble Armored",
        '-2078562130': "Sand Armored",
        '-1854673975': "Green Digital Armored",
        '-438791007': "Fall Armored",
        '-205246344': "Moss Digital Armored",
        '-1327322446': "Gray Woodland Armored",
        '-1186892705': "Aqua Camo Armored",
        '-1233686857': "Splinter Armored",
        '-998962510': "Contrast Camo Armored",
        '-1678689877': "Cobble Armored",
        '-1447340737': "Peach Camo Armored",
        '-282238942': "Brushstroke Armored",
        '-735139291': "Light Woodland Armored",
        '-487798879': "Moss Armored",
        '-210237172': "Green Digital Armored",
        '-745486010': "Peach Digital Armored",
        '-515185478': "Fall Armored",
        '-1359347687': "Dark Woodland Armored",
        '-1694836709': "Crosshatch Armored",
        '-1431832715': "Moss Digital Armored",
        '-971593942': "Blue Digital Armored",
        '-670261890': "Aqua Camo Armored",
        '-226602399': "Contrast Camo Armored",
        '-207486432': "Green Digital Armored",
        '-818169524': "Gray Digital Armored",
        '-1604691062': "Gray Woodland Armored",
        '-2088077681': "Cobble Armored",
        '-1648055553': "Peach Camo Armored",
        '-1359327894': "Brushstroke Armored",
        '-1187683872': "Flecktarn Armored",
        '-899152827': "Light Woodland Armored",
        '-458606391': "Moss Armored",
        '-168567972': "Sand Armored",
        '-501005851': "Green Digital Armored",
        '-527647048': "Peach Digital Armored",
        '-835511803': "Fall Armored",
        '-1186467793': "Dark Woodland Armored",
        '-1427025022': "Crosshatch Armored",
        '-1140787811': "Moss Digital Armored",
        '-1444261520': "Gray Woodland Armored",
        '-2010509666': "Aqua Camo Tactical",
        '-619203460': "Flecktarn Tactical",
        '-864741577': "Light Woodland Tactical",
        '-223747168': "Moss Tactical",
        '-403648978': "Sand Tactical",
        '-837426192': "Green Digital Tactical",
        '-1807454130': "Dark Woodland Tactical",
        '-171658419': "Crosshatch Tactical",
        '-466218960': "Moss Digital Tactical",
        '-181565105': "Blue Digital Tactical",
        '-1234717466': "Aqua Camo Tactical",
        '-1539633011': "Splinter Tactical",
        '-1811091411': "Brushstroke Tactical",
        '-7092423': "Light Woodland Tactical",
        '-319479300': "Moss Tactical",
        '-1792915146': "Crosshatch Tactical",
        '-2082986334': "Moss Digital Tactical",
        '-898157601': "Gray Woodland Tactical",
        '-1222067972': "Brown Digital Tactical",
        '-1119634628': "Aqua Camo Tactical",
        '-1564113344': "Splinter Tactical",
        '-1753256012': "Contrast Camo Tactical",
        '-2057516177': "Cobble Tactical",
        '-503577540': "Flecktarn Tactical",
        '-870459264': "Light Woodland Tactical",
        '-1114096779': "Moss Tactical",
        '-1344626694': "Sand Tactical",
        '-1464656879': "Green Digital Tactical",
        '-232902934': "Fall Tactical",
        '-607387066': "Dark Woodland Tactical",
        '-2132521868': "Crosshatch Tactical",
        '-1272292232': "Contrast Camo Tactical",
        '-977666153': "Cobble Tactical",
        '-973799407': "Peach Camo Tactical",
        '-670718926': "Brushstroke Tactical",
        '-26223147': "Dark Woodland Tactical",
        '-534339261': "Crosshatch Tactical",
        '-761592276': "Moss Digital Tactical",
        '-965153304': "Gray Woodland Tactical",
        '-859896259': "Brown Digital Tactical",
        '-300131866': "Aqua Camo Tactical",
        '-398312125': "Green Digital Tactical",
        '-1306865419': "Gray Digital Tactical",
        '-1009486744': "Peach Digital Tactical",
        '-354270589': "Crosshatch Tactical",
        '-55581154': "Moss Digital Tactical",
        '-1659896370': "Blue Digital Armored",
        '-1077787854': "Brown Digital Armored",
        '-1800703384': "Splinter Armored",
        '-649135174': "Flecktarn Armored",
        '-958605610': "Light Woodland Armored",
        '-1575711418': "Moss Armored",
        '-260758377': "Green Digital Armored",
        '-1553233275': "Gray Digital Armored",
        '-718705152': "Peach Digital Armored",
        '-1868660317': "Blue Digital Tactical",
        '-1527010723': "Brown Digital Tactical",
        '-1095807491': "Aqua Camo Tactical",
        '-341235732': "Splinter Tactical",
        '-656702895': "Contrast Camo Tactical",
        '-2055742581': "Sand Tactical",
        '-2118786094': "Gray Digital Tactical",
        '-142319190': "Blue Digital Tactical",
        '-1766743811': "Brushstroke Tactical",
        '-1028458241': "Flecktarn Tactical",
        '-1262133980': "Light Woodland Tactical",
        '-552881744': "Moss Tactical",
        '-818212337': "Sand Tactical",
        '-413286023': "Gray Digital Tactical",
        '-1600441359': "Gray Woodland Tactical",
        '-802903636': "Blue Digital Tactical",
        '-1041822415': "Brown Digital Tactical",
        '-1864883936': "Aqua Camo Tactical",
        '-1550596457': "Splinter Tactical",
        '-1133184935': "Contrast Camo Tactical",
        '-823026350': "Cobble Tactical",
        '-658525970': "Peach Camo Tactical",
        '-360885143': "Brushstroke Tactical",
        '-398438413': "Flecktarn Tactical",
        '-243047815': "Light Woodland Tactical",
        '-1287524377': "Crosshatch Tactical",
        '-1710613996': "Blue Digital Tactical",
        '-867041629': "Brown Digital Tactical",
        '-244309944': "Splinter Tactical",
        '-473987865': "Contrast Camo Tactical",
        '-694850941': "Cobble Tactical",
        '-1035451927': "Peach Camo Tactical",
        '-1399155046': "Brushstroke Tactical",
        '-955593862': "Flecktarn Tactical",
        '-1857691663': "Light Woodland Tactical",
        '-1153748005': "Moss Tactical",
        '-825097309': "Peach Digital Tactical",
        '-2073039140': "Dark Woodland Tactical",
        '-921215772': "Aqua Camo Tactical",
        '-474181242': "Flecktarn Tactical",
        '-251745270': "Light Woodland Tactical",
        '-1152852857': "Green Digital Tactical",
        '-2077725105': "Peach Digital Tactical",
        '-555670597': "Gray Woodland Tactical",
        '-768009060': "Blue Digital Tactical",
        '-1969549983': "Brown Digital Tactical",
        '-2046802346': "Contrast Camo Tactical",
        '-1442869676': "Cobble Tactical",
        '-1262378024': "Peach Camo Tactical",
        '-831891671': "Brushstroke Tactical",
        '-685152089': "Flecktarn Tactical",
        '-321317878': "Moss Tactical",
        '-1059832847': "Sand Tactical",
        '-121804380': "Green Digital Tactical",
        '-1359555048': "Gray Digital Tactical",
        '-1657720179': "Peach Digital Tactical",
        '-1353085777': "Splinter Tactical",
        '-493423831': "Contrast Camo Tactical",
        '-1931098172': "Cobble Tactical",
        '-1103484304': "Peach Camo Tactical",
        '-275968767': "Light Woodland Tactical",
        '-821826486': "Peach Digital Tactical",
        '-1119795003': "Fall Tactical",
        '-640810526': "Crosshatch Tactical",
        '-1732214844': "Moss Digital Tactical",
        '-2059675461': "Gray Woodland Tactical",
        '-878058152': "Blue Digital Tactical",
        '-630029587': "Brown Digital Tactical",
        '-404371066': "Aqua Camo Tactical",
        '-672913021': "Splinter Tactical",
        '-837020173': "Contrast Camo Tactical",
        '-2132444285': "Light Woodland Tactical",
        '-12399479': "Peach Digital Tactical",
        '-2080123379': "Crosshatch Tactical",
        '-166932227': "Aqua Camo Armored",
        '-1464486296': "Splinter Armored",
        '-466735808': "Contrast Camo Armored",
        '-2013268767': "Moss Armored",
        '-285047506': "Green Digital Armored",
        '-1702437832': "Crosshatch Armored",
        '-1437041701': "Moss Digital Armored",
        '-217671269': "Cobble Armored",
        '-577474893': "Brushstroke Armored",
        '-937278513': "Flecktarn Armored",
        '-1042303158': "Light Woodland Armored",
        '-1432057644': "Moss Armored",
        '-1487961566': "Sand Armored",
        '-26923292': "Gray Digital Armored",
        '-505055823': "Peach Digital Armored",
        '-275836616': "Dark Woodland Armored",
        '-1270539663': "Crosshatch Armored",
        '-1500610812': "Moss Digital Armored",
        '-791555190': "Gray Woodland Armored",
        '-2145603758': "Brown Digital Armored",
        '-1353103715': "Cobble Armored",
        '-1040421917': "Peach Camo Armored",
        '-391235258': "Light Woodland Armored",
        '-83632655': "Moss Armored",
        '-1927544285': "Sand Armored",
        '-50386659': "Dark Woodland Armored",
        '-730966020': "Moss Digital Armored",
        '-512167407': "Gray Woodland Armored",
        '-442736883': "Brown Digital Armored",
        '-1442828558': "Splinter Armored",
        '-1754822207': "Contrast Camo Armored",
        '-995498939': "Cobble Armored",
        '-1265351654': "Peach Camo Armored",
        '-1905231917': "Light Woodland Armored",
        '-1225915983': "Green Digital Armored",
        '-952393140': "Gray Digital Armored",
        '-1720531269': "Peach Digital Armored",
        '-1412895897': "Fall Armored",
        '-1814905989': "Crosshatch Armored",
        '-1501536929': "Blue Digital Armored",
        '-1823525123': "Brown Digital Armored",
        '-1919475738': "Aqua Camo Armored",
        '-448966859': "Splinter Armored",
        '-1830081902': "Contrast Camo Armored",
        '-1062631922': "Cobble Armored",
        '-194712188': "Peach Camo Armored",
        '-634341092': "Flecktarn Armored",
        '-223647239': "Sand Armored",
        '-1546037243': "Dark Woodland Armored",
        '-1752187022': "Crosshatch Armored",
        '-2125098242': "Moss Digital Armored",
        '-380633727': "Cobble Armored",
        '-694331364': "Peach Camo Armored",
        '-2083409270': "Brushstroke Armored",
        '-1103550636': "Sand Armored",
        '-340652766': "Green Digital Armored",
        '-176676690': "Gray Digital Armored",
        '-2039725420': "Gray Woodland Armored",
        '-249199502': "Splinter Armored",
        '-562077914': "Contrast Camo Armored",
        '-323355749': "Cobble Armored",
        '-565420332': "Peach Camo Armored",
        '-335087031': "Brushstroke Armored",
        '-1163683965': "Flecktarn Armored",
        '-950456082': "Light Woodland Armored",
        '-1783444086': "Moss Armored",
        '-1560188889': "Sand Armored",
        '-2016478785': "Green Digital Armored",
        '-1659722666': "Peach Digital Armored",
        '-1903032491': "Fall Armored",
        '-1067422991': "Dark Woodland Armored",
        '-1307652530': "Crosshatch Armored",
        '-1599396038': "Black Combat Mask",
        '-485023222': "Tan Tiger Silk Bomber",
        '-235771209': "Purple Solar Silk Bomber",
        '-2086203870': "Blue Warrior Silk Bomber",
        '-1501735986': "Ice Warrior Silk Bomber",
        '-1209010509': "Brown Dragon Silk Bomber",
        '-298949003': "Chocolate JC Jacket",
        '-1051980539': "Burgundy JC Jacket",
        '-847253406': "Viper Motocross",
        '-1547658012': "Candy Motocross",
        '-1891692': "Cherry Motocross",
        '-2113100067': "Boost Motocross",
        '-917228181': "Pumped Motocross",
        '-1459902630': "Atomic Motocross",
        '-1495563178': "Xtreme Motocross",
        '-1256841013': "Spotty Motocross",
        '-883471027': "Rays Motocross",
        '-645338704': "Power Motocross",
        '-1924116160': "Turbo Motocross",
        '-1564509154': "Slalom Motocross",
        '-66504167': "Red Satin Jacket",
        '-943533683': "Black Satin Jacket",
        '-612208821': "Howitzer Satin Jacket",
        '-1915825179': "Imponte Racing Satin Jacket",
        '-1604912907': "Nagasaki Satin Jacket",
        '-396586248': "Orange Satin Jacket",
        '-157569162': "Viper Satin Jacket",
        '-248745708': "Banshee Racing Jacket",
        '-477506097': "Pigalle Racing Jacket",
        '-2028659485': "Dinka Racing Jacket",
        '-1458139604': "Chocolate JC Logo Jacket",
        '-263054174': "Tan JC Logo Jacket",
        '-1522497944': "Burgundy JC Logo Jacket",
        '-613642464': "Barfs Muscle Pants",
        '-35040231': "Neon Camo Muscle Pants",
        '-375313527': "Space Ranger Muscle Pants",
        '-1568203434': "Sprunk Muscle Pants",
        '-1114304491': "Star Muscle Pants",
        '-281480356': "Lazer Force Muscle Pants",
        '-512469037': "Impotent Rage Muscle Pants",
        '-1337345508': "Racesuit Gloves",
        '-1118034209': "Racesuit Gloves",
        '-1421704532': "Racesuit Gloves",
        '-2066488527': "Racesuit Gloves",
        '-1108552334': "Racesuit Gloves",
        '-936777236': "Racesuit Gloves",
        '-1674079736': "Racesuit Gloves",
        '-1364314379': "Racesuit Gloves",
        '-907343093': "Motocross Gloves",
        '-1741805992': "Motocross Gloves",
        '-427670785': "Motocross Gloves",
        '-1129058461': "Motocross Gloves",
        '-1964635192': "Motocross Gloves",
        '-2115077361': "Motocross Gloves",
        '-1902827580': "Gray Striped T-Shirt",
        '-966945933': "Love Fist V Neck",
        '-196387738': "Grey T-Shirt",
        '-1316142576': "Green T-Shirt",
        '-1337966730': "Yellow T-Shirt",
        '-720041697': "Lilac T-Shirt",
        '-1011161493': "Grey T-Shirt",
        '-1402782490': "Blue Banded Tank",
        '-1700488855': "Lavender Tank",
        '-876708964': "Hot Pink Tank",
        '-1176545314': "Camo Tank",
        '-449171821': "Gray Splatter Tank",
        '-948768874': "Pikeys Tee",
        '-1254798565': "Yellow Tee",
        '-1540380400': "Flower Fractal Tee",
        '-1930997538': "Purple Plaid Untucked",
        '-1547514948': "Love Fist V Neck",
        '-1087176036': "Blue Striped V Neck",
        '-138622515': "Denim Shirt & Braces",
        '-198293482': "Tabby Cat",
        '-932698717': "Brown Fox",
        '-465002528': "White Owl",
        '-274623600': "Sky Blue Canvas Shoes",
        '-126507708': "Orange Canvas Shoes",
        '-1068714765': "Gray Two-Tone Canvas Shoes",
        '-1416000627': "Checked Canvas Shoes",
        '-750888230': "Plaid Canvas Shoes",
        '-451249063': "Yellow Soled Wingtips",
        '-1260610594': "Navy Wingtips",
        '-1316186810': "Orange Soled Wingtips",
        '-1078972019': "Burgundy Wingtips",
        '-721003463': "Blue Soled Wingtips",
        '-482019146': "Woodland Camo Wingtips",
        '-407436898': "Gentleman Wingtips",
        '-1903246936': "Long Slicked Dark Brown",
        '-1605475033': "Long Slicked Blond",
        '-1619297862': "Hipster Youth Blond",
        '-1878926649': "Hipster Youth Auburn",
        '-485850917': "Hipster Youth Light Brown",
        '-506901606': "Gray Striped T-Shirt",
        '-1365575820': "Denim Shirt & Braces",
        '-2067716512': "Yellow T-Shirt",
        '-2118748741': "Woodland Camo Sports Coat",
        '-576311911': "Sky Blue Sports Coat",
        '-1471757605': "Pink Sports Coat",
        '-1174116778': "Leopard Sports Coat",
        '-1530119194': "Lobster Sports Coat",
        '-1882888536': "Lavender Tank",
        '-958475046': "Gray Splatter Tank",
        '-1937756215': "Chestnut Leather Jacket",
        '-1396608949': "Brown Leather Jacket",
        '-948882907': "Charcoal Two-Tone Tee",
        '-1764798238': "Camo Tee",
        '-1458178705': "Pikeys Tee",
        '-195130369': "Yellow Tee",
        '-454742533': "Red Two-Tone Polo Shirt",
        '-770013082': "Navy Two-Tone Polo Shirt",
        '-426321106': "Dark Olive Fitted",
        '-655540261': "Green Fitted",
        '-954754000': "Blue Splatter Fitted",
        '-1722269518': "Red Splatter Fitted",
        '-228330808': "Leopard Fitted",
        '-624403420': "Yellow Chinos",
        '-326369365': "Blue Chinos",
        '-1158587243': "Lilac Chinos",
        '-1212836353': "Orange Chinos",
        '-982240900': "White Chinos",
        '-288455620': "Dark Teal Chinos",
        '-213511101': "Leopard Slim Fit",
        '-131817988': "Cream Slim Fit",
        '-1306202352': "Olive Slim Fit",
        '-1602073653': "Brown Slim Fit",
        '-488386415': "Light Gray Slim Fit",
        '-2130375471': "Vintage Woven Slim Fit",
        '-1881470876': "White Scarf",
        '-1567248935': "Gray Scarf",
        '-713124950': "Green Scarf",
        '-684938057': "White Scarf",
        '-933949688': "Gray Scarf",
        '-1228968995': "Black Scarf",
        '-1410116027': "Navy Scarf",
        '-1171852632': "Red Scarf",
        '-1346511402': "Green Scarf",
        '-1984028188': "Chemical Mask",
        '-1138470677': "Crime Scene Tape",
        '-651031802': "Hazard Tape",
        '-344739959': "Red Arrow Tape",
        '-878039873': "Light Gray Duct Tape",
        '-1328187626': "White Duct Tape",
        '-1282673470': "Up-n-Atom Paper Bag",
        '-936108522': "Manic Paper Bag",
        '-829567064': "Skull Paper Bag",
        '-130604290': "Dog Paper Bag",
        '-380009149': "Pink Paper Bag",
        '-671236695': "Sad Paper Bag",
        '-1797925843': "The Bird Paper Bag",
        '-672409000': "Love Paper Bag",
        '-1976713507': "Blackout Paper Bag",
        '-1866059977': "Shy Paper Bag",
        '-932067705': "Skull Face Bandana",
        '-1720489849': "Forest Face Bandana",
        '-1153553376': "Paisley Face Bandana",
        '-1327753380': "Yellow Face Bandana",
        '-571992369': "Black Tight Ski",
        '-502784249': "Gray Tight Ski",
        '-489414497': "White Tight Ski",
        '-38742440': "Green Tight Ski",
        '-949818947': "Charcoal Tight Ski",
        '-1723396730': "Forest Tight Ski",
        '-1258109699': "Blue Tight Ski",
        '-2104500208': "Yellow Tight Ski",
        '-815223021': "Urban Hooded Ski",
        '-1180269681': "Skull Hooded Ski",
        '-1508754657': "Black T-Shirt Mask",
        '-1832119149': "White T-Shirt Mask",
        '-73891813': "LSPD T-Shirt Mask",
        '-542069157': "Stripy T-Shirt Mask",
        '-831648810': "Love Fist T-Shirt Mask",
        '-490793533': "Khaki Toggle Ski",
        '-486726551': "Blue Loose Balaclava",
        '-1032068249': "Skull Loose Balaclava",
        '-728660078': "Khaki Loose Balaclava",
        '-850691818': "Bloody Loose Balaclava",
        '-544072285': "Woodland Loose Balaclava",
        '-1811183977': "Red Loose Balaclava",
        '-1111303675': "Outback Loose Balaclava",
        '-551441667': "Black Knit Balaclava",
        '-1935014381': "Army Green Knit Balaclava",
        '-798405153': "Princess Balaclava",
        '-30594710': "Didier Sachs Balaclava",
        '-337378088': "Perseus Band Balaclava",
        '-1687395354': "Sessanta Nove Balaclava",
        '-1733992872': "White Knit Balaclava",
        '-960546165': "Blue Knit Balaclava",
        '-1274735337': "Red Knit Balaclava",
        '-1149508682': "Copper Knit Balaclava",
        '-1512687509': "Brown Knit Balaclava",
        '-228961962': "Flying Bravo FB Balaclava",
        '-719617754': "Bandit Knit Balaclava",
        '-412736069': "Nature Knit Balaclava",
        '-747569723': "Orange Camo Knit Balaclava",
        '-1043690630': "Pink Infected",
        '-160762694': "Brown Infected",
        '-369027206': "White Mummy",
        '-119556809': "Green Mummy",
        '-1781972293': "Pale Frank",
        '-2026134112': "Gray Frank",
        '-884946138': "Princess Robot Bubblegum",
        '-277410169': "Black Tactical Boots",
        '-510186377': "Black Scruffy Boots",
        '-208824011': "Black Rolled Shirt",
        '-1967471176': "Full Black Leather Jacket",
        '-1000349099': "Black Hooded Jacket",
        '-1701048618': "Dark Gray Hooded Jacket",
        '-1536351624': "Red Hooded Jacket",
        '-802784790': "Navy Hooded Jacket",
        '-1678970076': "Red Hooded Jacket",
        '-1850220870': "Navy Hooded Jacket",
        '-1687446353': "Gray Baggy Hoodie",
        '-1404289268': "Black Tailcoat",
        '-623805034': "Gray Scruffy Jacket",
        '-578911504': "Beige Scruffy Jacket",
        '-273668269': "Black Scruffy Jacket",
        '-305423315': "Gray Rolled Jacket",
        '-125980271': "Beige Rolled Jacket",
        '-114412858': "Blue Rolled Jacket",
        '-2136395587': "Beige Stealth Jacket",
        '-444589921': "Black Heist Pants",
        '-1405370292': "Black Battle Pants",
        '-907200733': "Gray Scruffy Suit Pants",
        '-219704607': "Stealth Utility Vest",
        '-1319425641': "White Untucked",
        '-1019622060': "Steel Untucked",
        '-1793274004': "Earth Plaid Untucked",
        '-1549112185': "Fruity Plaid Untucked",
        '-1408327934': "Red Untucked",
        '-1395416948': "Moss Untucked",
        '-1739646902': "White Untucked",
        '-1357494824': "Steel Untucked",
        '-209845914': "Red Check Untucked",
        '-2008549324': "Red Untucked",
        '-687139395': "Butter Untucked",
        '-261168160': "Charcoal Loose Tie",
        '-502970611': "Khaki Hatch Loose Tie",
        '-2091509917': "Orange Loose Tie",
        '-1660073263': "Blue Diamond Loose Tie",
        '-604423435': "White Stripy Loose Tie",
        '-836591800': "Green Loose Tie",
        '-1806423064': "Teal Loose Tie",
        '-1638197670': "Blue Diamond Straight Tie",
        '-1474287132': "Tan Stripy Straight Tie",
        '-1176384153': "Pink Straight Tie",
        '-1012145925': "Green Diamond Straight Tie",
        '-2094603632': "Green Straight Tie",
        '-1527896546': "Fuchsia Straight Tie",
        '-1065296573': "Tan Straight Tie",
        '-824280578': "Blue Stripy Straight Tie",
        '-1178546225': "Teal Straight Tie",
        '-1614788529': "Green Diamond Slack Tie",
        '-1845646134': "Blue Hatch Slack Tie",
        '-2130090296': "Fuchsia Slack Tie",
        '-1132503629': "Gray Diamond Slack Tie",
        '-1744202552': "Blue Stripy Slack Tie",
        '-975409043': "Teal Slack Tie",
        '-414534788': "Black Driving Gloves",
        '-1965098334': "Brown Driving Gloves",
        '-168696119': "Brown Driving Gloves",
        '-259688953': "Black Driving Gloves",
        '-1092382012': "Brown Driving Gloves",
        '-581361692': "Brown Leather Gloves",
        '-1996495396': "Brown Leather Gloves",
        '-743369876': "Black Leather Gloves",
        '-918159718': "Brown Leather Gloves",
        '-1420954963': "Black Leather Gloves",
        '-1452974489': "Brown Leather Gloves",
        '-1341952738': "Brown Leather Gloves",
        '-1773462635': "Brown Leather Gloves",
        '-736534114': "Black Leather Gloves",
        '-1299767686': "Brown Leather Gloves",
        '-775417853': "Black Woolen Gloves",
        '-393855617': "Gray Woolen Gloves",
        '-887620680': "Gray Woolen Gloves",
        '-2039335276': "Black Woolen Gloves",
        '-2076303403': "Black Woolen Gloves",
        '-1919929735': "Gray Woolen Gloves",
        '-2118725149': "Black Woolen Gloves",
        '-1803192448': "Gray Woolen Gloves",
        '-1788181069': "Gray Woolen Gloves",
        '-1131137757': "Black Woolen Gloves",
        '-428683507': "Gray Woolen Gloves",
        '-1673886961': "Black Woolen Gloves",
        '-1327700085': "Gray Fingerless Gloves",
        '-849747283': "Black Fingerless Gloves",
        '-1145061511': "Gray Fingerless Gloves",
        '-1280288284': "Black Fingerless Gloves",
        '-2108558724': "Brown Driving Gloves",
        '-713453992': "Black Fingerless Gloves",
        '-1137668925': "Refuse Collector Gloves",
        '-1000105499': "Refuse Collector Gloves",
        '-277171126': "Brown Driving Gloves",
        '-233124949': "Refuse Collector Gloves",
        '-1794803798': "Refuse Collector Gloves",
        '-868636293': "White Cotton Gloves",
        '-245327436': "White Cotton Gloves",
        '-981246739': "White Cotton Gloves",
        '-1675687168': "White Cotton Gloves",
        '-2147200029': "White Cotton Gloves",
        '-252997160': "White Cotton Gloves",
        '-957185436': "White Cotton Gloves",
        '-81887956': "White Cotton Gloves",
        '-481241218': "Blue Surgical Gloves",
        '-245861491': "White Surgical Gloves",
        '-2092735770': "Blue Surgical Gloves",
        '-1665814217': "Blue Surgical Gloves",
        '-1905343664': "White Surgical Gloves",
        '-381889304': "Blue Surgical Gloves",
        '-1838714866': "Blue Surgical Gloves",
        '-2059807309': "White Surgical Gloves",
        '-2044888090': "Blue Surgical Gloves",
        '-1739218858': "White Surgical Gloves",
        '-86904022': "Blue Surgical Gloves",
        '-853796929': "White Surgical Gloves",
        '-2008618302': "White Surgical Gloves",
        '-240960885': "Blue Surgical Gloves",
        '-1513577773': "White Surgical Gloves",
        '-1858518769': "Black Driving Gloves",
        '-651079450': "Brown Driving Gloves",
        '-428623875': "Sienna Cowboy Boots",
        '-675964287': "Cream Cowboy Boots",
        '-86515515': "Brown Cowboy Boots",
        '-324975528': "Black Cowboy Boots",
        '-1966210185': "All Black Cowboy Boots",
        '-534663655': "Sienna Cowboy Boots",
        '-1370961300': "Cream Cowboy Boots",
        '-773746279': "Black Cowboy Boots",
        '-1135588860': "Black Silk Pajamas",
        '-501115482': "SN Silk Pajamas",
        '-274648923': "Perseus Silk Pajamas",
        '-1798008670': "Red Shiny Open Jacket",
        '-1500302305': "Blue Shiny Open Jacket",
        '-463228985': "Black Shiny Open Jacket",
        '-605293415': "Red Shiny Jacket",
        '-1393289558': "Blue Shiny Jacket",
        '-1162694105': "Black Shiny Jacket",
        '-1738379897': "Green Shiny Jacket",
        '-272483817': "Floral Loose Shirt",
        '-1614524187': "White Silk Jacket",
        '-1324975026': "Red Smoking Jacket",
        '-98693504': "Black Smoking Jacket",
        '-797590616': "Cherry Smoking Jacket",
        '-1037230313': "Noir Smoking Jacket",
        '-180257876': "White Sweater Vest",
        '-484096606': "San Andreas Polo",
        '-681300448': "Flying Bravo Polo",
        '-504937326': "Demon Tracksuit Top",
        '-719246586': "Charcoal Tracksuit Top",
        '-254090631': "Teal Tracksuit Top",
        '-1476508609': "Red Print Silk Robe",
        '-2075296546': "Navy Print Silk Robe",
        '-525912604': "Brown Print Silk Robe",
        '-1179874352': "Gray Cashmere Coat",
        '-360939083': "Flying Bravo Tucked Polo",
        '-1008640532': "Denim Tucked Shirt",
        '-739443197': "Black Tucked Shirt",
        '-1198403230': "Blue Flying Bravo Hoodie",
        '-1565801673': "White Continental Closed Jacket",
        '-126980421': "Navy Continental Closed Jacket",
        '-971077092': "Blue Continental Closed Jacket",
        '-1509471686': "Lilac Continental Closed Jacket",
        '-1054605197': "Yellow Continental Closed Jacket",
        '-92983136': "Blossom Swim Shorts",
        '-428692179': "Black Tracksuit Pants",
        '-786201969': "Charcoal Tracksuit Pants",
        '-1039866806': "Navy Tracksuit Pants",
        '-1395344918': "Teal Tracksuit Pants",
        '-389042530': "Tan Utility Pants",
        '-1218262075': "Khaki Utility Pants",
        '-1091214220': "White Continental Pants",
        '-1245556194': "Yellow Continental Pants",
        '-1435769399': "Navy Continental Slim Pants",
        '-1210220372': "Blue Continental Slim Pants",
        '-1896730922': "Lilac Continental Slim Pants",
        '-1675048637': "Yellow Continental Slim Pants",
        '-1832200307': "Gold Print Pants",
        '-563287732': "Gold Print Fitted Pants",
        '-304906738': "White Sweater Shirt",
        '-510948971': "Tan Utility Vest",
        '-1923624712': "Tan Pocket Utility Vest",
        '-1626246037': "Khaki Pocket Utility Vest",
        '-918722424': "Tan Desert Scarf",
        '-678623961': "Black Desert Scarf",
        '-1254273277': "Black Bead Necklace",
        '-85891186': "Hot Pink Cowboy Boots",
        '-166862945': "Pink Cowboy Boots",
        '-321631372': "White Cowboy Boots",
        '-561860911': "Red Cowboy Boots",
        '-801074611': "Wine Cowboy Boots",
        '-1045957352': "Crimson Cowboy Boots",
        '-1755668354': "Green Cowboy Boots",
        '-1988295485': "Purple Cowboy Boots",
        '-1759535092': "Orange Cowboy Boots",
        '-1990065007': "Navy Cowboy Boots",
        '-40207437': "Blue Cowboy Boots",
        '-2059831200': "Pink Cowboy Boots",
        '-923725215': "Red Cowboy Boots",
        '-1264391739': "Wine Cowboy Boots",
        '-309470310': "Crimson Cowboy Boots",
        '-542031903': "Green Cowboy Boots",
        '-1609908075': "Navy Cowboy Boots",
        '-1116032859': "Red Turtleneck",
        '-327938409': "Navy Turtleneck",
        '-514099098': "Green Turtleneck",
        '-1024882390': "Black Long Suit",
        '-373696822': "Black Pinstripe Long Suit",
        '-1524347488': "Blue Pinstripe Long Suit",
        '-757192429': "Pale Brown Long Suit",
        '-298394892': "Green Tracksuit Top",
        '-1213538962': "Tan Tracksuit Top",
        '-974882335': "Earth Tracksuit Top",
        '-754674651': "Royal Blue Tracksuit Top",
        '-515297106': "White Tracksuit Top",
        '-1124210676': "Light Blue Tracksuit Top",
        '-1330032765': "Fruity Tracksuit Top",
        '-629562617': "Lilac Tracksuit Top",
        '-868743548': "Gray Tracksuit Top",
        '-1258414180': "Black Cashmere Coat",
        '-1957209874': "Pastel Blue Pajamas",
        '-1097973925': "Pastel Yellow Pajamas",
        '-1788930428': "Red Swirl Pajamas",
        '-743632093': "Navy Pinstripe Pajamas",
        '-495275842': "Bold Pinstripe Pajamas",
        '-331791301': "Orange Pinstripe Pajamas",
        '-1506017664': "Pastel Blue Smoking Jacket",
        '-1788650289': "Pastel Yellow Smoking Jacket",
        '-2109354009': "Bold Pinstripe Smoking Jacket",
        '-1956716007': "Orange Pinstripe Smoking Jacket",
        '-1482653363': "Pastel Pink Smoking Jacket",
        '-619321289': "Pastel Green Smoking Jacket",
        '-850965350': "Vibrant Check Smoking Jacket",
        '-220981325': "Red Swirl Motif Smoking Jacket",
        '-235465179': "Blue Swirl Smoking Jacket",
        '-762074110': "Navy Liberty Tucked Polo",
        '-1814675403': "Black Liberty Hoodie",
        '-1965642186': "Red Liberty Hoodie",
        '-291342892': "White Flying Bravo Hoodie",
        '-2010481940': "Vibrant Loose Shirt",
        '-1324856153': "Aztec Loose Shirt",
        '-1164293470': "Khaki Quilted Jacket",
        '-2115708628': "Green Quilted Jacket",
        '-1492282120': "Chocolate Leather Field Jacket",
        '-1187268268': "Black Leather Field Jacket",
        '-881238577': "Brown Leather Field Jacket",
        '-1117098433': "Blue Tracksuit Pants",
        '-2014313653': "Burgundy Tracksuit Pants",
        '-87943034': "White Tracksuit Pants",
        '-787475058': "Tan Tracksuit Pants",
        '-1417098628': "Royal Blue Tracksuit Pants",
        '-2067596047': "Red Tracksuit Pants",
        '-1747410148': "Orange Tracksuit Pants",
        '-1055402433': "Blue Sweater Shirt",
        '-1739324244': "Black Sweater Shirt",
        '-971775957': "Check Sweater Shirt",
        '-2132418571': "Gray Turtleneck",
        '-1904575714': "Red Turtleneck",
        '-751041368': "Brown Turtleneck",
        '-521428985': "Black Turtleneck",
        '-1211281981': "Navy Turtleneck",
        '-979113616': "Beige Turtleneck",
        '-381210462': "Purple Turtleneck",
        '-620456931': "Green Turtleneck",
        '-78447682': "Gray Turtleneck",
        '-2131753206': "Red Turtleneck",
        '-1849284426': "Brown Turtleneck",
        '-1401758193': "Black Turtleneck",
        '-1356078207': "Navy Turtleneck",
        '-638830335': "Beige Turtleneck",
        '-169152258': "Green Turtleneck",
        '-72638395': "Pearl Bead Necklace",
        '-1281213073': "Buzzcut",
        '-1854764275': "Spikey",
        '-1904997581': "Dreads",
        '-905050483': "Surfer Dude Dark Brown",
        '-1520333437': "Long Slicked Dark Brown",
        '-777013793': "Palm Cornrows",
        '-1191834506': "Lightning Cornrows",
        '-1913084063': "Snail Cornrows",
        '-31208692': "Side Parting",
        '-168331163': "Undercut Swept Back",
        '-463220799': "Undercut Swept Side",
        '-832371349': "Layered Mod",
        '-1513740851': "Biker",
        '-199384089': "Ponytail",
        '-618065583': "Cornrows",
        '-1674154183': "Slicked",
        '-1864723524': "Short Brushed",
        '-177004334': "White & Blue Optics Headset",
        '-1059326003': "Yellow Optics Headset",
        '-1280909981': "Pink Optics Headset",
        '-1537196330': "Orange Optics Headset",
        '-137173574': "Purple Optics Headset",
        '-376387274': "Gray & Red Optics Headset",
        '-1500538907': "Light Brown Death Bird",
        '-35318912': "Black & Yellow Death Bird",
        '-963848225': "Black Death Bird",
        '-1889670786': "Green Camo Death Bird",
        '-227823720': "Red Feather Death Bird",
        '-990763216': "Green Stalker",
        '-1094706484': "Brown Stalker",
        '-122155337': "Purple Stalker",
        '-712456103': "Black Stalker",
        '-2114267933': "Red Raider",
        '-1367429654': "Bright Orange Raider",
        '-1882296182': "Blue Raider",
        '-856560944': "Gray Raider",
        '-1081913357': "Green Raider",
        '-161333836': "Brown Camo Raider",
        '-1949429643': "Beige Marauder",
        '-39488478': "Black Marauder",
        '-1763840023': "Eight-ball Marauder",
        '-2030776297': "Black Arrow Marauder",
        '-147058042': "Paco the Taco Mask",
        '-488448067': "Black & Pink Light Ups",
        '-1284276001': "Black & Red Light Ups",
        '-1479546480': "Pink & Green Light Ups",
        '-1673801112': "Ash & Pink Light Ups",
        '-1905379635': "Red Light Ups",
        '-23849189': "Green Print Light Ups",
        '-1567532057': "Red Camo Light Ups",
        '-1882442147': "Pink Camo Light Ups",
        '-976687684': "Flaming Skull Boots",
        '-1143121439': "Red Flaming Skull Boots",
        '-161175803': "Tan Skull Harness Boots",
        '-61358841': "Dark Brown Raider Boots",
        '-737514367': "Gray Raider Boots",
        '-1580562430': "Red Raider Boots",
        '-1178093572': "Brown & White Raider Boots",
        '-46019229': "Brown Plated Boots",
        '-1843895582': "Red Plated Boots",
        '-665850028': "Blue Plated Boots",
        '-274910694': "Light Green Plated Boots",
        '-2108762249': "Yellow Plated Boots",
        '-1334987852': "Steel Plated Boots",
        '-1816320008': "Red Plated Boots",
        '-1585462403': "Blue Plated Boots",
        '-1971104647': "Steel Plated Boots",
        '-79920851': "Pink Rocket Splash Tee",
        '-1473389807': "Pink Two Moons Tee",
        '-1914853775': "Red Freedom Isn't Free Tee",
        '-567460713': "Black Space Rangers Tee",
        '-873031638': "White Space Rangers Tee",
        '-1163823744': "Yellow Space Rangers Tee",
        '-1469591283': "Green Space Rangers Tee",
        '-1295292976': "Black Space Ranger Logo Tee",
        '-1601060515': "Green Space Ranger Logo Tee",
        '-1892180311': "White Phases Tee",
        '-1555320024': "Black Burger Shot Hockey Shirt",
        '-262386253': "Black Phat Chips Hockey Shirt",
        '-874085176': "Dark Green Sprunk Hockey Shirt",
        '-634642093': "Green Sprunk Hockey Shirt",
        '-1190863099': "Sprunk Classic Hockey Shirt",
        '-1645991843': "Dark Red Burger Shot Hockey Shirt",
        '-1286220992': "Black Cluckin' Bell Hockey Shirt",
        '-1003522829': "Wigwam Hockey Shirt",
        '-658530793': "Redwood Hockey Shirt",
        '-394248808': "Bean Machine Hockey Shirt",
        '-313833682': "Red eCola Hockey Shirt",
        '-1870692419': "Burger Shot Festive Sweater",
        '-2105879938': "Ice Cold Sprunk Festive Sweater",
        '-1545001328': "Blue Bleeder Festive Sweater",
        '-1634198546': "Blue Cluckin' Festive Sweater",
        '-2000584036': "Green Mercenary Vest",
        '-1703598589': "Black Mercenary Vest",
        '-1388885113': "White Mercenary Vest",
        '-1084592179': "Blue Mercenary Vest",
        '-525749649': "Red Mercenary Vest",
        '-222931320': "Yellow Mercenary Vest",
        '-1542764589': "Green & Yellow Raider Top",
        '-1915610271': "Branded Raider Top",
        '-459716370': "Brown & White Raider Top",
        '-707286165': "Moss Raider Top",
        '-1062567663': "Black Raider Top",
        '-1290541596': "White Raider Top",
        '-1118423272': "Red & Black Leather Feather Top",
        '-1483469932': "Black Leather Feather Top",
        '-1599898189': "Yellow Leather Feather Top",
        '-1962782095': "Green Leather Feather Top",
        '-540428329': "Taco Bomb Hoodie",
        '-1564262725': "Pizza Hoodie",
        '-1521204259': "Fries Hoodie",
        '-933918341': "Cluckin' Bell Logo Hoodie",
        '-912618631': "Cluckin' Bell Logo Bomb Hoodie",
        '-2106000077': "Corn Dog Hoodie",
        '-1104415588': "Lucky Plucker Hoodie",
        '-39135100': "Taco Bomb Hoodie",
        '-95660021': "Cluckin' Bell Logo Hoodie",
        '-366299192': "Lemons Hoodie",
        '-672591035': "Tacos Hoodie",
        '-518414494': "Patriot Beer Hoodie",
        '-1310244618': "Lucky Plucker Hoodie",
        '-1015946229': "Logger Light Hoodie",
        '-280234835': "Burger Shot Logo Sweater",
        '-1736909929': "Red MeTV Sweater",
        '-1665014743': "Orange MeTV Sweater",
        '-742108627': "Magenta Heat Sweater",
        '-366641425': "Degenatron Sweater",
        '-1200448630': "Black Pisswasser Sweater",
        '-1696773163': "Burger Shot Sweater",
        '-1548422981': "Lucky Plucker Sweater",
        '-1783016252': "Lucky Plucker Logo Bomb Sweater",
        '-1935495328': "White Sprunk Sweater",
        '-1475320261': "Wigwam Sweater",
        '-129431893': "Cluckin' Bell Logo Bomb Sweater",
        '-1358021879': "Black Chain Pants",
        '-1590517934': "Gray Chain Pants",
        '-961289239': "Beige Forest Chain Pants",
        '-1963167002': "White Chain Pants",
        '-49916164': "Dark Woodland Chain Paints",
        '-201810': "Black Chain Shorts",
        '-1925577174': "Gray Chain Shorts",
        '-1392881824': "Tan Forest Chain Shorts",
        '-1687707003': "White Chain Shorts",
        '-120365725': "Brown Chain Shorts",
        '-1783228630': "Tan Chain Shorts",
        '-1543720009': "Beige Chain Shorts",
        '-621960808': "Dark Woodland Chain Shorts",
        '-1335261451': "Black Leather Stitch Pants",
        '-1106042296': "Black & Red Leather Stitch Pants",
        '-1337948505': "White Leather Stitch Pants",
        '-1106632134': "Dark Red Leather Stitch Pants",
        '-386369514': "Red Leather Stitch Pants",
        '-2037697731': "Moss Leather Stitch Pants",
        '-1823847237': "Gray Leather Stitch Pants",
        '-1576211904': "Brown Leather Stitch Pants",
        '-2015373304': "Black Raider Pants",
        '-1754981917': "Red Raider Pants",
        '-1147248043': "Blue Raider Pants",
        '-1044034602': "Green Camo Raider Pants",
        '-679577784': "White Camo Raider Pants",
        '-1653701847': "Crosshatch Raider Pants",
        '-1308316587': "Yellow Raider Pants",
        '-53076122': "Blue Rocket Splash Tee",
        '-266336770': "Pink Rocket Splash Tee",
        '-1048926028': "Purple Two Moons Tee",
        '-1194027160': "Blue Two Moons Tee",
        '-417893395': "Pink Two Moons Tee",
        '-614966161': "Blue Freedom Isn't Free Tee",
        '-1961542678': "Green Freedom Isn't Free Tee",
        '-16112734': "Red Freedom Isn't Free Tee",
        '-316079504': "White Space Rangers Tee",
        '-17783297': "Yellow Space Rangers Tee",
        '-38034551': "Black Space Ranger Logo Tee",
        '-1568936693': "Yellow Phases Tee",
        '-1573705755': "Blue Rocket Splash Tee",
        '-977670414': "Black Spacesuit Alien Tee",
        '-1862630028': "Pink Spacesuit Alien Tee",
        '-1939702716': "Pink Two Moons Tee",
        '-269761711': "Green Freedom Isn't Free Tee",
        '-1104233107': "Yellow Phases Tee",
        '-1210353363': "Blue Rocket Splash Tee",
        '-2053040967': "Pink Rocket Splash Tee",
        '-1822838742': "Black Spacesuit Alien Tee",
        '-849632207': "Pink Spacesuit Alien Tee",
        '-609861434': "Purple Two Moons Tee",
        '-1088485448': "Pink Two Moons Tee",
        '-2034239118': "Green Space Ranger Logo Tee",
        '-1411071049': "Yellow Phases Tee",
        '-1020957509': "Blue Rocket Splash Tee",
        '-451760087': "Pink Rocket Splash Tee",
        '-677341883': "Black Spacesuit Alien Tee",
        '-200520164': "Purple Two Moons Tee",
        '-1641176456': "Blue Two Moons Tee",
        '-1873082669': "Pink Two Moons Tee",
        '-923207666': "Green Freedom Isn't Free Tee",
        '-1185063732': "White Space Rangers Tee",
        '-1539493236': "Black Space Ranger Logo Tee",
        '-206286471': "Green Space Ranger Logo Tee",
        '-1710809568': "White Phases Tee",
        '-1466057907': "Yellow Phases Tee",
        '-829505598': "Pink Rocket Splash Tee",
        '-1673471193': "Black Spacesuit Alien Tee",
        '-363006114': "Pink Spacesuit Alien Tee",
        '-1196747781': "Purple Two Moons Tee",
        '-159674477': "Blue Two Moons Tee",
        '-595840048': "Black Space Rangers Tee",
        '-116232964': "White Space Rangers Tee",
        '-1759550238': "Epsilon Medallion",
        '-331213498': "Amphibian Sea Beast",
        '-1917167552': "Alien Sea Beast",
        '-1668778532': "Reptilian Sea Beast",
        '-947270690': "Infernal Sea Beast",
        '-44528092': "Zebra Bigness Face",
        '-756827845': "Bold Abstract Bigness Face",
        '-1523819063': "Pale Abstract Bigness Face",
        '-377887129': "Gray Abstract Bigness Face",
        '-1011377437': "Gray Leopard Bigness Face",
        '-113778999': "Magenta Bigness Face",
        '-870808437': "Yellow Bigness Face",
        '-638640072': "Fall Bigness Face",
        '-1329672740': "Gray Bigness Face",
        '-1098225293': "Camo Bigness Face",
        '-1793911163': "Gray Camo Bigness Face",
        '-1559776658': "Geo Camo Bigness Face",
        '-949382973': "Striped Dino",
        '-709448355': "Gray Dino",
        '-422228070': "Tropical Dino",
        '-249863130': "Earth Dino",
        '-539830908': "Red Oni",
        '-784156576': "Blue Oni",
        '-25095464': "Gold Oni",
        '-1817341343': "Red Clown",
        '-1852568018': "Blue Clown",
        '-408143263': "Green Clown",
        '-638411026': "Orange Clown",
        '-83369704': "Scavenger Clown",
        '-314227309': "Neon Clown",
        '-1880292656': "Silverback Crazed Ape",
        '-392350673': "Orangutan Crazed Ape",
        '-1162356635': "Gray Crazed Ape",
        '-2043023510': "Albino Crazed Ape",
        '-1678720507': "Black Horse",
        '-1983275593': "Gray Horse",
        '-96938122': "Silver Ornate Skull",
        '-1104282163': "Back Crew Emblem",
        '-1522587762': "Peach Plain Hi Tops",
        '-1694330095': "Purple Plain Hi Tops",
        '-792193982': "Black Plain Hi Tops",
        '-1386530878': "Blue Plain Hi Tops",
        '-444159976': "Bronze Plain Hi Tops",
        '-1210463041': "Pearl Plain Hi Tops",
        '-732789328': "Silver Plain Hi Tops",
        '-222313846': "Cherry Plain Hi Tops",
        '-1122070446': "Slate Longline Hoodie",
        '-1428258867': "Grayscale Longline Hoodie",
        '-1728390138': "Chocolate Longline Hoodie",
        '-860967054': "Gray Longine Hoodie",
        '-697187596': "Red Longline Hoodie",
        '-2122901248': "Dark Red Longline Hoodie",
        '-1160967253': "Blush Longline Hoodie",
        '-939907579': "Tan Longline Hoodie",
        '-1420170043': "Lime Longline Hoodie",
        '-1976547216': "Gray Exsorbeo Glow Sweater",
        '-1669927683': "Black Exsorbeo Glow Sweater",
        '-533184770': "Red Love Fist Glow Sweater",
        '-189863957': "Red Trees Glow Sweater",
        '-2118633600': "Snowman Glow Sweater",
        '-886912380': "Tan Reindeer Glow Sweater",
        '-580554999': "Red Reindeer Glow Sweater",
        '-1376186319': "Naughty! Glow Sweater",
        '-1070156628': "Naughty! Knit Glow Sweater",
        '-1839081213': "Holidays Tree Glow Sweater",
        '-529759430': "Black Exsorbeo Festive Sweater",
        '-917328743': "Gray Reindeer Glow Sweater",
        '-683194238': "Noel Glow Sweater",
        '-400692689': "Gray Trees Glow Sweater",
        '-1027072076': "Red Pattern Glow Sweater",
        '-796542161': "Green Pattern Glow Sweater",
        '-19149799': "Saucy Reindeer Wool Sweater",
        '-192563347': "Gray Reindeer Wool Sweater",
        '-490794016': "Noel Wool Sweater",
        '-670433662': "Gray Trees Wool Sweater",
        '-938451313': "Festive Wool Sweater",
        '-1243301320': "Red Pattern Wool Sweater",
        '-1952619094': "Green Pattern Wool Sweater",
        '-778790247': "Red Camo Bigness Hoodie",
        '-515687946': "Blacklight Camo Bigness Hoodie",
        '-2120418649': "Black Bigness Brand Hoodie",
        '-1196267311': "White Squash Hoodie",
        '-1397992459': "Purple Camo Bigness Hoodie",
        '-1030389817': "Off-White Manor Hoodie",
        '-1878353230': "Beige Manor Hoodie",
        '-2144240900': "White Manor Hoodie",
        '-1274534222': "Primary Squash Hoodie",
        '-1042824623': "Dark Blue Güffy Hoodie",
        '-661262387': "Moss Güffy Hoodie",
        '-429094022': "White Güffy Hoodie",
        '-597461156': "Magenta Güffy Hoodie",
        '-12567275': "Bold Abstract Bigness Hoodie",
        '-441697972': "Woodland Camo Bigness Hoodie",
        '-216706122': "Off-White Bigness Hoodie",
        '-739240596': "Blacklight Camo Bigness Hoodie",
        '-575985438': "Black Bigness Brand Hoodie",
        '-1335079327': "Orange Sand Castle Hoodie",
        '-1171103251': "Gray Güffy Hoodie",
        '-1931966662': "Patchwork Güffy Hoodie",
        '-2056718245': "Red Squash Hoodie",
        '-1959329017': "Chocolate Blagueurs Hoodie",
        '-141239339': "Purple Camo Bigness Hoodie",
        '-768306923': "Beige Manor Hoodie",
        '-488689046': "Black Manor Hoodie",
        '-1255450881': "White Manor Hoodie",
        '-565010343': "Lime Blagueurs Hoodie",
        '-1344257267': "Primary Squash Hoodie",
        '-82683432': "Dark Blue Güffy Hoodie",
        '-782563734': "Moss Güffy Hoodie",
        '-1395311369': "White Güffy Hoodie",
        '-1067523062': "Bold Abstract Bigness Hoodie",
        '-2003277415': "Black Longline Hoodie",
        '-2006030019': "White Longline Hoodie",
        '-703822724': "Tan Longline Hoodie",
        '-556562801': "Charcoal Sleeveless Hoodie",
        '-98779871': "Gray Sleeveless Hoodie",
        '-1530006920': "Red Closed Parka",
        '-60087895': "Teal Closed Parka",
        '-298875598': "Tangerine Closed Parka",
        '-291142006': "Dotwork Closed Parka",
        '-947569499': "Peach Open Parka",
        '-1849503455': "Red Open Parka",
        '-135955511': "Blue Camo Open Parka",
        '-1540917782': "Brown Open Parka",
        '-334985865': "Teal Open Parka",
        '-104718102': "Tangerine Open Parka",
        '-887143463': "Gray Camo Open Parka",
        '-714091190': "Red Sand Castle Sweater",
        '-1290883159': "Orange Squash Sweater",
        '-1512401599': "Blue Squash Sweater",
        '-102089377': "Bold Güffy Sweater",
        '-386884756': "Bright Güffy Sweater",
        '-1880299162': "Sprayed G Güffy Sweater",
        '-533861690': "Aqua Sand Castle Sweater",
        '-665880246': "CMYK Manor Sweater",
        '-1082898540': "Diamond Manor Sweater",
        '-1397513709': "Cyan Manor Sweater",
        '-1677655890': "Magenta Manor Sweater",
        '-2086686293': "Aqua Camo Sand Castle Sweater",
        '-107799140': "Fruit Squash Sweater",
        '-1311371753': "Squash Logo Sweater",
        '-1128455195': "Splat Squash Sweater",
        '-2114236208': "Red Zebra Bigness Puffer",
        '-1279904699': "Black Güffy Puffer",
        '-1501488677': "Red Güffy Puffer",
        '-666698402': "Dark Red Güffy Puffer",
        '-1573678804': "Dark Blue Güffy Puffer",
        '-1418221104': "Multicolor Leaves Güffy Puffer",
        '-1732934580': "Green Leaves Güffy Puffer",
        '-955948821': "Black Sprayed Güffy Puffer",
        '-971350251': "Blue Sprayed Güffy Puffer",
        '-1081907920': "Gray Leopard Bigness Puffer",
        '-1932001318': "Cyan Leopard Bigness Puffer",
        '-384724820': "Red Wool Coat",
        '-2100149201': "Dark Red Wool Coat",
        '-1983433820': "White Güffy T-Shirt",
        '-1088250278': "Neon Manor T-Shirt",
        '-1637465332': "Black Güffy Logo T-Shirt",
        '-1867208791': "Black and Neon Güffy T-Shirt",
        '-387393580': "Gray Manor T-Shirt",
        '-627131584': "Illusion Manor T-Shirt",
        '-880403185': "Geometric Bigness T-Shirt",
        '-1384842497': "White Leaves Güffy T-Shirt",
        '-526950077': "Black Blagueurs T-Shirt",
        '-824295983': "Off-White Blagueurs T-Shirt",
        '-210499852': "OJ Squash T-Shirt",
        '-145649989': "Leopard G Güffy T-Shirt",
        '-419210091': "Glow Santa Sweater",
        '-669401406': "Glow Elf Sweater",
        '-1016097426': "Glow Pudding Sweater",
        '-1524420385': "Chocolate Low Crotch Pants",
        '-1133944981': "Camo Low Crotch Pants",
        '-918161116': "Black Low Crotch Pants",
        '-2076414190': "Diamond Low Crotch Pants",
        '-2084788847': "Black Leather Low Crotch Pants",
        '-492466755': "Chocolate Low Crotch Shorts",
        '-262198992': "Camo Low Crotch Shorts",
        '-1976935224': "Blue Camo Low Crotch Shorts",
        '-1717437513': "Light Gray Low Crotch Shorts",
        '-1912128728': "Classic Low Crotch",
        '-1702603742': "Charcoal Low Crotch",
        '-55535395': "Black Faded Low Crotch",
        '-433977498': "Red Leather Low Crotch Jeans",
        '-210525687': "White Leather Low Crotch Jeans",
        '-169498486': "Blue Digital Robo",
        '-625720981': "Peach Camo Robo",
        '-1210713169': "Moss Striped Robo",
        '-2012013526': "Orange Striped Robo",
        '-1538194078': "Fall Robo",
        '-1256216833': "Dark Woodland Robo",
        '-949171303': "Crosshatch Robo",
        '-651006172': "Gray Woodland Robo",
        '-1714130911': "Aqua Camo Robo",
        '-1944464212': "Splinter Robo",
        '-74642754': "Red Manor Face Bandana",
        '-522496681': "Skulls Manor Face Bandana",
        '-283315750': "White Broker Face Bandana",
        '-144244118': "Black Broker Face Bandana",
        '-239896833': "Off-White Broker Face Bandana",
        '-605795487': "Stars & Stripes Face Bandana",
        '-1999456769': "Painted Face Bandana",
        '-1685890208': "Contrast Camo Face Bandana",
        '-1340033095': "Red Blagueurs Face Bandana",
        '-926717698': "Bold Abstract Face Bandana",
        '-422927092': "Red Bigness Face Bandana",
        '-231565651': "Light Woodland Mandible",
        '-1918218758': "Orange Striped Mandible",
        '-1108529537': "Yellow Mandible",
        '-713498570': "Zebra Mandible",
        '-949992443': "White Mandible",
        '-2026717785': "Aqua Camo Mandible",
        '-154631644': "Stars & Stripes Tight Ski",
        '-798608032': "White Skull Tight Ski",
        '-464495216': "SA Republic Tight Ski",
        '-2037538296': "Black Stars & Stripes Tight Ski",
        '-1916506318': "Lime Xero Tight Ski",
        '-2097391194': "Red Stripe Tight Ski",
        '-1287439821': "Gray Bigness Tight Ski",
        '-1634856759': "Orange & Red Tight Ski",
        '-791677620': "Vibrant Tight Ski",
        '-1145976048': "Blue Bigness Tight Ski",
        '-302338139': "Mustard Tight Ski",
        '-1900878100': "Teal Loose",
        '-1992595971': "Dark Woodland Loose",
        '-807767242': "Orange Pattern Loose",
        '-1517871472': "Red Pattern Loose",
        '-1913163951': "Blue Pattern Loose",
        '-1599662916': "Purple Pattern Loose",
        '-1691546884': "Weapon Pattern Loose",
        '-658736398': "Brown Digital Loose",
        '-1271418391': "Dark Red Pattern Loose",
        '-906896035': "Peach Digital Loose",
        '-1498131634': "Dark Woodland Wrapped",
        '-1267831102': "Weapon Pattern Wrapped",
        '-2129098729': "Blue Pattern Wrapped",
        '-1864652899': "Gray Woodland Wrapped",
        '-1617083096': "Dark Pattern Wrapped",
        '-1378033241': "Splinter Wrapped",
        '-330768770': "Orange Pattern Wrapped",
        '-124586222': "Peach Camo Wrapped",
        '-958655579': "Brushstroke Wrapped",
        '-2001798123': "Green Wrapped",
        '-1249251311': "Flecktarn Wrapped",
        '-2025647228': "Purple Pattern Wrapped",
        '-498127020': "Yellow Wrapped",
        '-870776088': "Turquoise Wrapped",
        '-1461732230': "Jolly Roger Wrapped",
        '-1826778890': "Peach Digital Wrapped",
        '-52370313': "Fall Wrapped",
        '-1435291290': "Brown Snood",
        '-2138251886': "Teal Snood",
        '-1964556108': "Gray Woodland Snood",
        '-1667570661': "Yellow Pattern Snood",
        '-2113982748': "Red Pattern Snood",
        '-474942906': "Weapon Pattern Snood",
        '-1285680735': "Peach Camo Snood",
        '-986991300': "Brushstroke Snood",
        '-109457570': "Yellow Snood",
        '-1979486097': "Fall Snood",
        '-415176855': "Bright Stripe Knit",
        '-1616357327': "Dark Red Knit",
        '-1396690638': "Bright Green Knit",
        '-1611753585': "Aqua Camo Knit",
        '-125122362': "Black & Red Knit",
        '-439508148': "Green Stripe Knit",
        '-727187199': "Tiger Knit",
        '-1847477084': "Green & Beige Knit",
        '-1368427073': "Gray Digital Knit",
        '-1211561842': "Brown Digital Knit",
        '-957733168': "Red Stripe Knit",
        '-725826955': "Skull Knit",
        '-232194739': "Wine Stripe Knit",
        '-609562830': "Camo Bigness T-Shirt",
        '-313003380': "Black Bigness T-Shirt",
        '-1844528133': "Gray Bigness T-Shirt",
        '-1572381588': "Primary T-Shirt",
        '-1281425641': "Stars & Stripes T-Shirt",
        '-1233738757': "Pink Tie Dye T-Shirt",
        '-997375960': "Orange Pattern T-Shirt",
        '-507741562': "Green Pattern T-Shirt",
        '-2045885761': "Ash Scruffy",
        '-1807151309': "Bright Green Scruffy",
        '-23600169': "Beige Stripe Scruffy",
        '-1318729364': "Rasta Stripe Scruffy",
        '-1574688023': "Triplet Stripe Scruffy",
        '-1966932969': "Skate Scruffy",
        '-1631378409': "Pink Scruffy",
        '-1718654527': "Charcoal Scruffy",
        '-180006374': "Gray Digital Scruffy",
        '-410995055': "Gray Woodland Scruffy",
        '-752526096': "Hessian Scruffy",
        '-497222817': "Dark Red Scruffy",
        '-756764831': "Back Crew Emblem",
        '-1833856724': "Classic Moc Toe Boots",
        '-437930093': "Chocolate Moc Toe Boots",
        '-428055570': "Classic Moc Toe Boots",
        '-757023561': "Charcoal Moc Toe Boots",
        '-725303169': "Chocolate Moc Toe Boots",
        '-1646406986': "Russet Moc Toe Boots",
        '-1234616863': "Green Closed Field",
        '-1541433010': "Sand Closed Field",
        '-24326621': "Blue Closed Field",
        '-322032986': "Black Closed Field",
        '-620296424': "Charcoal Closed Field",
        '-1392261539': "Green Open Field",
        '-1144691744': "Sand Open Field",
        '-1261578771': "Brown Open Field",
        '-1030786704': "Blue Open Field",
        '-1741415238': "Black Open Field",
        '-1497187881': "Charcoal Open Field",
        '-164917618': "Black & Neon Güffy Shortsleeve",
        '-1242362382': "Splat Shortsleeve",
        '-1012291233': "Blue Plaid Shortsleeve",
        '-1836955847': "Blue Gingham Shortsleeve",
        '-1596988460': "Red Patterned Shortsleeve",
        '-595761334': "Blue Dotted Shortsleeve",
        '-892156939': "Black Dotted Shortsleeve",
        '-2019399540': "Ash Shortsleeve",
        '-365580883': "White Shortsleeve",
        '-138786634': "Skate Güffy Shortsleeve",
        '-735739507': "Multicolor Leaves Shortsleeve",
        '-1132080562': "Green Leaves Shortsleeve",
        '-758055196': "Moss Leopard Shortsleeve",
        '-1676062910': "LC Beavers Light",
        '-1977082685': "Superstroika Dark",
        '-203886553': "Superstroika Light",
        '-1465849775': "LS Jardineros Light",
        '-233112760': "LS Jardineros Dark",
        '-724451146': "Liberty Cocks Dark",
        '-1920355801': "Liberty Cocks Light",
        '-2142038086': "Red Mist XI Dark",
        '-1903638278': "Superstroika Dark Tucked",
        '-625689667': "LS Benders Light Tucked",
        '-924903406': "LS Jardineros Light Tucked",
        '-149326714': "LS Jardineros Dark Tucked",
        '-443756179': "Liberty Cocks Dark Tucked",
        '-1817498197': "Liberty Cocks Light Tucked",
        '-2110289212': "Red Mist XI Dark Tucked",
        '-1333926064': "Red Mist XI Light Tucked",
        '-1440591040': "Brown Digital Rolled Tee",
        '-321697434': "Peach Camo Rolled Tee",
        '-379796875': "Flecktarn Rolled Tee",
        '-1132333057': "Green Digital Rolled Tee",
        '-2032857946': "Peach Digital Rolled Tee",
        '-287482699': "Fall Rolled Tee",
        '-244882999': "Dark Woodland Rolled Tee",
        '-844490161': "Crosshatch Rolled Tee",
        '-578766340': "Moss Digital Rolled Tee",
        '-89852916': "Gray Woodland Rolled Tee",
        '-1640626347': "Teal Leather Fur Jacket",
        '-1344591201': "Saffron Leather Fur Jacket",
        '-1144962453': "Peach Leather Fur Jacket",
        '-880942620': "All Red Leather Fur Jacket",
        '-188085664': "Liberty Cocks Dark",
        '-2080634867': "Superstroika Dark Tucked",
        '-1109263400': "Superstroika Light Tucked",
        '-1173528719': "LS Benders Light Tucked",
        '-1009552643': "LS Jardineros Light Tucked",
        '-16193181': "Liberty Cocks Light Tucked",
        '-792064794': "Red Mist XI Dark Tucked",
        '-1817341262': "Red Mist XI Light Tucked",
        '-1757523906': "Aqua Camo Rolled Tee",
        '-1221160802': "Splinter Rolled Tee",
        '-987779984': "Contrast Camo Rolled Tee",
        '-625354844': "Cobble Rolled Tee",
        '-395545847': "Peach Camo Rolled Tee",
        '-1818441365': "Light Woodland Rolled Tee",
        '-1509823536': "Crosshatch Rolled Tee",
        '-1235186507': "Moss Digital Rolled Tee",
        '-2096290329': "Gray Woodland Rolled Tee",
        '-276246982': "Blue Digital Rolled Tee",
        '-768044134': "Brown Digital Rolled Tee",
        '-641040652': "Aqua Camo Rolled Tee",
        '-954345061': "Splinter Rolled Tee",
        '-1872565214': "Peach Camo Rolled Tee",
        '-1056247489': "Green Digital Rolled Tee",
        '-1291758292': "Gray Digital Rolled Tee",
        '-1496367928': "Peach Digital Rolled Tee",
        '-1991966284': "Fall Rolled Tee",
        '-1711312726': "Blue Digital Rolled Tee",
        '-987937051': "Brown Digital Rolled Tee",
        '-1628417850': "Aqua Camo Rolled Tee",
        '-608515494': "Splinter Rolled Tee",
        '-344888889': "Contrast Camo Rolled Tee",
        '-15658742': "Peach Camo Rolled Tee",
        '-220978606': "Green Digital Rolled Tee",
        '-1332175396': "Gray Digital Rolled Tee",
        '-566593249': "Peach Digital Rolled Tee",
        '-378531958': "Crosshatch Rolled Tee",
        '-1102276462': "Gray Striped Rolled Tee",
        '-323226256': "Beige Rolled Tee",
        '-624275059': "Khaki Rolled Tee",
        '-324752091': "Gray Striped Rolled Tee",
        '-1118056816': "Beige Rolled Tee",
        '-41696295': "Brown Digital Rolled Tee",
        '-1939801121': "Brushstroke Rolled Tee",
        '-339926964': "Green Digital Rolled Tee",
        '-571964253': "Gray Digital Rolled Tee",
        '-1882691484': "Moss Digital Rolled Tee",
        '-925316751': "Blue Digital Rolled Tee",
        '-584060385': "Brown Digital Rolled Tee",
        '-1152611116': "Peach Camo Rolled Tee",
        '-921687973': "Brushstroke Rolled Tee",
        '-675658321': "Flecktarn Rolled Tee",
        '-438771220': "Light Woodland Rolled Tee",
        '-239559888': "Gray Digital Rolled Tee",
        '-1891346883': "Crosshatch Rolled Tee",
        '-1653280098': "Moss Digital Rolled Tee",
        '-782442229': "Impotent Rage Eye Mask",
        '-1813983067': "Jack of Clubs",
        '-2052508618': "Jack of Diamonds",
        '-877088846': "Ace of Hearts",
        '-636466079': "Ace of Clubs",
        '-1805724079': "Grapes Mask",
        '-1807810433': "Pineapple Mask",
        '-1291416335': "Blue Joker",
        '-531241061': "Purple Joker",
        '-510321379': "King of Hearts",
        '-1236253036': "King of Diamonds",
        '-1465570498': "King of Spades",
        '-82603684': "Queen of Hearts",
        '-798082030': "Queen of Diamonds",
        '-1411418165': "Street Crimes Boxart Tee",
        '-1729244696': "Street Crimes Action Tee",
        '-1343019819': "Invade and Persuade Logo Tee",
        '-39239616': "Mission I Tee",
        '-386722092': "Mission IV Tee",
        '-1956029514': "Mission III Tee",
        '-1728874806': "Invade and Persuade Boxart Tee",
        '-999010869': "Invade and Persuade Suck Tee",
        '-2034717314': "Street Crimes Bikers Tee",
        '-180188536': "Street Crimes Punks Tee",
        '-474257542': "Street Crimes Yokels Tee",
        '-772684825': "Street Crimes Logo Tee",
        '-1934880671': "Blue FB Manor Slipper Loafers",
        '-1643531492': "Green FB Manor Slipper Loafers",
        '-205562230': "Red FB Manor Slipper Loafers",
        '-1285436935': "Blue Retro Sneakers",
        '-1055398555': "Brown Retro Sneakers",
        '-1588890113': "Ash Retro Sneakers",
        '-678686131': "Violet Retro Sneakers",
        '-66004138': "Two Tone Retro Sneakers",
        '-1913880809': "Mauve Fade Retro Sneakers",
        '-1934073971': "Orange Fade Retro Sneakers",
        '-1682375282': "Grayscale Retro Sneakers",
        '-1827352370': "Green Retro Sneakers",
        '-493916218': "Violet Retro Sneakers",
        '-1336046749': "Red Retro Sneakers",
        '-875019688': "Mono Retro Sneakers",
        '-1178263994': "Purple Fade Retro Sneakers",
        '-1107987242': "Impotent Rage",
        '-2068692744': "Purple Fade SN Parka",
        '-887022264': "Yellow Vines Parka",
        '-646399497': "Purple Vines Parka",
        '-424225677': "Pink Vines Parka",
        '-187600728': "Tan Le Chien Parka",
        '-1380031873': "Forest Camo Blagueurs Parka",
        '-163711815': "Orange Camo Blagueurs Parka",
        '-411347148': "Fall Blagueurs Parka",
        '-712723641': "Gray Blagueurs Parka",
        '-1010462775': "Ruby Blagueurs Parka",
        '-1386880282': "Lilac Blagueurs Parka",
        '-787031616': "Peach Fade SN Parka",
        '-1026015933': "Blue SN Parka",
        '-1343809683': "Purple Baroque Parka",
        '-759014109': "Green Vines Parka",
        '-1203478642': "Purple Fade SN Parka",
        '-972162271': "Green Fade SN Parka",
        '-703620316': "Grayscale SN Parka",
        '-1382848284': "Fall Blagueurs Parka",
        '-1885197054': "Ruby Blagueurs Parka",
        '-473647474': "Peach Fade SN Parka",
        '-241479109': "Blue SN Parka",
        '-22877142': "Purple Baroque Parka",
        '-589072027': "Purple Fade SN Parka",
        '-9136202': "Tan Le Chien Parka",
        '-402691904': "Black Le Chien Parka",
        '-2020333589': "Cubic Le Chien Parka",
        '-1786854464': "Yellow Camo Blagueurs Parka",
        '-1301414498': "Forest Camo Blagueurs Parka",
        '-2067062463': "Orange Camo Blagueurs Parka",
        '-476881204': "Gray Blagueurs Parka",
        '-849268120': "Ruby Blagueurs Parka",
        '-1078552813': "Green Blagueurs Parka",
        '-2129477179': "Black Baroque Parka",
        '-1433135941': "Green Vines Parka",
        '-1566903395': "Black Le Chien Parka",
        '-1269721334': "Red Le Chien Parka",
        '-2045822330': "Cubic Le Chien Parka",
        '-1808804153': "Yellow Camo Blagueurs Parka",
        '-634854728': "Forest Camo Blagueurs Parka",
        '-332495169': "Green Camo Blagueurs Parka",
        '-1718486150': "Grayscale SN Parka",
        '-203941486': "Orange Camo Blagueurs Parka",
        '-427524361': "Fall Blagueurs Parka",
        '-1949278217': "Peach Fade SN Parka",
        '-802330460': "White Baroque Parka",
        '-1041773543': "Purple Baroque Parka",
        '-1400331941': "White SC Broker Parka",
        '-1623324986': "Green Vines Parka",
        '-1065604179': "SC Broker Leather Fur",
        '-836024565': "Snake Leather Fur",
        '-588192618': "Slate Perseus Leather Fur",
        '-1268509839': "Wild Leather Fur",
        '-923059041': "Gray Spotted Leather Fur",
        '-232976666': "Floral Leather Fur",
        '-3233207': "Garland Leather Fur",
        '-334032595': "Black The Diamond Hoodie",
        '-2051528290': "SC Broker Hoodie",
        '-1829354470': "Broker Ornate Hoodie",
        '-1073177026': "SC Broker Logo Hoodie",
        '-834454861': "Blagueurs Gray Box Hoodie",
        '-595831003': "Orange SN Bigness Hoodie",
        '-356650072': "Purple SN Bigness Hoodie",
        '-617524085': "Blue SN Bigness Hoodie",
        '-383324042': "Squash Squares Hoodie",
        '-121040958': "Squash 19 Hoodie",
        '-2117950837': "Yeti Heat Hoodie",
        '-1626088147': "Gray Yeti LS 19 Hoodie",
        '-1385793070': "Colors Yeti LS 19 Hoodie",
        '-1604395073': "Woodland Yeti LS 19 Hoodie",
        '-56708548': "Red The Diamond Hoodie",
        '-1242848041': "Orange The Diamond Hoodie",
        '-1456698535': "Blue The Diamond Hoodie",
        '-980171573': "Black The Diamond Hoodie",
        '-1519541377': "Broker Ornate Hoodie",
        '-1699836415': "SC Broker Logo Hoodie",
        '-291588640': "Orange SN Bigness Hoodie",
        '-946935871': "Squash Squares Hoodie",
        '-1250999422': "Squash 19 Hoodie",
        '-685086728': "Ash The Diamond Hoodie",
        '-1099836941': "Adorned Hoodie",
        '-668596901': "Yeti Heat Hoodie",
        '-147111035': "Colors Yeti LS 19 Hoodie",
        '-1265517005': "Woodland Yeti LS 19 Hoodie",
        '-2126332886': "Gray The Diamond Hoodie",
        '-1954819940': "Red The Diamond Hoodie",
        '-1339196758': "Broker Detail Sweater",
        '-669443390': "Gray Color Sweater",
        '-1502103684': "Teal Color Sweater",
        '-28928285': "Gray Blagueurs Waves Sweater",
        '-1255111496': "Black Blagueurs Waves Sweater",
        '-1827527493': "White Bigness Jersey",
        '-1597259730': "Black Bigness Jersey",
        '-273975876': "Le Chien Jersey",
        '-1744261460': "White Bigness Logo Jersey",
        '-1516287527': "Black Bigness Logo Jersey",
        '-863529047': "Black SN Jersey",
        '-640863692': "Black Blagueurs Jersey",
        '-257794082': "White FB Manor Jersey",
        '-26412173': "Mustard FB Manor Jersey",
        '-1049742085': "Turquoise Güffy Spray Puffer",
        '-1900097635': "Pink Fade Güffy Spray Puffer",
        '-1662293002': "Leopard Güffy Spray Puffer",
        '-1149583266': "Ornate High Roller Jacket",
        '-1366219125': "Brown SN High Roller Jacket",
        '-1915750722': "Crimson High Roller Jacket",
        '-329370667': "Blue Floral High Roller Jacket",
        '-568354984': "Yellow Floral High Roller Jacket",
        '-4892029': "Patterned High Roller Jacket",
        '-1461904605': "Tartan High Roller Jacket",
        '-2009404244': "Cash High Roller Jacket",
        '-1053996101': "Green High Roller Jacket",
        '-1337546258': "Black SN High Roller Jacket",
        '-1579807475': "Check High Roller Jacket",
        '-1924111358': "Swirl High Roller Jacket",
        '-1996137620': "Salmon High Roller Jacket",
        '-1468556782': "White Fame or Shame Robe",
        '-159093535': "Black The Diamond Silk Robe",
        '-742480042': "Black Fame or Shame Robe",
        '-443823376': "Red Stars Fame or Shame Robe",
        '-1394550373': "Red Fame or Shame Robe",
        '-237262317': "Black Perseus Fitted",
        '-1605368067': "Teal Perseus Fitted",
        '-1027403653': "Blue Flying Bravo Fitted",
        '-1493935906': "Gray Opulent Fitted",
        '-1406246062': "Black Vinewood Fitted",
        '-920281804': "Pink Vinewood Fitted",
        '-840325444': "Gray Vinewood Fitted",
        '-2077519039': "Mocha Posies Fitted",
        '-618478502': "Pink Posies Fitted",
        '-2028692417': "Blue Patterned Fitted",
        '-1776469424': "Orange Patterned Fitted",
        '-1529391164': "Pink Patterned Fitted",
        '-714575571': "Blue P Fitted",
        '-878027343': "White P Fitted",
        '-786306916': "Black P Fitted",
        '-932915422': "Black E Fitted",
        '-898136543': "Black Perseus Fitted",
        '-1205673644': "Teal Perseus Fitted",
        '-501459123': "Blue Opulent Fitted",
        '-287969088': "Black Opulent Fitted",
        '-1831716678': "Teal Posies Fitted",
        '-1325044496': "Pink Posies Fitted",
        '-1833553838': "Gray Patterned Fitted",
        '-1494460206': "Pink Patterned Fitted",
        '-196027985': "Black P Fitted",
        '-573942508': "Invade and Persuade Jets Tee",
        '-1885554510': "Invade and Persuade Enemies Tee",
        '-1826457429': "Black Street Crimes Icons Tee",
        '-2125259745': "Invade and Persuade Gold Tee",
        '-1166602646': "Invade and Persuade Oil Tee",
        '-337776329': "Street Crimes Color Gangs Tee",
        '-568896086': "Invade and Persuade Green Tee",
        '-1717839977': "Weave High Roller Jacket",
        '-1747430388': "Blue Floral High Roller Jacket",
        '-1509035913': "Yellow Floral High Roller Jacket",
        '-1939325652': "Patterned High Roller Jacket",
        '-295954610': "Red Cards High Roller Jacket",
        '-38259194': "Black Cards High Roller Jacket",
        '-1272765731': "Blue Cards High Roller Jacket",
        '-1922581777': "Knit High Roller Jacket",
        '-456922714': "Swirl High Roller Jacket",
        '-160264957': "Salmon High Roller Jacket",
        '-1133661971': "Black Pocket Jacket",
        '-2062138817': "White Pocket Jacket",
        '-818915726': "Chocolate Pocket Jacket",
        '-494502626': "Latte Pocket Jacket",
        '-740433983': "Navy Pocket Jacket",
        '-1045480604': "Blue Pocket Jacket",
        '-533723601': "Slate Pocket Jacket",
        '-2040474994': "Gray Pocket Jacket",
        '-1784450797': "Ash Pocket Jacket",
        '-891987078': "Navy Pocket Jacket",
        '-2128951306': "Blue Pocket Jacket",
        '-1905433957': "Burgundy Pocket Jacket",
        '-1888163480': "Cyan Bigness Waterproof",
        '-44998609': "Black Waterproof",
        '-208974685': "Purple Waterproof",
        '-805993096': "Lime Waterproof",
        '-1505775087': "Black Güffy Waterproof",
        '-1660575843': "Purple Güffy Waterproof",
        '-123545898': "Red FB Waterproof",
        '-2045520218': "Magenta Bigness Waterproof",
        '-880116310': "Green FB Waterproof",
        '-2111903020': "Apricot Bigness Waterproof",
        '-485544781': "Mauve Bigness Waterproof",
        '-287627225': "Neon Waterproof",
        '-449899313': "Gray Camo Waterproof",
        '-359710438': "Black Bigness Waterproof",
        '-52501063': "Cyan Bigness Waterproof",
        '-585706173': "Licquorice Waterproof",
        '-347377236': "Blue Bigness Waterproof",
        '-2137482168': "Black Waterproof",
        '-1893582501': "Purple Waterproof",
        '-2132960042': "Yellow Waterproof",
        '-1901643671': "Lime Waterproof",
        '-1773516881': "Black Güffy Waterproof",
        '-1542659276': "Purple Güffy Waterproof",
        '-952272269': "Magenta Bigness Waterproof",
        '-958981644': "Green FB Waterproof",
        '-124912287': "Blue FB Waterproof",
        '-1423220071': "Leopard Bigness Waterproof",
        '-1661942236': "Green Bigness Waterproof",
        '-1860850066': "Apricot Bigness Waterproof",
        '-1722966380': "Red Bigness Waterproof",
        '-685860291': "Mustard Bigness Waterproof",
        '-383041962': "Woodland Camo Waterproof",
        '-261042975': "Contrast Camo Waterproof",
        '-1273964407': "White Bigness Bomber",
        '-405571985': "Purple SC Broker Bomber",
        '-696003632': "Teal SC Broker Bomber",
        '-1000690138': "White Broker Ornate Bomber",
        '-1278931717': "Red Broker Ornate Bomber",
        '-519673987': "Purple Broker Ornate Bomber",
        '-647407549': "Teal Broker Ornate Bomber",
        '-1951449904': "Red Floral Bomber",
        '-1479740149': "White Color Bomber",
        '-900135655': "Black Broker Coin Bomber",
        '-1290105242': "Teal Color Bomber",
        '-975457304': "Blue Color Bomber",
        '-621748718': "Bigness Rage Bomber",
        '-1869278830': "White Broker Coin Bomber",
        '-1496039920': "Red Broker Coin Bomber",
        '-20025853': "Purple Broker Coin Bomber",
        '-607606792': "Black SC Broker Bomber",
        '-301872022': "White SC Broker Bomber",
        '-1722452567': "Blue Ancient Large Shirt",
        '-1737198629': "Craps Large Shirt",
        '-2025205370': "Dice Large Shirt",
        '-1528558406': "Black Chips Large Shirt",
        '-771332354': "Red Chips Large Shirt",
        '-1069038719': "Yellow Chips Large Shirt",
        '-42779177': "Blue Sunset Large Shirt",
        '-338847092': "Green Sunset Large Shirt",
        '-1103732400': "Yellow Sci-Fi Large Shirt",
        '-1955245779': "Blue Prairie Large Shirt",
        '-459570308': "Pink Prairie Large Shirt",
        '-1333410321': "White Blagueurs Large Shirt",
        '-174370791': "Pink Floral Large Shirt",
        '-1429947795': "Orange Floral Large Shirt",
        '-1657462962': "Blue Floral Large Shirt",
        '-407618552': "Brown SN High Roller Pants",
        '-703489853': "Tartan High Roller Pants",
        '-1002080985': "Knit High Roller Pants",
        '-1299852888': "Green High Roller Pants",
        '-54729191': "Camo High Roller Pants",
        '-343719002': "Weave High Roller Pants",
        '-607480390': "Black Painted Knee Shorts",
        '-2082049580': "Black Baroque Knee Shorts",
        '-850459484': "Snake Knee Shorts",
        '-596466965': "White SC Broker Knee Shorts",
        '-1187390334': "Broker Knee Shorts",
        '-623744332': "Teal SC Broker Wide Pants",
        '-928758184': "Blue Lazerforce Wide Pants",
        '-275475408': "White SC Broker Wide Pants",
        '-1942729343': "Yellow Sci-Fi Wide Pants",
        '-1443952650': "Gray Blagueurs Wide Pants",
        '-678108351': "Gray Patterned Wide Pants",
        '-1624509844': "Pink Patterned Wide Pants",
        '-1933718128': "Black SC Broker Wide Pants",
        '-105117383': "Black P Wide Pants",
        '-807225977': "Black E Wide Pants",
        '-692403401': "Purple Lazerforce Wide Pants",
        '-1052075945': "Red Broker Wide Pants",
        '-906558263': "Mono High Roller Waistcoat",
        '-1145313197': "Blue High Roller Waistcoat",
        '-1376170802': "Opulent High Roller Waistcoat",
        '-1919193524': "Tartan High Roller Waistcoat",
        '-1956320777': "Black High Roller Waistcoat",
        '-1064315828': "Camo High Roller Waistcoat",
        '-417141611': "Sharp High Roller Waistcoat",
        '-700691768': "Brown SN High Roller Waistcoat",
        '-1415649393': "Mono High Roller Waistcoat",
        '-1700248158': "Blue High Roller Waistcoat",
        '-2081286090': "Opulent High Roller Waistcoat",
        '-862439552': "Tartan High Roller Waistcoat",
        '-1182887603': "Knit High Roller Waistcoat",
        '-1356759925': "Green High Roller Waistcoat",
        '-2076170551': "Black High Roller Waistcoat",
        '-2075580705': "Red High Roller Waistcoat",
        '-1998666042': "Blue High Roller Waistcoat",
        '-1690768518': "Opulent High Roller Waistcoat",
        '-619329118': "Sand High Roller Waistcoat",
        '-1111453960': "White High Roller Waistcoat",
        '-1726167631': "Camo High Roller Waistcoat",
        '-402226161': "Mono High Roller Waistcoat",
        '-974274582': "Opulent High Roller Waistcoat",
        '-821636584': "Smooth High Roller Waistcoat",
        '-401289734': "Red High Roller Waistcoat",
        '-128422271': "White High Roller Waistcoat",
        '-1013316347': "Camo High Roller Waistcoat",
        '-1009151473': "Black High Roller Shirt",
        '-205509072': "Crisp High Roller Shirt",
        '-1365084165': "White Loose Bow Tie",
        '-1898463456': "Yellow Pattern Loose Bow Tie",
        '-1639293435': "Brown Pattern Loose Bow Tie",
        '-1399391586': "Pink Pattern Loose Bow Tie",
        '-1850425824': "Blue Loose Bow Tie",
        '-545334861': "Navy Loose Bow Tie",
        '-1775745269': "Orange Loose Bow Tie",
        '-1533615128': "Yellow Loose Bow Tie",
        '-42856237': "Ox Blood Dome Filter",
        '-969496443': "Black Dome Filter",
        '-1267170039': "Tan Dome Filter",
        '-494575326': "Ox Blood Dome Vent",
        '-1206658423': "Steel Horse Black Hoodie",
        '-1070634300': "Steel Horse White Hoodie",
        '-1234544838': "Western Black Hoodie",
        '-1666538565': "Western White Hoodie",
        '-1864332249': "Nagasaki White Hoodie",
        '-655582146': "Nagasaki White and Red Hoodie",
        '-476860020': "Principe Hoodie Black",
        '-383523786': "Back Crew Emblem",
        '-385065428': "Back Crew Emblem",
        '-1610190583': "Back Crew Emblem",
        '-177186441': "Back Crew Emblem",
        '-726614354': "Large Crew Emblem",
        '-1221717900': "Back Crew Emblem",
        '-1159581374': "Back Crew Emblem",
        '-475093127': "Back Crew Emblem",
        '-1740798770': "Back Crew Emblem",
        '-463543059': "Back Crew Emblem",
        '-749808938': "Back Crew Emblem",
        '-1934565215': "Back Crew Emblem",
        '-1078586047': "Chocolate Laceup Boots",
        '-837504514': "Worn Black Laceup Boots",
        '-175897697': "Worn Ox Blood Laceup Boots",
        '-1322766694': "Tan Harness Boots",
        '-525091936': "Worn Ox Blood Slack Boots",
        '-763748563': "Worn Chocolate Slack Boots",
        '-1318219093': "Worn Ox Blood Slack Boots",
        '-1020053962': "Worn Chocolate Slack Boots",
        '-1819210774': "Loose Swept Back",
        '-2062317282': "Undercut Swept Back",
        '-1288081108': "Undercut Swept Side",
        '-1028559844': "Spiked Mohawk",
        '-2063578436': "Mod",
        '-1051333649': "Black Leather Cut",
        '-470699738': "Chocolate Leather Cut",
        '-97002062': "Ox Blood Leather Cut",
        '-605202692': "Black Defender Vest",
        '-371789105': "Worn Black Defender Vest",
        '-1916974104': "Dark Red Puffer Jacket",
        '-183404184': "Purple Puffer Jacket",
        '-607631658': "Beige Puffer Jacket",
        '-254611225': "Orange Puffer Jacket",
        '-500935798': "Cyan Puffer Jacket",
        '-61789934': "Gray Puffer Jacket",
        '-289894943': "Hot Pink Puffer Jacket",
        '-94087327': "Chocolate Leather Hoodie",
        '-1024949434': "Indigo Denim Biker",
        '-180459535': "Washed Denim Biker",
        '-265986625': "Charcoal Denim Biker",
        '-1014164314': "Washed Denim Cut",
        '-246157261': "Charcoal Denim Cut",
        '-1031586195': "Vintage Patched Denim Biker",
        '-141023082': "Indigo Patched Denim Biker",
        '-347731402': "Indigo Patched Denim Cut",
        '-455408903': "Worn Black Patched Classic",
        '-202792682': "Ox Blood Patched Classic",
        '-1128858013': "Worn Black Patched Cut",
        '-410692609': "Ox Blood Patched Cut",
        '-1723648132': "Chocolate Patched Cut",
        '-134740490': "Digital Sports Cut",
        '-1453430592': "Blue Sports Cut",
        '-1663053885': "Red Sports Cut",
        '-1901546667': "Green Sports Cut",
        '-2140465446': "Yellow Sports Cut",
        '-1803097812': "Red Boating Blazer",
        '-1503228693': "Navy Boating Blazer",
        '-2101164636': "Black Boating Blazer",
        '-582059334': "White Boating Blazer",
        '-1576708045': "Urban Closed Parka",
        '-1280115826': "Forest Closed Parka",
        '-139230314': "Urban Patched Closed Parka",
        '-1537038855': "Urban Patched Open Parka",
        '-288377830': "Brown Flat Front Cut",
        '-1192077305': "Worn Black Biker Cut",
        '-768079210': "Black Biker Cut",
        '-1959621923': "Fitted Leather Jacket",
        '-1535172905': "Stitched Leather Baseball Shirt",
        '-1304905142': "Black Leather Baseball Shirt",
        '-563024607': "Viper Sports Biker",
        '-256831071': "Camo Sports Biker",
        '-1047091910': "Black Blouson Jacket",
        '-1269069116': "Ox Blood Blouson Jacket",
        '-1682253449': "Chocolate Blouson Jacket",
        '-845562572': "Worn Black Blouson Jacket",
        '-1457589185': "Worn Chocolate Blouson Jacket",
        '-849877054': "Black Plain",
        '-1818561463': "Ox Blood Plain",
        '-2115415834': "Chocolate Plain",
        '-150484188': "Ox Blood Plain",
        '-1144761186': "Chocolate Plain",
        '-361614855': "Worn Black Plain",
        '-1609065147': "Worn Ox Blood Plain",
        '-834897522': "Worn Chocolate Plain",
        '-1338379714': "Black Padded",
        '-1569433933': "Ox Blood Padded",
        '-873944681': "Chocolate Padded",
        '-1112928998': "Worn Black Padded",
        '-534077361': "Black Padded",
        '-823591444': "Ox Blood Padded",
        '-1139582911': "Chocolate Padded",
        '-217594327': "Worn Black Padded",
        '-526835380': "Worn Ox Blood Padded",
        '-601670314': "Black Ribbed",
        '-95240707': "Indigo Roadworn",
        '-795612528': "Black Roadworn",
        '-1071423629': "Crew T-Shirt",
        '-833094692': "Yeti T-Shirt",
        '-1930057300': "Gray Striped T-Shirt",
        '-946364657': "Freedom T-Shirt",
        '-632306561': "American Flag T-Shirt",
        '-318117389': "Pegasus T-Shirt",
        '-1836153782': "Charcoal T-Shirt",
        '-258479233': "Medusa Art T-Shirt",
        '-1026748438': "Angelica T-Shirt",
        '-873848284': "Classic Perseus T-Shirt",
        '-1293815792': "Full Shield T-Shirt",
        '-1598414687': "Stank T-Shirt",
        '-646180324': "Multi-Logo T-Shirt",
        '-142717408': "Sweatbox T-Shirt",
        '-1412389149': "Color Geo T-Shirt",
        '-1710357666': "Brown Geo T-Shirt",
        '-1879249080': "Beige T-Shirt",
        '-1886097855': "Pink Full Print T-Shirt",
        '-674693383': "Fake Sessanta Nove T-Shirt",
        '-972072058': "Color Geo PRB T-Shirt",
        '-315559737': "Navy with Navy Shirt",
        '-462823623': "Navy with Red Shirt",
        '-1991137010': "Cyan with White Shirt",
        '-1201895649': "Black with White Shirt",
        '-59535536': "Black with Navy Shirt",
        '-1305509787': "White with Navy Shirt",
        '-527901417': "White with Red Shirt",
        '-1142452040': "Red with White Shirt",
        '-384275687': "Red with Navy Shirt",
        '-615133292': "Red with Red Shirt",
        '-267486967': "Navy with White Shirt",
        '-498344572': "Navy with Black Shirt",
        '-1980021781': "Navy with Red Turtle",
        '-1683429562': "Cyan with White Turtle",
        '-1619988826': "Black with Red Turtle",
        '-1554111465': "Cream with Navy Turtle",
        '-574553451': "White with White Turtle",
        '-1060910949': "White with Red Turtle",
        '-2099191011': "Red with White Turtle",
        '-327174567': "Red with Navy Turtle",
        '-1176383202': "Red with Red Turtle",
        '-788791470': "Navy with White Turtle",
        '-1638721023': "Navy with Black Turtle",
        '-1382822784': "Crew T-Shirt",
        '-1731353868': "Yeti T-Shirt",
        '-1830599880': "American Flag T-Shirt",
        '-988338273': "Pegasus T-Shirt",
        '-1960638561': "Charcoal T-Shirt",
        '-7235333': "Angelica T-Shirt",
        '-92608943': "Ranch T-Shirt",
        '-162931217': "Pikeys T-Shirt",
        '-537087659': "Multi-Logo T-Shirt",
        '-875558467': "Brown Full Print T-Shirt",
        '-648862525': "Brown Print T-Shirt",
        '-1991539848': "Color Geo T-Shirt",
        '-1014532113': "Brown Geo T-Shirt",
        '-1261413759': "Beige T-Shirt",
        '-1792828624': "Khaki T-Shirt",
        '-1564985458': "Gold SN Print T-Shirt",
        '-1454802604': "Red Love T-Shirt",
        '-238272479': "Charcoal T-Shirt",
        '-1688510760': "Full Shield T-Shirt",
        '-536372072': "Ranch T-Shirt",
        '-247578875': "Pikeys T-Shirt",
        '-1160588753': "Multi-Logo T-Shirt",
        '-854821214': "Sweatbox T-Shirt",
        '-1458295118': "Eris T-Shirt",
        '-2069536240': "Brown Print T-Shirt",
        '-1240913121': "Brown Geo T-Shirt",
        '-1471967340': "Beige T-Shirt",
        '-1766724495': "Khaki T-Shirt",
        '-399038154': "Pink SN PRB T-Shirt",
        '-160610910': "Brown Geo PRB T-Shirt",
        '-1566368249': "Color Geo PRB T-Shirt",
        '-374729298': "Navy Blazer Shirt",
        '-265838438': "Brown Driving Gloves",
        '-1037151933': "Brown Leather Gloves",
        '-1129482474': "Black Woolen Gloves",
        '-2040198522': "Gray Woolen Gloves",
        '-43777': "White Cotton Gloves",
        '-543743869': "Blue Surgical Gloves",
        '-757299442': "White Surgical Gloves",
        '-1926802042': "Black Woolen Gloves",
        '-1879434956': "Black Fingerless Gloves",
        '-38734688': "Gray Fingerless Gloves",
        '-582200001': "Refuse Collector Gloves",
        '-1835438866': "Black Driving Gloves",
        '-587136588': "Brown Driving Gloves",
        '-504887899': "Black Leather Gloves",
        '-273571528': "Brown Leather Gloves",
        '-2062205969': "Black Woolen Gloves",
        '-1362817198': "Gray Woolen Gloves",
        '-739019619': "White Cotton Gloves",
        '-1563690106': "Hideous Krampus",
        '-1802084581': "Fearsome Krampus",
        '-325677286': "Odious Krampus",
        '-569322829': "White Night Vision",
        '-95810800': "Brown Digital Night Vision",
        '-107214532': "Contrast Camo Night Vision",
        '-1181251135': "Gray Night Vision",
        '-514502369': "White Camo Night Vision",
        '-667205909': "Skull Night Vision",
        '-166788397': "Aqua Camo Night Vision",
        '-1577691658': "Manic Luminous",
        '-1943262622': "Manic Electric",
        '-564549342': "Pleased Luminous",
        '-331692828': "Peaceful Electric",
        '-1941493100': "Amused Electric",
        '-42398466': "Pleased Neon",
        '-460549680': "Black Mono Ballistic",
        '-1503932001': "Cranial Ballistic",
        '-2072670765': "Flecktarn Ballistic",
        '-268475163': "Blue & Black Ballistic",
        '-849403995': "Yellow & Black Ballistic",
        '-1810813686': "Orange & Black Ballistic",
        '-505722723': "White & Black Ballistic",
        '-2112615884': "Red Stripe Ballistic",
        '-173805230': "Black Stripe Ballistic",
        '-1629502517': "Off White & Red Ballistic",
        '-1876351394': "Red Ballistic",
        '-1239503512': "Black Spec Ops",
        '-665914936': "Carbon Spec Ops",
        '-2138525469': "LSPD Spec Ops",
        '-2090383366': "Splinter Spec Ops",
        '-4119749': "Festive Gingerbread Hockey",
        '-236025962': "Merry Gingerbread Hockey",
        '-480417164': "Jovial Gingerbread Hockey",
        '-711995687': "Mirthful Gingerbread Hockey",
        '-162003192': "Gray Woodland False Face",
        '-1646602741': "Aqua Camo False Face",
        '-1241971356': "Green Pattern False Face",
        '-1464800329': "Headline False Face",
        '-529638611': "Cobble Woodland False Face",
        '-1720038074': "Rising Sun False Face",
        '-1547869748': "Opera False Face",
        '-874565105': "Stars & Stripes False Face",
        '-1186075733': "Skull Gas Mask",
        '-1497577847': "White Industrial Gas Mask",
        '-1576026833': "Yellow Industrial Gas Mask",
        '-1375561616': "Splinter Gas Mask",
        '-2082454484': "Gray Splinter Gas Mask",
        '-1830100415': "Gray Striped Gas Mask",
        '-846506107': "Peach Camo Gas Mask",
        '-621284770': "Woodland Digital Gas Mask",
        '-1483190517': "Gray Woodland Respirator",
        '-1177128057': "Cobble Respirator",
        '-2094365136': "Contrast Camo Respirator",
        '-1801213662': "Viper Respirator",
        '-1070735391': "Tiger Striped Respirator",
        '-1435519899': "Moss Striped Respirator",
        '-591062769': "Green Digital Respirator",
        '-821396070': "Brushstroke Respirator",
        '-713430305': "Back Crew Emblem",
        '-1769373731': "Back Crew Emblem",
        '-290927641': "Back Crew Emblem",
        '-171436836': "Back Crew Emblem",
        '-482978803': "Mono Rubberized",
        '-1196516851': "Orange Rubberized",
        '-890683774': "Red Rubberized",
        '-717008074': "Moss Rubberized",
        '-886817036': "Dark Blue Rubberized",
        '-16111685': "White & Red Rubberized",
        '-980863818': "Chocolate Rubberized",
        '-1077310156': "Grayscale Rubberized",
        '-196217284': "Khaki Rubberized",
        '-1687632781': "Tan Rubberized",
        '-912154396': "Rust Rubberized",
        '-1469161854': "Woodland Rubberized",
        '-692700399': "Aqua Camo Rubberized",
        '-492238735': "Earth Tones Rubberized",
        '-181437332': "Pink Camo Rubberized",
        '-198935982': "Blue & Brown Rubberized",
        '-428679441': "Navy & Brown Rubberized",
        '-796937463': "Houndstooth Rubberized",
        '-1027270764': "Blue Rubberized",
        '-1428461627': "Orange Rubberized",
        '-1655354183': "Red Rubberized",
        '-2021121761': "Moss Rubberized",
        '-1090567906': "Gray & Red Rubberized",
        '-1166701447': "Fall Rubberized",
        '-801785863': "Splinter Rubberized",
        '-1452021158': "White & Red Rubberized",
        '-1893943892': "Chocolate Rubberized",
        '-255515479': "Grayscale Rubberized",
        '-1418487289': "Khaki Rubberized",
        '-576291220': "Tan Rubberized",
        '-2011180208': "Rust Rubberized",
        '-1172588713': "Woodland Rubberized",
        '-1703643143': "Cyan Camo Rubberized",
        '-189720468': "Mono Trail",
        '-174646832': "Black & Sand Trail",
        '-1145930530': "Woodland Trail",
        '-1511304880': "Slate Trail",
        '-1103003140': "Moss Trail",
        '-260544919': "Khaki Trail",
        '-357147931': "Gray Trail",
        '-1662828736': "Charcoal Trail",
        '-69327266': "Black & Blue Trail",
        '-1994751913': "Light Blue Trail",
        '-1607635198': "Fall Trail",
        '-1368388729': "Black & Brown Trail",
        '-790605721': "Brown Trail",
        '-417694501': "Black & Light Brown Trail",
        '-1984458834': "Mono Trail",
        '-1216976085': "Black & Sand Trail",
        '-910451680': "Woodland Trail",
        '-429304453': "Tan Trail",
        '-729304648': "Moss Trail",
        '-1865143726': "Khaki Trail",
        '-150145342': "Gray Trail",
        '-1410342775': "Charcoal Trail",
        '-1551315013': "Red Trail",
        '-1357584681': "Orange Trail",
        '-1663221144': "Blue Trail",
        '-578964244': "Navy Trail",
        '-348893095': "Earth Tones Trail",
        '-1711689678': "Buff Trail",
        '-554878468': "Gray & Yellow Trail",
        '-869854096': "Fall Trail",
        '-2107965223': "Black & Brown Trail",
        '-1281563812': "Brown Trail",
        '-1935777514': "Khaki Tactical Blouson",
        '-587217048': "Mustard Tactical Blouson",
        '-1569583939': "Grayscale Tactical Blouson",
        '-676350760': "Splinter Tactical Blouson",
        '-558382360': "Blue Tactical Blouson",
        '-939141148': "Light Blue Tactical Blouson",
        '-1265946385': "Black Tactical Blouson",
        '-25606982': "Earth Tones Tactical Blouson",
        '-340058306': "Pink Camo Tactical Blouson",
        '-113642450': "Humbug Ugly Sweater",
        '-387230831': "North Pole Ugly Sweater",
        '-569557547': "Believe Ugly Sweater",
        '-875980466': "Reindeer Ugly Sweater",
        '-1510945379': "Naughty Elf Ugly Sweater",
        '-1353009314': "Splinter Tactical Sleeveless",
        '-738492249': "Dark Blue Tactical Sleeveless",
        '-427022904': "Earth Tones Tactical Sleeveless",
        '-1074439245': "Dazzle Tactical Sleeveless",
        '-777519336': "Sand Wool Tactical Sleeveless",
        '-1552899414': "Slate Wool Tactical Sleeveless",
        '-185154115': "Gray & Brown Tactical Sleeveless",
        '-1212062141': "Red Piping Tactical Sleeveless",
        '-1553023586': "Chocolate Tactical Sleeveless",
        '-1508654360': "White Camo Tactical Sleeveless",
        '-2007733407': "Light Blue Tactical Midlength",
        '-1071359228': "Black & Red Tactical Midlength",
        '-1930234774': "Dark Blue Tactical Midlength",
        '-1461343097': "Ash Tactical Midlength",
        '-147076814': "Chocolate Tactical Midlength",
        '-674728845': "Olive & Brown Tactical Midlength",
        '-197670786': "Fall Tactical Midlength",
        '-502356948': "Splinter Tactical Midlength",
        '-1472089961': "Gray Wool Tactical Midlength",
        '-1719004376': "White Camo Tactical Midlength",
        '-807632948': "Charcoal Tactical Midlength",
        '-1118971217': "Brown & Blue Tactical Midlength",
        '-1502506554': "Woodland Tactical Midlength",
        '-908240739': "Light Brown Tactical Midlength",
        '-1903107579': "Black & Gray Tactical Midlength",
        '-2132588886': "Cyan Camo Tactical Midlength",
        '-114517882': "Ultralight Strike Vest",
        '-1700454249': "Light Strike Vest",
        '-1322899173': "Mid Strike Vest",
        '-1485010039': "Extreme Strike Vest",
        '-652152354': "Peach Plate Carrier",
        '-292152120': "Brown Digital Plate Carrier",
        '-1213911321': "Fall Plate Carrier",
        '-986199540': "White Camo Plate Carrier",
        '-1964083593': "Ice Plate Carrier",
        '-1505383131': "Navy Plate Carrier",
        '-1805383330': "Chamois Plate Carrier",
        '-1500598861': "Sand Plate Carrier",
        '-1345863643': "Tan Plate Carrier",
        '-1040620408': "Salmon Plate Carrier",
        '-541908997': "Moss Plate Carrier",
        '-37139692': "Baby Smile",
        '-40793755': "Fig",
        '-1653895156': "Geo Fox",
        '-504066740': "Geo Black & White Cat",
        '-683603089': "Geo Pig",
        '-322582844': "Red Leather Half Face",
        '-791867693': "Dark Pink Leather Half Face",
        '-21632348': "Green Leather Half Face",
        '-1036881506': "Peach Leather Half Face",
        '-529486310': "Purple Leather Half Face",
        '-1512851231': "Light Pink Leather Half Face",
        '-1810721441': "Terracotta Leather Half Face",
        '-1748397931': "Gray & White Leather Half Face",
        '-1674926429': "Dusty Blue Leather Half Face",
        '-982386383': "Gray Leather Half Face",
        '-1944254840': "White Leather Half Face",
        '-507927432': "Worn Green Leather Half Face",
        '-210810909': "Black Swirl Leather Half Face",
        '-837550803': "Red Swirl Leather Half Face",
        '-807796551': "Yellow Swirl Leather Half Face",
        '-2058724786': "Yellow Visor Respirator",
        '-1677621316': "Green Visor Respirator",
        '-92654641': "Geo White Dog",
        '-956085022': "Geo Gray Dog",
        '-1757712641': "Cerberus",
        '-528838012': "Smoke Leather with NVG",
        '-230869495': "Red Leather with NVG",
        '-986850325': "Cyan Leather with NVG",
        '-689209498': "Dark Pink Leather with NVG",
        '-660241694': "Green Leather with NVG",
        '-370399889': "Peach Leather with NVG",
        '-1151940539': "Purple Leather with NVG",
        '-845124392': "Light Pink Leather with NVG",
        '-1516069667': "Terracotta Leather with NVG",
        '-153604509': "Gray Leather with NVG",
        '-884123826': "White Leather with NVG",
        '-475297782': "Stone Leather with NVG",
        '-92417295': "Worn Red Leather with NVG",
        '-1322500017': "Red Swirl Leather with NVG",
        '-476961510': "Yellow Swirl Leather with NVG",
        '-708376188': "Pale Leather with NVG",
        '-342455449': "Laugh",
        '-45142312': "Grimace",
        '-834318191': "Blow Kiss",
        '-512035076': "Gasp",
        '-1279157366': "Wink",
        '-1713546967': "Piggly",
        '-754535920': "Ape",
        '-1699390373': "Gray Neck Gaiter",
        '-853954620': "Black Skull Neck Gaiter",
        '-1158345861': "Blood Cross Neck Gaiter",
        '-273255171': "Brown Skull Neck Gaiter",
        '-567356946': "Green Camo Neck Gaiter",
        '-783763430': "Green Neon Camo Neck Gaiter",
        '-410458982': "Purple Neon Camo Neck Gaiter",
        '-658553081': "Cobble Neck Gaiter",
        '-1997162276': "Light Gray Neck Gaiter",
        '-48262861': "Purple Snakeskin Neck Gaiter",
        '-410388981': "Teal Neck Gaiter",
        '-1849767178': "Smiley Neck Gaiter",
        '-1555534327': "Gray Digital Neck Gaiter",
        '-1074288785': "Stars & Stripes Neck Gaiter",
        '-1273833127': "Back Crew Emblem",
        '-1685950868': "Back Crew Emblem",
        '-1529083479': "Dog With Cone Slip-Ons",
        '-839601327': "Black Armored Shirt",
        '-1763156073': "Blue Camo Armored Shirt",
        '-1057180717': "Green Camo Armored Shirt",
        '-1317333808': "Contrast Camo Armored Shirt",
        '-617715658': "Green Digital Armored Shirt",
        '-839397943': "Desert Camo Armored Shirt",
        '-139321027': "Woodland Armored Shirt",
        '-328791385': "Forest Camo Armored Shirt",
        '-513280879': "Blue Digital Armored Shirt",
        '-692658385': "Cobble Armored Shirt",
        '-1066690497': "Dark Gray Armored Shirt",
        '-284035701': "Beige Armored Shirt",
        '-583511592': "Cream Armored Shirt",
        '-1685139838': "Forest Green Armored Shirt",
        '-396433045': "Pixtro Tee",
        '-837372709': "Akedo Tee",
        '-1612813534': "T-Shirt",
        '-1891186177': "T-Shirt",
        '-642228511': "T-Shirt",
        '-2023081402': "T-Shirt",
        '-1697324773': "Love Professor His Tee",
        '-2082955168': "Pixel Pete's Tee",
        '-1628113513': "Love Professor Friendzoned Tee",
        '-1090120006': "T-Shirt",
        '-374837444': "Ho-Ho-Ho Sweater",
        '-1997797895': "Black Low Level Armor",
        '-476526155': "Yung Ancestor Tour Jacket",
        '-690794131': "Yung Ancestor Hoodie",
        '-2034025655': "Yung Ancestor Hoodie",
        '-164260615': "Black Uniform Closed",
        '-1290400081': "Beige Uniform Closed",
        '-1126686157': "Sage Uniform Closed",
        '-629580415': "Gray Uniform Closed",
        '-473468899': "Dark Green Uniform Closed",
        '-1396398968': "Black Uniform Open",
        '-1669659659': "Green Uniform Open",
        '-296409188': "Sage Uniform Open",
        '-602438879': "White Uniform Open",
        '-1704558656': "Gray Uniform Open",
        '-2028611297': "Dark Green Uniform Open",
        '-1446101053': "Cream Short Uniform Closed",
        '-1741087575': "Sage Short Uniform Closed",
        '-1262627406': "Light Gray Short Uniform Closed",
        '-917766450': "Gray Short Uniform Closed",
        '-1320579976': "Black Short Uniform Open",
        '-1765714064': "White Short Uniform Open",
        '-1559236595': "Light Gray Short Uniform Open",
        '-2020329194': "Dark Green Short Uniform Open",
        '-151147493': "White Dress Shirt",
        '-1558741309': "Yellow Dog With Cone Tee",
        '-1042527986': "Thog Bod Tee",
        '-174739348': "Badlands Revenge II Eagle Tee",
        '-405334801': "Badlands Revenge II Romance Tee",
        '-1360747765': "Badlands Revenge II Gunshot Tee",
        '-1606285882': "Badlands Revenge II Help Me Tee",
        '-1856251060': "Space Monkey 3 Tee",
        '-669550940': "Race And Chase Finish Tee",
        '-2121122887': "Space Monkey Pixel Tee",
        '-637473643': "Space Monkey Space Crafts Tee",
        '-935114470': "Radioactive Space Monkey Tee",
        '-664278681': "Wizard's Ruin Loot Tee",
        '-1098271317': "Thog Mighty Sword Tee",
        '-1386802362': "Thog Tee",
        '-1181961738': "Blue Knee Pad Cargos",
        '-283173606': "Black Knee Pad Cargos",
        '-705527078': "Blue Camo Knee Pad Cargos",
        '-1951896001': "Cobble Knee Pad Cargos",
        '-586647315': "Dark Gray Knee Pad Cargos",
        '-230546592': "Cream Knee Pad Cargos",
        '-466421389': "Dark Gray Guarded Cargos",
        '-163340908': "Black Guarded Cargos",
        '-1745327901': "Contrast Camo Guarded Cargos",
        '-59592230': "Desert Camo Guarded Cargos",
        '-289270151': "Blue Digital Guarded Cargos",
        '-1505819280': "Cobble Guarded Cargos",
        '-1267359267': "Beige Camo Guarded Cargos",
        '-125394406': "Charcoal Guarded Cargos",
        '-1537672216': "Navy Chinos",
        '-563453026': "Gray & Brown Armor",
        '-602185984': "Beige Armor",
        '-698928346': "Violet Armor",
        '-1378524665': "Light Green Armor",
        '-45637272': "Dark Green Armor",
        '-75063834': "Sage Green Armor",
        '-669231342': "Contrast Camo Armor",
        '-966872169': "Blue Camo Armor",
        '-369526068': "Green Camo Armor",
        '-1064453055': "Black Pocket Vest",
        '-1227507775': "White Dress Shirt",
        '-1267268201': "Dog With Cone Chain",
        '-970054678': "Stocking",
        '-760197493': "Gingerbread",
        '-342056693': "Elf Sweater",
        '-581303162': "Pudding Sweater",
        '-2122606244': "Winter Pajama Top",
        '-666679570': "Festive Pajama Top",
        '-217343240': "Red Long Johns",
        '-1348534935': "Stripy Scarf",
        '-1117546254': "Joy Scarf",
        '-706888526': "Joy Scarf",
        '-450929867': "Snowflake Scarf",
        '-1437473381': "Storm Scarf",
        '-489902746': "Snowman T-Shirt",
        '-787543573': "Reindeer T-Shirt",
        '-1019421691': "Santa Mask 1",
        '-2000951552': "Santa Mask 3",
        '-1423103566': "Reindeer Mask",
        '-1378044123': "Elf Shoes",
        '-311629812': "Santa T-Shirt",
        '-600914544': "Elf T-Shirt",
        '-343136822': "Santa Jacket",
        '-1999249301': "Elf Jacket",
        '-941400586': "Santa Pants",
        '-475768361': "Christmas Tie",
        '-1582539669': "Black Band Vest Shirt",
        '-1854555138': "Pink Band Vest Shirt",
        '-1528012053': "Lemon Band Vest Shirt",
        '-556963337': "Red Love T-Shirt",
        '-1809384134': "Red Love T-Shirt",
        '-958462439': "Red Mysterious",
        '-636759544': "Silver Masquerade",
        '-1540364719': "Black & Gold Masquerade",
        '-1651002297': "White Toe Oxfords",
        '-80443531': "Spats",
        '-1995669446': "Brown Pinstripe Double Suit",
        '-1198378836': "White Love T-Shirt",
        '-1526730777': "Charcoal Pinstripe Suit Pants",
        '-825605253': "Brown Pinstripe Suit Pants",
        '-439764935': "Love Heart Boxer Shorts",
        '-1567431877': "Red Vest Tie",
        '-816694087': "Pink Vest Tie"
      },
      'female': {
        '325968': "Wavy Bob Brown",
        '10342749': "Haze Sequin",
        '16436307': "Long Bob Auburn",
        '18169535': "Gray Knee High",
        '18348930': "Wavy Bob Auburn",
        '20795150': "Wheat Combat Boots",
        '25939319': "Vintage Stars Denim Jacket",
        '36804069': "Explorer Ankle Boots",
        '39561186': "Yellow Top",
        '39912178': "Red T-Shirt",
        '42408538': "Shaved Bangs Auburn",
        '46369932': "Wheat Round Toed",
        '58004101': "LS Racerback",
        '63918886': "Blue Bustier",
        '64418612': "Cobra Strappy",
        '69407336': "Pigtails Brown",
        '92263183': "Navy Cropped",
        '94672130': "Braided Mohawk Black",
        '118633565': "Tan Cargos",
        '127723479': "White Stripe Cropped Tank",
        '134936042': "Red Sandals",
        '138456003': "Blue Bustier",
        '156510196': "Shaved Bangs Black",
        '163360928': "Leopard T-Shirt",
        '171383035': "Black Suit",
        '171608309': "Orange Denim Shorts",
        '184443536': "Chocolate Combat Boots",
        '189260013': "Long Bob Blonde",
        '194403874': "Striped Sandals",
        '194961031': "Floral Denim Jacket",
        '195067425': "Pink Backside",
        '199318964': "Gray Platforms",
        '203996814': "Teal Cargos",
        '206097449': "Green Canvas",
        '211124271': "Navy Backside",
        '216562685': "Pink Polo Shirt",
        '217397512': "Black Bikini",
        '232735866': "Ash Winter Boots",
        '237150300': "Woodland Camo Cargos",
        '239291021': "Black Carnival",
        '249988009': "Ochre Sandals",
        '255026524': "White Sandals",
        '257752741': "Red Mini",
        '259415757': "Ash Backside",
        '260067360': "Gray Flip-Flops",
        '269330208': "Pink Two-Tone Round Toed",
        '272368300': "Gray Polo Shirt",
        '272957573': "Triangle Mini",
        '276151818': "Brown Regular Fit",
        '276409004': "Braided Mohawk Auburn",
        '296447414': "Distressed Denim Jacket",
        '299115733': "Peachy Chics Track Jacket",
        '306853398': "Cobra Ankle Boots",
        '310998324': "Aztec Sequin",
        '319098131': "Slate Blazer",
        '323148746': "Red Plaid Bustier",
        '323797527': "Camo Bustier",
        '331401892': "Sky Blue Top",
        '338260066': "Baby Blue Cropped",
        '345323649': "Mint T-Shirt",
        '355256192': "Ash T-Shirt",
        '357552344': "Khaki Cargos",
        '365765170': "Red Spotted Camisole",
        '377518216': "Black & White Bustier",
        '377837755': "Black Pencil",
        '379581033': "Tan Cropped",
        '379834482': "Tribe Top",
        '381768576': "Ash Rollups",
        '403994138': "Off-White Platforms",
        '406316468': "Floral Bustier",
        '414445100': "White Monster",
        '422708330': "Copper Combat Boots",
        '426203403': "Navy Cargos",
        '431636239': "Los Santos 01 Racerback",
        '447703286': "Red Canvas",
        '452225873': "Black Bustier",
        '456774546': "Patched Regular Fit",
        '457947940': "Charcoal Suit",
        '458197715': "Bob Purple Fade",
        '461494786': "Cobra Patent Heels",
        '465993430': "Eagle Denim Jacket",
        '473273957': "Gray Polo Shirt",
        '485991854': "Blue Striped Top",
        '502342078': "Khol Sandals",
        '507564493': "Shaved Bangs Chestnut",
        '510470236': "White Strappy",
        '511286494': "Gray Mini",
        '516812690': "Pink Pig",
        '525338282': "Ash T-Shirt",
        '528041463': "Red Round Toed",
        '545654525': "Navy Platforms",
        '545822815': "Khaki Chinos",
        '547247500': "Navy Faded Skinny",
        '554362168': "Black Tie-Dye Top",
        '558763555': "Denim Bustier",
        '565638285': "White Flip-Flops",
        '574251172': "White Bustier",
        '574836287': "Braided Mohawk Blonde",
        '586122703': "Pink Accent Backside",
        '592532033': "LC Penetrators Racerback",
        '606771318': "Black Floral Sequin",
        '609044923': "Pink Track Jacket",
        '629615369': "Patterned Mini",
        '629982526': "Close Shave",
        '644865078': "Pink T-Shirt",
        '663719062': "Slate Blazer",
        '669555824': "Olive Combat Boots",
        '671447238': "Charcoal Winter Boots",
        '677508864': "Charcoal Cargos",
        '685212998': "Red Plaid Canvas",
        '695500417': "Tan Striped Hoodie",
        '702116049': "Navy Regular Fit",
        '712858607': "Charcoal Round Toed",
        '726906166': "Faux Hawk Auburn",
        '733938458': "Pounders Hoodie",
        '746715467': "Light Pink Winter Boots",
        '747065254': "Neon Camisole",
        '747298842': "Leopard Round Toed",
        '755852243': "Braided Mohawk Chestnut",
        '765483376': "Yellow T-Shirt",
        '768544998': "White Bustier",
        '778779293': "Black Bikini",
        '779219251': "Green Skinny",
        '780256268': "Gold Blazer",
        '796530885': "White Shorts",
        '798239675': "Coffee Combat Boots",
        '812520884': "Orange Bikini",
        '812559116': "Two-Tone High Tops",
        '816890188': "Black Mini",
        '827318032': "Loose Tied Auburn",
        '839622342': "Red Sequin",
        '850476208': "White Chinos",
        '856918570': 'Pogo',
        '860518422': "Jungle Ankle Boots",
        '873659761': "Shaved Bangs Blonde",
        '883468609': "Tribe Backside",
        '892769164': "Light Blue Regular Fit",
        '914859113': "LC Penetrators Racerback",
        '924000701': "Lilac Canvas",
        '944109516': "Gray Two-Tone Round Toed",
        '946494611': "Black & White Top",
        '956387473': "Faux Hawk Blonde",
        '970564989': "Bloody Pig",
        '989819950': "Blue T-Shirt",
        '1009712978': "Gold Accent Round Toed",
        '1010815315': "Pearl Deco Earrings",
        '1033071509': "Red Hockey",
        '1034522534': "Black Skinny",
        '1036047457': "B&W Deco Earrings",
        '1042499533': "Camo Bustier",
        '1044696610': "Onyx Pendant",
        '1049087765': "Tan Combat Boots",
        '1059632025': "Pink Bustier",
        '1061901796': "Lobster Chinos",
        '1068336741': "Pixie Auburn",
        '1079851881': "Aqua Sequin",
        '1120544219': "Floral Winter Boots",
        '1121755871': "Two-Tone Striped T-Shirt",
        '1121809636': "Top Knot Chestnut",
        '1137455287': "Bleached Regular Fit",
        '1138517923': "Blue Distressed Denim Mini",
        '1153610304': "Sheepskin Winter Boots",
        '1164943807': "Black Sports",
        '1176614591': "Red Two-Tone Tank",
        '1177483292': "Leopard Top",
        '1181895892': "Wild Backside",
        '1188517308': "Baby Blue T-Shirt",
        '1189349912': "Loose Tied Chestnut",
        '1192763313': "Cheetah Ankle Boots",
        '1197437337': "Stripe Track Jacket",
        '1213883103': "White Hoodie",
        '1217061550': "Pearl Pendant",
        '1226217921': "Braids Auburn",
        '1229328571': "Cyan T-Shirt",
        '1254481896': "Long Bob Black",
        '1255363183': "Purple Racerback",
        '1264855835': "Navy Blue Skinny",
        '1268830482': "Sky Blue Shorts",
        '1291086830': "Brown Two-Tone Combat Boots",
        '1294824250': "Blue Striped Deco Earrings",
        '1297240080': "Olive Bustier",
        '1306282412': "Purple Track Jacket",
        '1308041976': "Pixie Black",
        '1314711417': "Country Plaid Shirt",
        '1316979640': "Gold Necklace",
        '1340174434': "Red Punk Skinny",
        '1343471726': "Brocade Winter Boots",
        '1346049187': "French Twist Blonde",
        '1346322826': "Gray Bikini",
        '1351072508': "Snakeskin Cropped Tank",
        '1353126007': "Top Knot Blonde",
        '1367654200': "Pink Bustier",
        '1374949133': "Gray Runners",
        '1377999939': "Light Blue Shirt",
        '1381537027': "Black Bloody Hockey",
        '1383396630': "Blue Sequin",
        '1394259697': "White Cropped Biker",
        '1401747638': "Jade Pendant",
        '1404276706': "Short Auburn",
        '1410211585': "Pink Safari Canvas",
        '1413384295': "Navy Mini",
        '1418834005': "Pixie Brown",
        '1435950788': "Purple Canvas",
        '1446738197': "Purple Combat Boots",
        '1457485853': "Red Denim Jacket",
        '1459508919': "Black Winter Boots",
        '1462060330': "White Sports",
        '1464279735': "French Twist Black",
        '1466839794': "Chocolate Cargos",
        '1479962716': "Off-White Backside",
        '1485451075': "Pink T-Shirt",
        '1485994290': "Two-Tone T-Shirt",
        '1499217113': "Pigtails Chestnut",
        '1501267720': "Blue Hoodie",
        '1502092945': "Black Strappy",
        '1502944943': "Purple Strappy",
        '1508364048': "Black & White Bustier",
        '1517105450': "Loose Tied Black",
        '1519104555': "Blue-Gray Shorts",
        '1535398958': "Baby Blue T-Shirt",
        '1536619899': "Gray Racerback",
        '1541534322': "White Sequin",
        '1549969113': "Red Strappy",
        '1550443631': "Skeleton Hoodie",
        '1562444368': "White Cropped",
        '1565966913': "Braids Black",
        '1602090051': "Vivid Blue Bustier",
        '1619667343': "Short Black",
        '1620946016': "Baby Blue Accent Runners",
        '1623384927': "Light Blue Chinos",
        '1636049234': "Faux Hawk Pink",
        '1643385991': "White Floral Skinny",
        '1650524564': "Layered Bob Chestnut",
        '1655804777': "Blue Winter Boots",
        '1658403295': "French Twist Auburn",
        '1667116479': "Black Backside",
        '1672864428': "Leopard Bustier",
        '1680873616': "Green Sequin",
        '1689361155': "Carnelian Pendant",
        '1690140242': "Aqua Bikini",
        '1691356640': "Gray Skull",
        '1700561878': "Black Spotted Camisole",
        '1704533861': "Bob Blonde",
        '1708782992': "Pastel Plaid Pleated",
        '1710843917': "White Denim Jacket",
        '1714093599': "Brown Pig",
        '1716718339': "Purple Racerback",
        '1720905068': "Leopard Winter Boots",
        '1724632006': "Tan T-Shirt",
        '1726800428': "Indigo Skinny",
        '1734195776': "Two-Tone Blue Strappy",
        '1759074492': "Pixie Chestnut",
        '1759537312': "Off-White Sports",
        '1761562190': "Loose Tied Green",
        '1765202985': "Braided Mohawk Pink",
        '1767680518': "Gray Chinos",
        '1774439318': "Woodland Camo Knee High",
        '1796516410': "Black Hoodie",
        '1804172626': "Urban Camo Cargos",
        '1815573083': "White Stripe Cropped Tank",
        '1822515362': "Green Round Toed",
        '1829052214': "Faded Blue Cropped",
        '1840439281': "Navy Suit",
        '1841138030': "Sky Blue Track Jacket",
        '1848527749': "Top Knot Auburn",
        '1850636738': "Two-Tone T-Shirt",
        '1851332937': "Tan Knee High",
        '1863755323': "Faded Light Blue Cropped",
        '1864730469': "Distressed Black Regular Fit",
        '1865014585': "Charcoal Shirt",
        '1873709373': "Black Plaid Pleated",
        '1875488153': "Tan Winter Boots",
        '1881977337': "Aquamarine Pendant",
        '1883189891': "Teal Blue Combat Boots",
        '1897472143': "Sky Blue Racerback",
        '1897580856': "Gray Backside",
        '1899303019': "Green Carnival",
        '1903335023': "Desert Camo Canvas",
        '1936346280': "Pollen Ankle Boots",
        '1942770365': "Purple Accent Runners",
        '1944383877': "Braided Mohawk Brown",
        '1944894476': "Bob Brown",
        '1950019495': "Pixie Blue",
        '1950356052': "White Pleated",
        '1957200690': "Cyan Floral Flip-Flops",
        '1958269057': "White Blazer",
        '1962915006': "Green Plaid Shirt",
        '1966464202': "Silver Hoop Earrings",
        '1977965596': "White Hockey",
        '1979892562': "Navy Chinos",
        '1981165676': "Bone Skull",
        '1982126026': "Brown Strappy",
        '1989836205': "Squeezers Sweatband",
        '1993496095': "Short Brown",
        '1994860486': "Gold Bangles",
        '1996190976': "Pixie Blonde",
        '2015030601': "Olive Shorts",
        '2025449560': "Peach Canvas",
        '2033184431': "Loose Tied Blonde",
        '2037859102': "Gray Sequin",
        '2047947002': "Sky Blue Racerback",
        '2052125787': "Diamonds Polo Shirt",
        '2053508796': "Ash Cropped Tank",
        '2056553598': "Salamanders T-Shirt",
        '2066401516': "Black Tux",
        '2068608481': "Ponytail Auburn",
        '2078391535': "Burgundy Cropped",
        '2078653439': "Black Skull",
        '2079418123': "Top Knot Black",
        '2100511880': "Red Accent High Tops",
        '2103593827': "Tiger Skinny",
        '2104979227': "French Twist Chestnut",
        '2106804524': "Burgundy Winter Boots",
        '2107267474': "Light Blue Pleated",
        '2109636610': "Rainbow Leather Straps",
        '2126536623': "Purple Accent Polo Shirt",
        '2126570628': "Light Blue Backside",
        '2135948498': "Mint T-Shirt",
        '2140845790': "LS Racerback",
        '-381431628': "Crew T-Shirt",
        '-188454983': "Salamanders T-Shirt",
        '-12040549': "Gray T-Shirt",
        '-312302896': "Leopard T-Shirt",
        '-972237787': "Two-Tone Striped T-Shirt",
        '-435533243': "The Feud T-Shirt",
        '-533996428': "Jetwash Denim Jacket",
        '-293165203': "Two-Tone Denim Jacket",
        '-639238616': "Eagle Denim Jacket",
        '-1345738256': "Graffiti Denim Jacket",
        '-897425567': "Floral Denim Jacket",
        '-1907338167': "Los Santos 01 Racerback",
        '-556714953': "Black Spotted Camisole",
        '-269517809': "Black Bustier",
        '-1022483891': "Pink Rose Bustier",
        '-312760769': "Pink Tribal Bustier",
        '-1408064598': "Leopard Bustier",
        '-1803795158': "Olive Bustier",
        '-681260302': "Gray Bustier",
        '-383750551': "Floral Bustier",
        '-1128065617': "Red Plaid Bustier",
        '-831244015': "Studded Bustier",
        '-182417807': "Vivid Blue Bustier",
        '-1466341224': "Aqua Bikini",
        '-307367232': "Orange Bikini",
        '-1290845217': "Gray Bikini",
        '-334183968': "Eris Top",
        '-1148399481': "Red Two-Tone Tank",
        '-1355204640': "Two-Tone Tank",
        '-2007520609': "Off-White Cropped Tank",
        '-1947300885': "Black Tux",
        '-1034576214': "Gray Cropped Biker",
        '-654622416': "None",
        '-206759599': "Black Pig",
        '-2098378214': "Silver Skull",
        '-1466383998': "Dust Devils Hockey",
        '-1846558525': "Tan Ape",
        '-1003379386': "Brown Ape",
        '-1252718707': "Green Ape",
        '-408196039': "Pink Ape",
        '-224095408': "White Carnival",
        '-8672002': "Blue Carnival",
        '-1980772186': "Green Monster",
        '-1086375100': "Red Monster",
        '-414512293': "Black Monster",
        '-174640864': "Charcoal Platforms",
        '-748548671': "White Two-Tone Backside",
        '-226744631': "Fluorescent Accent Backside",
        '-1892580027': "Burgundy Backside",
        '-1295102850': "Baby Blue Backside",
        '-1591367379': "Olive Backside",
        '-666298509': "Passion Backside",
        '-1362245437': "Two-Tone Runners",
        '-1522789223': "Purple High Tops",
        '-1292783612': "Elite Shock High Tops",
        '-303963387': "Blue Round Toed",
        '-526137207': "Two-Tone Striped Round Toed",
        '-779212194': "Purple Round Toed",
        '-1801572197': "Yellow Round Toed",
        '-879092166': "Blush Round Toed",
        '-651642537': "Gooseberry Round Toed",
        '-402794751': "Lemon Spotted Round Toed",
        '-162303060': "Two-Tone Round Toed",
        '-2083884267': "Tan Strappy",
        '-765554005': "Sky Blue Strappy",
        '-1261152325': "Baby Blue Strappy",
        '-1021709242': "Pink Strappy",
        '-1740202336': "Olive Strappy",
        '-1500169411': "Two-Tone Pink Strappy",
        '-1155702334': "Yellow Strappy",
        '-2082770117': "Navy Strappy",
        '-194948023': "Zebra Strappy",
        '-1623874491': "Beige Sandals",
        '-1434575905': "Desert Sandals",
        '-783029878': "Indigo Sandals",
        '-1096694746': "Sparkle Sandals",
        '-401500391': "Cream Sandals",
        '-1854437175': "Turquoise Sandals",
        '-993235086': "Hornet Sandals",
        '-1233562932': "Gray Sandals",
        '-707456641': "Pink Sandals",
        '-103425664': "Tan Sandals",
        '-1417167643': "Blue Sandals",
        '-1739260233': "Dark Teal Winter Boots",
        '-1724841881': "Hot Pink Winter Boots",
        '-1955699486': "Baby Blue Winter Boots",
        '-228291195': "Gray Winter Boots",
        '-55467489': "Off-White Winter Boots",
        '-3820765': "Black Canvas",
        '-730243961': "White Canvas",
        '-948664880': "Woodland Camo Canvas",
        '-1040745770': "Blue Canvas",
        '-1638747251': "Barfs Canvas",
        '-1396748186': "Blue Plaid Canvas",
        '-236185744': "Navy Canvas",
        '-2144586782': "Yellow Canvas",
        '-75231771': "Blue Sports",
        '-478617383': "Orange Flip-Flops",
        '-134638874': "Black Patent Heels",
        '-305627516': "Kitty Patent Heels",
        '-603268343': "Beige Patent Heels",
        '-1130478131': "Deluxe Midnight Combat",
        '-657883613': "Gray Two-Tone Combat Boots",
        '-1099477202': "Sand Combat Boots",
        '-264457544': "Ochre Combat Boots",
        '-1559096651': "Deluxe Vixen Combat",
        '-1253853416': "White Combat Boots",
        '-588216715': "Battle Combat Boots",
        '-1920586604': "Black Ankle Boots",
        '-1747631822': "Gray Ankle Boots",
        '-1179920122': "Rouge Ankle Boots",
        '-873038437': "Purple Ankle Boots",
        '-1787227999': "Zigzag Ankle Boots",
        '-1480674004': "Pop Ankle Boots",
        '-2128025563': "Electric Ankle Boots",
        '-1422661649': "Brown Ankle Boots",
        '-748013477': "Two-Tone Ankle Boots",
        '-460072274': "Charcoal Ankle Boots",
        '-149061695': "Cream Ankle Boots",
        '-1183502464': "Licorice Knee High",
        '-1297031825': "White Knee High",
        '-1810078513': "Copper Knee High",
        '-630547118': "Short Chestnut",
        '-1114152028': "Short Blonde",
        '-156183082': "Short Purple",
        '-1888949979': "Long Bob Chestnut",
        '-126174381': "Long Bob Brown",
        '-895393891': "Long Bob Purple Fade",
        '-2054486171': "Loose Tied Brown",
        '-416717929': "Shaved Bangs Brown",
        '-1244233486': "Shaved Bangs Blue Fade",
        '-1994325650': "Top Knot Brown",
        '-1785879441': "Wavy Bob Chestnut",
        '-2039544270': "Wavy Bob Blonde",
        '-2043804252': "Wavy Bob Black",
        '-493896090': "Wavy Bob Red Fade",
        '-1818172397': "Layered Bob Blonde",
        '-2064759122': "Layered Bob Auburn",
        '-1198150148': "Layered Bob Black",
        '-1452798047': "Layered Bob Brown",
        '-894938591': "Layered Bob Green",
        '-1493936116': "Pigtails Blonde",
        '-1242991114': "Pigtails Auburn",
        '-2089316077': "Pigtails Black",
        '-294134730': "Ponytail Chestnut",
        '-96406584': "Ponytail Blonde",
        '-1801541499': "Ponytail Black",
        '-1514386752': "Ponytail Brown",
        '-1214517633': "Ponytail Blue",
        '-1531326202': "Braids Chestnut",
        '-1160184508': "Braids Blonde",
        '-578600296': "Braids Brown",
        '-16494011': "Bob Chestnut",
        '-1815086126': "Bob Auburn",
        '-963288728': "Bob Black",
        '-136982981': "Faux Hawk Chestnut",
        '-1646192117': "Faux Hawk Black",
        '-1334853848': "Faux Hawk Brown",
        '-1460451822': "French Twist Brown",
        '-1942083631': "Crew T-Shirt",
        '-612969451': "Gray T-Shirt",
        '-1232470936': "The Feud T-Shirt",
        '-1531750213': "Yellow T-Shirt",
        '-757353201': "Red T-Shirt",
        '-1047784848': "Cyan T-Shirt",
        '-100007061': "Blue T-Shirt",
        '-265752663': "Tan T-Shirt",
        '-1655897587': "Distressed Denim Jacket",
        '-726929206': "Red Denim Jacket",
        '-1204910088': "Jetwash Denim Jacket",
        '-1932611271': "White Denim Jacket",
        '-892412656': "Two-Tone Denim Jacket",
        '-793679699': "Vintage Stars Denim Jacket",
        '-1202505743': "Graffiti Denim Jacket",
        '-315357083': "Stripe Track Jacket",
        '-1541879468': "Black Track Jacket",
        '-626280839': "Olive Track Jacket",
        '-1611371045': "White Track Jacket",
        '-1600848383': "Gray Racerback",
        '-510690258': "Neon Camisole",
        '-492437913': "Red Spotted Camisole",
        '-4377373': "Pink Rose Bustier",
        '-1196520228': "Denim Bustier",
        '-1022320224': "Pink Tribal Bustier",
        '-436797133': "Gray Bustier",
        '-999965167': "Studded Bustier",
        '-45556546': "Bright Pink Polo Shirt",
        '-179213738': "Aqua Polo Shirt",
        '-1008400510': "Yellow Polo Shirt",
        '-1382130955': "Black Striped Polo Shirt",
        '-1630814896': "White Striped Polo Shirt",
        '-1994747410': "Circles Polo Shirt",
        '-627173527': "Black Polo Shirt",
        '-365119834': "Red Polo Shirt",
        '-1209347581': "Sky Blue Polo Shirt",
        '-1009849909': "Orange Polo Shirt",
        '-1852275361': "Navy Polo Shirt",
        '-1957562158': "Green Polo Shirt",
        '-803935476': "Aqua Bikini",
        '-1570500693': "Orange Bikini",
        '-1202057261': "Gray Bikini",
        '-1918204142': "Eris Top",
        '-1201021808': "Peachy Chics Top",
        '-261356549': "Gray Spotted Top",
        '-189166434': "Purple Top",
        '-244134235': "Backside Skateboards Top",
        '-1700650751': "Prop 208 Top",
        '-707913892': "Suburban Top",
        '-13276630': "Blue Banded Top",
        '-374653162': "Salmon Striped Top",
        '-276810997': "White Hoodie",
        '-1120022897': "Gray Hoodie",
        '-1326641804': "Aqua Striped Hoodie",
        '-1087919639': "Peachy Chics Red Hoodie",
        '-2015992899': "Brown Hoodie",
        '-1889908433': "Two-Tone Tank",
        '-1410977733': "Off-White Cropped Tank",
        '-1650420816': "Ash Cropped Tank",
        '-1989612735': "Snakeskin Cropped Tank",
        '-2109286556': "Two-Tone Gray Tux",
        '-1827604232': "Navy Tux",
        '-1349340681': "All Black Tux",
        '-1586353681': "Contrast Blazer",
        '-133540189': "Gray Cropped Biker",
        '-1438336231': "Ash Cropped Biker",
        '-1666048012': "Black Cropped Biker",
        '-533088145': "Charcoal Shirt",
        '-822897181': "White Shirt",
        '-734039248': "Red Check Shirt",
        '-964831315': "Two-Tone Shirt",
        '-1899567028': "Western Shirt",
        '-407287950': "Sky Blue Shirt",
        '-763880208': "Olive Shirt",
        '-1956639043': "Peach Shirt",
        '-117151224': "Pink Plaid Shirt",
        '-1359751708': "Blue Plaid Shirt",
        '-1666043551': "Red Plaid Shirt",
        '-1058735674': "Navy Fade Shirt",
        '-1455578347': "Blue Faded Skinny",
        '-1626894679': "Mint Skinny",
        '-1884295170': "Yellow Skinny",
        '-399743835': "Leopard Skinny",
        '-645478566': "Polka Dot Skinny",
        '-2069029464': "Purple Acid Skinny",
        '-1376358342': "Black Floral Skinny",
        '-890852838': "Red Skinny",
        '-443288520': "Faded Dark Blue Regular Fit",
        '-1237248613': "Navy Blue Regular Fit",
        '-1877787325': "Faded Dark Teal Regular Fit",
        '-20243787': "White Regular Fit",
        '-474160003': "Purple Regular Fit",
        '-940099321': "Faded Light Blue Regular Fit",
        '-857390365': "Faded Blue Regular Fit",
        '-561846754': "Dark Blue Regular Fit",
        '-2135446903': "Slate Regular Fit",
        '-1851634594': "Blue Regular Fit",
        '-2065906791': "Baby Blue Shorts",
        '-787527588': "Olive Cargos",
        '-1019892567': "Black Cargos",
        '-1976330116': "Desert Camo Cargos",
        '-1141736455': "Gray Cargos",
        '-1448519833': "Purple Cargos",
        '-749917522': "White Cargos",
        '-1289483130': "Brown Cargos",
        '-105440857': "Pink Camo Cargos",
        '-504566344': "Red Plaid Pleated",
        '-1891107603': "Blue Stripe Pleated",
        '-1420511994': "Yellow Pleated",
        '-1608540516': "Tan Banded Pleated",
        '-937464165': "Light Pink Pleated",
        '-1243362780': "Purple Pleated",
        '-2132857954': "Red Branded Pleated",
        '-1959968710': "Woodland Camo Pleated",
        '-889864258': "Blue Plaid Pleated",
        '-658220197': "Pink Pleated",
        '-429427039': "Black Pleated",
        '-267974164': "Gray Pleated",
        '-861759913': "White Shorts",
        '-86478142': "Black Shorts",
        '-2056279062': "Black Bikini",
        '-935643531': "Charcoal Rollups",
        '-1168631121': "Black Rollups",
        '-1091709653': "Black Chinos",
        '-802981994': "Taupe Chinos",
        '-886753170': "Baby Blue Chinos",
        '-1653416770': "Burgundy Chinos",
        '-1432029406': "Off-White Chinos",
        '-1909309891': "Light Gray Chinos",
        '-729527576': "Prison Chinos",
        '-2009700423': "Two-Tone Chinos",
        '-658863944': "Beige Chinos",
        '-378983915': "Bubblegum Chinos",
        '-625541774': "Slate Cropped",
        '-924034595': "Distressed Navy Cropped",
        '-1113046917': "Acid Cropped",
        '-1687880715': "Vintage Cropped",
        '-1260966183': "Distressed Blue Cropped",
        '-891101742': "Aqua Cropped",
        '-1202440011': "Orange Cropped",
        '-1510075383': "Blue Cropped",
        '-212488517': "Black Cropped",
        '-2063466878': "Purple Denim Shorts",
        '-1720320300': "Pink Denim Shorts",
        '-921354788': "Gray Pencil",
        '-1242622064': "Navy Pencil",
        '-745528979': "Charcoal Banded Mini",
        '-918876989': "Aloha Mini",
        '-150673322': "Mocha Mini",
        '-1669156013': "Red Plaid Mini",
        '-1856004851': "Navy Two-Tone Mini",
        '-337037378': "Two-Tone Striped Mini",
        '-643591373': "Floral Mini",
        '-48342488': "Black Distressed Denim Mini",
        '-1658647947': "Black Sequin",
        '-1352290566': "Silver Sequin",
        '-2037332017': "Desert Sequin",
        '-143971962': "Black & Gold Sequin",
        '-382366437': "Stripe Sequin",
        '-1948325907': "Gold Sequin",
        '-284971479': "Deco Sequin",
        '-944066168': 'None',
        '-359485950': "Gold Deco Earrings",
        '-123319767': "Silver Deco Earrings",
        '-633664173': "Copper Deco Earrings",
        '-1530414095': "Gold Hoop Earrings",
        '-1489551152': "Pink Hoop Earrings",
        '-1190730641': "Copper Hoop Earrings",
        '-1351528128': "Purple Hoop Earrings",
        '-1143117288': "White Hoop Earrings",
        '-742705167': "Harsh Souls Sweatband",
        '-1140717441': "Prolaps Sweatband",
        '-1362334188': "LC Sweatband",
        '-1720302744': "Aqua Striped Sweatband",
        '-2075780856': "Pink Check Sweatband",
        '-2070101199': "Zebra Bangles",
        '-1878186849': "White Leather Straps",
        '-2123475844': "Amethyst Pendant",
        '-649946816': "Silver Necklace",
        '-1387240230': "Black Tassel Scarf",
        '-1344144041': "Brown Digital Flight Cap",
        '-1886306400': "Tan Flight Cap",
        '-466870566': "Green Closed Flight",
        '-210125451': "Brown Closed Flight",
        '-148388643': "White Closed Flight",
        '-465887484': "Navy Closed Flight",
        '-225920097': "Dark Red Closed Flight",
        '-388005634': "White Open Flight",
        '-74176925': "Teal Open Flight",
        '-296154131': "Navy Open Flight",
        '-785788529': "Dark Red Open Flight",
        '-1844382364': "Harlequin Bigness SN Hockey",
        '-1661198347': "Light Bigness SN Hockey",
        '-1438729606': "Purple Bigness SN Hockey",
        '-173190850': "Dark Camo Hockey",
        '-2124617545': "Purple Camo Hockey",
        '-864682264': "Geometric Hockey",
        '-1581626221': "Orange Flash Retro Runners",
        '-649446506': "Vibrant Retro Runners",
        '-352198907': "Ash Retro Runners",
        '-306912149': "Sage Retro Runners",
        '-1421324625': "Grayscale Retro Runners",
        '-1727157702': "Blue Flash Retro Runners",
        '-589024818': "White Retro Runners",
        '-291318453': "Graphite Retro Runners",
        '-1844667360': "Mono Retro Runners",
        '-384806606': "Green Retro Runners",
        '-615860825': "Cream & Pink Retro Runners",
        '-865396760': "Black & Red Retro Runners",
        '-1093862228': "Gray & Orange Retro Runners",
        '-1495705594': "Purple Flash Retro Runners",
        '-1174143397': "Midnight Retro Runners",
        '-2075880739': "Sunset Retro Runners",
        '-92015144': "White Retro Runners",
        '-338569100': "Graphite Retro Runners",
        '-569426705': "Mocha Retro Runners",
        '-1051720847': "Mono Retro Runners",
        '-2120855562': "Pink & Black Bigness Jersey",
        '-1545694074': "Cyan & Black Bigness Jersey",
        '-701171406': "Lime & Black Bigness Jersey",
        '-928752111': "Red & Black Bigness Jersey",
        '-354573689': "Teal Bigness Jersey",
        '-584710376': "Dark Bigness Jersey",
        '-1917913340': "White & Red Bigness Jersey",
        '-330812363': "Black & Cyan Bigness Jersey",
        '-1560632933': "Purple Bigness Jersey",
        '-213138884': "Cyan & Blue Bigness Jersey",
        '-1616106959': "Purple Big Cat Closed",
        '-1193354090': "Orange Big Cat Closed",
        '-1075596872': "Blue Prolaps Closed",
        '-1343254064': "Red Prolaps Closed",
        '-1136991410': "Blue Big Cat Closed",
        '-656302941': "Purple & White SN Closed",
        '-1844605192': "Green Ornate SN Closed",
        '-182823660': "Orange Ornate SN Closed",
        '-621240111': "Gray Prolaps Closed",
        '-433024622': "Brown SN Leather Closed",
        '-134335187': "Black SN Leather Closed",
        '-2104997297': "Gold Geo PRB Leather Closed",
        '-1804669412': "Color Geo PRB Leather Closed",
        '-1053401076': "Moss Leopard Leather Closed",
        '-1216852848': "Pale Leopard Leather Closed",
        '-2135400695': "Magenta Leopard Leather Closed",
        '-1359594612': "Cyan Leopard Leather Closed",
        '-1354030139': "Lilac Dotted Leather Open",
        '-1451419607': "Green Dotted Leather Open",
        '-1563924078': "Brown SN Leather Open",
        '-1861794288': "Black SN Leather Open",
        '-2025672057': "Multi-Color SN Leather Open",
        '-1913438220': "Color Geo SN Leather Open",
        '-1368129291': "Gold Geo PRB Leather Open",
        '-600548235': "Color Geo PRB Leather Open",
        '-674794307': "Orange Dotted Leather Open",
        '-971779754': "Blue Dotted Leather Open",
        '-1121599582': "Moss Leopard Leather Open",
        '-1495624948': "Pale Leopard Leather Open",
        '-660506983': "Magenta Leopard Leather Open",
        '-1810633345': "Spotted Bigness Leather Open",
        '-1712025508': "Green Didier Sachs Closed Field",
        '-401593198': "Black Didier Sachs Closed Field",
        '-1235662555': "Gray Didier Sachs Closed Field",
        '-655323565': "Ochre Didier Sachs Closed Field",
        '-241085817': "Green Didier Sachs Open Field",
        '-1193713416': "Black Didier Sachs Open Field",
        '-898169805': "Gray Didier Sachs Open Field",
        '-1621316097': "Red Didier Sachs Open Field",
        '-1457929863': "Ochre Didier Sachs Open Field",
        '-2081332912': "Vivid Gradient Puffer",
        '-675061552': "Orange & Neon Puffer",
        '-904739473': "Blue Painted Puffer",
        '-13029445': "Black & Neon Puffer",
        '-311718880': "Dark Painted Puffer",
        '-305230638': "White Brand Puffer",
        '-1085777923': "Green Gradient Puffer",
        '-861343042': "Dusk Gradient Puffer",
        '-1668345205': "Moss Leopard Puffer",
        '-1303626235': "Pale Leopard Puffer",
        '-408606546': "Cyan Leopard Puffer",
        '-1061405355': "Wild Bikini",
        '-903196623': "Blue Zebra Bikini",
        '-572065878': "Zebra Bikini",
        '-2093694393': "White Snakeskin Bikini",
        '-1787599164': "Green Snakeskin Bikini",
        '-2037941839': "Salmon Santo Capra T-Shirt",
        '-1702026824': "Yellow Santo Capra T-Shirt",
        '-1106974553': "Red & Black Santo Capra T-Shirt",
        '-448909567': "Blue Striped Santo Capra T-Shirt",
        '-2026051870': "Lilac Manor T-Shirt",
        '-868224785': "White Striped Manor T-Shirt",
        '-1136635664': "Green Globe Blagueurs T-Shirt",
        '-1451021450': "Purple Globe Blagueurs T-Shirt",
        '-1688039627': "Blagueurs Brand T-Shirt",
        '-1219310320': "Crewneck T-Shirt",
        '-1398884440': "White Manor Zigzag T-Shirt",
        '-903004331': "Blagueurs LS T-Shirt",
        '-472255826': "Blagueurs Sports T-Shirt",
        '-1247472059': "Teal Blagueurs LS T-Shirt",
        '-753774305': "Salmon Santo Capra T-Shirt",
        '-2133382026': "Yellow Santo Capra T-Shirt",
        '-1963114302': "Pink Santo Capra T-Shirt",
        '-1653414483': "Red & Black Santo Capra T-Shirt",
        '-1704651979': "White Manor T-Shirt",
        '-52930490': "Lilac Manor T-Shirt",
        '-282149645': "Mint Manor T-Shirt",
        '-644771399': "Black Striped Manor T-Shirt",
        '-876415460': "White Striped Manor T-Shirt",
        '-1350256759': "Wild Camisole",
        '-1144958974': "Blue Stripes Camisole",
        '-761823826': "Zebra Stripes Camisole",
        '-422304217': "Brown Spotted Camisole",
        '-90485323': "Turquoise Botanical Camisole",
        '-1725986113': "Neon Painted Camisole",
        '-1331470522': "Beige Striped Blagueurs Track",
        '-443528929': "Pink Striped Blagueurs Track",
        '-153582028': "Red Santo Capra Track",
        '-1435210315': "Dark Chevron SC Track",
        '-5203920': "Pink Ornate SC Track",
        '-214801309': "Mint Striped Blagueurs Track",
        '-1675938250': "Yellow Striped Blagueurs Track",
        '-1061748883': "Blue Striped Blagueurs Track",
        '-1905517864': "Mint Blagueurs Track",
        '-1865320903': "Leopard Loose Tank",
        '-1319274179': "Yellow Santo Capra Loose Tank",
        '-1915637210': "Moss Leopard Loose Tank",
        '-1534009436': "Pale Leopard Loose Tank",
        '-1914391984': "Magenta Leopard Loose Tank",
        '-1192156534': "Green Cardigan",
        '-1314300684': "White & Gray Cardigan",
        '-1141149288': "Blue Cardigan",
        '-342961986': "Midnight Purple Cardigan",
        '-46566381': "Blue & Cyan Cardigan",
        '-1227780707': "Azure Pattern Sweater",
        '-931024643': "Sunrise Pattern Sweater",
        '-1251156040': "Purple Motif Sweater",
        '-887846165': "Blue Motif Sweater",
        '-699817643': "Red Motif Sweater",
        '-325595663': "Green Botanical Sweater",
        '-99063566': "Purple Botanical Sweater",
        '-927267244': "Red Floral Sweater",
        '-679435297': "Blue Floral Sweater",
        '-2125193540': "Burgundy Garland Shortsleeve",
        '-879774926': "Black Garland Shortsleeve",
        '-2066579140': "Blue Leaves Shortsleeve",
        '-152902305': "Gray Leaves Shortsleeve",
        '-1374825550': "Blue Posies Shortsleeve",
        '-1647716441': "Yellow Savanna Shortsleeve",
        '-1693537132': "Urban Gradient Shortsleeve",
        '-1999042519': "Cool Gradient Shortsleeve",
        '-41478372': "Pink Botanical Shortsleeve",
        '-1562803802': "Blue Prolaps Open",
        '-626414944': "Golden Big Cat Open",
        '-879686545': "Purple & White SN Open",
        '-165191269': "Green Ornate SN Open",
        '-907015887': "Orange Ornate SN Open",
        '-156081483': "Orange & Black SN Open",
        '-445857750': "Black Bigness Open",
        '-1741249089': "Gray Prolaps Open",
        '-871887777': "Black Sports Blagueurs Hoodie",
        '-327085851': "Baby Blue SN Hoodie",
        '-26364738': "Yellow SN Hoodie",
        '-604737588': "Pink SN Hoodie",
        '-623728140': "White College Blagueurs Hoodie",
        '-384842126': "Sprayed Green Güffy Hoodie",
        '-148938095': "Spotted Dark Güffy Hoodie",
        '-968851244': "Neon Leaves Güffy Hoodie",
        '-609506390': "Blue Leaves Güffy Hoodie",
        '-2019784592': "Moss Spotted Güffy Hoodie",
        '-151558364': "Purple Spotted Güffy Hoodie",
        '-1129614707': "Baby Blue SN Hoodie",
        '-1703137745': "Yellow SN Hoodie",
        '-2077595176': "White College Blagueurs Hoodie",
        '-1801450813': "Gray College Blagueurs Hoodie",
        '-1619648401': "Graffiti Black Güffy Hoodie",
        '-1320500200': "Sprayed Green Güffy Hoodie",
        '-1025939659': "Spotted Dark Güffy Hoodie",
        '-343426927': "Neon Leaves Güffy Hoodie",
        '-25600396': "Blue Leaves Güffy Hoodie",
        '-1516663655': "Dark Padded Leather Jacket",
        '-1879285409': "Snow Padded Leather Jacket",
        '-1955540291': "Green Padded Leather Jacket",
        '-225926929': "Ice Padded Leather Jacket",
        '-361721669': "Orange Padded Leather Jacket",
        '-74172287': "Gray Padded Leather Jacket",
        '-312959990': "Yellow Padded Leather Jacket",
        '-162357374': "Spotted Muscle Pants",
        '-1893632438': "Peach Botanical Muscle Pants",
        '-1512201278': "Green Motif Muscle Pants",
        '-1212659849': "Fall Muscle Pants",
        '-936417179': "Orange Fall Muscle Pants",
        '-556722776': "White Camo Muscle Pants",
        '-259049180': "Dark Camo Muscle Pants",
        '-496766384': "Rust Leather Zippers",
        '-659956004': "Gray Leather Zippers",
        '-1012484906': "Yellow Leather Zippers",
        '-1319038901': "White Leather Zippers",
        '-1705352642': "Bright Red Leather Zippers",
        '-1864609982': "Green Leather Zippers",
        '-1041190542': "Caramel Leather Zippers",
        '-1204904466': "Blue Leather Zippers",
        '-824035476': "Mustard Shorts",
        '-1092774045': "Navy Shorts",
        '-986654055': "Tropical Pattern Shorts",
        '-664207095': "Green Leaves Shorts",
        '-689256563': "Criss Cross Shorts",
        '-1020256232': "Neon Painted Shorts",
        '-1179054806': "Navy Painted Shorts",
        '-1656867677': "Gold Floral Sequin",
        '-349679498': "Pink & Gold Gradient Sequin",
        '-1042743848': "Blue & Gray Gradient Sequin",
        '-1410700853': "Crewneck T-Shirt",
        '-1656697736': "White Manor Zigzag T-Shirt",
        '-1029177502': "B & W Blagueuers LS T-Shirt",
        '-1680068145': "Pink Santo Capra T-Shirt",
        '-1919642304': "Red & Black Santo Capra T-Shirt",
        '-101087768': "White Manor T-Shirt",
        '-626213861': "Blue Striped Santo Capra T-Shirt",
        '-332109218': "Lilac Manor T-Shirt",
        '-586757117': "Mint Manor T-Shirt",
        '-816402269': "Black Striped Manor T-Shirt",
        '-100915652': "White Manor Zigzag T-Shirt",
        '-1355478145': "Blagueurs LS T-Shirt",
        '-1074811660': "Blagueres Stripes T-Shirt",
        '-1849667438': "Blagueurs Sports T-Shirt",
        '-1551502307': "Teal Blagueurs LS T-Shirt",
        '-2047297277': "Salmon Santo Capra T-Shirt",
        '-400719233': "White Manor T-Shirt",
        '-1420721564': "Blue Striped Santo Capra T-Shirt",
        '-1952593539': "Black Striped Manor T-Shirt",
        '-1057606611': "White Striped Manor T-Shirt",
        '-1347972720': "Green Globe Blagueurs T-Shirt",
        '-445973226': "Purple Globe Blagueurs T-Shirt",
        '-103569751': "Crewneck T-Shirt",
        '-314274421': "White Manor Zigzag T-Shirt",
        '-1423062098': "B & W Blagueuers LS T-Shirt",
        '-236332759': "Yellow Santo Capra T-Shirt",
        '-126294457': "Pink Santo Capra T-Shirt",
        '-1921413050': "Red & Black Santo Capra T-Shirt",
        '-1714318222': "Blue Striped Santo Capra T-Shirt",
        '-1732385653': "White Striped Manor T-Shirt",
        '-1970091979': "Green Globe Blagueurs T-Shirt",
        '-2051981710': "Purple Globe Blagueurs T-Shirt",
        '-1882932590': "Blagueres Stripes T-Shirt",
        '-578660844': "Blagueurs Sports T-Shirt",
        '-1186787946': "Teal Blagueurs LS T-Shirt",
        '-956389107': "B & W Blagueuers LS T-Shirt",
        '-1797471038': "Blue Santo Capra T-Shirt",
        '-1566351281': "Yellow Santo Capra T-Shirt",
        '-2135483273': "Pink Santo Capra T-Shirt",
        '-1545312635': "Blue Striped Santo Capra T-Shirt",
        '-438301301': "Lilac Manor T-Shirt",
        '-206788316': "Mint Manor T-Shirt",
        '-935636414': "Black Striped Manor T-Shirt",
        '-686854166': "White Striped Manor T-Shirt",
        '-1395090563': "Green Globe Blagueurs T-Shirt",
        '-1184648045': "Purple Globe Blagueurs T-Shirt",
        '-1501515125': "Zebra Loose Tank",
        '-1673683451': "Pink Santo Capra Loose Tank",
        '-132065846': "Yellow Santo Capra Loose Tank",
        '-1261875424': "Snakeskin Loose Tank",
        '-1871280517': "Pale Leopard Loose Tank",
        '-1093049536': "Magenta Leopard Loose Tank",
        '-189885721': "Blue Stripes Camisole",
        '-1055320328': "Neon Leaves Camisole",
        '-2774731': "Brown Spotted Camisole",
        '-1418919831': "Turquoise Botanical Camisole",
        '-386729100': "Neon Painted Camisole",
        '-1115118432': "Blue Leaves Camisole",
        '-365167102': "Multicolor Leaves Camisole",
        '-2084653597': "Blue Santo Capra T-Shirt",
        '-1527842761': "Red & Black Santo Capra T-Shirt",
        '-1527443': "Blue Striped Santo Capra T-Shirt",
        '-1992141183': "Lilac Manor T-Shirt",
        '-1681818753': "Mint Manor T-Shirt",
        '-1563031128': "Black Striped Manor T-Shirt",
        '-1222757832': "White Striped Manor T-Shirt",
        '-33898512': "Green Globe Blagueurs T-Shirt",
        '-835559328': "Purple Globe Blagueurs T-Shirt",
        '-470411417': "Crewneck T-Shirt",
        '-1425660536': "White Manor Zigzag T-Shirt",
        '-1259870728': "Blagueurs LS T-Shirt",
        '-2042459986': "Blagueres Stripes T-Shirt",
        '-1745015773': "Blagueurs Sports T-Shirt",
        '-344632558': "B & W Blagueuers LS T-Shirt",
        '-47516035': "Salmon Santo Capra T-Shirt",
        '-815752471': "Blue Santo Capra T-Shirt",
        '-948412820': "White Manor T-Shirt",
        '-2000363262': "Lilac Manor T-Shirt",
        '-1695906479': "Mint Manor T-Shirt",
        '-1966054127': "Purple Globe Blagueurs T-Shirt",
        '-868174381': "Crewneck T-Shirt",
        '-1710108298': "White Manor Zigzag T-Shirt",
        '-1225130921': "Blagueurs LS T-Shirt",
        '-1088287517': "Blagueres Stripes T-Shirt",
        '-1453072025': "Blagueurs Sports T-Shirt",
        '-226626662': "Teal Blagueurs LS T-Shirt",
        '-859527128': "B & W Blagueuers LS T-Shirt",
        '-1314094905': "White Manor T-Shirt",
        '-887044672': "Blue Striped Santo Capra T-Shirt",
        '-939086469': "Lilac Manor T-Shirt",
        '-551134278': "Mint Manor T-Shirt",
        '-480549852': "Black Striped Manor T-Shirt",
        '-92138895': "White Striped Manor T-Shirt",
        '-417366580': "White Manor Zigzag T-Shirt",
        '-1957769704': "Blagueres Stripes T-Shirt",
        '-1776426058': "B & W Blagueuers LS T-Shirt",
        '-1113673029': "Salmon Santo Capra T-Shirt",
        '-1286824425': "Blue Santo Capra T-Shirt",
        '-824748756': "Pink Santo Capra T-Shirt",
        '-158849907': "Red & Black Santo Capra T-Shirt",
        '-186246823': "White Manor T-Shirt",
        '-2145764645': "Blue Striped Santo Capra T-Shirt",
        '-2122254310': "Crewneck T-Shirt",
        '-1870527170': "Blagueurs LS T-Shirt",
        '-1103109959': "Blagueres Stripes T-Shirt",
        '-108669120': "B & W Blagueuers LS T-Shirt",
        '-1479494697': "Salmon Santo Capra T-Shirt",
        '-1795584471': "Blue Santo Capra T-Shirt",
        '-327500502': "Red & Black Santo Capra T-Shirt",
        '-233645760': "White Manor T-Shirt",
        '-132787404': "Blue Striped Santo Capra T-Shirt",
        '-1603521036': "Lilac Manor T-Shirt",
        '-1902669237': "Mint Manor T-Shirt",
        '-650926206': "Green Globe Blagueurs T-Shirt",
        '-743334786': "Purple Globe Blagueurs T-Shirt",
        '-1217371064': "Blagueurs Brand T-Shirt",
        '-477548096': "Teal Blagueurs LS T-Shirt",
        '-240005615': "Salmon Santo Capra T-Shirt",
        '-496994': "Blue Santo Capra T-Shirt",
        '-1962704678': "Yellow Santo Capra T-Shirt",
        '-1667292143': "Pink Santo Capra T-Shirt",
        '-1348908539': "Red & Black Santo Capra T-Shirt",
        '-987058478': "Black Striped Manor T-Shirt",
        '-149679460': "White Striped Manor T-Shirt",
        '-454005167': "Purple Globe Blagueurs T-Shirt",
        '-1289450822': "Blagueurs Brand T-Shirt",
        '-242566817': "Crewneck T-Shirt",
        '-517138224': "White Manor Zigzag T-Shirt",
        '-1935112111': "Teal Blagueurs LS T-Shirt",
        '-389136229': "Pink Santo Capra T-Shirt",
        '-90446794': "Red & Black Santo Capra T-Shirt",
        '-219431859': "White Manor T-Shirt",
        '-46083849': "Lilac Manor T-Shirt",
        '-1677095330': "Black Striped Manor T-Shirt",
        '-1413206573': "White Striped Manor T-Shirt",
        '-1251262175': "Green Globe Blagueurs T-Shirt",
        '-953097044': "Purple Globe Blagueurs T-Shirt",
        '-206225972': "Blagueurs Brand T-Shirt",
        '-1733410740': "Crewneck T-Shirt",
        '-1426004751': "White Manor Zigzag T-Shirt",
        '-1518083424': "Blagueres Stripes T-Shirt",
        '-403478650': "Yellow Santo Capra T-Shirt",
        '-686438965': "Pink Santo Capra T-Shirt",
        '-1008492697': "Red & Black Santo Capra T-Shirt",
        '-276760681': "Evil Pumpkin",
        '-1058563483': "Rotten Pumpkin",
        '-753320248': "Nasty Watermelon",
        '-701441924': "Dead Butler",
        '-1532529354': "Rotten Butler",
        '-137805210': "Blue Hypnotic Alien",
        '-1976867020': "Red Hypnotic Alien",
        '-1338074765': "Yellow Haggard Witch",
        '-1569620519': "White Haggard Witch",
        '-1719406454': "Red Bearded Lucifer",
        '-1676346362': "White Scalded Psycho",
        '-1546019100': "Red Flayed Demon",
        '-145963571': "Gray Flayed Demon",
        '-1437766026': "White Skull Burst",
        '-8808018': "Pale Lycanthrope",
        '-344661230': "Red Toxic Insect",
        '-1148976335': "Purple Toxic Insect",
        '-958982678': "Dirty Sewer Creature",
        '-669632408': "Rotten Sewer Creature",
        '-379259419': "Red Classic Lucifer",
        '-1222438558': "Orange Classic Lucifer",
        '-2048003518': "Black Combat Mask",
        '-1364343871': "Forest Combat Mask",
        '-378858087': "Black Skeletal",
        '-80494897': "Please Stop Me Hockey",
        '-285001146': "Black Combat Top",
        '-579004614': "Gray Combat Top",
        '-1331505755': "Black Combat Pants",
        '-1580156927': "Gray Combat Pants",
        '-1808851778': "Charcoal Combat Pants",
        '-68359032': "Tan Combat Pants",
        '-1590806772': "Forest Combat Pants",
        '-1438684756': "Black Tact Gloves",
        '-1737996802': "Gray Tact Gloves",
        '-575909755': "Charcoal Tact Gloves",
        '-90256116': "Gray Wool Gloves",
        '-1327122021': "Charcoal Wool Gloves",
        '-1642556415': "Tan Wool Gloves",
        '-769983483': "Green Wool Gloves",
        '-1539706255': "Wasted Mrs Claus",
        '-1771088164': "Smashed Mrs Claus",
        '-1089653708': "Rebel Bad Elf",
        '-1290855368': "Gangsta Bad Elf",
        '-1386375369': "White Mrs Claus",
        '-1173606252': "Black Mrs Claus",
        '-914665614': "Latino Mrs Claus",
        '-1062779259': "Grumpy Bad Santa",
        '-1786220472': "Filthy Bad Santa",
        '-989456742': "Green Festive Luchador",
        '-221253075': "Dark Green Festive Luchador",
        '-1427774890': "Black Festive Luchador",
        '-1601909356': "White Festive Luchador",
        '-1774438141': "Red Festive Luchador",
        '-572384004': "Dark Pudding",
        '-538631934': "Light Pudding",
        '-538230264': "Black LS Beast",
        '-1271321631': "LS Visor Beast",
        '-2043850806': "Brown Visor Beast",
        '-1967871389': "Classic Festive Beast",
        '-1090232119': "Green Check Pajamas",
        '-292603126': "Snowflake Pajamas",
        '-552690679': "Snowman Pajamas",
        '-245382997': "Red Tree Pajamas",
        '-1506301372': "Green Tree Pajamas",
        '-1711042084': "Festive Striped Pajamas",
        '-1133356123': "Black Check Pajamas",
        '-1551324718': "Candy Cane Pajamas",
        '-1862564680': "Stocking Pajamas",
        '-1295529880': "Green Barfs Pajamas",
        '-512809538': "Red Barfs Pajamas",
        '-1471270027': "Holly Pajamas",
        '-990352183': "Penguin Pajamas",
        '-46441130': "Reindeer Pajamas",
        '-1037820496': "Black Love T-Shirt",
        '-79097863': "Red Love T-Shirt",
        '-1172927021': "Teal Lace Bustier",
        '-1119484812': "Black Mysterious",
        '-177102699': "Bronze Masquerade",
        '-1471866428': "Cupid",
        '-375526080': "Flapper Bob Chestnut",
        '-1210578507': "Flapper Bob Blonde",
        '-1907902827': "Flapper Bob Auburn",
        '-604122624': "Flapper Bob Black",
        '-11855710': "Flapper Bob Brown",
        '-733678419': "Purple Flapper Dress",
        '-541258851': "Black Flapper Dress",
        '-234868701': "Gray & White Flapper Dress",
        '-80625018': "Lilac Flapper Dress",
        '-2012994587': "Red Lace Bustier",
        '-1540105148': "Gray Lace Bustier",
        '-1871858528': "Teal Lace Bustier",
        '-1881959031': "Black Love T-Shirt",
        '-1046152917': "Red Love T-Shirt",
        '-739668639': "White Lace Panties",
        '-1126047902': "Red Lace Panties",
        '-954797108': "Black Lace Panties",
        '-1858238438': "Gray Lace Panties",
        '-1551291215': "Teal Lace Panties",
        '-1132989389': "White Stockings",
        '-1766348621': "Red Stockings",
        '-128785217': "Nude Rounded Heels",
        '-913832150': "Purple Rounded Heels",
        '-1803576042': "Black Rounded Heels",
        '-434290604': "Blue Rounded Heels",
        '-1356115347': "Red Rounded Heels",
        '-1058212368': "Hot Pink Rounded Heels",
        '-538672356': "Nude Lace Bustier",
        '-87639840': "Lilac Plaid Lace Bustier",
        '-1432655969': "Black Leopard Lace Bustier",
        '-432271409': "Black Plaid Lace Bustier",
        '-266394731': "Blue Dot Lace Bustier",
        '-1877948972': "Blue Embroidered Dress",
        '-325505192': "Brown Shimmer Dress",
        '-109786865': "Gold Shimmer Dress",
        '-1629681118': "Red Vintage Dress",
        '-1265420914': "Green Vintage Dress",
        '-989872783': "Nude Silk Lace Panties",
        '-1596197578': "Black Silk Lace Panties",
        '-942357733': "Blue Dot Silk Lace Panties",
        '-40948081': "Crimson Lace Panties",
        '-1262871322': "White Silk Lace Panties",
        '-495388573': "Diva Lace Panties",
        '-313291240': "Tan Lace Panties",
        '-1406864304': "Black Leopard Stockings",
        '-183158352': "Black Plaid Stockings",
        '-1894879840': "Purple Stripe Stockings",
        '-1664022235': "Tan Stripe Stockings",
        '-174365543': "Nude Lace Bustier",
        '-1450128251': "Lilac Plaid Lace Bustier",
        '-1848319017': "Red Stripe Lace Bustier",
        '-1811439245': "Black Plaid Lace Bustier",
        '-1193481443': "Red Leopard Lace Bustier",
        '-840652021': "Yellow Canvas Snugs",
        '-533835874': "Black Canvas Snugs",
        '-363240460': "Gray Canvas Snugs",
        '-1800226620': "Blue Canvas Snugs",
        '-1501012881': "Green Canvas Snugs",
        '-323814855': "Pinched Cornrows",
        '-338245878': "Leaf Cornrows",
        '-1635534722': "Zig Zag Cornrows",
        '-822213177': "White Classic",
        '-532666293': "Black Classic",
        '-1967035479': "White Mix Baseball Tee",
        '-1735260346': "Black Baseball Tee",
        '-1010579496': "Broker Baseball Shirt",
        '-779459739': "Double P Baseball Shirt",
        '-1640629059': "Magnetics Baseball Shirt",
        '-1410099144': "Trickster Baseball Shirt",
        '-79055061': "Feud Baseball Shirt",
        '-278947467': "Pink Sport Hoodie",
        '-748494468': "Blue Sport Hoodie",
        '-803349774': "Red Sport Hoodie",
        '-1919658765': "Black Hinterland Varsity",
        '-1681264290': "Green Magnetics Varsity",
        '-14829560': "Black Broker Print Varsity",
        '-1202443658': "Black Trickster Varsity",
        '-973453886': "Brown WSBL Varsity",
        '-1649227035': "Khaki Baggy Cargo",
        '-157352772': "Gray Baggy Cargo",
        '-356509979': "White Classic",
        '-117329048': "Black Classic",
        '-348253956': "White Classic",
        '-1603247900': "Gray Loose Tank",
        '-103199981': "White Mix Baseball Tee",
        '-540338441': "All Yellow Baseball Tee",
        '-2146256061': "Yellow Mix Baseball Tee",
        '-846440907': "White Mix Baseball Tee",
        '-102879428': "Black Baseball Tee",
        '-576552751': "All Yellow Baseball Tee",
        '-1729467684': "Gold Magnetics Necklace",
        '-416468603': "Gold Magnetics Necklace",
        '-655452920': "Platinum Magnetics Necklace",
        '-1198531326': "Golden Hi Tops",
        '-1377462398': "Navy Peacoat",
        '-1146342641': "Gray Peacoat",
        '-217308734': "Green Peacoat",
        '-440614570': "Gray Leather Fur Jacket",
        '-1709037022': "All Black Leather Fur Jacket",
        '-288309029': "White Leather Fur Jacket",
        '-598336538': "Fall Leather Fur Jacket",
        '-379046390': "Blue Leather Fur Jacket",
        '-1213640051': "Hunter Leather Fur Jacket",
        '-1008084369': "Black Deep Belted Jacket",
        '-172704252': "Brown Deep Belted Jacket",
        '-1679324565': "Red Deep Belted Jacket",
        '-844599828': "Teal Deep Belted Jacket",
        '-378485569': "Andromeda T-Shirt",
        '-1033269609': "Color Geo PRB T-Shirt",
        '-774165126': "Color Geo T-Shirt",
        '-555595896': "Brown Geo T-Shirt",
        '-135110206': "Medusa Art T-Shirt",
        '-842855068': "Angelica T-Shirt",
        '-594695431': "Classic Perseus T-Shirt",
        '-1299491087': "Shield & Sword T-Shirt",
        '-1069485476': "Full Shield T-Shirt",
        '-1762156598': "Brown Full Print T-Shirt",
        '-1587170138': "Brown Print T-Shirt",
        '-2090435241': "Brown Leather Zippers",
        '-2065377283': "Pegasus T-Shirt",
        '-2000856443': "Gold SN Print T-Shirt",
        '-1701904856': "Brown SN Print T-Shirt",
        '-462679583': "White SN Stripe T-Shirt",
        '-178605122': "Color Geo PRB T-Shirt",
        '-1621062412': "Medusa Art T-Shirt",
        '-1854377692': "Angelica T-Shirt",
        '-1623618430': "Classic Perseus T-Shirt",
        '-1862045674': "Shield & Sword T-Shirt",
        '-1127921767': "Full Shield T-Shirt",
        '-1361433661': "Brown Full Print T-Shirt",
        '-185176381': "Andromeda T-Shirt",
        '-295634318': "Pink SN PRB T-Shirt",
        '-1776832249': "Medusa Art T-Shirt",
        '-779966500': "Angelica T-Shirt",
        '-1029338590': "Classic Perseus T-Shirt",
        '-1441998607': "Shield & Sword T-Shirt",
        '-2042162842': "Brown Full Print T-Shirt",
        '-1199245855': "Brown Print T-Shirt",
        '-1498120008': "Gold Shiny Top",
        '-369921491': "Gold Shiny Top",
        '-1047292755': "Pegasus T-Shirt",
        '-1804453265': "Andromeda T-Shirt",
        '-1874760571': "Brown Geo PRB T-Shirt",
        '-1223476684': "Color Geo PRB T-Shirt",
        '-1980866585': "Color Geo T-Shirt",
        '-746654965': "Brown Geo T-Shirt",
        '-1506288134': "Medusa Art T-Shirt",
        '-1890930660': "Angelica T-Shirt",
        '-1584311127': "Classic Perseus T-Shirt",
        '-2044224042': "Full Shield T-Shirt",
        '-1222460701': "Black SN T-Shirt",
        '-1672510147': "Black SN T-Shirt",
        '-287819446': "Black SN T-Shirt",
        '-1017188246': "Gold Shiny Top",
        '-1065957785': "Platinum SN Necklace",
        '-1938026659': "Gold Zorse Necklace",
        '-120035304': "Platinum Zorse Necklace",
        '-909201304': "Gold LC Necklace",
        '-1139993371': "Platinum LC Necklace",
        '-2026786565': "Gold Dix Necklace",
        '-717034271': "Platinum Balaclava Necklace",
        '-81147995': "Platinum Zorse Necklace",
        '-1132118023': "Platinum LC Necklace",
        '-129652720': "Gold Le Chien Necklace",
        '-1290494545': "Platinum Le Chien Necklace",
        '-1174371529': "Platinum SN Necklace",
        '-1183075100': "Platinum Skull Necklace",
        '-473850396': "Platinum Balaclava Necklace",
        '-581152177': "Black Flight Boots",
        '-1114385357': "Night Vision",
        '-1067020949': "Rebreather",
        '-341046913': "Chemical Mask",
        '-670092377': "Crime Scene Tape",
        '-908093624': "Black Arrow Tape",
        '-1876706754': "Light Gray Duct Tape",
        '-1647782520': "Dark Gray Duct Tape",
        '-1394117691': "White Duct Tape",
        '-97470603': "Up-n-Atom Paper Bag",
        '-1293080337': "Manic Paper Bag",
        '-1137111266': "Zigzag Paper Bag",
        '-385914710': "Pink Paper Bag",
        '-1897876374': "Alien Paper Bag",
        '-861786128': "Help Me Paper Bag",
        '-633615581': "Puzzle Paper Bag",
        '-1531999116': "Sad Paper Bag",
        '-1298728310': "The Bird Paper Bag",
        '-156630377': "Sticker Paper Bag",
        '-2013146335': "Kill Me Paper Bag",
        '-1351109501': "Green Plastic Face",
        '-8858492': "The Don Plastic Face",
        '-697138568': "Clown Plastic Face",
        '-391043339': "Black Plastic Face",
        '-2128554018': "Puppet Plastic Face",
        '-1920307023': "Mime Plastic Face",
        '-1703735810': "Skull Face Bandana",
        '-175553495': "Desert Face Bandana",
        '-475815842': "Forest Face Bandana",
        '-853413029': "Paisley Face Bandana",
        '-1419137045': "Yellow Face Bandana",
        '-1441694810': "Gray Tight Ski",
        '-402884741': "Charcoal Tight Ski",
        '-1955185040': "Urban Tight Ski",
        '-1722820061': "Blue Tight Ski",
        '-728857530': "Black Hooded Ski",
        '-106672527': "White Hooded Ski",
        '-1674341487': "Green Hooded Ski",
        '-1426640612': "Khaki Hooded Ski",
        '-1616110970': "Charcoal Hooded Ski",
        '-825558845': "Forest Hooded Ski",
        '-1062773636': "Urban Hooded Ski",
        '-1951407139': "Justice T-Shirt Mask",
        '-706250677': "Love Fist T-Shirt Mask",
        '-933962458': "TPI T-Shirt Mask",
        '-539458143': "Charcoal Toggle Ski",
        '-1384675744': "Blue Loose Balaclava",
        '-603364477': "Black Loose Balaclava",
        '-945505606': "Khaki Loose Balaclava",
        '-188672778': "Bloody Loose Balaclava",
        '-130673163': "White Knit Balaclava",
        '-1686217589': "Green Knit Balaclava",
        '-874910415': "Copper Knit Balaclava",
        '-1240415841': "Gray Knit Balaclava",
        '-1695478944': "Rainbow Knit Balaclava",
        '-450420789': "Woodland Knit Balaclava",
        '-204554982': "Flying Bravo FB Balaclava",
        '-1615510302': "Bandit Knit Balaclava",
        '-2083484391': "Neon Camo Knit Balaclava",
        '-1372200477': "Pink Camo Knit Balaclava",
        '-162598372': "Black Stripe Knit Balaclava",
        '-393062749': "Pink Stripe Knit Balaclava",
        '-476401343': "Pink Infected",
        '-706275878': "Brown Infected",
        '-1697114941': "White Vampyr",
        '-1927218859': "Blue Vampyr",
        '-534990310': "Pale Frank",
        '-144825365': "Impotent Rage",
        '-1735362607': "Princess Robot Bubblegum",
        '-1014858178': "Black Tactical Boots",
        '-2065985352': "Black Scruffy Boots",
        '-483649657': "All Black Backside",
        '-404460465': "All Black Sports",
        '-1189772000': "Black Fitted Tux Open",
        '-2139974693': "Gray Fitted Tux Open",
        '-1639395449': "Navy Fitted Tux Open",
        '-222824344': "Teal Fitted Tux Open",
        '-462988345': "Red Fitted Tux Open",
        '-955506415': "White Fitted Tux Open",
        '-991945543': "Brown Fitted Tux Open",
        '-1203308385': "Black Fitted Tux",
        '-608583808': "Gray Fitted Tux",
        '-319102462': "Navy Fitted Tux",
        '-1906498360': "Red Fitted Tux",
        '-950626630': "All Gray Fitted Tux",
        '-303993926': "Black Hooded Jacket",
        '-5501105': "Light Gray Hooded Jacket",
        '-1566943959': "Navy Hooded Jacket",
        '-1270318971': "Tan Hooded Jacket",
        '-1180912499': "Light Gray Hooded Jacket",
        '-947826602': "Dark Gray Hooded Jacket",
        '-566002214': "Red Hooded Jacket",
        '-323675459': "Navy Hooded Jacket",
        '-1926898788': "Tan Hooded Jacket",
        '-1511561266': "Black SN T-Shirt",
        '-1477518667': "Black Tailcoat",
        '-888599841': "Gray Rolled Jacket",
        '-647223387': "Beige Rolled Jacket",
        '-309145606': "Blue Rolled Jacket",
        '-1087699876': "Beige Stealth Jacket",
        '-846356191': "Gray Stealth Jacket",
        '-713294913': "Black Battle Pants",
        '-1728882738': "Navy Regular Suit Pants",
        '-1498614975': "Teal Regular Suit Pants",
        '-2128992228': "White Regular Suit Pants",
        '-804731400': "Brown Regular Suit Pants",
        '-497256741': "Gray Scruffy Suit Pants",
        '-1330801794': "Beige Scruffy Suit Pants",
        '-1865640992': "Stealth Utility Vest",
        '-632479449': "Gray Heavy Utility Vest",
        '-1399700046': "Black Heavy Utility Vest",
        '-565297075': "Black SN T-Shirt",
        '-393808941': "Off-White Shirt",
        '-201684294': "Blue Striped Shirt",
        '-1388315322': "Tan Shirt",
        '-1685956149': "Ocean Stripe Shirt",
        '-2030486821': "Blue Woven Shirt",
        '-1704140350': "Pale Olive Shirt",
        '-1941748369': "Fuchsia Shirt",
        '-1916947083': "White Shirt",
        '-1679928906': "Silver Shirt",
        '-499617037': "Off-White Shirt",
        '-125526121': "Mint Shirt",
        '-2036417599': "Pink Striped Shirt",
        '-1965112255': "Tan Shirt",
        '-1725144868': "Ocean Stripe Shirt",
        '-1441305048': "Charcoal Shirt",
        '-1197044922': "Barely Blue Shirt",
        '-1017503571': "Pink Check Shirt",
        '-249856977': "Blue Woven Shirt",
        '-293165240': "Black Fitted Suit Vest",
        '-531330332': "Blue Fitted Suit Vest",
        '-2026940261': "Teal Fitted Suit Vest",
        '-367321503': "White Fitted Suit Vest",
        '-118965252': "Brown Fitted Suit Vest",
        '-1626330481': "Silver Fitted Suit Vest",
        '-1383708805': "Beige Fitted Suit Vest",
        '-1145904172': "Black Fitted Suit Vest",
        '-2107477712': "Gray Fitted Suit Vest",
        '-1869247082': "Navy Fitted Suit Vest",
        '-1622725895': "Teal Fitted Suit Vest",
        '-969733223': "Black Loose Bow Tie",
        '-1892419484': "Charcoal Loose Tie",
        '-2027611012': "Tan Stripy Loose Tie",
        '-1819331248': "Pink Loose Tie",
        '-1579494937': "Green Diamond Loose Tie",
        '-1341395383': "Blue Hatch Loose Tie",
        '-523592828': "Purple Diamond Loose Tie",
        '-2047777329': "Blue Stripy Loose Tie",
        '-1547755154': "Teal Loose Tie",
        '-1751260318': "White Skinny Tie",
        '-1688769839': "Black Skinny Tie",
        '-72452395': "Charcoal Straight Tie",
        '-378547624': "Khaki Hatch Straight Tie",
        '-125345933': "Blue Diamond Straight Tie",
        '-424625210': "Tan Stripy Straight Tie",
        '-533413918': "White Stripy Straight Tie",
        '-838657153': "Green Straight Tie",
        '-52659911': "Purple Diamond Straight Tie",
        '-282993212': "Fuchsia Straight Tie",
        '-664620986': "Gray Diamond Straight Tie",
        '-894626597': "Tan Straight Tie",
        '-1391965568': "Black Bow Tie",
        '-431899406': "White Bow Tie",
        '-745039970': "Red Bow Tie",
        '-1131862141': "Charcoal Loose Tie",
        '-2142886247': "Tan Stripy Loose Tie",
        '-688106500': "Pink Loose Tie",
        '-481858414': "Green Diamond Loose Tie",
        '-1115578093': "Blue Hatch Loose Tie",
        '-2133577518': "Tan Loose Tie",
        '-1634505648': "Blue Stripy Loose Tie",
        '-1902457757': "Teal Loose Tie",
        '-759881830': "White Skinny Tie",
        '-2060483472': "Gray Skinny Tie",
        '-1821040389': "Black Skinny Tie",
        '-1804417290': "Charcoal Straight Tie",
        '-2036356272': "Khaki Hatch Straight Tie",
        '-1495216308': "Orange Straight Tie",
        '-1800983847': "Blue Diamond Straight Tie",
        '-1020753957': "Tan Stripy Straight Tie",
        '-1326324882': "Pink Straight Tie",
        '-142675833': "Green Diamond Straight Tie",
        '-314516469': "Blue Hatch Straight Tie",
        '-381259612': "Purple Diamond Straight Tie",
        '-606480949': "Fuchsia Straight Tie",
        '-792477793': "Gray Diamond Straight Tie",
        '-1087759252': "Tan Straight Tie",
        '-339970584': "Blue Stripy Straight Tie",
        '-638332329': "Teal Straight Tie",
        '-1858193039': "Brown Driving Gloves",
        '-1301636615': "Black Driving Gloves",
        '-1005568700': "Brown Driving Gloves",
        '-840276017': "Black Driving Gloves",
        '-1822592330': "Brown Driving Gloves",
        '-591418577': "Black Driving Gloves",
        '-244985062': "Black Leather Gloves",
        '-474990673': "Brown Leather Gloves",
        '-1344081422': "Brown Leather Gloves",
        '-1158564771': "Black Leather Gloves",
        '-859875336': "Brown Leather Gloves",
        '-958872024': "Black Leather Gloves",
        '-1296654876': "Brown Leather Gloves",
        '-1978886808': "Black Leather Gloves",
        '-1745735373': "Brown Leather Gloves",
        '-268733734': "Black Leather Gloves",
        '-1044539809': "Brown Leather Gloves",
        '-1759053005': "Black Leather Gloves",
        '-1989976148': "Brown Leather Gloves",
        '-549346210': "Brown Leather Gloves",
        '-2029591494': "Black Leather Gloves",
        '-331193181': "Black Woolen Gloves",
        '-1099233003': "Gray Woolen Gloves",
        '-1315084792': "Black Woolen Gloves",
        '-1609383181': "Gray Woolen Gloves",
        '-1062430757': "Gray Woolen Gloves",
        '-420901598': "Black Driving Gloves",
        '-248012354': "Brown Driving Gloves",
        '-208098559': "Black Woolen Gloves",
        '-505968769': "Gray Woolen Gloves",
        '-69929428': "Black Woolen Gloves",
        '-825713640': "Gray Woolen Gloves",
        '-99079306': "Black Woolen Gloves",
        '-1521778214': "Gray Woolen Gloves",
        '-1279403197': "Black Woolen Gloves",
        '-972324898': "Gray Woolen Gloves",
        '-2124412821': "Black Woolen Gloves",
        '-1219726269': "Gray Woolen Gloves",
        '-1682905914': "Gray Woolen Gloves",
        '-1898790186': "Gray Woolen Gloves",
        '-1947098483': "Black Driving Gloves",
        '-1385727891': "Black Fingerless Gloves",
        '-447453114': "Gray Fingerless Gloves",
        '-596540583': "Black Fingerless Gloves",
        '-52187194': "Gray Fingerless Gloves",
        '-2038547154': "Gray Fingerless Gloves",
        '-1459998821': "Black Fingerless Gloves",
        '-360036697': "Black Fingerless Gloves",
        '-666983920': "Gray Fingerless Gloves",
        '-707909514': "Black Fingerless Gloves",
        '-1543715628': "Gray Fingerless Gloves",
        '-1503837941': "Brown Driving Gloves",
        '-893909282': "Black Fingerless Gloves",
        '-992019672': "Gray Fingerless Gloves",
        '-887980266': "Refuse Collector Gloves",
        '-653786071': "Refuse Collector Gloves",
        '-1148238879': "Black Driving Gloves",
        '-315676892': "Brown Driving Gloves",
        '-926433555': "Refuse Collector Gloves",
        '-306315670': "White Cotton Gloves",
        '-1929503325': "White Cotton Gloves",
        '-227700260': "Brown Driving Gloves",
        '-210146735': "White Cotton Gloves",
        '-521728710': "White Cotton Gloves",
        '-1196262225': "White Cotton Gloves",
        '-795005246': "White Cotton Gloves",
        '-934174767': "White Cotton Gloves",
        '-1154048938': "Blue Surgical Gloves",
        '-1189128367': "Blue Surgical Gloves",
        '-891979075': "White Surgical Gloves",
        '-2132413943': "Brown Driving Gloves",
        '-2079589815': "Blue Surgical Gloves",
        '-1179032157': "White Surgical Gloves",
        '-137095372': "Blue Surgical Gloves",
        '-1485106343': "White Surgical Gloves",
        '-664356399': "Blue Surgical Gloves",
        '-162794081': "White Surgical Gloves",
        '-1147008986': "Blue Surgical Gloves",
        '-1375834909': "White Surgical Gloves",
        '-234436397': "Blue Surgical Gloves",
        '-1866981918': "Blue Surgical Gloves",
        '-1173196650': "White Surgical Gloves",
        '-1925009287': "Black Driving Gloves",
        '-1559755280': "Blue Surgical Gloves",
        '-1872600939': "White Surgical Gloves",
        '-2005924878': "Khaki Walking Boots",
        '-1264731975': "Sienna Leather Loafers",
        '-958374594': "Orange Leather Loafers",
        '-1990532560': "Brown Leather Loafers",
        '-1683847485': "Black Leather Loafers",
        '-815661746': "Black Silk Pajamas",
        '-1190408030': "SN Silk Pajamas",
        '-470768021': "Perseus Silk Pajamas",
        '-566912267': "Gray Silk Pajamas",
        '-206486036': "Pink Silk Pajamas",
        '-766352173': "Red Shiny Open Jacket",
        '-1153884555': "Green Shiny Jacket",
        '-815519388': "Gold Print Open Jacket",
        '-1491335966': "Floral Loose Shirt",
        '-1013317568': "Red Silk Jacket",
        '-705583889': "Blue Silk Jacket",
        '-1546192324': "Red Smoking Jacket",
        '-1164657241': "Brown Smoking Jacket",
        '-705503641': "Black Smoking Jacket",
        '-466388248': "Pink Smoking Jacket",
        '-1939059877': "Green Smoking Jacket",
        '-245463287': "Dix Bikini",
        '-480384240': "Blossom Bikini",
        '-709603395': "Floral Bikini",
        '-1917302634': "Cream Long Suit",
        '-2031026344': "White Silk Robe",
        '-1774608915': "Gray Silk Robe",
        '-1543620234': "Black Silk Robe",
        '-1432664400': "Red Print Silk Robe",
        '-1200954801': "Purple Print Silk Robe",
        '-820965477': "Navy Print Silk Robe",
        '-595088760': "Black Print Silk Robe",
        '-1306503762': "Brown Print Silk Robe",
        '-960480251': "San Andreas Tucked Polo",
        '-13877721': "Denim Tucked Shirt",
        '-1814618793': "Beige Detail Battle Vest",
        '-1651429173': "Khaki Detail Battle Vest",
        '-1109205107': "White Continental Open Jacket",
        '-338576534': "Navy Continental Open Jacket",
        '-644901146': "Blue Continental Open Jacket",
        '-214545869': "Yellow Continental Open Jacket",
        '-181924378': "White Continental Closed Jacket",
        '-1582242055': "Blue Continental Closed Jacket",
        '-890095237': "Lilac Continental Closed Jacket",
        '-1106468944': "Yellow Continental Closed Jacket",
        '-411685603': "Le Chien Bikini",
        '-172570210': "Sessanta Nove Bikini",
        '-870353296': "Perseus Bikini",
        '-631565593': "Blossom Bikini",
        '-387785860': "Black Tracksuit Pants",
        '-664552834': "Charcoal Tracksuit Pants",
        '-2037049630': "Navy Tracksuit Pants",
        '-104399548': "Teal Tracksuit Pants",
        '-50873153': "Tan Battle Pants",
        '-1091223381': "Khaki Battle Pants",
        '-1397953147': "Tan Utility Pants",
        '-1795207349': "White Continental Pants",
        '-1559893160': "Navy Continental Pants",
        '-2046316200': "Yellow Continental Pants",
        '-1775942909': "White Continental Slim Pants",
        '-2021284412': "Navy Continental Slim Pants",
        '-2132764550': "Blue Continental Slim Pants",
        '-210043471': "Lilac Continental Slim Pants",
        '-581906083': "Yellow Continental Slim Pants",
        '-618676860': "Red Shiny Pants",
        '-460992432': "Blue Shiny Pants",
        '-153389829': "Black Shiny Pants",
        '-1609430223': "Gold Print Pants",
        '-310078170': "Red Fitted Shiny Pants",
        '-96620904': "Blue Fitted Shiny Pants",
        '-1300669754': "Gold Print Fitted Pants",
        '-182030260': "White Sweater Shirt",
        '-892781945': "Tan Pocket Utility Vest",
        '-1116102680': "Khaki Pocket Utility Vest",
        '-564862562': "Black Pocket Utility Vest",
        '-1519558015': "Black Desert Scarf",
        '-1509617832': "Black Bead Necklace",
        '-241792931': "Pink Cowboy Boots",
        '-928944791': "White Cowboy Boots",
        '-1226454542': "Red Cowboy Boots",
        '-1392069068': "Wine Cowboy Boots",
        '-1691217269': "Crimson Cowboy Boots",
        '-1106356149': "Green Cowboy Boots",
        '-330189615': "Purple Cowboy Boots",
        '-1516918950': "Orange Cowboy Boots",
        '-1813838859': "Navy Cowboy Boots",
        '-1042601872': "White Cowboy Boots",
        '-392399374': "Red Cowboy Boots",
        '-647243887': "Wine Cowboy Boots",
        '-2026065100': "Crimson Cowboy Boots",
        '-1430619601': "Purple Cowboy Boots",
        '-1809462010': "Orange Cowboy Boots",
        '-808564419': "Navy Liberty Polo",
        '-693269545': "French Navy Long Suit",
        '-446650051': "Light Gray Long Suit",
        '-1445758563': "Burgundy Long Suit",
        '-728281308': "Purple Long Suit",
        '-2042252670': "Pink Long Suit",
        '-140096056': "Gray Long Suit",
        '-685667153': "Black Pinstripe Long Suit",
        '-513564365': "Blue Pinstripe Long Suit",
        '-223250829': "Light Blue Tracksuit Top",
        '-1135703634': "Lilac Tracksuit Top",
        '-521809188': "Gray Tracksuit Top",
        '-1697826507': "Light Gray Cashmere Coat",
        '-1319501935': "Pastel Blue Pajamas",
        '-1300754875': "Navy Pinstripe Pajamas",
        '-619654314': "White Graphic Pajamas",
        '-117698764': "Blue Swirl Pajamas",
        '-1128556884': "Yellow Swirl Pajamas",
        '-2139070699': "Pastel Yellow Smoking Jacket",
        '-1564610862': "Red Swirl Smoking Jacket",
        '-1936539012': "Navy Pinstripe Smoking Jacket",
        '-1951763095': "Pastel Pink Smoking Jacket",
        '-1727459298': "Pastel Green Smoking Jacket",
        '-341035665': "Blue Swirl Smoking Jacket",
        '-565241163': "Yellow Swirl Smoking Jacket",
        '-1683575561': "Black Liberty Hoodie",
        '-1980757622': "Red Liberty Hoodie",
        '-1054705682': "White Flying Bravo Hoodie",
        '-2033335859': "Regal Loose Shirt",
        '-853291400': "Botanical Loose Shirt",
        '-696808515': "Gray Quilted Jacket",
        '-399888606': "Khaki Quilted Jacket",
        '-2042947809': "Black Leather Field Jacket",
        '-1812680046': "Brown Leather Field Jacket",
        '-389650303': "Red Turtleneck",
        '-1523162778': "Black Turtleneck",
        '-385996967': "Burgundy Tracksuit Pants",
        '-1021599230': "White Tracksuit Pants",
        '-492561755': "Tan Tracksuit Pants",
        '-1155773546': "Royal Blue Tracksuit Pants",
        '-1375162001': "Light Blue Tracksuit Pants",
        '-1615260464': "Orange Tracksuit Pants",
        '-2107501371': "Blue Sweater Shirt",
        '-1780663365': "Black Sweater Shirt",
        '-1520510274': "Check Sweater Shirt",
        '-166531186': "Red Turtleneck",
        '-1079147836': "Brown Turtleneck",
        '-1281790928': "Gray Turtleneck",
        '-595476992': "Purple Turtleneck",
        '-1527559543': "Gold Bead Necklace",
        '-1268717212': "Pearl Bead Necklace",
        '-1871352890': "Chocolate Dome Filter",
        '-165365981': "Tan Dome Filter",
        '-21589324': "Nagasaki White and Red Hoodie",
        '-1241874115': "Nagasaki Black Hoodie",
        '-880497583': "Purple Helmets Black Hoodie",
        '-485991592': "Principe Hoodie Black",
        '-1285164597': "Back Crew Emblem",
        '-541352697': "Back Crew Emblem",
        '-2067057901': "Front and Back Crew Emblem",
        '-760163114': "Back Crew Emblem",
        '-199230222': "Back Crew Emblem",
        '-501907046': "Back Crew Emblem",
        '-474382985': "Back Crew Emblem",
        '-1124822117': "Front and Back Crew Emblem",
        '-713264766': "Front and Back Crew Emblem",
        '-891530896': "Large Crew Emblem",
        '-1068704377': "Back Crew Emblem",
        '-1461206084': "Back Crew Emblem",
        '-1159942109': "Back Crew Emblem",
        '-1562978248': "Back Crew Emblem",
        '-432003065': "Back Crew Emblem",
        '-435379724': "Ox Blood Laceup Boots",
        '-664795493': "Chocolate Laceup Boots",
        '-90911996': "Worn Ox Blood Laceup Boots",
        '-1395478655': "Worn Chocolate Laceup Boots",
        '-200158113': "Worn Chocolate Laceup Boots",
        '-1341278215': "Tan Harness Boots",
        '-44417070': "Worn Ox Blood Slack Boots",
        '-385345746': "Worn Chocolate Slack Boots",
        '-1371335980': "Chocolate Slack Boots",
        '-462520538': "Worn Black Slack Boots",
        '-482360544': "Black Calf Boots",
        '-229383864': "Ox Blood Calf Boots",
        '-1005714243': "Tan Calf Boots",
        '-105188373': "Black Calf Boots",
        '-473446395': "Ox Blood Calf Boots",
        '-2085355783': "Tan Harness Boots",
        '-1534443355': "Black Harness Boots",
        '-1054284371': "Loose Swept Back",
        '-1453823309': "Undercut Swept Back",
        '-520312819': "Spiked Mohawk",
        '-341963269': "Layered Mod",
        '-1672011404': "Black Leather Cut",
        '-944900063': "Chocolate Leather Cut",
        '-569290156': "Black Defender Vest",
        '-799885609': "Worn Black Defender Vest",
        '-2104842851': "Beige Puffer Jacket",
        '-1378386894': "Lime Puffer Jacket",
        '-2119499996': "Black Puffer Jacket",
        '-1522809275': "Mustard Puffer Jacket",
        '-1206457349': "Brown Puffer Jacket",
        '-1471001482': "Gray Puffer Jacket",
        '-1144360090': "Hot Pink Puffer Jacket",
        '-1929341485': "Olive Puffer Jacket",
        '-1533371464': "Gray Leather Hoodie",
        '-1569601477': "Vintage Denim Biker",
        '-735499351': "Indigo Denim Biker",
        '-2123463115': "Washed Denim Biker",
        '-1349164414': "Charcoal Denim Biker",
        '-862876177': "Charcoal Denim Cut",
        '-1631412340': "Black Torn Sleeveless Crop",
        '-1356677044': "Gray Torn Sleeveless Crop",
        '-513694519': "Wine Torn Sleeveless Crop",
        '-2137169082': "Cream Torn Sleeveless Crop",
        '-1541330355': "Camo Torn Sleeveless Crop",
        '-1540209484': "Black Torn Tee",
        '-813458602': "Gray Torn Tee",
        '-2002809457': "Wine Torn Tee",
        '-1310334949': "Cream Torn Tee",
        '-76156098': "Mocha Torn Tee",
        '-433141584': "Camo Torn Tee",
        '-610906868': "Black Torn Short Crop",
        '-983162712': "Gray Torn Short Crop",
        '-2042140903': "Indigo Tied Shirt",
        '-865406129': "Washed Black Tied Shirt",
        '-1037771069': "Wine Checked Tied Shirt",
        '-1460786090': "Charcoal Checked Tied Shirt",
        '-1632692264': "Blue Checked Tied Shirt",
        '-1883561755': "Leather Halter Vest",
        '-619724710': "Black Darted Vest",
        '-917070616': "Worn Black Darted Vest",
        '-2037529217': "Vintage Patched Denim Biker",
        '-502530950': "Washed Patched Denim Biker",
        '-741711881': "Charcoal Patched Denim Biker",
        '-1250792305': "Vintage Patched Denim Cut",
        '-27951528': "Charcoal Patched Denim Cut",
        '-1427990851': "Worn Black Patched Classic",
        '-1713376088': "Ox Blood Patched Classic",
        '-1880235265': "Worn Black Patched Cut",
        '-2140126204': "Ox Blood Patched Cut",
        '-1288263280': "Chocolate Patched Cut",
        '-672206080': "Black Patched Cut",
        '-1658359938': "Patched Darted Vest",
        '-762951946': "Digital Sports Cut",
        '-1472761255': "Black Sports Cut",
        '-1207823890': "Camo Sports Cut",
        '-487397425': "Green Sports Cut",
        '-256408744': "Yellow Sports Cut",
        '-2088979470': "Brown Flat Front Cut",
        '-997000503': "Urban Closed Parka",
        '-139552932': "Forest Open Parka",
        '-251511811': "Worn Black Classic Biker",
        '-1952419521': "Black Classic Biker",
        '-519512439': "Worn Black Biker Cut",
        '-1738486478': "Ox Blood Biker Cut",
        '-1035460344': "Chocolate Biker Cut",
        '-2136869117': "Stitched Leather Baseball Shirt",
        '-200485711': "Green Sports Biker",
        '-834303709': "Yellow Sports Biker",
        '-1848977110': "Black Blouson Jacket",
        '-1189402674': "Ox Blood Blouson Jacket",
        '-1419441054': "Chocolate Blouson Jacket",
        '-595792239': "Worn Black Blouson Jacket",
        '-892187844': "Worn Ox Blood Blouson Jacket",
        '-300641860': "Worn Chocolate Blouson Jacket",
        '-476575076': "Vintage Ribbed",
        '-1766005850': "Dirty Wash Roadworn",
        '-303951377': "Vintage Roadworn",
        '-76862207': "Hard Washed Roadworn",
        '-228075959': "Mocha Plain",
        '-853701707': "Red Plain",
        '-860934656': "Red Quilted",
        '-1868288754': "Mocha Ribbed",
        '-1717878924': "Red Ribbed",
        '-1870990021': "Slate Denims and Stockings",
        '-47727775': "Brown Print T-Shirt",
        '-1735921109': "Pink SN PRB T-Shirt",
        '-1427597588': "White SN Stripe T-Shirt",
        '-1350885355': "Color Geo PRB T-Shirt",
        '-1900040548': "Pegasus T-Shirt",
        '-218748314': "Color Geo T-Shirt",
        '-1889049782': "Beige T-Shirt",
        '-1769390565': "Classic Perseus T-Shirt",
        '-2109270633': "Shield & Sword T-Shirt",
        '-1436752446': "Full Shield T-Shirt",
        '-1742519985': "Brown Full Print T-Shirt",
        '-834396750': "Khaki T-Shirt",
        '-1233030754': "White Rolled Tee",
        '-55283840': "White Rolled Tee",
        '-781412111': "Black Rolled Tee",
        '-542984867': "Gray Rolled Tee",
        '-319566829': "Black Rolled Tee",
        '-545701327': "White Rolled Tee",
        '-85886719': "Black Rolled Tee",
        '-928836475': "Gray Rolled Tee",
        '-2133916430': "Navy Blazer Shirt",
        '-755652290': "Red Blazer Shirt",
        '-1326530198': "Cream with White Shirt",
        '-1557125651': "Cream with Black Shirt",
        '-1582469378': "Cyan with Red Shirt",
        '-1949351102': "Black with White Shirt",
        '-2106871685': "Black with Black Shirt",
        '-877409213': "White with White Shirt",
        '-637966130': "White with Black Shirt",
        '-266682383': "Red with White Shirt",
        '-44213642': "Red with Black Shirt",
        '-163094609': "Cream with White Turtle",
        '-946977524': "Navy with Navy Turtle",
        '-252241955': "Cyan with Black Turtle",
        '-1509621254': "Black with White Turtle",
        '-2080539875': "Cream with Navy Turtle",
        '-414612666': "White with White Turtle",
        '-447512778': "White with Black Turtle",
        '-746726517': "White with Navy Turtle",
        '-2000583511': "Red with Black Turtle",
        '-1141970173': "Red with Navy Turtle",
        '-1769398216': "Navy with White Turtle",
        '-2138686938': "Black SN T-Shirt",
        '-1924308081': "Pink SN PRB T-Shirt",
        '-1210861409': "White SN Stripe T-Shirt",
        '-925476188': "Color Geo PRB T-Shirt",
        '-1807556193': "Pegasus T-Shirt",
        '-424995031': "Brown Geo T-Shirt",
        '-1899567262': "Beige T-Shirt",
        '-58052048': "Angelica T-Shirt",
        '-1281056666': "Brown Full Print T-Shirt",
        '-1001383672': "Black SN T-Shirt",
        '-619690360': "Black SN T-Shirt",
        '-73971901': "Brown Print T-Shirt",
        '-1545070618': "Color Geo PRB T-Shirt",
        '-388570603': "Pegasus T-Shirt",
        '-1890684401': "Beige T-Shirt",
        '-5238841': "Andromeda T-Shirt",
        '-267063135': "Medusa Art T-Shirt",
        '-1450876033': "Full Shield T-Shirt",
        '-1086288135': "Brown Full Print T-Shirt",
        '-395480358': "Khaki T-Shirt",
        '-1646863247': "White Classic",
        '-1063515919': "Black Classic",
        '-49460904': "Gray Classic",
        '-111757256': "Brown Driving Gloves",
        '-51036152': "Black Woolen Gloves",
        '-933144863': "Gray Woolen Gloves",
        '-671105758': "White Cotton Gloves",
        '-1439393512': "Blue Surgical Gloves",
        '-479032429': "White Surgical Gloves",
        '-1795808405': "Black Driving Gloves",
        '-2070904160': "Brown Driving Gloves",
        '-583173670': "Black Leather Gloves",
        '-1097003929': "Black Fingerless Gloves",
        '-2054743492': "Gray Fingerless Gloves",
        '-1021187095': "White Cotton Gloves",
        '-1662421384': "Blue Surgical Gloves",
        '-1935092233': "White Surgical Gloves",
        '-935552076': "Black Leather Gloves",
        '-183008523': "Gray Woolen Gloves",
        '-569574162': "Gray Fingerless Gloves",
        '-2105033798': "Refuse Collector Gloves",
        '-1746944984': "Blue Surgical Gloves",
        '-2103012938': "White Surgical Gloves",
        '-658080624': "Skull Tank",
        '-1498376091': "Two-Tone Striped Tank",
        '-126655146': "Electric Zebra Cropped Tank",
        '-960462351': "Leopard Cropped Tank",
        '-606163923': "Parrot Print Cropped Tank",
        '-1418900665': "Princess RB Cropped Tank",
        '-1075874773': "Softly Softly Cropped Tank",
        '-1895263618': "Neon Leopard Cropped Tank",
        '-1772369894': "The Barfs Racerback",
        '-1484101001': "Princess RB Racerback",
        '-917804055': "Green T-Shirt",
        '-1156067454': "Yellow T-Shirt",
        '-2124751863': "Lilac T-Shirt",
        '-2138704200': "Tabby Cat",
        '-929172578': "Brown Fox",
        '-594605578': "Brown Owl",
        '-1251302209': "Gray Racoon",
        '-614283619': "Chestnut Knee High",
        '-301601821': "Purple Knee High",
        '-1805338466': "Red Accent Knee High",
        '-1498260167': "Coffee Knee High",
        '-1193180773': "Ochre Accent Knee High",
        '-880007440': "Purple Accent Knee High",
        '-297394917': "Beige Folded Boots",
        '-1436314285': "Black Folded Boots",
        '-1691748640': "Coffee Folded Boots",
        '-791682517': "White Folded Boots",
        '-947073115': "Gray Folded Boots",
        '-1906418359': "Blue Folded Boots",
        '-701723290': "Big Bangs Black",
        '-119221546': "Big Bangs Brown",
        '-2033029490': "Braided Top Knot Black",
        '-478584561': "Faded Stars Denim Jacket",
        '-776913537': "Navy Denim Jacket",
        '-1441894854': "Ash Denim Jacket",
        '-220369049': "Leopard Tank",
        '-1926290420': "Two-Tone Striped Tank",
        '-360935337': "White Cropped Tank",
        '-60476376': "Zebra Cropped Tank",
        '-360214423': "Princess RB Cropped Tank",
        '-54250270': "Softly Softly Cropped Tank",
        '-935015452': "Neon Leopard Cropped Tank",
        '-650994700': "Camo Blazer",
        '-874970236': "Yellow Cropped Biker",
        '-166045690': "Cyan Cropped Biker",
        '-1129877217': "Silver Cropped Biker",
        '-1536772956': "Mustard Cropped Biker",
        '-573855891': "Red Cropped Biker",
        '-873200706': "Green Cropped Biker",
        '-223516253': "Blue Floral Babydoll",
        '-461255348': "Yellow Floral Babydoll",
        '-1910562680': "Red Floral Babydoll",
        '-2141682437': "Purple Floral Babydoll",
        '-310817200': "Yellow T-Shirt",
        '-138976564': "Lilac T-Shirt",
        '-905541781': "Grey T-Shirt",
        '-645735675': "Navy Distressed Denim Shorts",
        '-965692191': "Blue Distressed Denim Shorts",
        '-124351407': "Blue Beaded Denim Shorts",
        '-1274212326': "Blue Denim Shorts",
        '-1601214185': "Leopard Denim Shorts",
        '-1855927622': "Snakeskin Denim Shorts",
        '-766341295': "Tropical Sunset Leggings",
        '-528405586': "Princess RB Leggings",
        '-304134550': "Bright Patterned Leggings",
        '-66919759': "Navy Leggings",
        '-377757544': "Yellow Leggings",
        '-539439790': "Dark Brown Leggings",
        '-1914230416': "Leopard Leggings",
        '-1884174848': "Black & White Leather Straps",
        '-1980450170': "Summer Leather Straps",
        '-1635687521': "Pink Check Leather Straps",
        '-1666852516': "Olive Tassel Scarf",
        '-1972587286': "Pink Tassel Scarf",
        '-1072914383': "Teal Tassel Scarf",
        '-410586712': "Black Combat Mask",
        '-650226409': "Gray Combat Mask",
        '-851690221': "Charcoal Combat Mask",
        '-1221914383': "Tan Combat Mask",
        '-1596103594': "Forest Combat Mask",
        '-61075265': "Black Dragon Silk Bomber",
        '-1614585390': "Blue Aquatic Silk Bomber",
        '-1597941373': "Purple Solar Silk Bomber",
        '-1298268868': "Blue Warrior Silk Bomber",
        '-1911475165': "Brown Dragon Silk Bomber",
        '-641283179': "Teal Dragon Silk Bomber",
        '-692299588': "Chocolate JC Jacket",
        '-674026069': "Candy Motocross",
        '-1193832172': "Cherry Motocross",
        '-886884949': "Boost Motocross",
        '-1669539745': "Drive Motocross",
        '-1370260468': "Downhill Motocross",
        '-413962745': "Poison Motocross",
        '-238779663': "Pumped Motocross",
        '-904392139': "Atomic Motocross",
        '-1135708510': "Xtreme Motocross",
        '-1360241698': "Spotty Motocross",
        '-2130051046': "Rays Motocross",
        '-552061886': "Red Satin Jacket",
        '-781313810': "Black Satin Jacket",
        '-115549677': "Grotti Satin Jacket",
        '-1354873257': "Howitzer Satin Jacket",
        '-1654414686': "Imponte Racing Satin Jacket",
        '-1281175772': "Love Fist Satin Jacket",
        '-1578554447': "Malibu Club Satin Jacket",
        '-1036489649': "Rebel Radio Satin Jacket",
        '-823458152': "Vice Squad Satin Jacket",
        '-1064077595': "Stunts Satin Jacket",
        '-1370697128': "Fatal Satin Jacket",
        '-952212844': "Ruiner Racing Jacket",
        '-1466227378': "Pigalle Racing Jacket",
        '-1777958875': "Grotti Racing Jacket",
        '-42217714': "Pfister Racing Jacket",
        '-313757964': "Chocolate JC Logo Jacket",
        '-695320200': "Black JC Logo Jacket",
        '-20016656': "Blue JC Logo Jacket",
        '-2040813529': "Skull Muscle Pants",
        '-930774914': "Hamburgers Muscle Pants",
        '-607639805': "Up-n-Atom Muscle Pants",
        '-1392457355': "Barfs Muscle Pants",
        '-1086689816': "Bubblegum Muscle Pants",
        '-354761432': "Sprunk Muscle Pants",
        '-120025829': "Lazer Force Muscle Pants",
        '-1104275505': "Impotent Rage Muscle Pants",
        '-1426200858': "Racesuit Gloves",
        '-440312728': "Racesuit Gloves",
        '-1331719358': "Racesuit Gloves",
        '-1685493482': "Racesuit Gloves",
        '-930930196': "Racesuit Gloves",
        '-191759863': "Racesuit Gloves",
        '-848026911': "Motocross Gloves",
        '-2005407269': "Motocross Gloves",
        '-2024073556': "Motocross Gloves",
        '-1729807936': "Motocross Gloves",
        '-489271903': "Motocross Gloves",
        '-194154289': "Motocross Gloves",
        '-1385602360': "Motocross Gloves",
        '-1447328347': "Padded Leather Jacket",
        '-595256827': "Cream Trench Coat",
        '-396236277': "Gold Geo Print Sweater",
        '-641250090': "Le Chien Print Sweater",
        '-1189748724': "Brown P Wing Sweater",
        '-1420278639': "Classic SN Print Sweater",
        '-1460420664': "Gold Diamond Sweater",
        '-2040497502': "Color Geo Sweater",
        '-1011212100': "Black Geo Print Sweater",
        '-636859048': "Silver Geo Print Sweater",
        '-891965713': "Hound Print Sweater",
        '-1266711997': "Teal Tweed Sweater",
        '-61271563': "Black SN Print Sweater",
        '-833924167': "Black Skinny Cuts",
        '-1998075661': "Red Skinny Cuts",
        '-1762401013': "Burgundy Skinny Cuts",
        '-615132305': "Gold Loose Link Chain",
        '-1142519901': "Blue Plaid Woolen Scarf",
        '-1460543050': "Green Plaid Woolen Scarf",
        '-1770406714': "Tan Plaid Woolen Scarf",
        '-182257129': "Gray Plaid Woolen Scarf",
        '-520236595': "Black Plaid Woolen Scarf",
        '-775212184': "Peach Plaid Woolen Scarf",
        '-2035167406': "Gold Loose Link Chain",
        '-1348263628': "Platinum Loose Link Chain",
        '-1113053040': "Gold Pretzel Chain",
        '-1563854029': "Gold Heavy Curb Chain",
        '-1842882064': "Platinum Heavy Curb Chain",
        '-1835883597': "Gold Heavy Square Chain",
        '-531542192': "Gold Pretzel Chain",
        '-1232438337': "Platinum Pretzel Chain",
        '-1253277772': "Gold Rope Chain",
        '-1765957446': "Gold Curb Chain",
        '-1979152560': "Platinum Curb Chain",
        '-228319930': "Platinum Diamond Curb Chain",
        '-138029524': "Platinum Heavy Curb Chain",
        '-1426131106': "Gold Heavy Square Chain",
        '-1721084875': "Platinum Heavy Square Chain",
        '-1458876793': "Gold Rope Chain",
        '-671994892': "Platinum Rope Chain",
        '-1296539093': "Thick Stripe Hippy Hoodie",
        '-2063956304': "Thin Stripe Hippy Hoodie",
        '-513812': "Chianski Hippy Hoodie",
        '-682546340': "Black Stripe Hippy Hoodie",
        '-1449635861': "Rasta Hippy Hoodie",
        '-267166496': "Gray Chain Hippy Hoodie",
        '-78089366': "Black Chain Hippy Hoodie",
        '-455948729': "Yeti Hippy Hoodie",
        '-5571593': "Sweatbox Hippy Hoodie",
        '-22933672': "Yellow Sneaker Wedges",
        '-634304909': "Gray Sneaker Wedges",
        '-740771390': "Red Sneaker Wedges",
        '-979428017': "Blue Sneaker Wedges",
        '-754862064': "Green Sneaker Wedges",
        '-985129827': "Brown Sneaker Wedges",
        '-914153823': "Black Sneaker Boots",
        '-684148212': "Gray Sneaker Boots",
        '-88768247': "Red Sneaker Boots",
        '-587741810': "Blue Sneaker Boots",
        '-358457117': "Green Sneaker Boots",
        '-1066726283': "Brown Sneaker Boots",
        '-1254538285': "Wave Braids",
        '-1365658503': "Rolled Quiff",
        '-1604127232': "White Rolled Tee",
        '-2119812985': "Gray Rolled Tee",
        '-1611219517': "White Rolled Tee",
        '-1068344645': "Navy Work Shirt",
        '-1830259824': "White Bold Open Check",
        '-2002886916': "Red Bold Open Check",
        '-1081193253': "Mustard Bold Open Check",
        '-311023458': "Purple Bold Open Check",
        '-1215224988': "Purple Cross Open Check",
        '-244967667': "Tan Cross Open Check",
        '-24596142': "Purple Stripe Open Check",
        '-1763775005': "Blue Cross Check",
        '-2069608082': "Brown Cross Check",
        '-1913561205': "Mustard Stripe Check",
        '-1206668321': "White Bold Check",
        '-1465641728': "Red Bold Check",
        '-648612251': "Green Bold Check",
        '-1003303907': "Black Bold Check",
        '-287760023': "Mustard Bold Check",
        '-562069322': "Purple Bold Check",
        '-539459627': "Tan Cross Check",
        '-845554856': "Brown Stripe Check",
        '-1151420702': "Blue Stripe Check",
        '-1432545953': "Purple Stripe Check",
        '-1511547668': "Tan Chore Coat",
        '-724621933': "White Frill Shirt",
        '-273884338': "Red Frill Shirt",
        '-974987675': "Black Football Shirt",
        '-274648607': "White Football Shirt",
        '-499804406': "Gray Football Shirt",
        '-1643991650': "Black High Waisted",
        '-1949497037': "White High Waisted",
        '-1204799575': "Gray Rolled Tee",
        '-426771748': "Black Rolled Tee",
        '-1194516649': "Gray Rolled Tee",
        '-47053364': "Gray Rolled Tee",
        '-2140610080': "Gray Rolled Tee",
        '-12331095': "White Rolled Tee",
        '-674634193': "White Rolled Tee",
        '-1694547103': "Black Suspenders",
        '-1351586749': "White Suspenders",
        '-1793640559': "Red Suspenders",
        '-1135634646': "Platinum Rim Necklace",
        '-299346959': "Gold Alloy Necklace",
        '-538265738': "Platinum Alloy Necklace",
        '-1196530583': "Loose Tied",
        '-11455216': "Pixie",
        '-1209867165': "Shaved Bangs",
        '-280963593': "Wavy Bob",
        '-1799420756': "Messy Bun Chestnut",
        '-183005522': "Big Bangs Chestnut",
        '-43404913': "Braided Top Knot Chestnut",
        '-1999787805': "Zig Zag Cornrows",
        '-376063587': "Ponytail",
        '-1731161531': "Bandana and Braid",
        '-1746148370': "Skinbyrd",
        '-2020584438': "Bob",
        '-806150438': "French Twist",
        '-1075423680': "Long Bob",
        '-711768724': "Cluckin' Bell Mask",
        '-674658148': "White & Blue Optics Headset",
        '-391370143': "Purple & Black Optics Headset",
        '-92221942': "Red & Black Optics Headset",
        '-1670966824': "Green & Yellow Optics Headset",
        '-427415697': "Black Optics Headset",
        '-2038044812': "Gray & Red Optics Headset",
        '-373288539': "Light Brown Death Bird",
        '-86395944': "White Death Bird",
        '-1293705144': "Black & White Death Bird",
        '-106484270': "Ash Death Bird",
        '-488243120': "Brown & White Death Bird",
        '-1934634015': "Brown & Yellow Death Bird",
        '-514391873': "Splinter Death Bird",
        '-1111658975': "Green Stalker",
        '-1947235706': "Brown Stalker",
        '-1055239732': "Orange Raider",
        '-1490674212': "Chocolate Brown Raider",
        '-1702454792': "Red & Gray Raider",
        '-868975277': "Orange & Gray Raider",
        '-1871777686': "Brown Raider",
        '-896998239': "Red Raider",
        '-1245005019': "Beige Raider",
        '-2087496013': "Gray Raider",
        '-1372162722': "Beige Marauder",
        '-1558618332': "Black Marauder",
        '-89477680': "Bolt Marauder",
        '-484671820': "Crossbones Marauder",
        '-844147750': "Red Stripe Marauder",
        '-1082542225': "Yellow Marauder",
        '-1715049463': "Shooting Stars Marauder",
        '-606864220': "Paco the Taco Mask",
        '-18901701': "White & Green Light Ups",
        '-102006719': "Black & Pink Light Ups",
        '-559822422': "Pink & Blue Light Ups",
        '-1021832553': "Ash & Pink Light Ups",
        '-186780126': "Red Light Ups",
        '-1483056228': "Blue Print Light Ups",
        '-648462567': "Green Print Light Ups",
        '-1258061440': "White & Pink Light Ups",
        '-2030396583': "Red Camo Light Ups",
        '-1187151906': "Pink Camo Light Ups",
        '-58847108': "Gray & Red Light Ups",
        '-1471649782': "Black & Blue Light Ups",
        '-1709978719': "Black & Green Light Ups",
        '-2120601019': "Red Flaming Skull Boots",
        '-1466374663': "Red Flaming Skull Boots",
        '-1511671803': "Black Skull Harness Boots",
        '-1747510296': "Dark Brown Skull Harness Boots",
        '-1936607896': "Tan Skull Harness Boots",
        '-440369365': "Brown Raider Boots",
        '-733094842': "Dark Brown Raider Boots",
        '-17223264': "Green Raider Boots",
        '-256928499': "Beige Raider Boots",
        '-322008507': "Blue Camo Plated Boots",
        '-14078214': "Green Camo Plated Boots",
        '-1895280974': "Steel Plated Boots",
        '-1798345261': "Light Green Plated Boots",
        '-2084779090': "Beige Plated Boots",
        '-77415684': "Crosshatch Plated Boots",
        '-359130777': "Yellow Plated Boots",
        '-1191640792': "Blue Rocket Splash Tee",
        '-738609371': "Pink Rocket Splash Tee",
        '-978085223': "Black Spacesuit Alien Tee",
        '-1732868': "Pink Spacesuit Alien Tee",
        '-500280434': "Purple Two Moons Tee",
        '-1171487877': "Red Freedom Isn't Free Tee",
        '-5202099': "Black Space Rangers Tee",
        '-307627208': "White Space Rangers Tee",
        '-564109955': "Yellow Space Rangers Tee",
        '-862078472': "Green Space Rangers Tee",
        '-1294760348': "Black Space Ranger Logo Tee",
        '-1592139023': "Green Space Ranger Logo Tee",
        '-1761718598': "White Phases Tee",
        '-2068272593': "Yellow Phases Tee",
        '-570419790': "Black Burger Shot Hockey Shirt",
        '-1650855666': "Black Phat Chips Hockey Shirt",
        '-951597971': "Green Sprunk Hockey Shirt",
        '-364564932': "Red Burger Shot Hockey Shirt",
        '-778732323': "Dark Red Burger Shot Hockey Shirt",
        '-1762097244': "Black Cluckin' Bell Hockey Shirt",
        '-1086728154': "Wigwam Hockey Shirt",
        '-1969492245': "Redwood Hockey Shirt",
        '-1024579281': "Black & White Bones Festive Sweater",
        '-1791799878': "Black & Red Bones Festive Sweater",
        '-678440334': "Merry Sprunkmas Festive Sweater",
        '-371820801': "Ice Cold Sprunk Festive Sweater",
        '-468744959': "Green Cluckin' Festive Sweater",
        '-226745894': "Blue Slaying Festive Sweater",
        '-197417631': "Hail Santa Festive Sweater",
        '-1039154934': "Red Bones Festive Sweater",
        '-1929395648': "Green Mercenary Vest",
        '-46794133': "Black Splinter Mercenary Vest",
        '-237575279': "Black & Red Mercenary Vest",
        '-345964795': "White Mercenary Vest",
        '-733097761': "Blue Mercenary Vest",
        '-972344230': "Red Mercenary Vest",
        '-1328477722': "Yellow Mercenary Vest",
        '-330563365': "Blue Digital Mercenary Vest",
        '-1139338805': "Black Leather Feather Top",
        '-934860245': "Yellow Leather Feather Top",
        '-1280638729': "Green Leather Feather Top",
        '-1418355021': "Benedict Light Beer Hoodie",
        '-1097022207': "Taco Bomb Hoodie",
        '-1770834941': "Fries Hoodie",
        '-1522740842': "Mushrooms Hoodie",
        '-301341905': "Redwood Hoodie",
        '-1998186263': "eCola Infectious Hoodie",
        '-811817387': "Cluckin' Bell Logo Hoodie",
        '-565034048': "Lemons Hoodie",
        '-790369905': "Cluckin' Bell Logo Bomb Hoodie",
        '-1008250990': "Patriot Beer Hoodie",
        '-733515694': "Pisswasser Hoodie",
        '-1934925541': "Donut Hoodie",
        '-1327838275': "eCola Infectious Hoodie",
        '-2055637769': "Tacos Hoodie",
        '-1824307905': "Donut Hoodie",
        '-1932511143': "Lucky Plucker Hoodie",
        '-1423215349': "Logger Light Hoodie",
        '-741574523': "Burger Shot Pattern Sweater",
        '-501705439': "Burger Shot Logo Sweater",
        '-1039275023': "Infectious eCola Sweater",
        '-2002224857': "Magenta Heat Sweater",
        '-1470783080': "Burger Shot Sweater",
        '-263400254': "Bolt Burger Sweater",
        '-1632390767': "Lucky Plucker Sweater",
        '-1266688731': "Lucky Plucker Logo Bomb Sweater",
        '-1191165203': "White Sprunk Sweater",
        '-9646135': "Taco Bomb Chili Sweater",
        '-379020392': "Black Chain Pants",
        '-2042178170': "Gray Chain Pants",
        '-1244961057': "Gray Forest Chain Pants",
        '-1551580590': "Tan Forest Chain Pants",
        '-1760004311': "Tan Chain Pants",
        '-1049965615': "Beige Chain Pants",
        '-1311495004': "Gray Camo Chain Pants",
        '-832444993': "Dark Woodland Chain Paints",
        '-194268718': "Cobble Chain Paints",
        '-1836551832': "Black Chain Shorts",
        '-932020903': "Gray Forest Chain Shorts",
        '-1767663172': "Tan Forest Chain Shorts",
        '-1357567359': "White Chain Shorts",
        '-2056267977': "Brown Chain Shorts",
        '-378167491': "Dark Woodland Chain Shorts",
        '-447081287': "Black Leather Stitch Pants",
        '-217075676': "Black & Red Leather Stitch Pants",
        '-1437819245': "Red Leather Stitch Pants",
        '-66829823': "Blue Leather Stitch Pants",
        '-976792184': "Moss Leather Stitch Pants",
        '-1215743732': "Gray Leather Stitch Pants",
        '-719522765': "Orange Leather Stitch Pants",
        '-146534677': "Brown Raider Pants",
        '-510336115': "Black Raider Pants",
        '-1325291651': "Red Raider Pants",
        '-453767327': "Blue Raider Pants",
        '-1830618626': "Black Spacesuit Alien Tee",
        '-971808670': "Blue Two Moons Tee",
        '-1714124827': "Pink Two Moons Tee",
        '-445865988': "White Space Rangers Tee",
        '-423583068': "Yellow Space Rangers Tee",
        '-970792587': "Green Space Rangers Tee",
        '-1742142078': "Black Space Ranger Logo Tee",
        '-1452333042': "Green Space Ranger Logo Tee",
        '-63222363': "White Phases Tee",
        '-1893239941': "Yellow Phases Tee",
        '-935099306': "Black Spacesuit Alien Tee",
        '-158179085': "Pink Spacesuit Alien Tee",
        '-1397306051': "Purple Two Moons Tee",
        '-620975672': "Blue Two Moons Tee",
        '-1916170397': "Pink Two Moons Tee",
        '-1155831290': "Blue Freedom Isn't Free Tee",
        '-1634225921': "Red Freedom Isn't Free Tee",
        '-899459749': "Black Space Rangers Tee",
        '-1161710056': "White Space Rangers Tee",
        '-1460137339': "Yellow Space Rangers Tee",
        '-1122157877': "Green Space Rangers Tee",
        '-1554905291': "Black Space Ranger Logo Tee",
        '-1776653114': "Green Space Ranger Logo Tee",
        '-2082682805': "White Phases Tee",
        '-761183859': "Blue Two Moons Tee",
        '-940430293': "Pink Two Moons Tee",
        '-1749857362': "Blue Freedom Isn't Free Tee",
        '-1381271650': "Green Freedom Isn't Free Tee",
        '-1655713364': "Black Space Rangers Tee",
        '-1382387135': "White Space Rangers Tee",
        '-334635983': "Black Spacesuit Alien Tee",
        '-1700284058': "Pink Spacesuit Alien Tee",
        '-1997433350': "Purple Two Moons Tee",
        '-1227525695': "Blue Two Moons Tee",
        '-833281856': "Green Freedom Isn't Free Tee",
        '-65045420': "Red Freedom Isn't Free Tee",
        '-1533247949': "Black Space Rangers Tee",
        '-2027273393': "White Space Rangers Tee",
        '-879506399': "Black Space Ranger Logo Tee",
        '-1629556060': "White Phases Tee",
        '-1862248729': "Yellow Phases Tee",
        '-1892881715': "Blue Rocket Splash Tee",
        '-577534043': "Blue Two Moons Tee",
        '-346545362': "Pink Two Moons Tee",
        '-1168621269': "Blue Freedom Isn't Free Tee",
        '-820680027': "Green Freedom Isn't Free Tee",
        '-1531177485': "Red Freedom Isn't Free Tee",
        '-814287533': "Yellow Phases Tee",
        '-1358838449': "Blue Rocket Splash Tee",
        '-1825698392': "Black Spacesuit Alien Tee",
        '-2126452282': "Purple Two Moons Tee",
        '-901186595': "Blue Two Moons Tee",
        '-908164473': "Black Space Rangers Tee",
        '-607115670': "White Space Rangers Tee",
        '-2012152083': "White Phases Tee",
        '-1974467733': "Yellow Phases Tee",
        '-1602815183': "Epsilon Medallion",
        '-336624833': "Brown Bison",
        '-1506874956': "Brown Bull",
        '-45508669': "Black Vulture",
        '-2126126426': "Grey Wolf",
        '-1216327910': "Black Wolf",
        '-613419340': "Red Sparkly Shoes",
        '-304276594': "White Sparkly Shoes",
        '-343349275': "Mullet Brown",
        '-1442460379': "American Flag Top",
        '-384997801': "Amphibian Sea Beast",
        '-1297024609': "Alien Sea Beast",
        '-2073158374': "Reptilian Sea Beast",
        '-1566615172': "Deity Sea Beast",
        '-1643456595': "Bold Abstract Bigness Face",
        '-1402178448': "Pale Abstract Bigness Face",
        '-720583248': "Gray Leopard Bigness Face",
        '-492543777': "Blue Camo Bigness Face",
        '-1233952339': "Gray Camo Bigness Face",
        '-1808655061': "Geo Camo Bigness Face",
        '-760881369': "Striped Dino",
        '-1524988907': "Gray Dino",
        '-1268571482': "Tropical Dino",
        '-290056373': "Danger Dino",
        '-1384149858': "Red Oni",
        '-1675236885': "Blue Oni",
        '-831205752': "White Oni",
        '-1136711139': "Black Oni",
        '-659299578': "Green Oni",
        '-1321880364': "Blue Clown",
        '-1930957767': "Orange Clown",
        '-634583354': "Neon Clown",
        '-1006773660': "Franken Clown",
        '-742950441': "Sinister Clown",
        '-1828493157': "Silverback Crazed Ape",
        '-1977206692': "Black Horse",
        '-1521848668': "Brown Horse",
        '-1828926967': "Pinto Horse",
        '-1082902180': "Unicorn",
        '-884613032': "Red Ornate Skull",
        '-1114356491': "Silver Ornate Skull",
        '-1346754243': "White Ornate Skull",
        '-1578398304': "Black Ornate Skull",
        '-551066767': "Moe Pug",
        '-1334082022': "Black Pug",
        '-1080941497': "Gray Pug",
        '-1512705841': "Josephine Pug",
        '-521200785': "Back Crew Emblem",
        '-1417486585': "Peach Plain Hi Tops",
        '-1810583389': "Purple Plain Hi Tops",
        '-79226060': "Pink Plain Hi Tops",
        '-2121495661': "Blue Plain Hi Tops",
        '-1196066332': "Bronze Plain Hi Tops",
        '-1442259829': "Pearl Plain Hi Tops",
        '-852876595': "Copper Plain Hi Tops",
        '-1093237210': "Silver Plain Hi Tops",
        '-242422894': "Green Plain Hi Tops",
        '-480096451': "Cherry Plain Hi Tops",
        '-1381577540': "Grayscale Longline Hoodie",
        '-1151244239': "Chocolate Longline Hoodie",
        '-1466187062': "Olive Longline Hoodie",
        '-182604839': "Blush Longline Hoodie",
        '-363555257': "Tan Longline Hoodie",
        '-679939952': "Lime Longline Hoodie",
        '-46118516': "Black Exsorbeo Glow Sweater",
        '-1303511393': "Black Love Fist Glow Sweater",
        '-35580416': "Green Trees Glow Sweater",
        '-266358965': "Abominable Glow Sweater",
        '-773819703': "Snowman Glow Sweater",
        '-113589783': "Red Reindeer Glow Sweater",
        '-367189074': "Naughty! Glow Sweater",
        '-592508718': "Naughty! Knit Glow Sweater",
        '-1546611375': "Gray Exsorbeo Festive Sweater",
        '-766676406': "Black Exsorbeo Festive Sweater",
        '-1924928472': "Red Love Fist Festive Sweater",
        '-1165998428': "Black Love Fist Festive Sweater",
        '-1463835869': "Red Trees Festive Sweater",
        '-2135108918': "Red Cats Festive Sweater",
        '-1884065609': "Green Cats Festive Sweater",
        '-1379817165': "Snowman Festive Sweater",
        '-1986535204': "Red Reindeer Festive Sweater",
        '-582089674': "Noel Glow Sweater",
        '-349659165': "Festive Glow Sweater",
        '-1764266711': "Blue Trees Wool Sweater",
        '-1584299363': "Saucy Reindeer Wool Sweater",
        '-28424406': "Woodland Camo Bigness Hoodie",
        '-267375954': "Off-White Bigness Hoodie",
        '-503869827': "Red Camo Bigness Hoodie",
        '-641204710': "Blacklight Camo Bigness Hoodie",
        '-980101708': "Black Bigness Brand Hoodie",
        '-1222985536': "Orange Sand Castle Hoodie",
        '-1460659093': "Gray Güffy Hoodie",
        '-508490240': "Patchwork Güffy Hoodie",
        '-257381393': "White Squash Hoodie",
        '-27343013': "Red Squash Hoodie",
        '-1907262958': "Chocolate Blagueurs Hoodie",
        '-985655055': "Magenta Güffy Hoodie",
        '-688079766': "Bold Abstract Bigness Hoodie",
        '-533075445': "Black Sleeveless Hoodie",
        '-705243771': "Charcoal Sleeveless Hoodie",
        '-1397030046': "Green Sleeveless Hoodie",
        '-1193629940': "Orange Squash Hoodie",
        '-2045412000': "Woodland Camo Bigness Hoodie",
        '-2016902970': "Off-White Bigness Hoodie",
        '-1774215864': "Blacklight Camo Bigness Hoodie",
        '-1056967992': "Gray Güffy Hoodie",
        '-551080166': "Patchwork Güffy Hoodie",
        '-1533724173': "White Squash Hoodie",
        '-1295559081': "Red Squash Hoodie",
        '-498107915': "Black Blagueurs Hoodie",
        '-1828316079': "Beige Manor Hoodie",
        '-1654902531': "Black Manor Hoodie",
        '-1355492178': "White Manor Hoodie",
        '-1484848043': "Lime Blagueurs Hoodie",
        '-1569326541': "Primary Squash Hoodie",
        '-1840424478': "White Güffy Hoodie",
        '-640980771': "Magenta Güffy Hoodie",
        '-1072482963': "Bold Abstract Bigness Hoodie",
        '-1954373489': "Grayscale Longline Hoodie",
        '-1257278548': "Chocolate Longline Hoodie",
        '-1438491118': "Olive Longline Hoodie",
        '-1982622375': "Gray Longine Hoodie",
        '-1507373568': "White Longline Hoodie",
        '-1805014395': "Red Longline Hoodie",
        '-610551576': "Dark Red Longline Hoodie",
        '-1327209606': "Blush Longline Hoodie",
        '-668782085': "Tan Longline Hoodie",
        '-849273737': "Lime Longline Hoodie",
        '-634132956': "Charcoal Sleeveless Hoodie",
        '-1089949830': "Ash Sleeveless Hoodie",
        '-1481735994': "Green Sleeveless Hoodie",
        '-330383434': "Red Closed Parka",
        '-783819876': "Blue Camo Closed Parka",
        '-837778630': "Brown Closed Parka",
        '-2027358864': "Gray Camo Closed Parka",
        '-1371487329': "Woodland Camo Closed Parka",
        '-1611454716': "Dotwork Closed Parka",
        '-1419377336': "Yellow Güffy Rolled Tee",
        '-1716297249': "OJ Rolled Tee",
        '-504597932': "Blue Sky Rolled Tee",
        '-667590938': "Bright Güffy Rolled Tee",
        '-53794799': "Splat Rolled Tee",
        '-208071251': "Geo Bigness Rolled Tee",
        '-468378891': "Lime Squash Rolled Tee",
        '-170803602': "Leopard Rolled Tee",
        '-1197063144': "GoPostal Rolled Tee",
        '-884119194': "Manor Rolled Tee",
        '-1696888701': "Striped Rolled Tee",
        '-1368248400': "Primary Squash Rolled Tee",
        '-1887112750': "Bright Squash Rolled Tee",
        '-389868566': "Camo Bigness Rolled Tee",
        '-1689499905': "Blue Sky Rolled Tee",
        '-1459232142': "Bright Güffy Rolled Tee",
        '-1080488044': "Splat Rolled Tee",
        '-849630439': "Geo Bigness Rolled Tee",
        '-415788857': "Manor Rolled Tee",
        '-118475720': "Striped Rolled Tee",
        '-1024276402': "Primary Squash Rolled Tee",
        '-691376131': "Bright Squash Rolled Tee",
        '-2102522720': "Blue Camo Open Parka",
        '-104221167': "Gray Camo Open Parka",
        '-402255222': "Woodland Camo Open Parka",
        '-736171332': "Dotwork Open Parka",
        '-1019066109': "Tan Camo Open Parka",
        '-876207282': "Red Sand Castle Sweater",
        '-413879628': "Bold Güffy Sweater",
        '-1641602982': "Minimalist G Güffy Sweater",
        '-261471009': "Sprayed G Güffy Sweater",
        '-1141121681': "Diamond Manor Sweater",
        '-853180478': "Cyan Manor Sweater",
        '-1693672559': "Magenta Manor Sweater",
        '-467119086': "Yellow Sand Castle Sweater",
        '-151291464': "Aqua Camo Sand Castle Sweater",
        '-523186841': "Bold Camo Sand Castle Sweater",
        '-209521973': "Fruit Squash Sweater",
        '-1880249442': "Splat Squash Sweater",
        '-346065761': "Woodland Camo Bigness Puffer",
        '-439653396': "Pink Bigness Puffer",
        '-1983663138': "Magenta Pattern Bigness Puffer",
        '-1387824411': "Geometric Bigness Puffer",
        '-1668523665': "Zebra Bigness Puffer",
        '-1970326135': "Red Güffy Puffer",
        '-608873336': "G Güffy Puffer",
        '-1935198412': "Black Bigness Brand Puffer",
        '-1338704305': "Red Bigness Brand Puffer",
        '-1055167515': "Red Wool Coat",
        '-115314151': "Red Patterned Wool Coat",
        '-759945919': "Moss Patterned Wool Coat",
        '-459192037': "Gray Patterned Wool Coat",
        '-1625016995': "Black Sprayed Güffy Torn Tee",
        '-1399730120': "Skate Güffy Torn Tee",
        '-408241196': "CMYK Manor Torn Tee",
        '-672129953': "Geometric Güffy Torn Tee",
        '-2111311668': "Black Leopard Güffy Torn Tee",
        '-546365083': "Fruit Squash Torn Tee",
        '-1250112127': "Banana Squash Torn Tee",
        '-602858839': "Splat Squash Torn Tee",
        '-1364705324': "Butternut Squash Torn Tee",
        '-903967915': "Neon Manor Torn Tee",
        '-673601845': "White Güffy Torn Tee",
        '-441761170': "Bold Abstract Bigness Torn Tee",
        '-833350696': "White Sand Castle Torn Tee",
        '-2058613172': "Glow Santa Sweater",
        '-1354898897': "Glow Elf Sweater",
        '-1586542958': "Glow Pudding Sweater",
        '-494904602': "Decorated Santa Sweater",
        '-1643279036': "Black Low Crotch Pants",
        '-1971100112': "Blue Camo Low Crotch Pants",
        '-178963498': "Diamond Low Crotch Pants",
        '-509143942': "Hatched Low Crotch Pants",
        '-583883961': "Black Low Crotch Shorts",
        '-805533477': "Blue Camo Low Crotch Shorts",
        '-107947005': "Charcoal Low Crotch Shorts",
        '-1537920623': "Diamond Low Crotch Shorts",
        '-1777167092': "Hatched Low Crotch Shorts",
        '-32661440': "White Leather Low Crotch Shorts",
        '-224033296': "Classic Low Crotch",
        '-2016628672': "Charcoal Faded Low Crotch",
        '-1712696197': "Black Faded Low Crotch",
        '-1158247816': "Black Leather Low Crotch Jeans",
        '-540027862': "Red Leather Low Crotch Jeans",
        '-1912033123': "White Leather Low Crotch Jeans",
        '-93250717': "Banana Squash Leggings",
        '-1701616487': "Woodland Camo Leggings",
        '-2000109308': "Blue & Green Camo Leggings",
        '-947306864': "Gray Tigerstripe Leggings",
        '-1252550099': "Pink Tigerstripe Leggings",
        '-672285644': "Camo Bigness Rolled Tee",
        '-2000947114': "Sand Castle Rolled Tee",
        '-1940314868': "Leopard Rolled Tee",
        '-2077911923': "Manor Rolled Tee",
        '-1367611079': "Striped Rolled Tee",
        '-1827589532': "Bright Squash Rolled Tee",
        '-2044050451': "Camo Bigness Rolled Tee",
        '-864903977': "Yellow Güffy Rolled Tee",
        '-1792725443': "Splat Rolled Tee",
        '-405829854': "Leopard Rolled Tee",
        '-192601971': "GoPostal Rolled Tee",
        '-764158869': "Manor Rolled Tee",
        '-520193664': "Striped Rolled Tee",
        '-1362619116': "Primary Squash Rolled Tee",
        '-1078216965': "Bright Squash Rolled Tee",
        '-1700175778': "Zebra Rolled Tee",
        '-635530329': "Yellow Güffy Rolled Tee",
        '-2036470617': "OJ Rolled Tee",
        '-1558141524': "Bright Güffy Rolled Tee",
        '-1864171215': "Splat Rolled Tee",
        '-1887764903': "Geo Bigness Rolled Tee",
        '-723299119': "Lime Squash Rolled Tee",
        '-2009449600': "Leopard Rolled Tee",
        '-1823944279': "Primary Squash Rolled Tee",
        '-57924562': "Bright Squash Rolled Tee",
        '-289601392': "Red Güffy Rolled Tee",
        '-882985802': "Camo Bigness Rolled Tee",
        '-1727803391': "Zebra Rolled Tee",
        '-1245698649': "OJ Rolled Tee",
        '-1494087669': "Blue Sky Rolled Tee",
        '-649401156': "Bright Güffy Rolled Tee",
        '-1631651879': "Geo Bigness Rolled Tee",
        '-1850942027': "Sand Castle Rolled Tee",
        '-1525487585': "Lime Squash Rolled Tee",
        '-2073090344': "GoPostal Rolled Tee",
        '-584132534': "Primary Squash Rolled Tee",
        '-295863641': "Bright Squash Rolled Tee",
        '-1181609711': "Red Güffy Rolled Tee",
        '-1356399170': "Camo Bigness Rolled Tee",
        '-1149757848': "Zebra Rolled Tee",
        '-881750644': "Geo Bigness Rolled Tee",
        '-77959847': "Sand Castle Rolled Tee",
        '-1920353660': "Lime Squash Rolled Tee",
        '-1612751057': "Leopard Rolled Tee",
        '-290292512': "Striped Rolled Tee",
        '-103574750': "Primary Squash Rolled Tee",
        '-2131331970': "Camo Bigness Rolled Tee",
        '-1208857960': "OJ Rolled Tee",
        '-2038700108': "Blue Sky Rolled Tee",
        '-1646488039': "Splat Rolled Tee",
        '-861310030': "Geo Bigness Rolled Tee",
        '-1039180162': "Sand Castle Rolled Tee",
        '-345028210': "Leopard Rolled Tee",
        '-1118868153': "Striped Rolled Tee",
        '-1953199662': "Primary Squash Rolled Tee",
        '-657447860': "Bright Squash Rolled Tee",
        '-1492107063': "Red Güffy Rolled Tee",
        '-287098907': "Zebra Rolled Tee",
        '-214531806': "Yellow Güffy Rolled Tee",
        '-766754994': "Bright Güffy Rolled Tee",
        '-1131473964': "Splat Rolled Tee",
        '-333581583': "Geo Bigness Rolled Tee",
        '-565422258': "Sand Castle Rolled Tee",
        '-533849477': "GoPostal Rolled Tee",
        '-971119013': "Manor Rolled Tee",
        '-1814101538': "Striped Rolled Tee",
        '-1219311419': "Bright Squash Rolled Tee",
        '-1898547259': "Red Güffy Rolled Tee",
        '-1604073474': "Camo Bigness Rolled Tee",
        '-1164575646': "Zebra Rolled Tee",
        '-383103264': "Yellow Güffy Rolled Tee",
        '-1770346110': "Sand Castle Rolled Tee",
        '-955673271': "Leopard Rolled Tee",
        '-715705884': "GoPostal Rolled Tee",
        '-207655308': "Manor Rolled Tee",
        '-2118841695': "Striped Rolled Tee",
        '-1068660779': "Red Güffy Rolled Tee",
        '-1818532955': "Camo Bigness Rolled Tee",
        '-333708870': "Yellow Güffy Rolled Tee",
        '-541628171': "Blue Sky Rolled Tee",
        '-704948867': "Bright Güffy Rolled Tee",
        '-988761176': "Splat Rolled Tee",
        '-1185965018': "Geo Bigness Rolled Tee",
        '-1740514809': "Sand Castle Rolled Tee",
        '-610471009': "Manor Rolled Tee",
        '-1325228437': "Striped Rolled Tee",
        '-146232586': "Primary Squash Rolled Tee",
        '-964245133': "Bright Squash Rolled Tee",
        '-1211291530': "Camo Bigness Rolled Tee",
        '-1442345749': "Zebra Rolled Tee",
        '-1240942662': "Yellow Güffy Rolled Tee",
        '-310663517': "Bright Güffy Rolled Tee",
        '-152618642': "Geo Bigness Rolled Tee",
        '-212820100': "GoPostal Rolled Tee",
        '-1952460776': "Red Güffy Rolled Tee",
        '-232063339': "Camo Bigness Rolled Tee",
        '-1075308016': "Zebra Rolled Tee",
        '-641940316': "Yellow Güffy Rolled Tee",
        '-33256145': "Blue Sky Rolled Tee",
        '-829999282': "Lime Squash Rolled Tee",
        '-1760343969': "GoPostal Rolled Tee",
        '-1513790013': "Manor Rolled Tee",
        '-1842004317': "Striped Rolled Tee",
        '-535602586': "Primary Squash Rolled Tee",
        '-1989024277': "Camo Bigness Rolled Tee",
        '-805585991': "OJ Rolled Tee",
        '-1121872379': "Blue Sky Rolled Tee",
        '-397284251': "Bright Güffy Rolled Tee",
        '-694466312': "Splat Rolled Tee",
        '-418846249': "Geo Bigness Rolled Tee",
        '-734870485': "Sand Castle Rolled Tee",
        '-32026828': "Striped Rolled Tee",
        '-401857742': "Primary Squash Rolled Tee",
        '-1232322505': "Bright Squash Rolled Tee",
        '-723747625': "Red Güffy Rolled Tee",
        '-1866149930': "Black Driving Gloves",
        '-127905889': "Brown Leather Gloves",
        '-187478284': "Black Woolen Gloves",
        '-212448586': "White Cotton Gloves",
        '-575494038': "Blue Surgical Gloves",
        '-888700140': "White Surgical Gloves",
        '-68905083': "Brown Leather Gloves",
        '-152236945': "Gray Fingerless Gloves",
        '-1755663855': "White Cotton Gloves",
        '-277654310': "Blue Surgical Gloves",
        '-44896103': "White Surgical Gloves",
        '-1685192020': "Black Driving Gloves",
        '-1363597054': "Brown Driving Gloves",
        '-1603338898': "Contrast Camo Robo",
        '-1917233149': "Cobble Robo",
        '-1545632605': "Peach Camo Robo",
        '-1315626994': "Brushstroke Robo",
        '-930329092': "Flecktarn Robo",
        '-701044399': "Light Woodland Robo",
        '-1857626254': "Orange Striped Robo",
        '-1680542578': "Yellow Robo",
        '-848754668': "Brown Digital Robo",
        '-1939976835': "Zebra Robo",
        '-1702893120': "White Robo",
        '-322517297': "Fall Robo",
        '-1837985236': "Dark Woodland Robo",
        '-1457537146': "Crosshatch Robo",
        '-555373811': "Gray Woodland Robo",
        '-1010076451': "Aqua Camo Robo",
        '-2084388819': "Green Leaves Face Bandana",
        '-1586103405': "Blue Leaves Face Bandana",
        '-337571460': "Painted Face Bandana",
        '-502493569': "Blue Blagueurs Face Bandana",
        '-316824415': "Red Blagueurs Face Bandana",
        '-696242626': "Contrast Camo Mandible",
        '-995521903': "Cobble Mandible",
        '-129666616': "Brushstroke Mandible",
        '-573489960': "Flecktarn Mandible",
        '-817848393': "Light Woodland Mandible",
        '-186291456': "Blue Striped Mandible",
        '-1946445522': "Moss Striped Mandible",
        '-1603255785': "Yellow Mandible",
        '-372461916': "Brown Digital Mandible",
        '-1922271775': "Fall Mandible",
        '-1743451334': "Aqua Camo Mandible",
        '-1504565324': "Splinter Mandible",
        '-189114780': "Multicolor Leaves Tight Ski",
        '-1182893590': "SA Republic Tight Ski",
        '-719900753': "Bold Abstract Tight Ski",
        '-1522741241': "Camo Bigness Tight Ski",
        '-649748613': "Tropical Xero Tight Ski",
        '-412468284': "Red Stripe Tight Ski",
        '-1264462288': "Gray Bigness Tight Ski",
        '-1871737396': "Orange & Red Tight Ski",
        '-1640879791': "Vibrant Tight Ski",
        '-1264488304': "Dark Woodland Loose",
        '-1436001250': "Orange Pattern Loose",
        '-1726039669': "Red Pattern Loose",
        '-307436890': "Blue Pattern Loose",
        '-479343064': "Splinter Loose",
        '-768070723': "Purple Pattern Loose",
        '-611074440': "Jolly Roger Loose",
        '-891151083': "Peach Camo Loose",
        '-1235422545': "Flecktarn Loose",
        '-1486465854': "Weapon Pattern Loose",
        '-746564562': "Fall Loose",
        '-105652829': "Weapon Pattern Wrapped",
        '-1961557917': "Blue Pattern Wrapped",
        '-698476808': "Gray Woodland Wrapped",
        '-1042190853': "Orange Pattern Wrapped",
        '-1289924493': "Peach Camo Wrapped",
        '-2077527164': "Flecktarn Wrapped",
        '-772927760': "Purple Pattern Wrapped",
        '-579495172': "Brown Digital Wrapped",
        '-256982674': "Red Pattern Wrapped",
        '-1182477541': "Jolly Roger Wrapped",
        '-876447850': "Peach Digital Wrapped",
        '-1812461566': "Fall Wrapped",
        '-1168845993': "Teal Snood",
        '-2018955337': "Red Pattern Snood",
        '-1788490960': "Weapon Pattern Snood",
        '-1520145619': "Peach Camo Snood",
        '-1194323428': "Brushstroke Snood",
        '-1401276510': "Green Snood",
        '-1169943080': "Flecktarn Snood",
        '-939347627': "Jolly Roger Snood",
        '-574121412': "Yellow Snood",
        '-804913479': "Turquoise Snood",
        '-1178938833': "Fall Snood",
        '-245714181': "Bright Stripe Knit",
        '-400628071': "Aqua Camo Knit",
        '-1849607717': "Primary Stripe Knit",
        '-1531846724': "Black & Red Knit",
        '-1377570272': "Green Stripe Knit",
        '-861884419': "Tiger Knit",
        '-1243970959': "Leopard Knit",
        '-631813270': "Stars & Stripes Knit",
        '-759466543': "Green & Beige Knit",
        '-1740683793': "Green Luchador Knit",
        '-533262156': "Sunrise Knit",
        '-262557427': "Brown Digital Knit",
        '-1417439587': "Black Bigness T-Shirt",
        '-1780323493': "Red Bigness T-Shirt",
        '-258334499': "Stars & Stripes T-Shirt",
        '-498367424': "Black Stars & Stripes T-Shirt",
        '-422671330': "Green Pattern T-Shirt",
        '-564396977': "Magenta Leopard T-Shirt",
        '-314533352': "Navy Painted T-Shirt",
        '-1704260331': "Beige Stripe Scruffy",
        '-427973319': "Rasta Stripe Scruffy",
        '-121583169': "Triplet Stripe Scruffy",
        '-714276072': "Magenta Leopard Scruffy",
        '-1155704048': "Charcoal Scruffy",
        '-396034184': "Gray Woodland Scruffy",
        '-773991830': "Pretty Scruffy",
        '-120479667': "Dark Neon Scruffy",
        '-941919092': "Chocolate Scruffy",
        '-1956296275': "Classic Moc Toe Boots",
        '-1656099466': "Black Moc Toe Boots",
        '-1262642079': "Charcoal Moc Toe Boots",
        '-1216634403': "Chocolate Moc Toe Boots",
        '-764782662': "Tan Moc Toe Boots",
        '-493783032': "Rust Moc Toe Boots",
        '-362510418': "Russet Moc Toe Boots",
        '-2144502102': "Tan Moc Toe Boots",
        '-1786291494': "Green Closed Field",
        '-1488585129': "Sand Closed Field",
        '-2116013172': "Blue Closed Field",
        '-1251754147': "Green Open Field",
        '-308957260': "Blue Open Field",
        '-600634129': "Black Open Field",
        '-1876986679': "Charcoal Open Field",
        '-1083747496': "Dark Woodland Open Field",
        '-1191650256': "Black Shortsleeve",
        '-953124705': "Charcoal Shortsleeve",
        '-1252297708': "Blue Plaid Shortsleeve",
        '-1860424810': "Blue Gingham Shortsleeve",
        '-2099802355': "Red Patterned Shortsleeve",
        '-1326527488': "Gray Shortsleeve",
        '-219324737': "Brown Patterned Shortsleeve",
        '-2138736147': "Blue Dotted Shortsleeve",
        '-1079744149': "Ash Shortsleeve",
        '-1870820578': "White Shortsleeve",
        '-1691967376': "Skate Güffy Shortsleeve",
        '-322190379': "Red Güffy Shortsleeve",
        '-623009799': "Multicolor Leaves Shortsleeve",
        '-393528492': "Green Leaves Shortsleeve",
        '-845697578': "Superstroika Dark",
        '-1321339613': "Superstroika Light",
        '-1429676180': "LS Jardineros Dark",
        '-1216972601': "Liberty Cocks Dark",
        '-1575236086': "Red Mist XI Light",
        '-1797294938': "LS Benders Light Tucked",
        '-1140047105': "Liberty Cocks Dark Tucked",
        '-843782576': "Liberty Cocks Light Tucked",
        '-1603367996': "Red Mist XI Dark Tucked",
        '-1301794889': "Red Mist XI Light Tucked",
        '-1949092552': "Teal Leather Fur Jacket",
        '-2068240632': "Peach Leather Fur Jacket",
        '-1232584465': "LC Beavers Light",
        '-1677738024': "Superstroika Dark",
        '-1982784645': "Superstroika Light",
        '-935730094': "LS Benders Dark",
        '-1700099788': "LS Benders Light",
        '-1385877847': "LS Jardineros Light",
        '-1845331996': "Liberty Cocks Dark",
        '-1656866611': "Superstroika Dark Tucked",
        '-1836768393': "Superstroika Light Tucked",
        '-178534642': "LS Benders Dark Tucked",
        '-416568662': "LS Benders Light Tucked",
        '-1132636850': "LS Jardineros Light Tucked",
        '-894963293': "LS Jardineros Dark Tucked",
        '-1706585885': "Liberty Cocks Dark Tucked",
        '-1340752769': "Liberty Cocks Light Tucked",
        '-1541800416': "Impotent Rage Eye Mask",
        '-185710035': "Jack of Spades",
        '-1535644165': "Ace of Spades",
        '-1850062720': "Ace of Hearts",
        '-855589108': "Ace of Diamonds",
        '-748364916': "Pineapple Mask",
        '-385993145': "Lucky Seven Mask",
        '-2088516682': "King of Clubs",
        '-1790089399': "King of Diamonds",
        '-697524104': "Street Crimes Boxart Tee",
        '-1629380219': "Invade and Persuade Logo Tee",
        '-808516773': "Invade and Persuade Invader Tee",
        '-444780873': "Invade and Persuade Suck Tee",
        '-1156978253': "Street Crimes Bikers Tee",
        '-1397273330': "Street Crimes Hoods Tee",
        '-39227575': "Choose Your Side Tee",
        '-830730001': "Invade and Persuade RON Tee",
        '-1824828823': "Grayscale Retro Sneakers",
        '-1519323436': "Ash Retro Sneakers",
        '-1982054485': "White Pattern Retro Sneakers",
        '-799075670': "Red Retro Sneakers",
        '-568054220': "Two Tone Retro Sneakers",
        '-348796841': "Mono Retro Sneakers",
        '-90183893': "Blue Fade Retro Sneakers",
        '-2071004509': "Mauve Fade Retro Sneakers",
        '-1909667807': "Brown Retro Sneakers",
        '-2046091021': "Grayscale Retro Sneakers",
        '-1098773720': "Ash Retro Sneakers",
        '-851400539': "Gray Pattern Retro Sneakers",
        '-606485033': "White Pattern Retro Sneakers",
        '-1602589508': "Green Retro Sneakers",
        '-164685788': "Red Retro Sneakers",
        '-1015106876': "Blue Fade Retro Sneakers",
        '-2060591000': "Yellow FB Manor Slipper Loafers",
        '-1351076608': "Red FB Slipper Loafers",
        '-1109012005': "Yellow FB Slipper Loafers",
        '-1278308846': "Impotent Rage",
        '-641737380': "Purple Fade SN Parka",
        '-1410825810': "Green Fade SN Parka",
        '-2042604785': "Yellow Vines Parka",
        '-1454532311': "Tan Le Chien Parka",
        '-1352424107': "Black Le Chien Parka",
        '-1842943292': "Red Le Chien Parka",
        '-2021206652': "Cubic Le Chien Parka",
        '-1068251363': "Green Camo Blagueurs Parka",
        '-53173391': "Grayscale SN Parka",
        '-506412018': "Green Blagueurs Parka",
        '-861890130': "Lilac Blagueurs Parka",
        '-1183474512': "Blue SN Parka",
        '-953927667': "Black Baroque Parka",
        '-743222997': "White Baroque Parka",
        '-512201547': "Purple Baroque Parka",
        '-1402375532': "Purple Fade SN Parka",
        '-2091999149': "Purple Vines Parka",
        '-1787280218': "Pink Vines Parka",
        '-131986940': "Tan Le Chien Parka",
        '-571879948': "Gray Blagueurs Parka",
        '-201489985': "Black Baroque Parka",
        '-15591440': "White SC Broker Parka",
        '-54647997': "Snake Leather Fur",
        '-309623586': "Slate Perseus Leather Fur",
        '-1503693185': "Contrast Camo Leather Fur",
        '-1584108307': "Garland Leather Fur",
        '-2110558224': "Orange SN Bigness Hoodie",
        '-1194828519': "Squash Squares Hoodie",
        '-927007482': "Squash 19 Hoodie",
        '-701228712': "Adorned Hoodie",
        '-90217938': "Blagueurs Camo Box Hoodie",
        '-321206619': "Yeti Heat Hoodie",
        '-1328088403': "Black The Diamond Hoodie",
        '-527405312': "SC Broker Hoodie",
        '-1361867897': "Broker Ornate Hoodie",
        '-1137859013': "SC Broker Logo Hoodie",
        '-1975106967': "Blagueurs Gray Box Hoodie",
        '-2022982476': "Purple SN Bigness Hoodie",
        '-1805073967': "Ash The Diamond Hoodie",
        '-741812551': "Adorned Hoodie",
        '-975848749': "Blagueurs Camo Box Hoodie",
        '-1228202818': "Yeti Heat Hoodie",
        '-1735729094': "Gray Yeti LS 19 Hoodie",
        '-2044058284': "Gray The Diamond Hoodie",
        '-307727285': "Blue The Diamond Hoodie",
        '-515292410': "Broker Detail Sweater",
        '-1323514157': "Blue Pulga Sweater",
        '-970690338': "White Pulga Sweater",
        '-1119461598': "Red Pulga Sweater",
        '-212251833': "Yellow Pulga Sweater",
        '-1741712139': "Black Pulga Sweater",
        '-711716931': "SN Lazerforce Sweater",
        '-746084477': "Broker Coin Sweater",
        '-149786984': "SC Broker Sweater",
        '-1643627387': "Gray Blagueurs Waves Sweater",
        '-2007887591': "Black Blagueurs Waves Sweater",
        '-1014626432': "Squash Squares Sweater",
        '-1413031934': "Squash Comic Sweater",
        '-1725320544': "Black LC Diamond Sweater",
        '-1885196447': "Purple Color Jersey",
        '-2026385507': "Mustard FB Manor Jersey",
        '-1188154487': "Sebastian Dix Jersey",
        '-886581380': "Grey Dix Jersey",
        '-1506297893': "Maroon Broker Puffer",
        '-1212491039': "Black Broker Puffer",
        '-387388598': "Gray Yeti Puffer",
        '-922714772': "Teal Broker Puffer",
        '-407291175': "Yellow FB Puffer",
        '-715807428': "Black SC Silk Robe",
        '-395129990': "Gold SC Silk Robe",
        '-1724601089': "White The Diamond Silk Robe",
        '-2087747147': "Black The Diamond Silk Robe",
        '-1254791936': "Stars Fame or Shame Robe",
        '-1321509620': "Black Fame or Shame Robe",
        '-1546127906': "White High Roller Dress",
        '-1316384451': "Navy High Roller Dress",
        '-2030486495': "Blue Floral High Roller Dress",
        '-1766597738': "Green Stripe High Roller Dress",
        '-596678904': "Brown Stripe High Roller Dress",
        '-361954557': "Aqua Fade High Roller Dress",
        '-1069371729': "Cream High Roller Dress",
        '-875575863': "Green High Roller Dress",
        '-1340409985': "Black High Roller Dress",
        '-2089534869': "Queens High Roller Dress",
        '-1638706192': "Sprigs High Roller Dress",
        '-1822605820': "Geo High Roller Dress",
        '-2120050033': "Blue High Roller Dress",
        '-421501687': "White & Red High Roller Dress",
        '-2117625123': "Crimson High Roller Dress",
        '-417897093': "Purple Floral High Roller Dress",
        '-717372984': "Black Floral High Roller Dress",
        '-64488479': "Gray Pocket Jacket",
        '-326083406': "Ash Pocket Jacket",
        '-568137064': "Tan Rose Cocktail Dress",
        '-385811946': "Cyan E Cocktail Dress",
        '-60972845': "Black Fleur Cocktail Dress",
        '-1296822915': "Mauve Fleur Cocktail Dress",
        '-141846749': "Blue Floral Cocktail Dress",
        '-259879069': "Black Rose Cocktail Dress",
        '-1642862739': "White SN Paint Cocktail Dress",
        '-1939454958': "Pink SN Paint Cocktail Dress",
        '-1483605283': "Cyan SN Paint Cocktail Dress",
        '-1725538810': "Mauve Paint Cocktail Dress",
        '-890125924': "Cyan Paint Cocktail Dress",
        '-1782195745': "Purple Baroque Cocktail Dress",
        '-1098975550': "Invade and Persuade Jets Tee",
        '-216712082': "Black Street Crimes Icons Tee",
        '-710302413': "Invade and Persuade Oil Tee",
        '-939750951': "Invade and Persuade Hero Tee",
        '-1861706798': "Street Crimes Color Gangs Tee",
        '-2024335604': "Slate Pocket Jacket",
        '-1782533153': "Gray Pocket Jacket",
        '-503428007': "Ash Pocket Jacket",
        '-261297866': "White Pocket Jacket",
        '-486977973': "Chocolate Pocket Jacket",
        '-249304416': "Latte Pocket Jacket",
        '-1083341004': "Navy Pocket Jacket",
        '-845077605': "Blue Pocket Jacket",
        '-161544583': "Cyan Bigness Waterproof",
        '-2021325454': "Licquorice Waterproof",
        '-1277338078': "Blue Bigness Waterproof",
        '-1112313394': "Black Waterproof",
        '-631845271': "Magenta Bigness Waterproof",
        '-40537099': "Green Bigness Waterproof",
        '-1700123104': "Apricot Bigness Waterproof",
        '-1460352331': "Mauve Bigness Waterproof",
        '-453516373': "Red Bigness Waterproof",
        '-1094707396': "Mustard Bigness Waterproof",
        '-948295504': "Woodland Camo Waterproof",
        '-1952403206': "Contrast Camo Waterproof",
        '-1644145223': "Orange Camo Waterproof",
        '-271910571': "Neon Waterproof",
        '-2139841886': "Gray Camo Waterproof",
        '-762158933': "Black Bigness Waterproof",
        '-793524311': "Lime Waterproof",
        '-1107942866': "Black Güffy Waterproof",
        '-1322776430': "Purple Güffy Waterproof",
        '-1514376773': "Red FB Waterproof",
        '-1222334000': "Magenta Bigness Waterproof",
        '-2038353347': "Green FB Waterproof",
        '-1396408653': "Mauve Bigness Waterproof",
        '-1638205379': "Red Bigness Waterproof",
        '-1868276528': "Mustard Bigness Waterproof",
        '-1010253032': "Woodland Camo Waterproof",
        '-1772951511': "Gray Camo Waterproof",
        '-1584001626': "Black Bigness Bomber",
        '-1410850230': "White Bigness Bomber",
        '-117597112': "Teal SC Broker Bomber",
        '-1362491422': "Black Broker Ornate Bomber",
        '-198110557': "Red Floral Bomber",
        '-1491273604': "White Color Bomber",
        '-1157939080': "Black Broker Coin Bomber",
        '-26241597': "Bigness Rage Bomber",
        '-800494828': "White Broker Coin Bomber",
        '-1621063357': "Red Broker Coin Bomber",
        '-410871418': "Black SC Broker Bomber",
        '-298539286': "White SC Broker Bomber",
        '-591676213': "Black Ancient Large Shirt",
        '-1493872321': "Blue Ancient Large Shirt",
        '-2089285055': "Dice Large Shirt",
        '-1782206756': "Black Chips Large Shirt",
        '-1415069187': "Yellow Sci-Fi Large Shirt",
        '-1992483289': "Yellow Sunset Large Shirt",
        '-1752450364': "Pink Sunset Large Shirt",
        '-229675034': "Blue Prairie Large Shirt",
        '-559888247': "Salmon Prairie Large Shirt",
        '-2073881589': "Brown Prairie Large Shirt",
        '-1288572504': "Pink Prairie Large Shirt",
        '-1983480257': "Purple Painted Large Shirt",
        '-473222593': "Pink Painted Large Shirt",
        '-704801116': "Pink Floral Large Shirt",
        '-1629771679': "Blue Floral Large Shirt",
        '-1305475883': "Tan Le Chien Parka",
        '-1621500119': "Black Le Chien Parka",
        '-1984711715': "Red Le Chien Parka",
        '-71919651': "Green Camo Blagueurs Parka",
        '-1065476091': "Fall Blagueurs Parka",
        '-557491053': "Gray Blagueurs Parka",
        '-267780324': "Ruby Blagueurs Parka",
        '-26960935': "Green Blagueurs Parka",
        '-1694387422': "Blue SN Parka",
        '-1984425841': "Black Baroque Parka",
        '-1482797989': "White Baroque Parka",
        '-2029594620': "Purple Fade SN Parka",
        '-1781992056': "Green Fade SN Parka",
        '-1606539741': "Yellow Vines Parka",
        '-1785687860': "Purple Vines Parka",
        '-1487522729': "Pink Vines Parka",
        '-1174120013': "Tan Le Chien Parka",
        '-877593332': "Black Le Chien Parka",
        '-2136643850': "Red Le Chien Parka",
        '-1423229935': "Green Camo Blagueurs Parka",
        '-937888560': "Orange Camo Blagueurs Parka",
        '-2053843672': "Black Baroque Parka",
        '-1815318121': "White Baroque Parka",
        '-1638234457': "White SC Broker Parka",
        '-1406918086': "Green Vines Parka",
        '-1669423213': "Adorned Knee Shorts",
        '-744387112': "Snake Knee Shorts",
        '-513726121': "White SC Broker Knee Shorts",
        '-962268197': "Purple Painted Knee Shorts",
        '-599495856': "Black Perseus Wide Pants",
        '-1631981512': "Teal Perseus Wide Pants",
        '-1897307800': "Pink Vinewood Wide Pants",
        '-2130655849': "Gray Lazerforce Wide Pants",
        '-1385685403': "Green Sci-Fi Wide Pants",
        '-674139337': "Blue Sci-Fi Wide Pants",
        '-905783398': "Yellow Sci-Fi Wide Pants",
        '-1117704822': "Blue Perseus Wide Pants",
        '-1075428155': "Gray Patterned Wide Pants",
        '-845160392': "Blue Patterned Wide Pants",
        '-1072741093': "Orange Patterned Wide Pants",
        '-833822314': "Pink Patterned Wide Pants",
        '-1400726014': "Black SC Broker Wide Pants",
        '-2113882426': "Blue P Wide Pants",
        '-1482721928': "Black Love T-Shirt",
        '-1724065613': "Red Love T-Shirt",
        '-221826679': "White Love T-Shirt",
        '-1629824083': "Hideous Krampus",
        '-2017251970': "Heinous Krampus",
        '-504710083': "Black Night Vision",
        '-1774836523': "White Night Vision",
        '-663524684': "Green Digital Night Vision",
        '-902443463': "Splinter Night Vision",
        '-1609401869': "Gray Woodland Night Vision",
        '-420477023': "Cobble Night Vision",
        '-1151275222': "Blue Night Vision",
        '-1524710746': "Tan Night Vision",
        '-2108326636': "Aqua Camo Night Vision",
        '-282444444': "Manic Luminous",
        '-790888248': "Manic Electric",
        '-105666407': "Peaceful Neon",
        '-1659277454': "Transcendent Neon",
        '-1956656129': "Tribal Electric",
        '-818129993': "Tribal Luminous",
        '-1014864371': "Manic Neon",
        '-1846978602': "Tribal Neon",
        '-1530692214': "Iwazaru Luminous",
        '-931773201': "Iwazaru Neon",
        '-1250997785': "Amused Electric",
        '-1170713731': "Amused Luminous",
        '-1417234918': "Amused Neon",
        '-1699933081': "Furious Luminous",
        '-1873805395': "Furious Electric",
        '-1082362429': "Black Mono Ballistic",
        '-788284142': "Cranial Ballistic",
        '-1700343719': "Orange & Black Ballistic",
        '-1456577140': "Red Stripe Ballistic",
        '-84342444': "Red Ballistic",
        '-2001754941': "Fall Ballistic",
        '-477184533': "Red Goggled Ballistic",
        '-316451618': "Black Spec Ops",
        '-547866296': "Carbon Spec Ops",
        '-1652700357': "LSPD Spec Ops",
        '-1961974179': "Ornate Skull Spec Ops",
        '-779706971': "Scale Spec Ops",
        '-1507571999': "Tan Digital Spec Ops",
        '-1975480550': "Splinter Spec Ops",
        '-1290608450': "Mono Splinter Spec Ops",
        '-27046100': "Jovial Gingerbread Hockey",
        '-1617573334': "Green Pattern False Face",
        '-1312723327': "Gothic False Face",
        '-688141587': "Opera False Face",
        '-429160804': "Carbon Gas Mask",
        '-914945647': "White Industrial Gas Mask",
        '-1847501435': "Aqua Camo Gas Mask",
        '-1560674378': "Gray Striped Gas Mask",
        '-1741034938': "Peach Camo Gas Mask",
        '-865102797': "Black Respirator",
        '-89034570': "Flecktarn Respirator",
        '-843047327': "Gray Woodland Respirator",
        '-1670071353': "Contrast Camo Respirator",
        '-1984981443': "Viper Respirator",
        '-1210223976': "Crosshatch Respirator",
        '-242950563': "Gray Digital Respirator",
        '-1591624296': "Aqua Camo Respirator",
        '-2061531756': "Splinter Respirator",
        '-1294573311': "Gray Splinter Respirator",
        '-1466217333': "Tiger Striped Respirator",
        '-1401629638': "Green Digital Respirator",
        '-66968432': "Back Crew Emblem",
        '-1715369654': "Back Crew Emblem",
        '-546391983': "Back Crew Emblem",
        '-1338446215': "Back Crew Emblem",
        '-566450316': "Earth Tones Rubberized",
        '-653288166': "Mono Rubberized",
        '-1223702572': "Gray Camo Rubberized",
        '-1521081247': "Blue & Brown Rubberized",
        '-1818459922': "Navy & Brown Rubberized",
        '-10758141': "Blue Rubberized",
        '-241353594': "Orange Rubberized",
        '-604630728': "Red Rubberized",
        '-702741006': "Moss Rubberized",
        '-1186509533': "Chocolate Rubberized",
        '-152905536': "Grayscale Rubberized",
        '-1526778630': "Khaki Rubberized",
        '-1833594777': "Tan Rubberized",
        '-1308242169': "Rust Rubberized",
        '-1646287181': "Woodland Rubberized",
        '-1724670629': "Aqua Camo Rubberized",
        '-949126706': "Cyan Camo Rubberized",
        '-1781398949': "Navy & Brown Rubberized",
        '-244205163': "Houndstooth Rubberized",
        '-147471075': "Blue Rubberized",
        '-2136647722': "Orange Rubberized",
        '-1907428567': "Red Rubberized",
        '-886805293': "Moss Rubberized",
        '-267971694': "Gray & Red Rubberized",
        '-1790183089': "Black & Blue Rubberized",
        '-2019729934': "Chocolate Rubberized",
        '-1135890086': "Mono Trail",
        '-464354969': "Black & Sand Trail",
        '-1358495338': "Slate Trail",
        '-523901677': "Tan Trail",
        '-130411525': "Khaki Trail",
        '-1446873339': "Charcoal Trail",
        '-1839577035': "Red Trail",
        '-987484720': "Orange Trail",
        '-1532924949': "Earth Tones Trail",
        '-1774858476': "Light Blue Trail",
        '-1072160032': "Blue & Brown Trail",
        '-1310357893': "Gray Camo Trail",
        '-182902028': "Gray & Yellow Trail",
        '-1709773575': "Black & Light Brown Trail",
        '-1032405576': "White Trail",
        '-629144484': "Woodland Trail",
        '-917478919': "Slate Trail",
        '-1088860789': "Tan Trail",
        '-1547168023': "Moss Trail",
        '-1853197714': "Khaki Trail",
        '-2009833534': "Gray Trail",
        '-1779565767': "Charcoal Trail",
        '-2088839237': "Blue & Brown Trail",
        '-2034541016': "Aqua Camo Trail",
        '-1997069518': "Gray & Yellow Trail",
        '-1633595770': "Fall Trail",
        '-891555628': "Gray Catsuit Heels",
        '-1440960682': "Dark Brown Catsuit Heels",
        '-134860949': "Green Tactical Blouson",
        '-1283363392': "Cyan Camo Tactical Blouson",
        '-749392537': "Dark Green Tactical Blouson",
        '-464812010': "Grayscale Tactical Blouson",
        '-996895994': "Gray Tactical Blouson",
        '-1649444133': "White Tactical Blouson",
        '-2130951819': "Earth Tones Tactical Blouson",
        '-392869539': "Green Ugly Sweater",
        '-101258208': "Red Ugly Sweater",
        '-1915612200': "Unicorn Ugly Sweater",
        '-1617905835': "Claus Ugly Sweater",
        '-1320691005': "T-Rex Ugly Sweater",
        '-1022525874': "Humbug Ugly Sweater",
        '-599578850': "Black Tactical Sleeveless",
        '-360594533': "Ash Tactical Sleeveless",
        '-87424474': "Dark Blue Tactical Sleeveless",
        '-137823200': "Earth Tones Tactical Sleeveless",
        '-435136337': "Orange Tactical Sleeveless",
        '-751422725': "White & Black Tactical Sleeveless",
        '-1029926456': "Black & White Tactical Sleeveless",
        '-1638708934': "Light Blue Tactical Sleeveless",
        '-998009446': "Khaki Tactical Sleeveless",
        '-958432173': "Brown Tactical Sleeveless",
        '-1432033951': "Gray Tactical Sleeveless",
        '-1732099684': "Cyan Camo Tactical Sleeveless",
        '-844125322': "Dazzle Tactical Sleeveless",
        '-1133377285': "Sand Wool Tactical Sleeveless",
        '-250842577': "Slate Wool Tactical Sleeveless",
        '-540717151': "Gray & Brown Tactical Sleeveless",
        '-718858010': "Light Brown Tactical Sleeveless",
        '-115416875': "Red Piping Tactical Sleeveless",
        '-2040136867': "White Camo Tactical Sleeveless",
        '-270377389': "Black Tactical Midlength",
        '-1525921624': "Mocha Tactical Midlength",
        '-1661496175': "Light Blue Tactical Midlength",
        '-1422577396': "Brown Tactical Midlength",
        '-1041736074': "Dark Blue Tactical Midlength",
        '-979212822': "White Tactical Midlength",
        '-1823178417': "Ash Tactical Midlength",
        '-868444408': "Olive & Brown Tactical Midlength",
        '-738426502': "Fall Tactical Midlength",
        '-1121659957': "White Camo Tactical Midlength",
        '-1293697207': "Charcoal Tactical Midlength",
        '-1599530284': "Brown & Blue Tactical Midlength",
        '-1909450000': "Woodland Tactical Midlength",
        '-1855446688': "Blue Camo Tactical Midlength",
        '-2137227319': "Black & Gray Tactical Midlength",
        '-431846015': "Heavy Strike Vest",
        '-419712771': "Extreme Strike Vest",
        '-1261723782': "Voyeur",
        '-340492444': "Geo Fox",
        '-1928626977': "Geo Gray & White Cat",
        '-462689645': "Red Leather Half Face",
        '-272760521': "Cyan Leather Half Face",
        '-1018779575': "Dark Pink Leather Half Face",
        '-711963428': "Green Leather Half Face",
        '-1466961212': "Peach Leather Half Face",
        '-1157457983': "Purple Leather Half Face",
        '-1661805686': "Terracotta Leather Half Face",
        '-479302': "Gray & White Leather Half Face",
        '-2070992441': "Dusty Blue Leather Half Face",
        '-1588337840': "Putty Leather Half Face",
        '-1759850786': "White Leather Half Face",
        '-363625360': "Worn Red Leather Half Face",
        '-614078827': "Worn Yellow Leather Half Face",
        '-911719654': "Worn Green Leather Half Face",
        '-1228989112': "Black Swirl Leather Half Face",
        '-1524991485': "Red Swirl Leather Half Face",
        '-648572054': "Yellow Visor Respirator",
        '-197670614': "Green Visor Respirator",
        '-1520834287': "Geo Gold Dog",
        '-1668294787': "Geo White Dog",
        '-1966787608': "Geo Brown Dog",
        '-216103775': "Geo Gray Dog",
        '-244108921': "Cerberus",
        '-1666497391': "Smoke Leather with NVG",
        '-1064268705': "Peach Leather with NVG",
        '-772133070': "Purple Leather with NVG",
        '-663025008': "Gray & White Leather with NVG",
        '-363811269': "Worn Red Leather with NVG",
        '-838503003': "Yellow Swirl Leather with NVG",
        '-1724409013': "Grin",
        '-1269149296': "Laugh",
        '-1019678803': "Grimace",
        '-1997997302': "Gasp",
        '-562013712': "Ape",
        '-1427637736': "Grinner",
        '-1616712759': "Fluffy Rabbit",
        '-750293905': "Fleshless",
        '-1796530680': "Black Neck Gaiter",
        '-2117975675': "Purple Neon Camo Neck Gaiter",
        '-1354457959': "Cobble Neck Gaiter",
        '-1370435373': "Light Gray Neck Gaiter",
        '-896661175': "Stars & Stripes Neck Gaiter",
        '-339703162': "Back Crew Emblem",
        '-1030449544': "Dog With Cone Slip-Ons",
        '-256526585': "Yellow Dog With Cone Tee",
        '-1019288383': "Thog Bod Tee",
        '-311477983': "Monkey's Paradise Tee",
        '-1463078950': "Retro Defender of the Faith Tee",
        '-1316077216': "Defender of the Faith Tee",
        '-22357096': "Badlands Revenge II Romance Tee",
        '-560065832': "Space Monkey 3 Tee",
        '-497376160': "Race And Chase Signs Tee",
        '-853837342': "Race And Chase Decor Tee",
        '-1107240019': "Race And Chase Start Tee",
        '-1347010792': 'T-Shirt',
        '-1476418152': "Space Monkey Boss Fights Tee",
        '-1782709995': "Space Monkey Space Crafts Tee",
        '-880907139': "Thog Mighty Sword Tee",
        '-1783365399': "Thog Tee",
        '-1240010651': "Blue Armored Shirt",
        '-1340344354': "Blue Camo Armored Shirt",
        '-204603559': "Contrast Camo Armored Shirt",
        '-2127193586': "Green Digital Armored Shirt",
        '-815647102': "Desert Camo Armored Shirt",
        '-627847963': "Woodland Armored Shirt",
        '-1224735298': "Blue Digital Armored Shirt",
        '-56356603': "Cobble Armored Shirt",
        '-177377515': "Forest Green Armored Shirt",
        '-34142973': "T-Shirt",
        '-1251085326': "T-Shirt",
        '-1519102977': "T-Shirt",
        '-2097803517': "T-Shirt",
        '-361823640': "T-Shirt",
        '-55138569': 'T-Shirt',
        '-406094555': "T-Shirt",
        '-1227154619': "T-Shirt",
        '-2056051369': "Love Professor Score Tee",
        '-1463292928': "Love Professor Hers Tee",
        '-1757001475': "Love Professor Friendzoned Tee",
        '-856935344': "Love Professor Secrets Tee",
        '-624606289': "T-Shirt",
        '-1795246045': "T-Shirt",
        '-2025579346': "T-Shirt",
        '-681699516': "Black Smooth Fitted",
        '-908755921': "Navy Smooth Fitted",
        '-1187652880': "Teal Smooth Fitted",
        '-1637309098': "Red Smooth Fitted",
        '-2096992630': "Polar Smooth Fitted",
        '-2025607653': "Brown Smooth Fitted",
        '-1785378114': "Polar Smooth Fitted",
        '-1880441550': "Ho-Ho-Ho Sweater",
        '-1103125566': "Black Low Level Armor",
        '-427064862': "Black Uniform Closed",
        '-1116065856': "Green Uniform Closed",
        '-933640833': "Beige Uniform Closed",
        '-696032814': "Sage Uniform Closed",
        '-1684050937': "Dark Green Uniform Closed",
        '-648709350': "Yung Ancestor Hoodie",
        '-627862106': "Black Uniform Open",
        '-33596291': "Cream Uniform Open",
        '-946819278': "Sage Short Uniform Closed",
        '-665726796': "White Short Uniform Closed",
        '-369396729': "Light Gray Short Uniform Closed",
        '-55207549': "Gray Short Uniform Closed",
        '-1474458347': "Black Short Uniform Open",
        '-1846714187': "Beige Short Uniform Open",
        '-113430709': "Light Gray Short Uniform Open",
        '-1750084048': "White Dress Shirt Closed",
        '-103468769': "Gray Fitted Vest",
        '-331442702': "Black Fitted Vest",
        '-1506305343': "Sky Check Fitted Vest",
        '-61190419': "Crimson Check Fitted Vest",
        '-1025287168': "Classic Check Fitted Vest",
        '-1734080638': "Beige Check Fitted Vest",
        '-696554904': "Silver Fitted Vest",
        '-926822667': "Blue Fitted Vest",
        '-220519641': "Ash Fitted Vest",
        '-451639398': "Brown Fitted Vest",
        '-1717964634': "Burgundy Fitted Vest",
        '-1112028035': "Correctional Cargo",
        '-962669335': "Black Knee Pad Cargos",
        '-95927681': "Blue Camo Knee Pad Cargos",
        '-1741390263': "Blue Digital Knee Pad Cargos",
        '-883956637': "Cobble Knee Pad Cargos",
        '-1718746912': "Beige Camo Knee Pad Cargos",
        '-735285244': "Dark Gray Knee Pad Cargos",
        '-8763745': "Forest Green Knee Pad Cargos",
        '-650834731': "Black Guarded Cargos",
        '-765867876': "Splinter Guarded Cargos",
        '-616998297': "Contrast Camo Guarded Cargos",
        '-163573652': "Desert Camo Guarded Cargos",
        '-1367885989': "Charcoal Guarded Cargos",
        '-122532913': "Beige Guarded Cargos",
        '-965900206': "Beige Digital Armor",
        '-659280673': "Contrast Camo Armor",
        '-1680887017': "Blue Camo Armor",
        '-301607038': "Desert Camo Armor",
        '-1292508829': "Green Camo Armor",
        '-1030664654': "Black Pocket Vest",
        '-224690706': "Black Reinforced Armor",
        '-2104689229': "White Dress Shirt Open",
        '-1482334429': "Blue Digital Zombie",
        '-2133670757': "Aqua Camo Zombie",
        '-522025795': "Splinter Zombie",
        '-224614351': "Contrast Camo Zombie",
        '-656116655': "Cobble Zombie",
        '-1490710316': "Peach Camo Zombie",
        '-2075571096': "Black Putrefied Zombie",
        '-312828267': "Green Putrefied Zombie",
        '-16282134': "Fall Zombie",
        '-1243350112': "Gray Woodland Zombie",
        '-1294074740': "Blue Digital Tactical Ski",
        '-314566281': "Aqua Camo Tactical Ski",
        '-621939501': "Splinter Tactical Ski",
        '-1752273435': "Peach Camo Tactical Ski",
        '-2059417272': "Brushstroke Tactical Ski",
        '-1025325819': "Flecktarn Tactical Ski",
        '-541720917': "Light Woodland Tactical Ski",
        '-1495331586': "Moss Tactical Ski",
        '-1255560813': "Sand Tactical Ski",
        '-1887357485': "Green Digital Tactical Ski",
        '-1761655509': "Fall Tactical Ski",
        '-1521163818': "Dark Woodland Tactical Ski",
        '-83784028': "Black and Yellow Oni",
        '-746143825': "Stone Possessed Oni",
        '-1072162606': "Gray Oni",
        '-280791256': "Black and Gold Oni",
        '-579742843': "Gray and Orange Oni",
        '-678869336': "Gray and Gold Oni",
        '-1880166434': "Black Painted Oni",
        '-1530783352': "Black Possessed Oni",
        '-1231504075': "Brown Oni",
        '-932650795': "Yellow Oni",
        '-69082767': "Brown Digital Snake Skull",
        '-469020846': "Contrast Camo Snake Skull",
        '-230233143': "Cobble Snake Skull",
        '-999550956': "Brushstroke Snake Skull",
        '-2020993459': "Flecktarn Snake Skull",
        '-1771916290': "Light Woodland Snake Skull",
        '-582958663': "Moss Snake Skull",
        '-110167531': "Sand Snake Skull",
        '-1945009674': "Green Digital Snake Skull",
        '-514996681': "Red Snake Skull",
        '-267426886': "White Snake Skull",
        '-547477398': "Gray Digital Snake Skull",
        '-240792327': "Peach Digital Snake Skull",
        '-749137824': "Dark Woodland Snake Skull",
        '-1425515693': "Brown Digital Vent",
        '-1363146452': "Aqua Camo Vent",
        '-902447081': "Contrast Camo Vent",
        '-207285519': "Flecktarn Vent",
        '-1060065975': "Light Woodland Vent",
        '-595237710': "Sand Vent",
        '-962683254': "Weathered Skull",
        '-807547647': "Tan Leather Skull",
        '-1827122293': "Chocolate Leather Skull",
        '-983877636': "Orange Open-Eyed Skull",
        '-8278968': "Tattooed Skull",
        '-363298314': "Blue Painted Skull",
        '-716817447': "Aged Skull",
        '-34002345': "Orange Swirl-Eyed Skull",
        '-1560291507': "Venom Skull",
        '-1313704782': "Fresh Skull",
        '-39711596': "Fleshy Skull",
        '-636009093': "Sand Skull",
        '-390339900': "Inked Skull",
        '-1403686883': "Back Crew Emblem",
        '-1802539904': "Black Shrewsbury Hoodie",
        '-1196968784': "White Vom Feuer Hoodie",
        '-1502212019': "Black Vom Feuer Hoodie",
        '-584614481': "White Coil Hoodie",
        '-890709710': "Black Coil Hoodie",
        '-581140963': "Black Ammu-Nation Hoodie",
        '-870458464': "White Ammu-Nation Hoodie",
        '-864476154': "Splinter Cross Trainers",
        '-1089992412': "Contrast Camo Cross Trainers",
        '-248058495': "Cobble Cross Trainers",
        '-2083253567': "Moss Cross Trainers",
        '-1247414684': "Sand Cross Trainers",
        '-1660095382': "Green Digital Cross Trainers",
        '-82968489': "Slate Cross Trainers",
        '-1604039931': "Green Cross Trainers",
        '-1965535231': "Gray Digital Cross Trainers",
        '-70602264': "Moss Digital Cross Trainers",
        '-236872170': "Gray Woodland Cross Trainers",
        '-626624329': "Black Tech Boots",
        '-1065991081': "Beige Tech Boots",
        '-953724403': "Brown Tech Boots",
        '-571310173': "Moss Tech Boots",
        '-472708252': "Tawny Tech Boots",
        '-125356852': "Venom Tech Boots",
        '-1801491202': "Desert Tech Boots",
        '-2051163554': "Beige Tech Boots",
        '-1691196089': "Moss Tech Boots",
        '-1746510161': "Tawny Tech Boots",
        '-2117315758': "Charcoal Tactical Boots",
        '-1758888436': "Walnut Tactical Boots",
        '-1519379815': "Silver Tactical Boots",
        '-776244429': "Olive Tactical Boots",
        '-1361297712': "Desert Tactical Boots",
        '-1340128938': "Sage Tactical Boots",
        '-1686759540': "Silver Tactical Boots",
        '-1989643415': "Olive Tactical Boots",
        '-1932218876': "Aqua Camo Sleeveless",
        '-527018622': "Splinter Sleeveless",
        '-1476795298': "Light Woodland Sleeveless",
        '-1939002043': "Sand Sleeveless",
        '-753103051': "Green Digital Sleeveless",
        '-514970728': "Gray Digital Sleeveless",
        '-292993522': "Peach Digital Sleeveless",
        '-63708829': "Fall Sleeveless",
        '-1703600669': "Dark Woodland Sleeveless",
        '-1484081138': "Crosshatch Sleeveless",
        '-1244670824': "Moss Digital Sleeveless",
        '-954304715': "Gray Woodland Sleeveless",
        '-279147010': "Blue Digital Sleeveless",
        '-1318710766': "Brown Digital Sleeveless",
        '-249898140': "Aqua Camo Sleeveless",
        '-204676920': "Splinter Sleeveless",
        '-2054257587': "Contrast Camo Sleeveless",
        '-830073285': "Flecktarn Sleeveless",
        '-1012091233': "Green Digital Sleeveless",
        '-26072023': "Fall Sleeveless",
        '-48559904': "Aqua Camo Denim Cut",
        '-285774699': "Splinter Denim Cut",
        '-2094426885': "Moss Denim Cut",
        '-1852936044': "Green Digital Denim Cut",
        '-151930063': "Dark Woodland Denim Cut",
        '-1126873355': "Crosshatch Denim Cut",
        '-910761800': "Moss Digital Denim Cut",
        '-1620079574': "Gray Woodland Denim Cut",
        '-780400403': "Blue Digital Sleeveless Crop",
        '-704090026': "Aqua Camo Sleeveless Crop",
        '-1010152486': "Splinter Sleeveless Crop",
        '-205149232': "Cobble Sleeveless Crop",
        '-443281555': "Peach Camo Sleeveless Crop",
        '-167652872': "Green Digital Sleeveless Crop",
        '-1461471299': "Gray Digital Sleeveless Crop",
        '-1710319085': "Peach Digital Sleeveless Crop",
        '-925304921': "Fall Sleeveless Crop",
        '-1173628403': "Dark Woodland Sleeveless Crop",
        '-1238779496': "Brown Digital Torn Tee",
        '-1755788693': "Contrast Camo Torn Tee",
        '-1928153633': "Brushstroke Torn Tee",
        '-619327004': "Flecktarn Torn Tee",
        '-1453822358': "Purple Camo Torn Tee",
        '-1491592331': "Green Digital Torn Tee",
        '-775982909': "Gray Digital Torn Tee",
        '-1943607897': "Fall Torn Tee",
        '-1232422290': "Crosshatch Torn Tee",
        '-542423371': "Blue Digital Short Crop",
        '-1258263650': "Aqua Camo Short Crop",
        '-1453566890': "Splinter Short Crop",
        '-446837664': "Flecktarn Short Crop",
        '-719770665': "Purple Camo Short Crop",
        '-265166328': "Sand Short Crop",
        '-1220839978': "Gray Digital Short Crop",
        '-1527393973': "Peach Digital Short Crop",
        '-1677017211': "Gray Woodland Short Crop",
        '-169062677': "Blue Digital T-Shirt",
        '-326722018': "Contrast Camo T-Shirt",
        '-1217317900': "Brushstroke T-Shirt",
        '-237688645': "Sand T-Shirt",
        '-2078774471': "Dark Woodland T-Shirt",
        '-160398090': "Aqua Camo Rolled Tee",
        '-1710568400': "Splinter Rolled Tee",
        '-2009782139': "Contrast Camo Rolled Tee",
        '-1389301124': "Peach Camo Rolled Tee",
        '-716586323': "Brushstroke Rolled Tee",
        '-997777112': "Flecktarn Rolled Tee",
        '-395515661': "Moss Rolled Tee",
        '-816339956': "Gray Digital Rolled Tee",
        '-886989920': "Peach Digital Rolled Tee",
        '-51609803': "Fall Rolled Tee",
        '-424324409': "Dark Woodland Rolled Tee",
        '-2116318955': "Crosshatch Rolled Tee",
        '-1270714910': "Moss Digital Rolled Tee",
        '-827562327': "Blue Digital Rolled Tee",
        '-921674895': "Brown Digital Rolled Tee",
        '-1351566793': "Aqua Camo Rolled Tee",
        '-1801943929': "Splinter Rolled Tee",
        '-1016700382': "Contrast Camo Rolled Tee",
        '-1169993764': "Cobble Rolled Tee",
        '-347426326': "Peach Camo Rolled Tee",
        '-519201424': "Brushstroke Rolled Tee",
        '-190167895': "Light Woodland Rolled Tee",
        '-1153318956': "Green Digital Rolled Tee",
        '-1553166294': "Gray Digital Rolled Tee",
        '-1781336841': "Fall Rolled Tee",
        '-2146092434': "Urban Collared Parka",
        '-1900097706': "Forest Patched Collared Parka",
        '-1757353775': "Red Collared Parka",
        '-1904748737': "Brown Collared Parka",
        '-210132683': "Gray Camo Collared Parka",
        '-406092172': "Forest Open Parka",
        '-1738061342': "Urban Patched Open Parka",
        '-1440944819': "Forest Patched Open Parka",
        '-801908923': "Peach Closed Parka",
        '-495060007': "Red Closed Parka",
        '-1126158178': "Lime Closed Parka",
        '-2014296389': "Teal Closed Parka",
        '-1716622793': "Tangerine Closed Parka",
        '-248954029': "Blue Digital Sleeveless Shirt",
        '-281198725': "Brown Digital Sleeveless Shirt",
        '-667081637': "Aqua Camo Sleeveless Shirt",
        '-964591388': "Splinter Sleeveless Shirt",
        '-2072904510': "Contrast Camo Sleeveless Shirt",
        '-1591364051': "Peach Camo Sleeveless Shirt",
        '-1887956270': "Brushstroke Sleeveless Shirt",
        '-2054488328': "Moss Sleeveless Shirt",
        '-2036666824': "Green Digital Sleeveless Shirt",
        '-400738349': "Black Sleeveless Shirt",
        '-195112874': "Slate Sleeveless Shirt",
        '-1327478434': "White Sleeveless Shirt",
        '-954632752': "Wine Sleeveless Shirt",
        '-1824453088': "Blue Sleeveless Shirt",
        '-1584944467': "Brown Sleeveless Shirt",
        '-1175595811': "Peach Digital Sleeveless Shirt",
        '-1473892018': "Fall Sleeveless Shirt",
        '-1901920692': "Moss Digital Sleeveless Shirt",
        '-972652278': "Blue Digital T-Shirt",
        '-454836540': "Brown Digital T-Shirt",
        '-188823566': "Aqua Camo T-Shirt",
        '-495967403': "Splinter T-Shirt",
        '-1687153322': "Flecktarn T-Shirt",
        '-1998622667': "Light Woodland T-Shirt",
        '-1989146654': "Gray Digital T-Shirt",
        '-1692456128': "Peach Digital T-Shirt",
        '-34541342': "Fall T-Shirt",
        '-811461563': "Dark Woodland T-Shirt",
        '-1261904237': "Gray Woodland T-Shirt",
        '-173878184': "Aqua Camo Combat Shirt",
        '-717778046': "Contrast Camo Combat Shirt",
        '-2016773979': "Moss Combat Shirt",
        '-58126023': "Green Digital Combat Shirt",
        '-660529767': "Black Combat Shirt",
        '-557471258': "Slate Combat Shirt",
        '-796455575': "White Combat Shirt",
        '-95330051': "Brown Combat Shirt",
        '-334904210': "Red Combat Shirt",
        '-58027704': "Gray Woodland Combat Shirt",
        '-238050804': "Blue Digital Service Shirt",
        '-346745581': "Brown Digital Service Shirt",
        '-55434054': "Cobble Service Shirt",
        '-1572900906': "Flecktarn Service Shirt",
        '-1884697941': "Light Woodland Service Shirt",
        '-363462666': "Moss Service Shirt",
        '-670016661': "Sand Service Shirt",
        '-173332033': "Green Digital Service Shirt",
        '-1658559360': "Blue Service Shirt",
        '-824746984': "Gray Digital Service Shirt",
        '-654020494': "Peach Digital Service Shirt",
        '-1839766759': "Fall Service Shirt",
        '-1531836466': "Dark Woodland Service Shirt",
        '-2007019735': "Moss Digital Service Shirt",
        '-183289786': "Aqua Camo Service Short",
        '-1834060934': "Brushstroke Service Short",
        '-2091658043': "Flecktarn Service Short",
        '-410411725': "Sand Service Short",
        '-1764823785': "Black Service Short",
        '-1592524383': "Slate Service Short",
        '-1285446084': "White Service Short",
        '-1091963402': "Peach Digital Service Short",
        '-1406578571': "Fall Service Short",
        '-1691341181': "Dark Woodland Service Short",
        '-2005628660': "Crosshatch Service Short",
        '-140286104': "Moss Digital Service Short",
        '-438254621': "Gray Woodland Service Short",
        '-2086473476': "Black Sleeveless Puffer",
        '-672851589': "Lime Sleeveless Puffer",
        '-100115007': "Cyan Sleeveless Puffer",
        '-404637324': "Blue Sleeveless Puffer",
        '-873410314': "Salmon Collared Puffer",
        '-387773738': "Brown Collared Puffer",
        '-253937817': "Yellow Collared Puffer",
        '-582512580': "Lime Collared Puffer",
        '-1781300907': "Blue Collared Puffer",
        '-120911428': "Red R* Class of '98",
        '-1359197372': "Knuckleduster Pocket Tee",
        '-1013185306': "Blue Digital Collared Parka",
        '-1164572448': "Splinter Collared Parka",
        '-798673794': "Contrast Camo Collared Parka",
        '-1640083411': "Cobble Collared Parka",
        '-1244627119': "Peach Camo Collared Parka",
        '-652753437': "Light Woodland Collared Parka",
        '-422747826': "Moss Collared Parka",
        '-1829586578': "Sand Collared Parka",
        '-120361084': "Fall Collared Parka",
        '-367111654': "Blue Woodland Collared Parka",
        '-739596877': "Crosshatch Collared Parka",
        '-964654369': "Moss Digital Collared Parka",
        '-1387145090': "Gray Woodland Collared Parka",
        '-913738843': "Blue Digital Closed Parka",
        '-1208627074': "Brown Digital Closed Parka",
        '-484119796': "Aqua Camo Closed Parka",
        '-1326283096': "Splinter Closed Parka",
        '-1093131661': "Contrast Camo Closed Parka",
        '-1738680961': "Peach Camo Closed Parka",
        '-1515753454': "Purple Camo Closed Parka",
        '-2058834091': "Flecktarn Closed Parka",
        '-41181215': "Moss Closed Parka",
        '-1468780165': "Green Digital Closed Parka",
        '-1632035323': "Gray Digital Closed Parka",
        '-1929479536': "Peach Digital Closed Parka",
        '-918256972': "Brown Digital Closed Parka",
        '-945992815': "Moss Closed Parka",
        '-163174174': "Sand Closed Parka",
        '-625597033': "Green Digital Closed Parka",
        '-1524581779': "Gray Digital Closed Parka",
        '-1221108070': "Peach Digital Closed Parka",
        '-925630057': "Fall Closed Parka",
        '-621894196': "Blue Woodland Closed Parka",
        '-1522320778': "Crosshatch Closed Parka",
        '-1217863999': "Moss Digital Closed Parka",
        '-2080868387': "Gray Woodland Closed Parka",
        '-301107106': "Peach Camo Open Parka",
        '-534979459': "Purple Camo Open Parka",
        '-57043594': "Light Woodland Open Parka",
        '-1831190027': "Moss Open Parka",
        '-999873258': "Sand Open Parka",
        '-1953610050': "Blue Woodland Open Parka",
        '-1715870955': "Crosshatch Open Parka",
        '-1457028624': "Moss Digital Open Parka",
        '-1119966690': "Gray Woodland Open Parka",
        '-2046332523': "Brushstroke Defender Vest",
        '-1083382721': "Flecktarn Defender Vest",
        '-1919352680': "Light Woodland Defender Vest",
        '-1539363356': "Moss Defender Vest",
        '-159640195': "Gray Digital Defender Vest",
        '-463802053': "Gray Woodland Defender Vest",
        '-262405423': "Blue Digital Sports Biker",
        '-2068091391': "Brushstroke Sports Biker",
        '-1321154805': "Moss Sports Biker",
        '-871957353': "Sand Sports Biker",
        '-1155884977': "Gray Digital Sports Biker",
        '-897272029': "Peach Digital Sports Biker",
        '-313164604': "Dark Woodland Sports Biker",
        '-280788816': "Crosshatch Sports Biker",
        '-556507182': "Moss Digital Sports Biker",
        '-924353322': "Blue Digital Denim Biker",
        '-1362048855': "Brown Digital Denim Biker",
        '-1617372632': "Peach Camo Denim Biker",
        '-1319600729': "Brushstroke Denim Biker",
        '-2059557518': "Light Woodland Denim Biker",
        '-232423616': "Moss Denim Biker",
        '-536552705': "Sand Denim Biker",
        '-2083655008': "Gray Digital Denim Biker",
        '-1901504027': "Flecktarn Cargo",
        '-1608385322': "Light Woodland Cargo",
        '-1559297360': "Moss Cargo",
        '-1252612289': "Sand Cargo",
        '-1899573649': "Green Digital Cargo",
        '-713532463': "Dark Woodland Cargo",
        '-951533710': "Crosshatch Cargo",
        '-1478131540': "Moss Digital Cargo",
        '-1715674021': "Gray Woodland Cargo",
        '-807952147': "Aqua Camo Cargo",
        '-817193005': "Splinter Cargo",
        '-1123878076': "Contrast Camo Cargo",
        '-1444096744': "Cobble Cargo",
        '-1732365637': "Peach Camo Cargo",
        '-1356177521': "Brushstroke Cargo",
        '-1659454616': "Flecktarn Cargo",
        '-1967352140': "Light Woodland Cargo",
        '-1482526768': "Green Digital Cargo",
        '-1788294307': "Gray Digital Cargo",
        '-1316552606': "Blue Digital Cargo Shorts",
        '-113350540': "Splinter Cargo Shorts",
        '-896693485': "Contrast Camo Cargo Shorts",
        '-666130801': "Cobble Cargo Shorts",
        '-1665683608': "Brushstroke Cargo Shorts",
        '-352203777': "Flecktarn Cargo Shorts",
        '-130816413': "Light Woodland Cargo Shorts",
        '-978976440': "Moss Cargo Shorts",
        '-726120764': "Green Digital Cargo Shorts",
        '-1663674627': "Gray Digital Cargo Shorts",
        '-1437076992': "Peach Digital Cargo Shorts",
        '-397251076': "Fall Cargo Shorts",
        '-1240954519': "Dark Woodland Cargo Shorts",
        '-2139414969': "Gray Woodland Cargo Shorts",
        '-2072012360': "Blue Digital Overalls",
        '-267698635': "Aqua Camo Overalls",
        '-117288929': "Cobble Overalls",
        '-2037060722': "Sand Overalls",
        '-823000561': "Black Overalls",
        '-499373917': "White Overalls",
        '-1176512537': "Chocolate Overalls",
        '-1660412360': "Light Brown Overalls",
        '-554911402': "Dark Denim Overalls",
        '-976386280': "Faded Dark Denim Overalls",
        '-208051537': "Light Denim Overalls",
        '-495796126': "Faded Light Denim Overalls",
        '-1750258984': "Slate Denim Overalls",
        '-2026665499': "Faded Slate Denim Overalls",
        '-1385966011': "Black Denim Overalls",
        '-1972220391': "Splinter T-Shirt",
        '-745807797': "Peach Camo T-Shirt",
        '-1730417944': "Flecktarn T-Shirt",
        '-2031040750': "Light Woodland T-Shirt",
        '-180575316': "Sand T-Shirt",
        '-1330218524': "Green Digital T-Shirt",
        '-280135919': "Dark Woodland T-Shirt",
        '-1570906829': "Crosshatch T-Shirt",
        '-1827717482': "Moss Digital T-Shirt",
        '-1276018598': "Gray Woodland T-Shirt",
        '-80800759': "Blue Digital T-Shirt",
        '-1599412978': "Peach Camo T-Shirt",
        '-2075251627': "Flecktarn T-Shirt",
        '-915818865': "Light Woodland T-Shirt",
        '-1274180649': "Moss T-Shirt",
        '-1502711679': "Sand T-Shirt",
        '-1978322477': "Dark Woodland T-Shirt",
        '-2142233015': "Crosshatch T-Shirt",
        '-1806612917': "Moss Digital T-Shirt",
        '-1032969588': "Gray Woodland T-Shirt",
        '-2125833514': "Splinter T-Shirt",
        '-544532634': "Contrast Camo T-Shirt",
        '-65646468': "Peach Camo T-Shirt",
        '-306465849': "Brushstroke T-Shirt",
        '-1593238949': "Flecktarn T-Shirt",
        '-1000414970': "Moss T-Shirt",
        '-1230355043': "Sand T-Shirt",
        '-563679754': "Dark Woodland T-Shirt",
        '-868595299': "Crosshatch T-Shirt",
        '-1157617879': "Moss Digital T-Shirt",
        '-1481736058': "Gray Woodland T-Shirt",
        '-66549736': "Sand T-Shirt",
        '-1609322019': "Peach Digital T-Shirt",
        '-1311091350': "Fall T-Shirt",
        '-2086536970': "Dark Woodland T-Shirt",
        '-1864690836': "Crosshatch T-Shirt",
        '-195306900': "Moss Digital T-Shirt",
        '-509173029': "Blue Digital Rolled Tee",
        '-957125447': "Brown Digital Rolled Tee",
        '-1584583725': "Aqua Camo Rolled Tee",
        '-812775460': "Flecktarn Rolled Tee",
        '-377638451': "Green Digital Rolled Tee",
        '-70035848': "Gray Digital Rolled Tee",
        '-2087583259': "Blue Digital Rolled Tee",
        '-1789614742': "Brown Digital Rolled Tee",
        '-221194779': "Peach Camo Rolled Tee",
        '-1192500712': "Light Woodland Rolled Tee",
        '-1416018061': "Moss Rolled Tee",
        '-596006601': "Sand Rolled Tee",
        '-1969483755': "Green Digital Rolled Tee",
        '-1664830362': "Gray Digital Rolled Tee",
        '-1438691493': "Fall Rolled Tee",
        '-733950097': "Blue Digital Rolled Tee",
        '-1031394310': "Brown Digital Rolled Tee",
        '-980278613': "Splinter Rolled Tee",
        '-615756257': "Contrast Camo Rolled Tee",
        '-23554889': "Light Woodland Rolled Tee",
        '-1320056431': "Green Digital Rolled Tee",
        '-1161716607': "Peach Digital Rolled Tee",
        '-506041686': "Gray Woodland Rolled Tee",
        '-132474987': "Cobble Rolled Tee",
        '-1118363129': "Light Woodland Rolled Tee",
        '-809253152': "Moss Rolled Tee",
        '-1903416863': "Fall Rolled Tee",
        '-750668977': "Moss Digital Rolled Tee",
        '-980215822': "Gray Woodland Rolled Tee",
        '-1618922412': "Contrast Camo Rolled Tee",
        '-296660493': "Cobble Rolled Tee",
        '-1390686327': "Peach Camo Rolled Tee",
        '-1159697646': "Brushstroke Rolled Tee",
        '-496485855': "Flecktarn Rolled Tee",
        '-725115168': "Sand Rolled Tee",
        '-1742690670': "Gray Digital Rolled Tee",
        '-2048458209': "Peach Digital Rolled Tee",
        '-1018495770': "Dark Woodland Rolled Tee",
        '-1601849484': "Crosshatch Rolled Tee",
        '-1899490311': "Moss Digital Rolled Tee",
        '-1157337999': "Gray Woodland Rolled Tee",
        '-302316316': "Blue Digital Rolled Tee",
        '-389720339': "Splinter Rolled Tee",
        '-162074096': "Contrast Camo Rolled Tee",
        '-1272812120': "Cobble Rolled Tee",
        '-2115204803': "Peach Camo Rolled Tee",
        '-861397325': "Light Woodland Rolled Tee",
        '-621954242': "Moss Rolled Tee",
        '-1243605853': "Peach Digital Rolled Tee",
        '-1004687074': "Fall Rolled Tee",
        '-534910690': "Dark Woodland Rolled Tee",
        '-1690181785': "Gray Woodland Rolled Tee",
        '-83342033': "Brown Digital Rolled Tee",
        '-52904290': "Aqua Camo Rolled Tee",
        '-1794347261': "Splinter Rolled Tee",
        '-876258184': "Flecktarn Rolled Tee",
        '-1869421036': "Light Woodland Rolled Tee",
        '-1222560976': "Sand Rolled Tee",
        '-1767766940': "Gray Digital Rolled Tee",
        '-1528520471': "Peach Digital Rolled Tee",
        '-548268605': "Moss Digital Rolled Tee",
        '-85926646': "Brown Digital Rolled Tee",
        '-124384042': "Flecktarn Rolled Tee",
        '-1041686659': "Light Woodland Rolled Tee",
        '-803095570': "Moss Rolled Tee",
        '-581970358': "Sand Rolled Tee",
        '-383043169': "Green Digital Rolled Tee",
        '-911246676': "Gray Digital Rolled Tee",
        '-1358805678': "Peach Digital Rolled Tee",
        '-1640913999': "Fall Rolled Tee",
        '-1821405651': "Dark Woodland Rolled Tee",
        '-2112197757': "Moss Digital Rolled Tee",
        '-944236583': "Blue Digital T-Shirt",
        '-119375315': "Brown Digital T-Shirt",
        '-1745833256': "Aqua Camo T-Shirt",
        '-72123808': "Light Woodland T-Shirt",
        '-361146388': "Moss T-Shirt",
        '-790649671': "Sand T-Shirt",
        '-350429534': "Green Digital T-Shirt",
        '-21920305': "Peach Digital T-Shirt",
        '-1337136889': "Moss Digital T-Shirt",
        '-1035509522': "Blue Digital Rolled Tee",
        '-1280654411': "Brown Digital Rolled Tee",
        '-636627609': "Splinter Rolled Tee",
        '-398429748': "Contrast Camo Rolled Tee",
        '-44131320': "Cobble Rolled Tee",
        '-1439205961': "Brushstroke Rolled Tee",
        '-1215426452': "Flecktarn Rolled Tee",
        '-836223584': "Light Woodland Rolled Tee",
        '-605824745': "Moss Rolled Tee",
        '-446650592': "Green Digital Rolled Tee",
        '-81866084': "Peach Digital Rolled Tee",
        '-892866925': "Blue Digital Rolled Tee",
        '-1071228580': "Brown Digital Rolled Tee",
        '-263985023': "Splinter Rolled Tee",
        '-577715429': "Contrast Camo Rolled Tee",
        '-1825952177': "Cobble Rolled Tee",
        '-2122675472': "Peach Camo Rolled Tee",
        '-19659307': "Moss Rolled Tee",
        '-1533816490': "Sand Rolled Tee",
        '-770179777': "Green Digital Rolled Tee",
        '-1684172725': "Gray Digital Rolled Tee",
        '-1377159964': "Peach Digital Rolled Tee",
        '-370168594': "Fall Rolled Tee",
        '-662435305': "Moss Digital Rolled Tee",
        '-1989088286': "Gray Woodland Rolled Tee",
        '-278129308': "Cobble Rolled Tee",
        '-38358535': "Peach Camo Rolled Tee",
        '-2118600193': "Brushstroke Rolled Tee",
        '-2030713735': "Flecktarn Rolled Tee",
        '-1794350938': "Light Woodland Rolled Tee",
        '-2004818893': "Peach Digital Rolled Tee",
        '-1313425758': "Crosshatch Rolled Tee",
        '-1569056727': "Moss Digital Rolled Tee",
        '-734266452': "Gray Woodland Rolled Tee",
        '-1885662600': "Blue Digital Rolled Tee",
        '-1587956235': "Brown Digital Rolled Tee",
        '-104414016': "Contrast Camo Rolled Tee",
        '-395763195': "Cobble Rolled Tee",
        '-415031367': "Peach Camo Rolled Tee",
        '-698581524': "Brushstroke Rolled Tee",
        '-1003103841': "Flecktarn Rolled Tee",
        '-1108194012': "Light Woodland Rolled Tee",
        '-1414420317': "Moss Rolled Tee",
        '-1719696321': "Sand Rolled Tee",
        '-1274619057': "Green Digital Rolled Tee",
        '-968327214': "Gray Digital Rolled Tee",
        '-47387242': "Gray Woodland Rolled Tee",
        '-1437414097': "Knuckleduster Pocket Tee",
        '-1302540364': "Knuckleduster Pocket Tee",
        '-789876946': "Aqua Camo T-Shirt",
        '-1849954112': "Cobble T-Shirt",
        '-2061871235': "Peach Camo T-Shirt",
        '-1597468955': "Sand T-Shirt",
        '-1390633725': "Green Digital T-Shirt",
        '-612140592': "Gray Digital T-Shirt",
        '-926329764': "Peach Digital T-Shirt",
        '-149344005': "Fall T-Shirt",
        '-1863162705': "Crosshatch T-Shirt",
        '-2119973358': "Moss Digital T-Shirt",
        '-1334991963': "Gray Woodland T-Shirt",
        '-190850713': "Brown Digital T-Shirt",
        '-2143028600': "Flecktarn T-Shirt",
        '-1445343757': "Sand T-Shirt",
        '-1442200520': "Fall T-Shirt",
        '-1127683658': "Dark Woodland T-Shirt",
        '-807038989': "Crosshatch T-Shirt",
        '-508972165': "Moss Digital T-Shirt",
        '-1309818043': "Aqua Camo T-Shirt",
        '-1017158104': "Splinter T-Shirt",
        '-1787295142': "Contrast Camo T-Shirt",
        '-1595530954': "Cobble T-Shirt",
        '-2073466819': "Brushstroke T-Shirt",
        '-241499363': "Green Digital T-Shirt",
        '-539238497': "Gray Digital T-Shirt",
        '-902974393': "Dark Woodland T-Shirt",
        '-1201729366': "Crosshatch T-Shirt",
        '-290947780': "Moss Digital T-Shirt",
        '-590161519': "Gray Woodland T-Shirt",
        '-826682851': "Brown Digital T-Shirt",
        '-1222836145': "Aqua Camo T-Shirt",
        '-381033304': "Splinter T-Shirt",
        '-1266255070': "Contrast Camo T-Shirt",
        '-1495670839': "Cobble T-Shirt",
        '-1368232202': "Peach Camo T-Shirt",
        '-1650209447': "Brushstroke T-Shirt",
        '-2015518259': "Flecktarn T-Shirt",
        '-519866704': "Green Digital T-Shirt",
        '-154918351': "Gray Digital T-Shirt",
        '-309260341': "Dark Woodland T-Shirt",
        '-1877748526': "Moss Digital T-Shirt",
        '-878813801': "Blue Digital T-Shirt",
        '-1678180313': "Aqua Camo T-Shirt",
        '-760779389': "Splinter T-Shirt",
        '-1066546928': "Contrast Camo T-Shirt",
        '-451079566': "Cobble T-Shirt",
        '-144066805': "Flecktarn T-Shirt",
        '-453504476': "Sand T-Shirt",
        '-1712031164': "Peach Digital T-Shirt",
        '-9026230': "Fall T-Shirt",
        '-308436583': "Dark Woodland T-Shirt",
        '-487879627': "Crosshatch T-Shirt",
        '-623018983': "Gray Woodland T-Shirt",
        '-243390327': "Blue Digital T-Shirt",
        '-1927042019': "Contrast Camo T-Shirt",
        '-1447664318': "Peach Camo T-Shirt",
        '-1678030388': "Brushstroke T-Shirt",
        '-464954777': "Flecktarn T-Shirt",
        '-695484692': "Light Woodland T-Shirt",
        '-524823736': "Moss T-Shirt",
        '-753715201': "Sand T-Shirt",
        '-851386345': "Crosshatch T-Shirt",
        '-1616968492': "Moss Digital T-Shirt",
        '-639553764': "Aqua Camo T-Shirt",
        '-1591853673': "Splinter T-Shirt",
        '-363606015': "Contrast Camo T-Shirt",
        '-1431678805': "Moss T-Shirt",
        '-1371717005': "Peach Digital T-Shirt",
        '-1676993009': "Fall T-Shirt",
        '-1437287774': "Dark Woodland T-Shirt",
        '-87893115': "Crosshatch T-Shirt",
        '-749957991': "Gray Woodland T-Shirt",
        '-2003899363': "Brown Digital Armored",
        '-221013871': "Contrast Camo Armored",
        '-642816427': "Brushstroke Armored",
        '-1444936009': "Flecktarn Armored",
        '-948223507': "Moss Armored",
        '-1105406152': "Gray Digital Armored",
        '-1376307487': "Dark Woodland Armored",
        '-715258450': "Crosshatch Armored",
        '-87712721': "Aqua Camo Tactical",
        '-1051219632': "Splinter Tactical",
        '-1295578065': "Contrast Camo Tactical",
        '-1872509079': "Brushstroke Tactical",
        '-1977763107': "Flecktarn Tactical",
        '-425921574': "Moss Tactical",
        '-2013937176': "Dark Woodland Tactical",
        '-1612713544': "Moss Digital Tactical",
        '-1852943083': "Gray Woodland Tactical",
        '-1590450255': "Peach Camo Armored",
        '-294272460': "Brushstroke Armored",
        '-755823825': "Light Woodland Armored",
        '-545151868': "Moss Armored",
        '-850657255': "Sand Armored",
        '-362107129': "Peach Digital Armored",
        '-600599911': "Fall Armored",
        '-186432520': "Dark Woodland Armored",
        '-1499125891': "Crosshatch Armored",
        '-1743910321': "Moss Digital Armored",
        '-942937654': "Gray Woodland Armored",
        '-1777122048': "Brown Digital Armored",
        '-1601818893': "Aqua Camo Armored",
        '-77732707': "Cobble Armored",
        '-920387542': "Peach Camo Armored",
        '-1224156168': "Brushstroke Armored",
        '-996280542': "Flecktarn Armored",
        '-1536040515': "Green Digital Armored",
        '-1018159251': "Gray Digital Armored",
        '-778978320': "Peach Digital Armored",
        '-1706930862': "Moss Digital Armored",
        '-513320037': "Gray Woodland Armored",
        '-37756040': "Blue Digital Armored",
        '-343949576': "Brown Digital Armored",
        '-253839562': "Aqua Camo Armored",
        '-1504927213': "Splinter Armored",
        '-65057353': "Contrast Camo Armored",
        '-1869580641': "Light Woodland Armored",
        '-387696183': "Dark Woodland Armored",
        '-91431654': "Crosshatch Armored",
        '-704637951': "Gray Woodland Armored",
        '-5325525': "Blue Digital Armored",
        '-208558815': "Brown Digital Armored",
        '-978561772': "Aqua Camo Armored",
        '-1276399213': "Splinter Armored",
        '-1455842257': "Contrast Camo Armored",
        '-736103937': "Brushstroke Armored",
        '-891166845': "Flecktarn Armored",
        '-1220265912': "Light Woodland Armored",
        '-1938660703': "Sand Armored",
        '-1044266622': "Green Digital Armored",
        '-1375692288': "Gray Digital Armored",
        '-1128286338': "Peach Digital Armored",
        '-441218715': "Moss Digital Armored",
        '-2143338886': "Gray Woodland Armored",
        '-673088975': "Aqua Camo Armored",
        '-1440571724': "Splinter Armored",
        '-1269976310': "Contrast Camo Armored",
        '-515896094': "Brushstroke Armored",
        '-342023780': "Flecktarn Armored",
        '-134989226': "Light Woodland Armored",
        '-1885869170': "Fall Armored",
        '-2142614285': "Dark Woodland Armored",
        '-1431723611': "Crosshatch Armored",
        '-1670183624': "Moss Digital Armored",
        '-965125820': "Gray Woodland Armored",
        '-27813443': "Aqua Camo Armored",
        '-1903183309': "Flecktarn Armored",
        '-1425378520': "Moss Armored",
        '-1797645925': "Gray Digital Armored",
        '-1497449116': "Peach Digital Armored",
        '-2109606805': "Dark Woodland Armored",
        '-604821560': "Crosshatch Armored",
        '-305247362': "Moss Digital Armored",
        '-1230021307': "Gray Woodland Armored",
        '-1456322823': "Blue Digital Armored",
        '-617625722': "Aqua Camo Armored",
        '-1278707528': "Splinter Armored",
        '-981722081': "Contrast Camo Armored",
        '-1875005021': "Cobble Armored",
        '-1570482704': "Peach Camo Armored",
        '-1495507176': "Brushstroke Armored",
        '-1253835801': "Flecktarn Armored",
        '-2108582397': "Light Woodland Armored",
        '-1859636304': "Moss Armored",
        '-29724404': "Fall Armored",
        '-796879463': "Dark Woodland Armored",
        '-739206043': "Gray Woodland Armored",
        '-491777818': "Blue Digital Armored",
        '-1311396050': "Brown Digital Armored",
        '-1724894973': "Brushstroke Armored",
        '-1952082450': "Flecktarn Armored",
        '-1125451656': "Light Woodland Armored",
        '-1357292331': "Moss Armored",
        '-730224747': "Sand Armored",
        '-10827205': "Green Digital Armored",
        '-844536107': "Gray Digital Armored",
        '-1661565584': "Peach Digital Armored",
        '-1020571171': "Fall Armored",
        '-663913375': "Dark Woodland Armored",
        '-2107038166': "Contrast Camo Tactical",
        '-406621987': "Light Woodland Tactical",
        '-39805801': "Moss Tactical",
        '-2044736169': "Peach Digital Tactical",
        '-584877219': "Moss Digital Tactical",
        '-890218761': "Gray Woodland Tactical",
        '-164625564': "Blue Digital Tactical",
        '-2084167954': "Brown Digital Tactical",
        '-70352774': "Peach Camo Tactical",
        '-235148075': "Flecktarn Tactical",
        '-717966521': "Light Woodland Tactical",
        '-963176948': "Moss Tactical",
        '-1581790130': "Sand Tactical",
        '-232981606': "Green Digital Tactical",
        '-696138652': "Gray Digital Tactical",
        '-995024701': "Peach Digital Tactical",
        '-1451627947': "Crosshatch Tactical",
        '-1880508619': "Moss Digital Tactical",
        '-45966369': "Brushstroke Armored",
        '-5529423': "Flecktarn Armored",
        '-93907412': "Light Woodland Armored",
        '-973656755': "Sand Armored",
        '-68597119': "Green Digital Armored",
        '-634058987': "Fall Armored",
        '-394353752': "Dark Woodland Armored",
        '-21802991': "Crosshatch Armored",
        '-1690957544': "Gray Woodland Armored",
        '-815345802': "Blue Digital Tactical",
        '-668409606': "Brown Digital Tactical",
        '-391791557': "Aqua Camo Tactical",
        '-691332986': "Splinter Tactical",
        '-1414348206': "Flecktarn Tactical",
        '-2038761501': "Sand Tactical",
        '-372865991': "Green Digital Tactical",
        '-695852826': "Contrast Camo Tactical",
        '-1410479182': "Cobble Tactical",
        '-168632385': "Peach Camo Tactical",
        '-954105315': "Brushstroke Tactical",
        '-1588808080': "Flecktarn Tactical",
        '-1133548363': "Moss Tactical",
        '-1901719261': "Sand Tactical",
        '-1660098676': "Peach Digital Tactical",
        '-1756898302': "Fall Tactical",
        '-1038929500': "Dark Woodland Tactical",
        '-1277848279': "Crosshatch Tactical",
        '-2029602031': "Blue Digital Tactical",
        '-266267841': "Splinter Tactical",
        '-710189484': "Cobble Tactical",
        '-1476066552': "Brushstroke Tactical",
        '-691478385': "Flecktarn Tactical",
        '-1966847869': "Light Woodland Tactical",
        '-1185307215': "Moss Tactical",
        '-1578798898': "Green Digital Tactical",
        '-1078612882': "Gray Digital Tactical",
        '-1181708276': "Blue Digital Tactical",
        '-338725751': "Brown Digital Tactical",
        '-306915828': "Contrast Camo Tactical",
        '-67472745': "Cobble Tactical",
        '-764928141': "Peach Camo Tactical",
        '-527123508': "Brushstroke Tactical",
        '-1441018149': "Light Woodland Tactical",
        '-1209439626': "Moss Tactical",
        '-1653525114': "Sand Tactical",
        '-1467585016': "Gray Digital Tactical",
        '-2055362569': "Fall Tactical",
        '-243367945': "Dark Woodland Tactical",
        '-775995271': "Crosshatch Tactical",
        '-891342151': "Moss Digital Tactical",
        '-1131112924': "Gray Woodland Tactical",
        '-552192905': "Blue Digital Tactical",
        '-851144492': "Brown Digital Tactical",
        '-763117681': "Flecktarn Tactical",
        '-218627977': "Light Woodland Tactical",
        '-622079905': "Sand Tactical",
        '-1011221057': "Crosshatch Tactical",
        '-696070992': "Aqua Camo Tactical",
        '-1068130218': "Splinter Tactical",
        '-81291783': "Contrast Camo Tactical",
        '-456955599': "Cobble Tactical",
        '-356908184': "Green Digital Tactical",
        '-472255068': "Peach Digital Tactical",
        '-718874562': "Fall Tactical",
        '-290944179': "Dark Woodland Tactical",
        '-61102413': "Crosshatch Tactical",
        '-417039295': "Moss Digital Tactical",
        '-1251960646': "Gray Woodland Tactical",
        '-1894776690': "Blue Digital Tactical",
        '-1433601744': "Aqua Camo Tactical",
        '-1732061796': "Splinter Tactical",
        '-1016222991': "Cobble Tactical",
        '-1320253773': "Peach Camo Tactical",
        '-568827834': "Brushstroke Tactical",
        '-1913667594': "Flecktarn Tactical",
        '-128445243': "Moss Tactical",
        '-1912963485': "Green Digital Tactical",
        '-366463303': "Gray Woodland Tactical",
        '-2041177224': "Contrast Camo Tactical",
        '-1155398385': "Flecktarn Tactical",
        '-1453366902': "Light Woodland Tactical",
        '-1484825142': "Moss Tactical",
        '-1790854833': "Sand Tactical",
        '-1746466619': "Gray Digital Tactical",
        '-310692884': "Fall Tactical",
        '-549611663': "Dark Woodland Tactical",
        '-1984260867': "Blue Digital Tactical",
        '-1794790509': "Brown Digital Tactical",
        '-1233222577': "Splinter Tactical",
        '-1945915554': "Brushstroke Tactical",
        '-558967633': "Light Woodland Tactical",
        '-865390552': "Moss Tactical",
        '-1496428764': "Green Digital Tactical",
        '-1875238400': "Gray Digital Tactical",
        '-1443801746': "Peach Digital Tactical",
        '-1164183869': "Fall Tactical",
        '-988935257': "Dark Woodland Tactical",
        '-692080886': "Crosshatch Tactical",
        '-544817000': "Moss Digital Tactical",
        '-243964811': "Gray Woodland Tactical",
        '-164390831': "Splinter Tactical",
        '-1032179485': "Peach Camo Tactical",
        '-1357903345': "Brushstroke Tactical",
        '-570005509': "Flecktarn Tactical",
        '-860830384': "Light Woodland Tactical",
        '-1472005003': "Sand Tactical",
        '-260449137': "Moss Digital Tactical",
        '-1679871141': "Gray Woodland Tactical",
        '-1787244429': "Blue Digital Armored",
        '-1916361571': "Splinter Armored",
        '-393389527': "Contrast Camo Armored",
        '-79495276': "Cobble Armored",
        '-972057298': "Peach Camo Armored",
        '-691390813': "Brushstroke Armored",
        '-90662215': "Crosshatch Armored",
        '-1087527972': "Gray Woodland Armored",
        '-1815322218': "Blue Digital Tactical",
        '-1173052976': "Contrast Camo Tactical",
        '-1937783129': "Cobble Tactical",
        '-2015675042': "Brushstroke Tactical",
        '-749382575': "Light Woodland Tactical",
        '-529240433': "Moss Tactical",
        '-1432419611': "Sand Tactical",
        '-286386212': "Peach Digital Tactical",
        '-1513585278': "Moss Digital Tactical",
        '-23152835': "Gray Woodland Tactical",
        '-1831638000': "Aqua Camo Tactical",
        '-834870566': "Splinter Tactical",
        '-1721075402': "Peach Camo Tactical",
        '-1521741575': "Flecktarn Tactical",
        '-1196116022': "Light Woodland Tactical",
        '-1041380804': "Moss Tactical",
        '-1478920231': "Green Digital Tactical",
        '-1801596574': "Gray Digital Tactical",
        '-2060438905': "Peach Digital Tactical",
        '-558439025': "Dark Woodland Tactical",
        '-810727556': "Crosshatch Tactical",
        '-1112300663': "Moss Digital Tactical",
        '-752003681': "Blue Digital Tactical",
        '-310736323': "Brown Digital Tactical",
        '-1994206361': "Brushstroke Tactical",
        '-1696827686': "Flecktarn Tactical",
        '-1389126776': "Light Woodland Tactical",
        '-659033444': "Moss Tactical",
        '-350251157': "Sand Tactical",
        '-1232102300': "Green Digital Tactical",
        '-1058426600': "Gray Digital Tactical",
        '-1267427286': "Peach Digital Tactical",
        '-969720921': "Fall Tactical",
        '-1880076510': "Dark Woodland Tactical",
        '-1716100434': "Crosshatch Tactical",
        '-1363631640': "Aqua Camo Tactical",
        '-1616968779': "Splinter Tactical",
        '-782375118': "Contrast Camo Tactical",
        '-38223897': "Peach Camo Tactical",
        '-426077781': "Brushstroke Tactical",
        '-1876237132': "Green Digital Tactical",
        '-1981460': "Fall Tactical",
        '-1391387060': "Dark Woodland Tactical",
        '-479786249': "Crosshatch Tactical",
        '-45048240': "Brown Digital Armored",
        '-1391718736': "Aqua Camo Armored",
        '-1145459701': "Splinter Armored",
        '-233334586': "Peach Camo Armored",
        '-1922347073': "Sand Armored",
        '-2138266426': "Moss Digital Armored",
        '-1429472956': "Gray Woodland Armored",
        '-420653005': "Aqua Camo Tactical",
        '-1341199753': "Contrast Camo Tactical",
        '-1510025641': "Cobble Tactical",
        '-53214208': "Moss Tactical",
        '-1694538619': "Gray Digital Tactical",
        '-1941846262': "Peach Digital Tactical",
        '-2019902020': "Fall Tactical",
        '-2053677691': "Blue Digital Armored",
        '-1886097025': "Brown Digital Armored",
        '-835916328': "Aqua Camo Armored",
        '-606500563': "Splinter Armored",
        '-1449909081': "Contrast Camo Armored",
        '-1219379166': "Cobble Armored",
        '-1986599763': "Peach Camo Armored",
        '-1755545544': "Brushstroke Armored",
        '-2084644611': "Light Woodland Armored",
        '-1687287502': "Gray Digital Armored",
        '-870258025': "Peach Digital Armored",
        '-1466096752': "Dark Woodland Armored",
        '-430203124': "Crosshatch Armored",
        '-1059662845': "Gray Woodland Armored",
        '-914445721': "Aqua Camo Armored",
        '-611561854': "Splinter Armored",
        '-1396051710': "Contrast Camo Armored",
        '-2021284230': "Peach Camo Armored",
        '-1559306868': "Brushstroke Armored",
        '-38268223': "Sand Armored",
        '-266705933': "Green Digital Armored",
        '-527383328': "Gray Digital Armored",
        '-2120972571': "Moss Digital Armored",
        '-1412113563': "Gray Woodland Armored",
        '-116524123': "Blue Digital Armored",
        '-2084761343': "Brown Digital Armored",
        '-566065938': "Splinter Armored",
        '-336781245': "Contrast Camo Armored",
        '-1833013785': "Brushstroke Armored",
        '-1157874074': "Moss Armored",
        '-1000550105': "Sand Armored",
        '-1778141810': "Green Digital Armored",
        '-44235705': "Fall Armored",
        '-1480074978': "Crosshatch Armored",
        '-1186497507': "Moss Digital Armored",
        '-372444226': "Blue Digital Armored",
        '-1299380929': "Brown Digital Armored",
        '-777900304': "Contrast Camo Armored",
        '-1137703924': "Cobble Armored",
        '-302913649': "Peach Camo Armored",
        '-118293099': "Brushstroke Armored",
        '-491400933': "Flecktarn Armored",
        '-1787251042': "Light Woodland Armored",
        '-1311805621': "Sand Armored",
        '-1002493789': "Green Digital Armored",
        '-1926612358': "Gray Digital Armored",
        '-1596890680': "Peach Digital Armored",
        '-1142657855': "Aqua Camo Armored",
        '-530041396': "Contrast Camo Armored",
        '-767878798': "Cobble Armored",
        '-416267428': "Brushstroke Armored",
        '-832040508': "Light Woodland Armored",
        '-236726085': "Sand Armored",
        '-398253739': "Peach Digital Armored",
        '-628324888': "Fall Armored",
        '-897194533': "Dark Woodland Armored",
        '-1145321401': "Crosshatch Armored",
        '-1375195936': "Moss Digital Armored",
        '-1859456222': "Gray Woodland Armored",
        '-254517089': "Blue Digital Armored",
        '-991997113': "Aqua Camo Armored",
        '-1614739081': "Cobble Armored",
        '-1156988920': "Brushstroke Armored",
        '-1385880385': "Flecktarn Armored",
        '-390816927': "Light Woodland Armored",
        '-540628949': "Green Turtle Mask",
        '-233354036': "Brown Turtle Mask",
        '-63348464': "Moss Turtle Mask",
        '-1914698685': "Swamp Turtle Mask",
        '-562532858': "White Mouse Mask",
        '-2113129173': "Tan Mouse Mask",
        '-1815717729': "Gray Mouse Mask",
        '-1262395208': "Black & Green Tech Mask",
        '-289989431': "Blue T Tech Mask",
        '-119721707': "Pink T Tech Mask",
        '-1962865352': "Black & Pink Tech Mask",
        '-307572086': "Green Dot Tech Mask",
        '-1486436861': "Orange Dot Tech Mask",
        '-1705464857': "Blue Dot Tech Mask",
        '-469188798': "Pink Dot Tech Mask",
        '-757654305': "Green T Tech Mask",
        '-58429383': "Orange T Tech Mask",
        '-118382140': "Stone Hyena Mask",
        '-2114650851': "Cream Sports Track Top",
        '-1035630144': "Yellow DS Sports Track Top",
        '-276372414': "Dark Stone Sports Track Top",
        '-554449356': "Smoke Sports Track Top",
        '-2080276166': "Orange Prolaps Sports Track Top",
        '-2133084323': "Pink Tucked Rolled Shirt",
        '-1812275813': "Beige Tucked Rolled Shirt",
        '-1540325882': "Gray Tucked Rolled Shirt",
        '-1516732202': "Salmon Tucked Rolled Shirt",
        '-1207753301': "Dark Pink Tucked Rolled Shirt",
        '-886813715': "Yellow Tucked Rolled Shirt",
        '-614077328': "Cyan Tucked Rolled Shirt",
        '-443258981': "Beige Tucked Short Shirt",
        '-1035132659': "Salmon Tucked Short Shirt",
        '-1264613966': "Dark Pink Tucked Short Shirt",
        '-859621891': "Yellow Tucked Short Shirt",
        '-1242101659': "Cyan Tucked Short Shirt",
        '-1014566304': "Pink Untucked Rolled Shirt",
        '-1176117474': "Beige Untucked Rolled Shirt",
        '-1735502652': "Pink Untucked Short Shirt",
        '-1496190645': "Beige Untucked Short Shirt",
        '-95086512': "Salmon Untucked Short Shirt",
        '-506763459': "Yellow Untucked Short Shirt",
        '-824210433': "Black Bigness Bomber",
        '-594434205': "Yellow Bigness Bomber",
        '-1014696658': "Black 22 Bomber",
        '-1246832254': "Black Detail Bomber",
        '-568350105': "Yellow Detail Bomber",
        '-802091382': "Black Trickster Bomber",
        '-58169544': "Yellow Trickster Bomber",
        '-536039092': "Yellow Detail Bomber Zipped",
        '-234597061': "Black Trickster Bomber Zipped",
        '-1434040768': "Yellow Trickster Bomber Zipped",
        '-1398571139': "Black 22 Bomber Open",
        '-489002010': "Black Detail Bomber Open",
        '-730607847': "Yellow Detail Bomber Open",
        '-976592203': "Black Open",
        '-1231305640': "Charcoal Open",
        '-294646169': "Pink Geometric Open",
        '-114744359': "OJ Open",
        '-806137490': "Splat Open",
        '-596940194': "Blue Plaid Open",
        '-707601087': "Blue Gingham Open",
        '-526781745': "Red Patterned Open",
        '-1459181266': "Gray Open",
        '-89413606': "Brown Patterned Open",
        '-857355121': "Grayscale Patterned Open",
        '-376535584': "Black Dotted Open",
        '-1838655599': "Baby Blue Dotted Open",
        '-1548846563': "White Dotted Open",
        '-1676603581': "Ash Open",
        '-52309785': "White Open",
        '-296799294': "Skate Güffy Open",
        '-533948547': "Red Güffy Open",
        '-457695060': "Moss Leopard Open",
        '-1941183732': "Burgundy Garland Open",
        '-2126197506': "Black Garland Open",
        '-734817376': "Blue Leaves Open",
        '-139371877': "Red Leaves Open",
        '-1448984962': "Teal Leaves Open",
        '-1854468568': "Navy Posies Open",
        '-1279241542': "Blue Posies Open",
        '-974129387': "Lilac Floral Open",
        '-1262922584': "Floral Open",
        '-509628728': "Urban Gradient Open",
        '-1117469379': "Blue Savanna Open",
        '-1895602057': "Peach Botanical Open",
        '-1272270135': "Turquoise Botanical Open",
        '-1728281643': "White Office Unbuttoned",
        '-1489625016': "Cream Office Unbuttoned",
        '-2044568035': "Shell Office Unbuttoned",
        '-1802765584': "Dotty Office Unbuttoned",
        '-1914507882': "Rust Check Office Unbuttoned",
        '-1677424163': "Blue Check Office Unbuttoned",
        '-1447647935': "Big Blue Check Office Unbuttoned",
        '-1947899485': "Black Office Unbuttoned",
        '-267243009': "Beige Office Unbuttoned",
        '-28356999': "Ivory Office Unbuttoned",
        '-726893772': "Stone Office Unbuttoned",
        '-488466528': "Berry Office Unbuttoned",
        '-736272367': "White Champs Sports Tee",
        '-1026146941': "White Camo Sports Tee",
        '-257605507': "Purple Basketball Sports Tee",
        '-513105400': "Purple Champs Sports Tee",
        '-719877790': "Camo Bigness Sports Tee",
        '-643788168': "White Bigness Sports Tee",
        '-875825457': "White Baseball Sports Tee",
        '-1105339533': "White Broker Sports Tee",
        '-1337442360': "White Basketball Sports Tee",
        '-830144618': "White Office",
        '-448352987': "Cream Office",
        '-1020306110': "Light Blue Office",
        '-683375324': "Blue Stripes Office",
        '-63516920': "Rust Check Office",
        '-428760194': "Blue Check Office",
        '-1397444603': "Big Blue Check Office",
        '-818708225': "Navy Office",
        '-1732668412': "Black Office",
        '-1265513548': "Beige Office",
        '-1436403883': "Stone Office",
        '-1916371426': "Ash Office",
        '-1904545555': "Purple B Polo Shirt",
        '-1238646706': "White Bigness Polo Shirt",
        '-1019797200': "Axe of Fury Tee",
        '-1049748066': "Qub3d Qub3s Tee",
        '-258606099': "Get Metal Tee",
        '-1335820389': "Purple Sports Long Sleeve",
        '-1640539320': "Gray Sports Long Sleeve",
        '-1946601780': "Panic Sports Long Sleeve",
        '-624503710': "Purple White Sports Long Sleeve",
        '-949419072': "Khaki Service Shirt Tucked",
        '-1324132591': "Green Service Shirt Tucked",
        '-1665225112': "Black Service Shirt Tucked",
        '-1099435558': "Gray Service Shirt Tucked",
        '-2055340057': "Blue Service Shirt Tucked",
        '-701862172': "Khaki Short Service Shirt Tucked",
        '-351135565': "Green Short Service Shirt Tucked",
        '-230676721': "Beige Short Service Shirt Tucked",
        '-415330048': "Black Short Service Shirt Tucked",
        '-47465254': "Gray Short Service Shirt Tucked",
        '-983355377': "Red Popped Leather Jacket",
        '-1228696880': "Black Popped Leather Jacket",
        '-399084107': "Tan Popped Leather Jacket",
        '-2092717103': "Gray Popped Leather Jacket",
        '-2038534265': "Brown Cross Check Relaxed",
        '-313714182': "Mustard Stripe Check Relaxed",
        '-41174409': "White Bold Check Relaxed",
        '-1971628984': "Green Bold Check Relaxed",
        '-1506964564': "Black Bold Check Relaxed",
        '-1209520351': "Mustard Bold Check Relaxed",
        '-1995288190': "White Double Shirt Relaxed",
        '-705032579': "Purple Cross Check Relaxed",
        '-470046080': "Tan Cross Check Relaxed",
        '-918326000': "Brown Stripe Check Relaxed",
        '-1753378427': "Blue Stripe Check Relaxed",
        '-256850966': "Pale Blue Stripe Check Relaxed",
        '-1599167299': "Gray Double Shirt Open",
        '-979538278': "Navy Double Shirt Open",
        '-1889140180': "Orange Double Shirt Open",
        '-673443049': "Pink Double Shirt Open",
        '-375998836': "Green Double Shirt Open",
        '-58401688': "Red Double Shirt Open",
        '-1968265627': "Orange Double Shirt",
        '-1636315657': "Pink Double Shirt",
        '-1358336230': "Green Double Shirt",
        '-788942086': "Red Double Shirt",
        '-1462174410': "Dark Slacks",
        '-1960626955': "Dark Red Slacks",
        '-839042392': "Powder Blue Slacks",
        '-1077699019': "Ash Slacks",
        '-2025604596': "Navy Slacks",
        '-39874008': "Dark Blue Slacks",
        '-1836434433': "Green Slacks",
        '-595893122': "White Slacks",
        '-1412267219': "Blue Slacks",
        '-999476126': "Purple Slacks",
        '-152200862': "Olive Slacks",
        '-1078031387': "Cream Sports Track Pants",
        '-1188823380': "Gray Heat Sports Track Pants",
        '-398618784': "Cyan Sports Track Pants",
        '-658804636': "Black Sports Track Pants",
        '-1200869434': "Crimson Sports Track Pants",
        '-29672605': "Navy Sports Track Pants",
        '-335997217': "Blue DS Sports Track Pants",
        '-2117614978': "Red DS Sports Track Pants",
        '-1489924783': "Dark Stone Sports Track Pants",
        '-1802311660': "Snow Sports Track Pants",
        '-1561996752': "Mustard Heat Sports Track Pants",
        '-2052110043': "Smoke Sports Track Pants",
        '-2035082805': "Orange Heat Sports Track Pants",
        '-1744047377': "Navy Large Cargos",
        '-1553495642': "Khaki Large Cargos",
        '-1255002821': "Dark Gray Large Cargos",
        '-1993046870': "Black Chino Shorts",
        '-1106514344': "Gray Plaid Chino Shorts",
        '-460280523': "White Plaid Chino Shorts",
        '-873825279': "Olive Chino Shorts",
        '-1397077067': "Dark Gray Chino Shorts",
        '-508512835': "Yellow Chino Shorts",
        '-824045536': "Silver Plaid Chino Shorts",
        '-668007705': "T-Shirt",
        '-310825605': "T-Shirt",
        '-1132377204': "T-Shirt",
        '-1577445762': "T-Shirt",
        '-219400383': "T-Shirt",
        '-879105891': "T-Shirt",
        '-1099215264': 'T-Shirt',
        '-828436702': "T-Shirt",
        '-137797258': "T-Shirt",
        '-381107083': "T-Shirt",
        '-1542374909': "T-Shirt",
        '-1764909188': "T-Shirt",
        '-1112707781': "T-Shirt",
        '-140949427': "T-Shirt",
        '-1653697543': 'T-Shirt',
        '-1589143763': "T-Shirt",
        '-821202248': "T-Shirt",
        '-988389686': "T-Shirt",
        '-2014714778': "T-Shirt",
        '-93989720': "T-Shirt",
        '-699396995': "T-Shirt",
        '-395169599': "T-Shirt",
        '-1285798250': "T-Shirt",
        '-696482208': "T-Shirt",
        '-460447101': "T-Shirt",
        '-1992922159': "T-Shirt",
        '-57515238': "T-Shirt",
        '-1209553549': "T-Shirt",
        '-1507063300': 'T-Shirt',
        '-598510006': "T-Shirt",
        '-896347447': "T-Shirt",
        '-1865261231': "T-Shirt",
        '-1091224682': "T-Shirt",
        '-1385719685': "T-Shirt",
        '-1012808465': "T-Shirt",
        '-107794007': "T-Shirt",
        '-809858757': "T-Shirt",
        '-529061196': "T-Shirt",
        '-297974208': "T-Shirt",
        '-50142261': "T-Shirt",
        '-1464911063': "T-Shirt",
        '-555373147': "T-Shirt",
        '-869332936': "T-Shirt",
        '-504296903': "T-Shirt",
        '-1870862526': 'T-Shirt',
        '-788797361': 'T-Shirt',
        '-944908877': "T-Shirt",
        '-977840838': "T-Shirt",
        '-1234258263': "T-Shirt",
        '-1459840059': "T-Shirt",
        '-1312435354': "T-Shirt",
        '-1669158688': "T-Shirt",
        '-1974369154': "T-Shirt",
        '-302901051': "T-Shirt",
        '-432198064': "T-Shirt",
        '-201864763': "T-Shirt",
        '-895387879': "T-Shirt",
        '-662498596': "T-Shirt",
        '-1424508922': "T-Shirt",
        '-1126278253': "T-Shirt",
        '-742389438': "T-Shirt",
        '-931073340': "T-Shirt",
        '-280903611': "T-Shirt",
        '-503372352': "T-Shirt",
        '-1525798769': "T-Shirt",
        '-1689774845': "T-Shirt",
        '-1018108652': "T-Shirt",
        '-1315552865': "T-Shirt",
        '-30287147': "T-Shirt",
        '-2128396503': 'T-Shirt',
        '-1611203995': "T-Shirt",
        '-1636904471': "T-Shirt",
        '-1339198106': "T-Shirt",
        '-684833945': "T-Shirt",
        '-379131944': "T-Shirt",
        '-1289520002': "T-Shirt",
        '-2050350644': "T-Shirt",
        '-1115877071': "T-Shirt",
        '-599077172': "T-Shirt",
        '-28854535': "T-Shirt",
        '-349957966': "T-Shirt",
        '-1228560394': "T-Shirt",
        '-1647592474': "Black Armored",
        '-1341464476': "Gray Armored",
        '-393752255': "Smoke Armored",
        '-95062820': "White & Green Armored",
        '-227016798': "Black Armored",
        '-618475272': "Gray Armored",
        '-991550337': "Ash Armored",
        '-1081599549': "White Armored",
        '-129430716': "White & Green Armored",
        '-2028958832': "Black Armored",
        '-1300438428': "Gray Armored",
        '-2012115570': "Ash Armored",
        '-1758712893': "White Armored",
        '-825056555': "Brown Armored",
        '-95651384': "White & Green Armored",
        '-402286506': "Black Armored",
        '-20658732': "Gray Armored",
        '-693701223': "Ash Armored",
        '-1320408348': "Red & Gray Armored",
        '-955558302': "Brown Armored",
        '-700886724': "Ash Armored",
        '-2014890855': "White Armored",
        '-1404175002': "Brown Armored",
        '-909133739': "Smoke Armored",
        '-1341487925': "White & Green Armored",
        '-2097220484': "White & Green Armored",
        '-1634855663': "Black Armored",
        '-1336657763': "Gray Armored",
        '-974494775': "Ash Armored",
        '-620294650': "Red & Gray Armored",
        '-322424440': "Brown Armored",
        '-19540573': "Smoke Armored",
        '-1345963521': "Red & Gray Armored",
        '-559835211': "Brown Armored",
        '-154065358': "Ash Armored",
        '-450067735': "White Armored",
        '-620564858': "Brown Armored",
        '-1104038684': "Smoke Armored",
        '-1348266041': "White & Green Armored",
        '-432820384': "Brown Armored",
        '-945982924': "Smoke Armored",
        '-1723624063': "White & Green Armored",
        '-119648548': "Red & Gray Armored",
        '-374951827': "Smoke Armored",
        '-1202555345': "Black Armored",
        '-570211952': "Gray Armored",
        '-1815761642': "Ash Armored",
        '-847142775': "Red & Gray Armored",
        '-1835831229': "Ash Armored",
        '-2021696997': "Brown Armored",
        '-533045314': "Black Armored",
        '-123203431': "Ash Armored",
        '-1479446803': "White Armored",
        '-1786066336': "Red & Gray Armored",
        '-1007933662': "Brown Armored",
        '-1313701201': "Smoke Armored",
        '-1164942678': "Black Armored",
        '-1337569770': "Gray Armored",
        '-1944091191': "White Armored",
        '-2021983100': "Brown Armored",
        '-2063317122': "Black Armored",
        '-1853693833': "White Armored",
        '-1773720288': "Black Armored",
        '-1600044588': "Gray Armored",
        '-1815992302': "Ash Armored",
        '-1501770361': "White Armored",
        '-1406103725': "Baby Blue Tank",
        '-167304449': "Pink Striped Tank",
        '-63928837': "Crosses Bikini",
        '-1629661498': "Orange Striped Bikini",
        '-1777223233': "Pink Patterned Bikini",
        '-1991794649': "Island Print Bikini",
        '-72856977': "Tan Flip-Flops",
        '-666238029': "Cork Flip-Flops",
        '-220251939': "Lobster Flip-Flops",
        '-1381355920': "Pink Flip-Flops",
        '-1865583061': "Swingers Flip-Flops",
        '-1238992735': "Pin Up Girl Chestnut",
        '-1947261901': "Pin Up Girl Blonde",
        '-771018642': "Pin Up Girl Auburn",
        '-1486169302': "Pin Up Girl Black",
        '-2052614252': "Messy Bun Black",
        '-1818610823': "Messy Bun Brown",
        '-2047875219': "Barfs Tank",
        '-1204499466': "Pink Tank",
        '-1599038226': "Pink Striped Tank",
        '-890310294': "Lime Striped Tank",
        '-1631086312': "Red Tank",
        '-787841635': "Navy Tank",
        '-1548676226': "Parrot Print Shirt",
        '-252634032': "White Bikini",
        '-80269092': "Crosses Bikini",
        '-1721022302': "Orange Striped Bikini",
        '-1870996647': "Island Print Bikini",
        '-1525720089': "Blue Shorts",
        '-210905108': "Blue Bikini",
        '-1685936105': "Camo Bikini",
        '-1379382110': "Punk Bikini",
        '-788622578': "Pink Patterned Bikini",
        '-481740893': "Island Print Bikini",
        '-1771192668': "Light Pink Shorts",
        '-266743188': "Floral Bikini",
        '-342837943': "Pale Blue Shorts",
        '-127676689': "Red Shorts",
        '-817431378': "Beige Shorts",
        '-585000853': "White Striped Shorts",
        '-1998716701': "Floral Bangles",
        '-994210796': "Black Heart Necklace",
        '-259791968': "Pink Heart Necklace",
        '-840010097': "Stocking",
        '-1893001529': "Santa Sweater",
        '-1663258070': "Elf Sweater",
        '-1912826031': "Red Pajama Top",
        '-992377590': "Stripy Pajama Top",
        '-215916135': "Winter Pajama Top",
        '-1363024813': "Stripy Scarf",
        '-1258669849': "Stripy Scarf",
        '-1565256613': "Joy Scarf",
        '-1904219185': "Snowflake Scarf",
        '-382099366': "Santa T-Shirt",
        '-680493880': "Elf T-Shirt",
        '-713104178': "Santa T-Shirt",
        '-1835344121': "Snowman T-Shirt",
        '-1579909766': "Reindeer T-Shirt",
        '-1095857589': "Snowman Mask",
        '-125138072': "Santa T-Shirt",
        '-574486285': "Black Camisole",
        '-137717839': "Pink Camisole",
        '-724207846': "Cream Camisole",
        '-293229958': "Purple Camisole",
        '-62863888': "Yellow Camisole",
        '-1889309657': "Gray Camisole",
        '-185029212': "White Blouse",
        '-1386045831': "Black Blouse",
        '-680725875': "Tan Blouse",
        '-454161009': "Gray Blouse",
        '-1174312584': "Yellow Camisole",
        '-1192794304': "Light Blue Camisole",
        '-2027256889': "Gray Camisole",
        '-1670074789': "Orange Camisole",
        '-326349175': "Leopard Camisole",
        '-796060021': "Pink Camisole",
        '-570249206': "White Camisole",
        '-876115052': "Black Camisole",
        '-108599534': "Red Camisole",
        '-257698508': "Blue Camisole",
        '-1675837039': "Bullet Hockey",
        '-92701111': "Vinewood Hockey",
        '-2131217134': "Vile Zombie Hockey",
        '-2008366153': "Nightmare Skull Hockey",
        '-1173510340': "Electric Skull Hockey",
        '-2002117972': "Tourist Hockey",
        '-686966926': "Hound Hockey",
        '-448244761': "Wolf Hockey",
        '-1968716640': "Skull Hockey",
        '-1535707074': "Stitched Hockey",
        '-45733409': "Pale Stitched Hockey",
        '-472578723': "Neon Warrior",
        '-564233616': "Deadeye Warrior",
        '-194009454': "Stone Warrior",
        '-545293122': "Lightning Warrior",
        '-851847117': "Wooden Warrior",
        '-110725741': "Olive Platforms",
        '-893446075': "Turquoise Platforms",
        '-544988844': "Candy Platforms",
        '-716305176': "Blue Platforms",
        '-588202840': "Earth Platforms",
        '-2064347987': "Hot Pink Crush Platforms",
        '-192254912': "White Dipped Patent Heels",
        '-1026258731': "Zebra Patent Heels",
        '-720694853': "Red Patent Heels",
        '-1099030254': "Tight Bun Auburn",
        '-307724442': "Tight Bun Chestnut",
        '-637872117': "Tight Bun Blonde",
        '-663797501': "Twisted Bob Chestnut",
        '-1609936838': "Twisted Bob Brown",
        '-1880477702': "Twisted Bob Blonde",
        '-1723375047': "Yellow Tux",
        '-782740922': "Olive Tux",
        '-518515935': "Gray Woven Tux",
        '-740689755': "Black & Cream Tux",
        '-991143222': "Leopard Tux",
        '-1218003009': "Red Tux",
        '-1739423337': "Pink Plaid Tux",
        '-1975655054': "Blue Tux",
        '-616702410': "Black & Cream Blazer",
        '-1290404315': "Red Plaid Blazer",
        '-311954744': "Burgundy Blazer",
        '-1610262524': "Green Blazer",
        '-1848198233': "Leopard Blazer",
        '-467866094': "Orange Camisole",
        '-673000034': "Leopard Camisole",
        '-1984939718': "Pink Camisole",
        '-877868759': "Light Blue Camisole",
        '-1108464212': "Gray Camisole",
        '-463435307': "White Blouse",
        '-1699154297': "Gray Striped Blouse",
        '-1393091837': "Pink Striped Blouse",
        '-1086603380': "Gray Blouse",
        '-1396236192': "Black & White Vest",
        '-1423565538': "Brown Vest",
        '-531069050': "Blue Vest",
        '-1737693343': "Navy Vest",
        '-1833772051': "Black Vest",
        '-510346': "Silver Vest",
        '-963624029': "Olive Vest",
        '-1228233704': "White & Red Vest",
        '-1114134984': "Country Plaid Shirt",
        '-1315598796': "Red Check Shirt",
        '-736242876': "Two-Tone Shirt",
        '-2099007279': "Green Plaid Shirt",
        '-627885194': "Red Plaid Shirt",
        '-354362351': "Light Blue Shirt",
        '-61964564': "Navy Fade Shirt",
        '-553684252': "Blue Suit",
        '-2036793843': "Black & Cream Stripe Suit",
        '-792603031': "Purple Suit",
        '-2091500657': "Sky Blue Suit",
        '-1064323583': "Yellow Suit",
        '-1285645409': "Red Suit",
        '-451117286': "Pink Suit",
        '-426577952': "Vibrant Pencil",
        '-1294759838': "Blue Pencil",
        '-1484789554': "Fuchsia Pencil",
        '-1701685280': "Houndstooth Pencil",
        '-1471548593': "Gray Panel Pencil",
        '-548773557': "Sky Blue Pencil",
        '-1248588321': "Floral Pencil",
        '-1023629136': "Black & White Pencil",
        '-1439860974': "Leopard Pencil",
        '-1043324769': "Pink Bow Scarf",
        '-1277786964': "Red Bow Scarf",
        '-434837208': "Leopard Bow Scarf",
        '-666088041': "White Bow Scarf"
      }
    },
    'props': {
      'male': {
        '1728834': "Crimson Suit Fedora",
        '5724803': "Purple The Diamond Cap",
        '6720512': "Red Snowflake Cap",
        '7370356': "Blue Fame or Shame Shades",
        '8886212': "Shatter Pattern Helmet",
        '15147410': "Contrast Camo Dual Lens",
        '16791183': "Toothy Grin Forwards Cap",
        '20986019': "Dark Woodland Beanie Cap",
        '21056435': "Silver Aviators Brown Tint",
        '21258010': "Flight Helmet",
        '22408663': "Blue & Orange Flight Helmet",
        '28316324': "Slate Cop Frames",
        '28958416': "Gold Pendulus Timestar",
        '32981478': "Blue Chain Mod Helmet",
        '35058608': "Ace of Spades Dome",
        '39846427': "Splat Squash Cap",
        '42741368': "Enema Smoke Shades",
        '43684460': "Vibe Helmet",
        '44589953': "Black Riot",
        '46317436': "Purple Vine Aviators",
        '49071095': "White SC Broker Cap",
        '51092102': "Platinum Onyx Stud (L)",
        '51730517': "Green Houndstooth Low Beanie",
        '53610744': "Platinum Noir Square Stud (R)",
        '53623951': "Green Digital Beanie Cap",
        '58739900': "Silver Skull Stud (L)",
        '67840136': "Fall Boonie Down",
        '72993486': "White Janitor Frames",
        '73549465': "Gold Gem Stud (L)",
        '76217495': "Red Trilby",
        '81473465': "Aqua Camo Boonie Up",
        '84216645': "Classic Tree",
        '85613815': "Gold Gem Stud (R)",
        '86888593': "White Steel Shades",
        '89379350': "Hawaiian Snow Copper",
        '92744107': "Deadline Blue",
        '96679142': "Fall Beret",
        '97007497': "Gray Bowler Hat",
        '99127719': "Cubist Helmet",
        '99295936': "Matte All Black Biker",
        '103881577': "Black Trend Glasses",
        '108065461': "Green Flying Bravo Cap",
        '110904666': "Brown Dual Lens",
        '114660105': "Black Vom Feuer Cap",
        '115105915': "Black Gem Stud (R)",
        '115207322': "Blue Garrison Cap",
        '116002452': "Black Riot",
        '117937566': "Captain Peaked Cap",
        '119253090': "Black Hotdogs Cap",
        '124730587': "Green Digital Scope Night Vision",
        '126080797': "Black Shielded Riot",
        '128401301': "Chocolate Boonie Down",
        '128536382': "Orange Retro Bubble",
        '130534069': "Leopard Combat Helmet",
        '131002837': "Red JC Helmet",
        '136708667': "Onyx Wraparounds",
        '142221196': "Platinum Pendulus Gravity",
        '143902134': "Wolf Forwards Cap",
        '145020657': "Black Skull Stud (L)",
        '146756301': "Gray Woodland Riot",
        '147717054': "Red Low Beanie",
        '147944037': "Pink Hotdogs Cap",
        '148387170': "Pink JC Helmet",
        '152454915': "Silver SASS Bracelet",
        '152542226': "Snakeskin Helmet",
        '154208423': "Green Spiked",
        '156190197': "Red Camo Garrison Cap",
        '158494981': "Splinter Beret",
        '158898383': "Cobble Helmet",
        '166078557': "Leopard Full Face",
        '166621255': "Green Pattern Quad Lens",
        '168579644': "MP Riot",
        '171726882': "Green Urban Deep Shades",
        '173693630': "Black Autumn Shades",
        '173882057': "Contrast Camo Boonie Up",
        '177336864': "Blue Wave Backwards Cap",
        '178920856': "Gold Illusion Square Studs",
        '181266941': "Taco Canvas Hat",
        '188532270': "Crosshatch Utility Cap",
        '190143688': "Aqua Camo Dual Lens",
        '191459960': "Pink Gold Kronos Quantum",
        '194711301': "Bold Abstract Bigness Cap",
        '197167874': "Black & Red Trilby",
        '200799052': "Silver Pendulus Timestar",
        '203458532': "Pale Blue Retro Bubble",
        '204475861': "Benny's Fitted Cap",
        '206451116': "White & Red Peaked Cap",
        '207854850': "Roundel Mod",
        '215114984': "Green The Diamond Cap",
        '215712749': "Light Woodland Low Beanie",
        '218634482': "Moss Quad Lens",
        '230097217': "Pink LS Diamond Cap",
        '235347453': "Contrast Camo Utility Cap",
        '244401310': "Green Digital Scope Night Vision",
        '246106447': "Blue Bowler Hat",
        '252304375': "Black Jag Mod Helmet",
        '252475373': "Orange LS Diamond Cap",
        '253027340': "Tread Wrist Chain (L)",
        '255890565': "Splinter Shielded Riot",
        '256464108': "Black Flight Helmet",
        '258657662': "White Sports",
        '259806491': "Gray Digital Beanie Cap",
        '264221625': "Black SASS Wrist Piece",
        '267673462': "Gold Fifty Kronos Ära",
        '272454777': "Light Woodland Boonie Down",
        '278970991': "Black Superior Glasses",
        '283794379': "Horizon Aviators",
        '286613576': "Gray Yeti Cap",
        '288210625': "Cheeky Elf Woolly Trail",
        '295420667': "Flecktarn Dual Lens",
        '298270133': "Yellow Cluckin' Bell Cap",
        '304998684': "Blood Casuals",
        '315287472': "Charcoal Janitor Frames",
        '321413664': "Red Fame or Shame Kronos",
        '328193308': "Black Scope Night Vision",
        '328215936': "Blue Wave Forwards Cap",
        '328510719': "Digital Helmet",
        '328711652': "Crimson Helmet",
        '329243676': "Brown Quad Lens",
        '331272413': "Peach Digital Beret",
        '333461191': "Shell Trend Glasses",
        '333679875': "Yellow Cluckin' Bell Cap",
        '333770097': "Gold Skull Stud (L)",
        '334673705': "Charcoal Cop Frames",
        '339914149': "Platinum Skull Studs",
        '341110495': "Green Polarized Shades",
        '348993233': "Burst Helmet",
        '358996754': "White Boonie Down",
        '359816857': "Steel Refined Warm Tint",
        '365866200': "Purple Tree",
        '378395720': "Clan Tartan Bobble",
        '382778588': "Silver Dipped Trends",
        '383916577': "Ash Bowler Hat",
        '388069486': "Gray Digital Boonie Up",
        '394959091': "Ash Low Beanie",
        '396932399': "Sprunk Helmet",
        '402857924': "Skull and Snake Dome",
        '403180716': "Orange Flight Helmet",
        '405239741': "Hawaiian Snow Tortoiseshell",
        '405591683': "Xero Gas Cap",
        '407408495': "Navy Garrison Cap",
        '408053958': "White Dual Lens",
        '408685188': "Blue LS Diamond Cap",
        '408992005': "Gold Grid Square Studs",
        '410377408': "Splinter Combat Helmet",
        '412888723': "Red Güffy Cap",
        '414434965': "Copper Elvis",
        '419221971': "Brown Top Hat",
        '420936259': "Cream Shielded Riot",
        '421024602': "Shell Superior Glasses",
        '421263445': "Gray Woodland Dual Lens",
        '422710328': "White LS Diamond Cap",
        '424054912': "Elf Hat",
        '424941891': "Gold Enduring Watch",
        '425131870': "Carbon Covgari Supernova",
        '426688885': "Silver Pendulus Gravity",
        '428087961': "Gold Polarized Hipsters",
        '428827347': "Moss Digital Utility Cap",
        '429467005': "Tiger Full Face",
        '431694621': "White Retro Bubble",
        '436032620': "Peach Digital Boonie Down",
        '436838315': "Stars and Stripes Tied",
        '441293198': "Colors Yeti Cap",
        '441717456': "Contrast Camo Beret",
        '443051646': "Spiked Gauntlet (R)",
        '443283025': "Red Flying Bravo Cap",
        '444212231': "Black Ammu-Nation Cap",
        '445581891': "Splinter Shielded Riot",
        '449607807': "Slate Mod Canvas",
        '461502230': "Light Brown Beanie Cap",
        '461861685': "Deadline Blue",
        '464042304': "Cobble Utility Cap",
        '464135028': "Link Trickster Snapback",
        '468709395': "Black Sports",
        '468873691': "Gold Tint Aviators",
        '469826475': "Splinter Deep Shades",
        '469860910': "Blue Digital Boonie Up",
        '473967350': "White Lucky Plucker Cap",
        '476893956': "Taco Bomb Cap",
        '479061208': "Platinum Noir Square Stud (L)",
        '480702126': "Blue Outlaw Goggles",
        '481083063': "White Vom Feuer Cap",
        '482979800': "Feathers Spiked",
        '484383085': "Black Watch",
        '485861484': "Gold Diamond Stud (R)",
        '486234966': "Square Wrist Chain (R)",
        '490176595': "Moss Digital Cap",
        '491405556': "Stars & Stripes Forwards Cap",
        '491826867': "Auto Exotic Cap",
        '495850282': "Green Ho Ho Ho Flipped Cap",
        '496331219': "Yellow Sports",
        '501936632': "Peach Digital Beanie Cap",
        '503836078': "Blue Guns",
        '504157481': "White Peaked Cap",
        '506395627': "Tan Spade Kronos Ära",
        '512917107': "Splinter Riot",
        '513489944': "Black Quad Lens",
        '528073095': "Gold Noir Square Stud (R)",
        '534050260': "Blue Digital Beanie Cap",
        '537880958': "Enema Marble Glasses",
        '538163190': "Black Bigness Cap",
        '539503139': "Gold Kronos Tempo",
        '547877290': "Red Retro Bubble",
        '549092506': "Zebra Combat Helmet",
        '551632893': "Carbon Kronos Submariner",
        '552556691': "Squared Helmet",
        '557258044': "Platinum Gem Stud (R)",
        '560852692': "Light Gray Bowler Hat",
        '561428904': "Red Earpiece",
        '564515410': "White & Gold Trends",
        '568551300': "White JC Helmet",
        '572372924': "Brown Trilby",
        '576657887': "Moss Digital Shielded Riot",
        '577534167': "Moss Boonie Down",
        '577900366': "Cobble Beanie Cap",
        '581245858': "Skull Cap",
        '587889003': "Red & Navy Garrison Cap",
        '590505512': "Brushstroke Dual Lens",
        '607424929': "Gray Aviators Green Tint",
        '609276884': "Green Ho Ho Ho Cap",
        '611661108': "White Trend Glasses",
        '617938488': "Gray Camo Forwards Cap",
        '618853682': "Matte All Black Biker",
        '631645464': "Orange The Diamond Cap",
        '640795235': "Light Woodland Shielded Riot",
        '644055381': "Blood Cross Forwards Cap",
        '649551865': "Black Dual Lens",
        '652383702': "Blue Digital Shielded Riot",
        '659342350': "Eastside Fitted Cap",
        '659544850': "Brown Digital Shielded Riot",
        '659556502': "Electric Blue Tint Aviators",
        '659958550': "Tiger Quad Lens",
        '660488765': "Blue Trilby",
        '664142550': "Gray Garrison Cap",
        '665568109': "Imponte Racing Cap",
        '665583850': "Red Guns",
        '667873479': "Silver Superior Hot Tint",
        '670051848': "Cobble Beret",
        '670083509': "Black The Diamond Cap",
        '677467389': "Green Roundel Mod",
        '678941318': "Aqua Camo Utility Cap",
        '680070921': "Blue Stripes Mod Helmet",
        '682005190': "Teal SC Broker Cap",
        '682284723': "Black Shrewsbury Cap",
        '682755652': "Brown Digital Quad Lens",
        '683667953': "Gray Digital Boonie Down",
        '684443612': "Ox and Hatchets Spiked",
        '693604053': "Deadline White",
        '694031973': "Aqua Deep Shades",
        '696255068': "Heritage Tartan Bobble",
        '700062617': "Black & Red Dual Lens",
        '704955164': "Red Ammu-Nation Cap",
        '706617162': "Visored Skull Cap",
        '706674077': "Crosshatch Beret",
        '708374172': "Purple Hotdogs Cap",
        '713753968': "Slate Boonie Down",
        '717190171': "Deadline Red",
        '720439764': "Brushstroke Boonie Down",
        '725710428': "Vintage Top Hat",
        '730603843': "Brown Digital Boonie Up",
        '730994195': "White Firefighter & Goggles",
        '733552555': "Brushstroke Dual Lens",
        '734656469': "Gold Pillow Stud (L)",
        '741023614': "Gold SN Bullion Studs",
        '745170819': "White Helmet",
        '750003154': "Contrast Camo Beanie Cap",
        '751679748': "Vapid Cap",
        '755391483': "Peach Camo Utility Cap",
        '756357692': "Olive Beanie Cap",
        '760214879': "Crosshatch Dual Lens",
        '762032124': "Light Woodland Shielded Riot",
        '764519088': "Crimson Docks",
        '767322812': "Coffee Cop Frames",
        '770837136': "Black Sports",
        '778909555': "Navy Mod Pork Pie",
        '782583003': "Olive Polarized Hipsters",
        '783751666': "Purple Neon Camo Backwards Cap",
        '789297931': "Gray Digital Backwards Cap",
        '793700065': "Gold Noir Square Studs",
        '798340921': "Nice Flipped Cap",
        '799313665': "Fall Utility Cap",
        '804518135': "Aqua Camo Peaked Cap",
        '808699450': "Black SC Broker Cap",
        '811908865': "White Riot",
        '813665495': "Black Combat Helmet",
        '822023606': "Hornet Refined",
        '823747944': "Gold Circle Stud (R)",
        '823968567': "Lucky Plucker White Pattern Cap",
        '825395315': "Flecktarn Boonie Up",
        '846812229': "Cobble Full Face",
        '849954049': "White Gold Watch",
        '857582660': "Black Winter Shades",
        '859098021': "Cluckin' Bell Logos Cap",
        '859853336': "Black Tied",
        '860255687': "Black & Gold Trends",
        '861982888': "Leopard Flight Helmet",
        '862102164': "Silver Kronos Pulse",
        '862845286': "Moss Dual Lens",
        '864994321': "Stars & Stripes Backwards Cap",
        '866460993': "Black Stripes Mod Helmet",
        '866499692': "Gray Woodland Shielded Riot",
        '867931815': "Chieftain Tartan Bobble",
        '869620121': "Shell Wraparound Glasses",
        '872006079': "Red The Diamond Cap",
        '874320934': "Light Combat Helmet",
        '874861096': "Black Low Beanie",
        '875037135': "Brown & Red Peaked Cap",
        '877354565': "Striped Deep Shades",
        '880920787': "Chocolate Beret",
        '884343068': "Splinter Cap",
        '885320733': "Platinum Grid Square Stud (R)",
        '892345154': "Silver Crowex Époque",
        '893970412': "OJ Squash Cap",
        '896875808': "Beige Houndstooth Low Beanie",
        '897744465': "Glow Reindeer Antlers",
        '897744755': "Black Onyx Stud (L)",
        '898704664': "Magenta Tint Aviators",
        '899113123': "Westside Fitted Cap",
        '900897585': "Gray Digital Utility Cap",
        '901436551': "Glow Purple Tree",
        '901531618': "Pink Pattern Quad Lens",
        '902284643': "White The Diamond Cap",
        '903007305': "Orange Urban Ski",
        '908495888': "Zebra Dual Lens",
        '908866960': "Steel Aviators Blue Tint",
        '910522095': "Yellow Construction Helmet",
        '911686663': "Gold Skull Stud (R)",
        '916070850': "Cobble Forwards Cap",
        '917598912': "White Shrewsbury Cap",
        '918918878': "Enema Brown Glasses",
        '923195949': "Blue Sweatbox Snapback",
        '926585800': "Warstock Cap",
        '927232119': "Brushstroke Utility Cap",
        '927308939': "Beige Scope Night Vision",
        '929531870': "Blue Peaked Cap",
        '931963897': "Leopard Quad Lens",
        '938553691': "Black SC Broker Cap",
        '947310682': "LTD Cap",
        '947731308': "Light Woodland Beanie Cap",
        '952934899': "Black Boonie Down",
        '957683780': "Gear Wrist Chains (R)",
        '967693315': "Brown Urban Ski",
        '969162478': "Light Wrist Chain (L)",
        '972739283': "Gray Leopard Garrison Cap",
        '973305921': "Faggio Mod",
        '974992672': "Chunky Wrist Chain (R)",
        '975429490': "Other Side Flight Helmet",
        '978493003': "Chocolate Boonie Up",
        '978749239': "White Dual Lens",
        '985823003': "Splinter Utility Cap",
        '992001638': "Flecktarn Dual Lens",
        '994493816': "Black Broker Snapback",
        '998131666': "Stars & Stripes Low Beanie",
        '998871353': "Burger Shot Bullseye Cap",
        '1002110341': "Red Forwards Cap",
        '1003322744': "Death Helmet",
        '1005568593': "Brushstroke Beanie Cap",
        '1012303283': "Black Kronos Quad",
        '1013137663': "Cobble Dual Lens",
        '1015954629': "Pink Urban Deep Shades",
        '1019484849': "White Superior Cool Tint",
        '1021446350': "Gray Trends",
        '1023764891': "Platinum Circle Stud (L)",
        '1024057764': "Charcoal Hipsters",
        '1024355318': "Gold Gaulle Retro Hex",
        '1025171317': "Taco Bomb Cap",
        '1032823085': "Brushstroke Boonie Up",
        '1037160644': "No Master Shielded Riot",
        '1037578074': "White Camo Garrison Cap",
        '1038479894': "Gear Wrist Chains (L)",
        '1039281052': "Dark Woodland Utility Cap",
        '1042310774': "Beige Low Beanie",
        '1043942002': "Silver iFruit Link",
        '1044978947': "Green Digital Boonie Down",
        '1045969823': "Orange Firefighter & Goggles",
        '1053428710': "Downhill Helmet",
        '1054794493': "Purple Hotdogs Cap",
        '1057305084': "Flecktarn Boonie Down",
        '1062757507': "White Broker Cap",
        '1065029177': "Black Cop Frames",
        '1071756155': "Steel Refined Cool Tint",
        '1072731106': "Platinum Spike Stud (R)",
        '1074623945': "Mono Deep Shades",
        '1075305160': "Slate Mod Pork Pie",
        '1082888158': "Brown Suit Fedora",
        '1083527299': "Black Skull Stud (R)",
        '1085536566': "Orange Camo Sand Castle Cap",
        '1091562502': "Shark Mouth Flight Helmet",
        '1095735895': "Sand Cap",
        '1096007882': "Splinter Riot",
        '1097091281': "White Silver Shades",
        '1098789420': "Highland Tartan Bobble",
        '1099555767': "Pink Urban Ski",
        '1099724039': "Black Wraparound Glasses",
        '1100922817': "Cobble Backwards Cap",
        '1103092621': "Blue Snowflake Flipped Cap",
        '1107630790': "Ace of Spades Helmet",
        '1112672897': "Tri Helmet",
        '1113747106': "Blue Low Beanie",
        '1114509850': "Diamonds Earrings",
        '1117141493': "Cobble Quad Lens",
        '1117156242': "Pudding Woolly Knit",
        '1121859230': "Gold Crowex Époque",
        '1122422839': "Splinter Beanie Cap",
        '1122611627': "Flecktarn Combat Helmet",
        '1124065897': "Peach Digital Quad Lens",
        '1124449147': "Beige Outlaw Goggles",
        '1129041444': "Yellow Docks",
        '1136122832': "Hotdogs Canvas Hat",
        '1141958608': "Gold Watch",
        '1148780446': "Woodland Canvas Hat",
        '1151325986': "Cream Sweatbox Snapback",
        '1153218425': "Sage Scope Night Vision",
        '1154075964': "White Deep Shades",
        '1155701570': "Silver Crowex Rond",
        '1157066538': "Black Hotdogs Cap",
        '1158198199': "Olive Boonie Up",
        '1159077477': "Gold SASS Wrist Piece",
        '1160868961': "Patriot Flight Helmet",
        '1167021385': "Dark Woodland Boonie Up",
        '1169680395': "Green Flight Helmet",
        '1173965234': "Purple Snakeskin Backwards Cap",
        '1174660768': "Dark Red Mod Pork Pie",
        '1177755789': "Tiger Quad Lens",
        '1184594017': "Red & White Flight Helmet",
        '1192623422': "Wine Coil Cap",
        '1194403102': "Skull Helmet",
        '1197489804': "Peach Digital Utility Cap",
        '1205219183': "Black & Red Dual Lens",
        '1206868246': "Tan Aviators Dark Tint",
        '1207712740': "Dark Combat Helmet",
        '1211008939': "Dark Violet Undertaker Hat",
        '1214118349': "Glow Holly Tree",
        '1219435988': "Contrast Camo Shielded Riot",
        '1226943314': "Black Peaked Cap",
        '1228137277': "Rasta Stripes Low Beanie",
        '1230948015': "Cobble Boonie Down",
        '1232153697': "Green & Red Peaked Cap",
        '1232174285': "Gold Roulette Kronos Tempo",
        '1234181718': "Black Ho Ho Ho Cap",
        '1235034508': "Slalom Helmet",
        '1236729802': "Navy Bowler Hat",
        '1238823805': "Ice Beret",
        '1242660794': "Uptown Riders Tied",
        '1243020603': "Glow Classic Tree",
        '1243189645': "White Painted Güffy Cap",
        '1244511138': "Black Angled Hoops",
        '1244987393': "Ox and Hatchets Tied",
        '1247421431': "Gray Eyewear",
        '1248827370': "Silver JC Helmet",
        '1249914032': "Aqua Camo Cap",
        '1254010787': "Burger Shot Burgers Cap",
        '1255377053': "Gold Spike Stud (L)",
        '1257165058': "Red Star Combat Helmet",
        '1259023058': "Black Full Face",
        '1260135746': "Orange Dipped Trends",
        '1263478096': "Flamejob Helmet",
        '1267616682': "Green Camo Forwards Cap",
        '1269061779': "Lime Saggy Beanie",
        '1270380110': "White & Blue Garrison Cap",
        '1271520355': "Lemon Casuals",
        '1273346952': "Blue JC Helmet",
        '1282133135': "Black Refined",
        '1282705495': "Contrast Camo Full Face",
        '1285848635': "Woodland Yeti Cap",
        '1286343473': "Carbon Gaulle Retro Hex",
        '1291339208': "Gray Woodland Combat Helmet",
        '1297112089': "Red SC Broker Cap",
        '1307111925': "Vapid Cap",
        '1310516338': "Contrast Camo Dual Lens",
        '1318976025': "Carbon iFruit Tech",
        '1321035756': "Peach Camo Beanie Cap",
        '1321664139': "Lucky Plucker Red Pattern Cap",
        '1330547265': "Gold Ceaseless",
        '1330757580': "Bronze Superior Warm Tint",
        '1331744612': "White Firefighter",
        '1337550203': "Crimson Polarized Shades",
        '1346078735': "Choco Polarized Hipsters",
        '1346201607': "White Docks",
        '1347715159': "Silver Watch",
        '1348583916': "Blue Superior",
        '1349280912': "Red LED Brown Strap",
        '1354306496': "Fall Full Face",
        '1354617437': "Black Crowex Époque",
        '1354639193': "SA Assault Helmet",
        '1355164530': "Tropic Helmet",
        '1356862354': "White Wraparound Glasses",
        '1369207828': "Atomic Cap",
        '1373660427': "Purple Saggy Beanie",
        '1374824457': "Brown Digital Quad Lens",
        '1379309694': "Atomic Cap",
        '1383240553': "Platinum Diamond Stud (R)",
        '1386764538': "Brown Digital Garrison Cap",
        '1390045533': "Green Deep Shades",
        '1394932586': "Crosshatch Shielded Riot",
        '1396672290': "Grayscale Urban Ski",
        '1396721393': "Brown Digital Boonie Down",
        '1399488226': "Black Ho Ho Ho Flipped Cap",
        '1406474060': "Blue Retro Bubble",
        '1407714477': "Lime iFruit Tech",
        '1411612772': "Naughty Flipped Cap",
        '1413699378': "Red Sports",
        '1414763718': "Brown Harsh Souls Snapback",
        '1416127828': "Green Neon Camo Backwards Cap",
        '1417138230': "Platinum Angled Hoops",
        '1423430485': "Light Brown Boonie Up",
        '1426160221': "Matte Black Off-road",
        '1427004334': "Orange Guns",
        '1429238986': "Aqua Camo Beanie Cap",
        '1433985311': "Brown Digital Beanie Cap",
        '1437517340': "Aqua Camo Dual Lens",
        '1444780905': "Black Coil Cap",
        '1450359131': "Blue Digital Shielded Riot",
        '1453442047': "White Helmet",
        '1454296662': "Glossy Mirrored Biker",
        '1456447461': "Gray Woodland Full Face",
        '1460083471': "Carbon Pendulus Galaxis",
        '1464986778': "Red Stripes Mod Helmet",
        '1470799820': "Cobble Quad Lens",
        '1471858932': "Gray Peaked Cap",
        '1473746472': "Bugstars Backwards Cap",
        '1475444920': "Black & Yellow Low Beanie",
        '1475898688': "Forest Bulletproof",
        '1487297183': "Gray Woodland Beret",
        '1491046386': "Crosshatch Riot",
        '1493313350': "Glow Cheeky Elf Woolly Trail",
        '1497522768': "Brown Digital Utility Cap",
        '1497573501': "Glossy All Black Biker",
        '1503248869': "Ace of Spades Helmet",
        '1509641477': "Blue & Red Peaked Cap",
        '1516618709': "Crimson Trends",
        '1517430461': "Platinum Gaulle Retro Hex",
        '1527647250': "Silver Watch",
        '1529342529': "Peach Camo Boonie Down",
        '1531275842': "Charcoal Refined",
        '1533381874': "Nagasaki Racing Cap",
        '1533885335': "Tropic Helmet",
        '1536555172': "Purple SC Broker Cap",
        '1538105989': "Orange & Black Flight Helmet",
        '1538299998': "Red Lucky Plucker Cap",
        '1541237140': "Sage Green Undertaker Hat",
        '1541392130': "Smoke Cop Frames",
        '1542364440': "Burger Shot Bullseye Cap",
        '1544919034': "Slate Beret",
        '1545727185': "Black Skull Forwards Cap",
        '1547324680': "Brown Digital Full Face",
        '1551254356': "Blue Construction Helmet",
        '1552305463': "Splinter Quad Lens",
        '1552385401': "Brown Bull Emic",
        '1552603808': "Gruppe Sechs Helmet",
        '1558905143': "Hawaiian Snow Gray",
        '1560939239': "Flash Cap",
        '1562689384': "Silver Skull Studs",
        '1569561080': "White & Gold Garrison Cap",
        '1574568904': "Blue Shielded Riot",
        '1577290595': "Platinum Skull Stud (R)",
        '1581730052': "Stone Gray Shielded Riot",
        '1582081090': "Glow Elf Hat",
        '1584639495': "Platinum SN Stud (R)",
        '1588407496': "Flecktarn Full Face",
        '1589828617': "Deadline Orange",
        '1591035792': "Boost Helmet",
        '1595646834': "Burger Shot Burgers Cap",
        '1596096047': "Blue Retro Bubble",
        '1597266062': "Blue Cluckin' Bell Cap",
        '1601455173': "Black Coil Cap",
        '1604284448': "Wheel Crowex Époque",
        '1608086806': "Black Outlaw Goggles",
        '1608192145': "Auto Exotic Cap",
        '1609565355': "Zap Casuals",
        '1611306301': "Fall Shielded Riot",
        '1611498483': "Black Deep Shades",
        '1611715243': "Brown Digital Dual Lens",
        '1613634359': "Silver Retro Bubble",
        '1614912291': "Cyan Mod Pork Pie",
        '1615377111': "Aqua Camo Full Face",
        '1616380410': "White Saggy Beanie",
        '1618575620': "Slate Beanie Cap",
        '1622036122': "Hearts Earrings",
        '1626007888': "Stone Scope Night Vision",
        '1626031863': "Red Ammu-Nation Cap",
        '1626792542': "Blue Digital Boonie Down",
        '1633513106': "Medic Combat Helmet",
        '1635000195': "White Flight Helmet",
        '1638087054': "Carbon Spiked",
        '1639594648': "Blue Top Foam Hat",
        '1644608347': "Eggshell Undertaker Hat",
        '1645846800': "PRB iFruit Tech",
        '1646552433': "Silver Superior",
        '1650830148': "Prison Authority Backwards Cap",
        '1655617451': "Dark Woodland Full Face",
        '1663041629': "White Dice Earrings",
        '1664968271': "Gray Top Hat",
        '1665311928': "Blue Digital Riot",
        '1666093326': "Moss Beanie Cap",
        '1676239505': "Splinter Dual Lens",
        '1676348091': "Blue Mod Canvas",
        '1678097934': "Crosshatch Shielded Riot",
        '1679182630': "Olive Utility Cap",
        '1688711503': "Gold SN Bullion Stud (L)",
        '1689691149': "Blue Mod Pork Pie",
        '1691976193': "White Rim Tint Aviators",
        '1698971674': "Zebra Deep Shades",
        '1701657425': "Contrast Camo Quad Lens",
        '1704243905': "White Polarized Hipsters",
        '1706531157': "Dual Trey Baker Snapback",
        '1711650735': "Silver Ceaseless",
        '1719477511': "Bah Humbug Flipped Cap",
        '1722750186': "Black Docks",
        '1724365230': "Stripy Yeti Snapback",
        '1724972851': "Hornet Guns",
        '1729183056': "White Vom Feuer Cap",
        '1731771637': "Black Diamond Stud (R)",
        '1736093737': "Red Suit Fedora",
        '1737799107': "Deck Enduring Watch",
        '1749088724': "Moss Digital Beret",
        '1757060059': "Gold Covgari Universe",
        '1758713732': "Skeleton Helmet",
        '1759289928': "Xero Gas Cap",
        '1761558892': "Brushstroke Full Face",
        '1761624451': "White Superior Glasses",
        '1764777830': "Fifty Kronos Quad",
        '1766375314': "Platinum Pendulus Galaxis",
        '1768064158': "Dusty Pink Undertaker Hat",
        '1768981672': "Spiked Gauntlet (L)",
        '1772824957': "LTD Cap",
        '1774503033': "Platinum Onyx Stud (R)",
        '1777408510': "Pink Pattern Dual Lens",
        '1777426664': "Roulette Kronos Quad",
        '1788575978': "Gold Noir Square Stud (L)",
        '1797325877': "Desert Digital Scope Night Vision",
        '1801201547': "Fukaru Cap",
        '1801518287': "Peach Camo Boonie Up",
        '1801697220': "White Lucky Plucker Cap",
        '1803355845': "Green Digital Utility Cap",
        '1806119913': "Brown Flight Helmet",
        '1807937089': "Flamejob Helmet",
        '1812655126': "Gold Spike Stud (R)",
        '1816249506': "Navy Trickster Snapback",
        '1825449478': "Black Bull Emic",
        '1827254217': "Gold Watch",
        '1827741081': "Yellow LED",
        '1829861542': "Deadline Green",
        '1830796002': "Dusk Urban Ski",
        '1831057942': "Midnight Beret",
        '1831101822': "Naughty Cap",
        '1832326262': "Peace Combat Helmet",
        '1839288714': "Orange Fiber Spiked",
        '1841520273': "Silver Retro Bubble",
        '1843830936': "Tortoiseshell Casuals",
        '1848940972': "Gray Bulletproof",
        '1850504894': "Burger Shot Logo Cap",
        '1855607109': "Chepalle Cap",
        '1857811503': "Stars Helmet",
        '1862030620': "Red Top Foam Hat",
        '1862408492': "Patriot Combat Helmet",
        '1863511255': "Skull Helmet",
        '1865093859': "Purple Neon Camo Forwards Cap",
        '1867286519': "Enema Gray Glasses",
        '1872275269': "Brown Digital Shielded Riot",
        '1874727181': "Yellow Guns",
        '1878060283': "Digital Helmet",
        '1882879280': "Moss Full Face",
        '1885853255': "Boars Fitted Cap",
        '1886138071': "Gold iFruit Link",
        '1888984560': "Light Wrist Chain (R)",
        '1890136623': "Platinum Onyx Studs",
        '1892879108': "Green Digital Beret",
        '1896116555': "Brown Eyewear",
        '1897981854': "Wine Coil Cap",
        '1900824849': "Yung Ancestor Backwards Cap",
        '1901175437': "White Retro Bubble",
        '1902156938': "Walnut Aviators",
        '1906953849': "STFU Flight Helmet",
        '1907959626': "Red Deep Shades",
        '1909561463': "Flecktarn Quad Lens",
        '1912943352': "Yellow Sweatbox Snapback",
        '1917082251': "Moss Digital Shielded Riot",
        '1917616924': "Deadline Pink",
        '1919336360': "Gold JC Helmet",
        '1925129615': "Black Beanie Cap",
        '1929649532': "Platinum SN Studs",
        '1930763872': "Yellow Sports",
        '1932327570': "Silver SASS Wrist Piece",
        '1932815241': "Black Ammu-Nation Cap",
        '1941670055': "Black Superior",
        '1941813588': "White Pork Pie",
        '1941866665': "Gold Superior",
        '1941939394': "Black Bulletproof",
        '1946500788': "Platinum SN Bullion Stud (R)",
        '1947432092': "Brown Shielded Riot",
        '1948577318': "Burst Helmet",
        '1950181044': "Yellow Kronos Submariner",
        '1950375886': "White Undertaker Hat",
        '1950800603': "Pink Pattern Full Face",
        '1952270061': "Fall Riot",
        '1953345639': "Checked Docks",
        '1954380523': "Royalty Crowex Rond",
        '1961752738': "Navy Suit Fedora",
        '1967315379': "Black Vom Feuer Cap",
        '1969901583': "Blue Cluckin' Bell Cap",
        '1970098906': "Platinum SN Bullion Stud (L)",
        '1973979949': "Blue Top Hat",
        '1977681474': "Black Gem Studs",
        '1982312244': "Red Mod Canvas",
        '1985163913': "Peach Digital Cap",
        '1987915332': "Red Saggy Beanie",
        '1988042933': "Shell Refined Glasses",
        '1988180712': "Gray Sweatbox Snapback",
        '1988738536': "Blue & Yellow Low Beanie",
        '1990786139': "Green Trends",
        '1991648664': "Leopard Dual Lens",
        '1993366836': "Gold Circle Stud (L)",
        '1995715588': "Tiger Dual Lens",
        '2001484922': "Coffee Broker Snapback",
        '2005591207': "Houndstooth Deep Shades",
        '2005705482': "Contrast Camo Boonie Down",
        '2008237453': "Patriot Cap",
        '2014140084': "Black Enduring Watch",
        '2016102499': "Gingerbread Flipped Cap",
        '2029314391': "Zebra Full Face",
        '2032784118': "Green Urban Ski",
        '2044342146': "Spade Kronos Pulse",
        '2046492779': "Ox Blood Shielded Riot",
        '2047234784': "Blue Stars Mod Helmet",
        '2049357828': "White LED Tan Strap",
        '2051292137': "Hawaiian Snow White",
        '2055429016': "Roulette Enduring Watch",
        '2056147345': "Aqua Camo Quad Lens",
        '2056915951': "Downhill Helmet",
        '2064144450': "Pink JC Helmet",
        '2065673869': "Black Rim Tint Aviators",
        '2067617710': "Dusk Check Suit Fedora",
        '2068824345': "Silver Covgari Universe",
        '2068890755': "Jungle Yeti Snapback",
        '2070580233': "Slate Elvis",
        '2072097035': "Green Stars Combat Helmet",
        '2072115726': "Gold JC Helmet",
        '2079317879': "Broker Black Hipsters",
        '2086319732': "Green Snakeskin Backwards Cap",
        '2090738330': "Enema Black Glasses",
        '2090808422': "Stars & Stripes Combat Helmet",
        '2091246818': "Skull and Snake Tied",
        '2092930270': "Pink Retro Bubble",
        '2093516866': "Crimson Helmet",
        '2095734694': "Teal Broker Cap",
        '2096519516': "Redwood Cap",
        '2099401956': "Ash Mod Pork Pie",
        '2104504236': "Contrast Camo Quad Lens",
        '2112230267': "Peach Camo Cap",
        '2119332380': "Low Santos Fitted Cap",
        '2119797232': "Clubs Earrings",
        '2120723888': "Suits Crowex Époque",
        '2122521882': "Black Chips Earrings",
        '2125947904': "Royal Enduring Watch",
        '2128933905': "Star and Stripes Spiked",
        '2131704888': "LSPD Riot",
        '2133080081': "Orange Fade Tint Aviators",
        '2146066521': "Black Cap",
        '-411722410': "Black Wraparounds",
        '-1432084031': "Gold Bull Emic",
        '-678593645': "Gray Bull Emic",
        '-915677360': "Silver Bull Emic",
        '-1989615813': "Slate Bull Emic",
        '-1291308423': "White Bull Emic",
        '-1545235404': "Purple Tint Bull Emic",
        '-1696478473': "Orange Elvis",
        '-1400148406': "Gray Elvis",
        '-567520885': "Black Elvis",
        '-238454587': "White Elvis",
        '-1015112656': "Blue Tint Elvis",
        '-966352384': "Pink Tint Elvis",
        '-1040520308': "Slate Hipsters",
        '-1959428606': "Candy Polarized Hipsters",
        '-1646629563': "White Guns",
        '-1943811624': "Gray Guns",
        '-263286212': "Pink Guns",
        '-66601447': "Black Summer Shades",
        '-145083158': "White Rust Shades",
        '-1190513632': "Slate Janitor Frames",
        '-1413801598': "Black Janitor Frames",
        '-578945785': "Gray Janitor Frames",
        '-229759321': "Ash Janitor Frames",
        '-884287311': "Tan Janitor Frames",
        '-49562574': "Smoke Janitor Frames",
        '-640754438': "Enema Tortoiseshell Glasses",
        '-383943785': "Enema Walnut Glasses",
        '-976767764': "Enema Smoke Glasses",
        '-1272565378': "Gold Aviators",
        '-286644475': "Steel Aviators",
        '-2117907267': "Silver Aviators Blue Tint",
        '-818092125': "Silver Aviators Copper Tint",
        '-613286995': "Black Casuals",
        '-2086089700': "Red Casuals",
        '-1838388829': "White Casuals",
        '-308207613': "Camo Collection Casuals",
        '-2102127442': "Silver Eyewear",
        '-752947795': "Hawaiian Snow Black",
        '-2005477298': "Hawaiian Snow Ash",
        '-1320703489': "Hawaiian Snow Marble",
        '-1013690728': "Hawaiian Snow Walnut",
        '-1211873923': "Deep Sea Watch",
        '-1904250124': "Black Watch",
        '-2134190197': "Gold Faced Silver Watch",
        '-1515417841': "White LED Black Strap",
        '-731288440': "Red LED White Strap",
        '-802858881': "Red Sports",
        '-1109150724': "White Sports",
        '-515278137': "Blue Sports",
        '-1816620390': "Zeus Flight Helmet",
        '-979208595': "Green & Yellow Flight Helmet",
        '-1557843597': "DFA Flight Helmet",
        '-619830968': "Snake Killers Flight Helmet",
        '-857373449': "Mind Over Matter Flight Helmet",
        '-732753242': "Zebra Flight Helmet",
        '-511431416': "Tiger Flight Helmet",
        '-802387391': "Yellow & Black Flight Helmet",
        '-2136613394': "Lime & Black Flight Helmet",
        '-1327251863': "51st Squad Flight Helmet",
        '-1610842821': "Charcoal Bulletproof",
        '-1968549225': "Tan Bulletproof",
        '-729343262': "Pink Tint Wraparounds",
        '-489343106': "Purple Tint Wraparounds",
        '-820867051': "Orange Tint Wraparounds",
        '-557994133': "Red Tint Wraparounds",
        '-328316212': "Crimson Wraparounds",
        '-97491376': "Green Tint Wraparounds",
        '-1257185072': "Green Canvas Hat",
        '-75666008': "Gray Canvas Hat",
        '-451657514': "Urban Canvas Hat",
        '-1339992339': "Red Canvas Hat",
        '-1987638855': "Floral Canvas Hat",
        '-1633579233': "Tan Pork Pie",
        '-1875283381': "Brown Pork Pie",
        '-2112956938': "Gray Pork Pie",
        '-175555347': "Purple Pork Pie",
        '-952049571': "Black Pork Pie",
        '-1193131104': "Green Pork Pie",
        '-1435228476': "Blue Pork Pie",
        '-361888891': "Blue Sports",
        '-1465678599': "Silver Refined",
        '-712712517': "Gold Refined",
        '-16367277': "White Refined Glasses",
        '-4836579': "Brown Refined",
        '-1549239545': "Black Refined Glasses",
        '-2055918566': "Steel Superior",
        '-214003082': "Black Bowler Hat",
        '-91135616': "Silver Bowler Hat",
        '-313997585': "White Bowler Hat",
        '-1438449536': "Olive Bowler Hat",
        '-1138580417': "Purple Bowler Hat",
        '-1431961294': "Lobster Bowler Hat",
        '-1126849135': "Brown Bowler Hat",
        '-2062567910': "Vintage Bowler Hat",
        '-682403188': "Cream Bowler Hat",
        '-1725279696': "Black Top Hat",
        '-1889967636': "Ash Top Hat",
        '-1627815748': "Navy Top Hat",
        '-582943414': "Silver Top Hat",
        '-880911931': "White Top Hat",
        '-776912067': "Light Gray Top Hat",
        '-472651902': "Olive Top Hat",
        '-1440812007': "Purple Top Hat",
        '-1130620653': "Lobster Top Hat",
        '-176682294': "Cream Top Hat",
        '-391281267': "Star Frame Shades",
        '-1080701017': "Star Spangled Shades",
        '-459563073': "USA Bucket Hat",
        '-1875794543': "USA Top Hat",
        '-43142523': "Patriotic Beanie",
        '-4635150': "USA Crown",
        '-1985316670': "USA Boppers",
        '-211721637': "Pisswasser Beer Hat",
        '-1027636968': "Benedict Beer Hat",
        '-1880351886': "J Lager Beer Hat",
        '-442186014': "Patriot Beer Hat",
        '-1438134231': "Blarneys Beer Hat",
        '-1066861461': "Supa Wet Beer Hat",
        '-1634132379': "Blue Check Suit Fedora",
        '-123120877': "Beige Check Suit Fedora",
        '-350570506': "Royal Suit Fedora",
        '-1006180032': "Black Suit Fedora",
        '-711160725': "White Suit Fedora",
        '-1569577449': "Sky Check Suit Fedora",
        '-1307130528': "Chocolate Suit Fedora",
        '-35234598': "Mustard Suit Fedora",
        '-616851579': "Classic Check Suit Fedora",
        '-1726767608': "Gold SN Stud (L)",
        '-947488019': "Platinum SN Stud (L)",
        '-381434971': "Gold SN Stud (R)",
        '-526110118': "Gold Onyx Stud (R)",
        '-218704129': "Black Onyx Stud (R)",
        '-1711962933': "Gold Onyx Studs",
        '-1940821633': "Black Onyx Studs",
        '-2118198745': "Gold SN Bullion Stud (R)",
        '-1938038754': "Platinum SN Bullion Studs",
        '-1613924594': "Gold SN Studs",
        '-1225935980': "Platinum Skull Stud (L)",
        '-1968872302': "Silver Skull Stud (R)",
        '-2113107657': "Gold Skull Studs",
        '-1346116443': "Black Skull Studs",
        '-1511080238': "Platinum Spike Stud (L)",
        '-107066662': "Platinum Spike Studs",
        '-344936833': "Gold Spike Studs",
        '-695221873': "Gold Onyx Stud (L)",
        '-690717941': "Silver Covgari Explorer",
        '-1047375737': "Pink Gold Covgari Explorer",
        '-214748212': "Gold Covgari Explorer",
        '-238423512': "Gold Pendulus Gravity",
        '-1918605886': "Steel Covgari Universe",
        '-1676658964': "Copper Gaulle Destiny",
        '-445724248': "Vintage Gaulle Destiny",
        '-149066491': "Silver Gaulle Destiny",
        '-557947194': "Carbon Medici Radial",
        '-659006790': "Silver Medici Radial",
        '-987090018': "Steel Medici Radial",
        '-1416514943': "Carbon Pendulus Timestar",
        '-2123628271': "Red Kronos Submariner",
        '-740313982': "Red iFruit Snap",
        '-966944386': "Blue iFruit Snap",
        '-2124443773': "Mint iFruit Snap",
        '-1905715277': "Gold Angled Hoop (L)",
        '-1656310418': "Black Angled Hoop (L)",
        '-234070248': "Platinum Angled Hoop (L)",
        '-534631979': "Gold Angled Hoop (R)",
        '-877330185': "Black Angled Hoop (R)",
        '-581000118': "Platinum Angled Hoop (R)",
        '-600796580': "Gold Pillow Stud (R)",
        '-414537584': "Black Pillow Stud (R)",
        '-175848188': "Platinum Pillow Stud (R)",
        '-1204373760': "Gold Pillow Studs",
        '-1503259797': "Black Pillow Studs",
        '-1262768106': "Platinum Pillow Studs",
        '-2073246032': "Black Gem Stud (L)",
        '-1233507638': "Platinum Gem Stud (L)",
        '-1120594711': "Gold Gem Studs",
        '-507912718': "Platinum Gem Studs",
        '-827209439': "Gold Illusion Square Stud (L)",
        '-2133283484': "Gold Grid Square Stud (L)",
        '-366280685': "Platinum Grid Square Stud (L)",
        '-567623958': "Gold Illusion Square Stud (R)",
        '-1587788466': "Gold Grid Square Stud (R)",
        '-1125023196': "Platinum Grid Square Studs",
        '-742084662': "Platinum Noir Square Studs",
        '-137881896': "Gold Angled Hoops",
        '-332604528': "Platinum Circle Stud (R)",
        '-651923792': "Gold Circle Studs",
        '-1517942924': "Platinum Circle Studs",
        '-544021598': "Gold Diamond Stud (L)",
        '-1252225226': "Black Diamond Stud (L)",
        '-518658404': "Platinum Diamond Stud (L)",
        '-1268058004': "Gold Diamond Studs",
        '-2092394968': "Black Diamond Studs",
        '-1846660237': "Platinum Diamond Studs",
        '-2041139979': "Black Pillow Stud (L)",
        '-1814280192': "Platinum Pillow Stud (L)",
        '-1262009015': "Silver Kronos Quantum",
        '-980621612': "Carbon Kronos Quantum",
        '-68500346': "Gold Covgari Supernova",
        '-1821248618': "Pink Gold Covgari Supernova",
        '-1448230817': "Gold Pendulus Galaxis",
        '-393006070': "Silver Crowex Chromosphere",
        '-1839986779': "Gold Crowex Chromosphere",
        '-856392475': "Carbon Crowex Chromosphere",
        '-1743979784': "Pink Gold Vangelico Geomeister",
        '-2042898602': "Silver Vangelico Geomeister",
        '-1940429943': "Gold Vangelico Geomeister",
        '-1832488053': "Pink Gold iFruit Link",
        '-726329981': "Red Broker Snapback",
        '-908656697': "Charcoal Broker Snapback",
        '-1043967635': "Diamond Yeti Snapback",
        '-763432226': "Cherry Broker Snapback",
        '-1607233976': "Tan Fruntalot Snapback",
        '-1358746649': "Green Sweatbox Snapback",
        '-1987878680': "Forest Trickster Snapback",
        '-1220060504': "Cream Trickster Snapback",
        '-475949529': "Red Yeti Snapback",
        '-1772422237': "White Harsh Souls Snapback",
        '-1475633404': "Navy Fruntalot Snapback",
        '-2125278829': "All Black Broker Snapback",
        '-1708154759': "Brown Broker Snapback",
        '-2111213455': "Orange Sweatbox Snapback",
        '-1712641707': "Magnetics Script Fitted Cap",
        '-1942647318': "Magnetics Block Fitted Cap",
        '-508544810': "Strawberry Fitted Cap",
        '-728064341': "Black SA Fitted Cap",
        '-19139795': "Davis Fitted Cap",
        '-1356946401': "Blue Digital Cap",
        '-36912774': "Brown Digital Cap",
        '-1590109664': "Contrast Camo Cap",
        '-1821163883': "Cobble Cap",
        '-268798050': "Brushstroke Cap",
        '-664385418': "Flecktarn Cap",
        '-898847613': "Light Woodland Cap",
        '-1282539822': "Moss Cap",
        '-325279974': "Green Digital Cap",
        '-86819961': "Gray Digital Cap",
        '-996749553': "Fall Cap",
        '-740332128': "Dark Woodland Cap",
        '-1607924172': "Crosshatch Cap",
        '-1930469439': "Gray Woodland Cap",
        '-1042663804': "Aqua Camo Boonie Down",
        '-1340304631': "Splinter Boonie Down",
        '-173957310': "Sand Boonie Down",
        '-139419736': "Olive Boonie Down",
        '-520523206': "Light Brown Boonie Down",
        '-144601291': "Dark Woodland Boonie Down",
        '-517578049': "Crosshatch Boonie Down",
        '-757086670': "Moss Digital Boonie Down",
        '-990336412': "Gray Woodland Boonie Down",
        '-167636473': "Splinter Boonie Up",
        '-64840108': "Cobble Boonie Up",
        '-1554191162': "Light Woodland Boonie Up",
        '-1772563778': "Moss Boonie Up",
        '-2004404453': "Sand Boonie Up",
        '-1724056409': "Green Digital Boonie Up",
        '-1846948468': "Black Boonie Up",
        '-1690902490': "Slate Boonie Up",
        '-1465124100': "White Boonie Up",
        '-424274024': "Peach Digital Boonie Up",
        '-192629963': "Fall Boonie Up",
        '-1041412605': "Crosshatch Boonie Up",
        '-800462148': "Moss Digital Boonie Up",
        '-1634236584': "Gray Woodland Boonie Up",
        '-864599477': "Blue Digital Beret",
        '-935380517': "Brown Digital Beret",
        '-68364806': "Aqua Camo Beret",
        '-955126711': "Peach Camo Beret",
        '-689665042': "Brushstroke Beret",
        '-475093630': "Flecktarn Beret",
        '-236830231': "Light Woodland Beret",
        '-1915192873': "Moss Beret",
        '-1641211264': "Sand Beret",
        '-1304443827': "Olive Beret",
        '-1592974872': "Light Brown Beret",
        '-492605789': "Gray Digital Beret",
        '-1209624278': "Dark Woodland Beret",
        '-1878405154': "Blue Digital Utility Cap",
        '-1176636084': "Flecktarn Utility Cap",
        '-962261190': "Light Woodland Utility Cap",
        '-739726911': "Moss Utility Cap",
        '-500513211': "Sand Utility Cap",
        '-1466510298': "Black Utility Cap",
        '-692277135': "Slate Utility Cap",
        '-167383293': "White Utility Cap",
        '-432287889': "Chocolate Utility Cap",
        '-1864129344': "Light Brown Utility Cap",
        '-454362741': "Gray Woodland Utility Cap",
        '-1992532759': "Flecktarn Beanie Cap",
        '-1728250774': "Sand Beanie Cap",
        '-1717472429': "White Beanie Cap",
        '-2073605921': "Chocolate Beanie Cap",
        '-226714852': "Fall Beanie Cap",
        '-937900459': "Crosshatch Beanie Cap",
        '-696950002': "Moss Digital Beanie Cap",
        '-1404891478': "Gray Woodland Beanie Cap",
        '-1361097493': "Red Hawk & Little Cap",
        '-1167465472': "Black Hawk & Little Cap",
        '-1124704392': "Warstock Cap",
        '-2105609173': "White Shrewsbury Cap",
        '-1864920868': "Black Shrewsbury Cap",
        '-1036580403': "Red Hawk & Little Cap",
        '-203035350': "Black Hawk & Little Cap",
        '-969630947': "Shatter Pattern Helmet",
        '-1198063650': "Stars Helmet",
        '-1630059638': "Vibe Helmet",
        '-1596927918': "Squared Helmet",
        '-1126236551': "Snakeskin Helmet",
        '-1936187924': "Boost Helmet",
        '-1387569326': "Atomic Helmet",
        '-2012223930': "Nagasaki Moto Cap",
        '-1304118613': "Rebel Radio Cap",
        '-1543430620': "Redwood Cap",
        '-854101936': "Scooter Brothers Cap",
        '-1061103709': "The Mount Cap",
        '-616035151': "Total Ride Cap",
        '-1962767847': "Cunning Stunts Cap",
        '-1654116636': "Flash Cap",
        '-1485356286': "Fukaru Cap",
        '-1178212449': "Globe Oil Cap",
        '-766633809': "Grotti Cap",
        '-288304716': "Lampadati Racing Cap",
        '-465032504': "White JC Helmet",
        '-1311914548': "Blue JC Helmet",
        '-712667837': "Black JC Helmet",
        '-332694519': "Red JC Helmet",
        '-687713865': "Black JC Helmet",
        '-1297989602': "Silver JC Helmet",
        '-1913882957': "Gold Retro Bubble",
        '-1895915257': "Gold Retro Bubble",
        '-1366562228': "SA Assault Helmet",
        '-418915513': "Tri Helmet",
        '-112099366': "Sprunk Helmet",
        '-1197834675': "Skeleton Helmet",
        '-1497113952': "Death Helmet",
        '-720029882': "Cobble Helmet",
        '-1016622101': "Cubist Helmet",
        '-801920437': "Atomic Helmet",
        '-329814172': "Slalom Helmet",
        '-360345197': "Glossy Mirrored Biker",
        '-1885895266': "Matte Mirrored Biker",
        '-482703775': "Cream Retro Bubble",
        '-781983052': "Gray Retro Bubble",
        '-382013997': "Red Retro Bubble",
        '-695187330': "Black Retro Bubble",
        '-170415205': "Pale Blue Retro Bubble",
        '-1357132328': "Cream Retro Bubble",
        '-507628768': "Gray Retro Bubble",
        '-294613700': "Black Retro Bubble",
        '-51762641': "Pink Retro Bubble",
        '-736323619': "Orange Retro Bubble",
        '-835659190': "White Stars Mod Helmet",
        '-1305853145': "Swirl Mod Helmet",
        '-999626840': "Red Mod Helmet",
        '-1602904130': "Brown Mod Helmet",
        '-1336885388': "White Flag Mod Helmet",
        '-1956252257': "Black Slash Mod Helmet",
        '-1147578719': "Nagasaki Racing Cap",
        '-700281869': "Nagasaki Moto Cap",
        '-416731712': "Patriot Cap",
        '-244104620': "Rebel Radio Cap",
        '-1892090399': "Scooter Brothers Cap",
        '-1609457774': "The Mount Cap",
        '-1437617138': "Total Ride Cap",
        '-2039456333': "Chepalle Cap",
        '-1807877810': "Cunning Stunts Cap",
        '-1048030226': "Globe Oil Cap",
        '-574649252': "Grotti Cap",
        '-1544972111': "Imponte Racing Cap",
        '-1306544867': "Lampadati Racing Cap",
        '-99908782': "Black & Silver Trends",
        '-1991976427': "Sunset Docks",
        '-1727628904': "Brown Docks",
        '-1432441645': "White Dock Glasses",
        '-402548847': "Red Docks",
        '-1623489018': "Shell Dock Glasses",
        '-1357503045': "Black Dock Glasses",
        '-1461972223': "Blue Saggy Beanie",
        '-314795075': "Yellow Saggy Beanie",
        '-2013625452': "Gray Trilby",
        '-818048515': "Black Trilby",
        '-453526159': "White Trilby",
        '-297480181': "Cream Trilby",
        '-1716464887': "Red Fedora",
        '-1348534555': "Pink Fedora",
        '-24054285': "Red LED White Strap",
        '-1943596767': "Red LED Brown Strap",
        '-506610579': "White LED Gold Strap",
        '-209952822': "Yellow LED Yellow Strap",
        '-2132472570': "Gray Earpiece",
        '-590910674': "LCD Earpiece",
        '-684016666': "Glossy Black Off-road",
        '-915226199': "Glossy All Black Biker",
        '-860205401': "Matte Mirrored Biker",
        '-1410320276': "Tan Cap",
        '-1823996132': "Khaki Cap",
        '-1980606050': "SecuroServ Cap",
        '-1854813796': "SecuroServ Backwards Cap",
        '-1328822575': "Burger Shot Fries Cap",
        '-304591325': "Pink Hotdogs Cap",
        '-919436072': "Red Lucky Plucker Cap",
        '-123378755': "Lucky Plucker Red Pattern Cap",
        '-503007616': "Lucky Plucker White Pattern Cap",
        '-808250851': "White Pisswasser Cap",
        '-1158092695': "Black Pisswasser Cap",
        '-1320168169': "White Taco Bomb Cap",
        '-1738595530': "Green Taco Bomb Cap",
        '-1969587601': "Burger Shot Logo Cap",
        '-1744451024': "Burger Shot Fries Cap",
        '-1326628194': "White Pisswasser Cap",
        '-1566005739': "Black Pisswasser Cap",
        '-1786606647': "White Taco Bomb Cap",
        '-2048856898': "Green Taco Bomb Cap",
        '-117896163': "Cluckin' Bell Logos Cap",
        '-520317349': "Burger Shot Canvas Hat",
        '-280939804': "Cluckin' Bell Canvas Hat",
        '-764306253': "Red Bigness Cap",
        '-1428303080': "Banana Squash Cap",
        '-405123824': "Multicolor Leaves Güffy Cap",
        '-1594050006': "Purple Güffy Cap",
        '-1296605793': "Off-White Bigness Cap",
        '-1911057312': "Gray Abstract Bigness Cap",
        '-430652239': "Pale Abstract Bigness Cap",
        '-736223164': "Primary Squash Cap",
        '-1970893546': "Spots Squash Cap",
        '-2112164538': "Glow Star Tree",
        '-2026050716': "Glow Pudding Woolly Knit",
        '-1730454111': "Woodland Combat Helmet",
        '-45238847': "Brown Digital Combat Helmet",
        '-291268499': "MP Combat Helmet",
        '-1176785186': "Tiger Combat Helmet",
        '-621612788': "Police Combat Helmet",
        '-852601469': "Flames Combat Helmet",
        '-34330691': "Tan Digital Combat Helmet",
        '-342457598': "Aqua Camo Combat Helmet",
        '-1474317841': "Light Brown Peaked Cap",
        '-1655071645': "Moss Peaked Cap",
        '-999200110': "Gray Digital Peaked Cap",
        '-1179232996': "Dark Woodland Peaked Cap",
        '-522902695': "Red Peaked Cap",
        '-686616619': "Chocolate Peaked Cap",
        '-1048798206': "Navy Peaked Cap",
        '-7425420': "Brushstroke Garrison Cap",
        '-170352888': "Moss Garrison Cap",
        '-2073346945': "Beige Garrison Cap",
        '-1417803092': "Zebra Garrison Cap",
        '-188528539': "Teal Garrison Cap",
        '-480172639': "Aqua Camo Garrison Cap",
        '-783449734': "Black Garrison Cap",
        '-156120006': "Chocolate Garrison Cap",
        '-455399283': "Red Garrison Cap",
        '-2045542796': "Peach Digital Full Face",
        '-1706187040': "Crosshatch Full Face",
        '-2090501872': "Green Pattern Full Face",
        '-607475235': "Splinter Full Face",
        '-1294763423': "Brown Full Face",
        '-1959098910': "Black & Red Full Face",
        '-1725282545': "White Full Face",
        '-609714837': "Peach Digital Dual Lens",
        '-802527629': "Fall Dual Lens",
        '-1024439297': "Dark Woodland Dual Lens",
        '-1283511011': "Crosshatch Dual Lens",
        '-1524494237': "Green Pattern Dual Lens",
        '-59326709': "Splinter Dual Lens",
        '-114653984': "Brown Dual Lens",
        '-1753024723': "Zebra Dual Lens",
        '-1689958125': "Leopard Dual Lens",
        '-1470560043': "Black Dual Lens",
        '-1111215189': "Moss Dual Lens",
        '-1879524693': "Tiger Dual Lens",
        '-695580723': "Pink Pattern Dual Lens",
        '-1412599212': "Peach Digital Dual Lens",
        '-2113724736': "Fall Dual Lens",
        '-957208419': "Dark Woodland Dual Lens",
        '-365334741': "Green Pattern Dual Lens",
        '-1199928402': "Gray Woodland Dual Lens",
        '-254606878': "Cobble Dual Lens",
        '-2010625924': "Brown Digital Dual Lens",
        '-1457813739': "Black Quad Lens",
        '-640030575': "Moss Quad Lens",
        '-516809009': "Fall Quad Lens",
        '-294995648': "Dark Woodland Quad Lens",
        '-54209036': "Crosshatch Quad Lens",
        '-1487623403': "Gray Woodland Quad Lens",
        '-1025416658': "Splinter Quad Lens",
        '-1883057071': "Brushstroke Quad Lens",
        '-2139376181': "Black & Red Quad Lens",
        '-1991424146': "Zebra Quad Lens",
        '-1235869302': "White Quad Lens",
        '-983949611': "Pink Pattern Quad Lens",
        '-208143536': "Peach Digital Quad Lens",
        '-489203249': "Fall Quad Lens",
        '-1893944741': "Dark Woodland Quad Lens",
        '-766887747': "Crosshatch Quad Lens",
        '-1048832223': "Green Pattern Quad Lens",
        '-272698458': "Gray Woodland Quad Lens",
        '-581447976': "Aqua Camo Quad Lens",
        '-796187335': "Brown Quad Lens",
        '-788229502': "Brushstroke Quad Lens",
        '-1026099673': "Flecktarn Quad Lens",
        '-1398224437': "Black & Red Quad Lens",
        '-1636684450': "Zebra Quad Lens",
        '-1095663226': "White Quad Lens",
        '-1543025614': "Leopard Quad Lens",
        '-1990460268': "Charcoal Low Beanie",
        '-704807738': "Aqua Camo Low Beanie",
        '-466314956': "Tiger Low Beanie",
        '-2073536091': "Tricolore Low Beanie",
        '-1843694325': "Blue Striped Low Beanie",
        '-1595206994': "Rasta Trio Low Beanie",
        '-1082568758': "Brown Striped Low Beanie",
        '-687531987': "White Low Beanie",
        '-446614299': "Light Blue Low Beanie",
        '-473714238': "Gray Woodland Low Beanie",
        '-1369817638': "Gold Fame or Shame Mics",
        '-1339276930': "Silver Fame or Shame Mics",
        '-707348243': "Spades Earrings",
        '-784802675': "Red Dice Earrings",
        '-1982542394': "Tan Dice Earrings",
        '-1758959507': "Gray Dice Earrings",
        '-53962333': "Yellow Chips Earrings",
        '-369003499': "Red Chips Earrings",
        '-676573333': "Pink Chips Earrings",
        '-1253464949': "Dot Fade Aviators",
        '-1402727744': "Herringbone Aviators",
        '-249357251': "Blue Argyle Aviators",
        '-1974478729': "Two Tone Deep Shades",
        '-778463005': "Mute Deep Shades",
        '-479773570': "Sunrise Deep Shades",
        '-1525334085': "Black Fame or Shame Shades",
        '-314716145': "Red Fame or Shame Shades",
        '-894498062': "White Fame or Shame Shades",
        '-238377153': "Digital Deep Shades",
        '-44908059': "White The Diamond Cap",
        '-275175822': "Black The Diamond Cap",
        '-1993607127': "Black Broker Cap",
        '-724529291': "Red Flying Bravo Cap",
        '-471061076': "Teal SC Broker Cap",
        '-1673847197': "Purple SC Broker Cap",
        '-1364638913': "Red SC Broker Cap",
        '-505476354': "White LS Diamond Cap",
        '-977899427': "White SC Broker Cap",
        '-1150264367': "Gray Yeti Cap",
        '-982460894': "Black LS Diamond Cap",
        '-1607496800': "Red The Diamond Cap",
        '-1325454017': "Orange The Diamond Cap",
        '-73153909': "Blue LS Diamond Cap",
        '-425912194': "Orange LS Diamond Cap",
        '-131679343': "Purple The Diamond Cap",
        '-1533441358': "Pink LS Diamond Cap",
        '-1883021050': "White Broker Cap",
        '-440726288': "Black Broker Cap",
        '-787160156': "Teal Broker Cap",
        '-183194717': "Green Flying Bravo Cap",
        '-412676884': "Colors Yeti Cap",
        '-203184667': "Woodland Yeti Cap",
        '-504095299': "Black LS Diamond Cap",
        '-1665592504': "Green The Diamond Cap",
        '-1959822088': "Silver Enduring Watch",
        '-166996477': "Silver Kronos Tempo",
        '-438487642': "Black Kronos Tempo",
        '-676980424': "Gold Fifty Kronos Tempo",
        '-1392360467': "Baroque Kronos Tempo",
        '-2061908479': "Gold Kronos Pulse",
        '-1330799320': "Black Kronos Pulse",
        '-566200243': "Silver Fifty Kronos Pulse",
        '-886320604': "Silver Roulette Kronos Pulse",
        '-1044332734': "Green Fame or Shame Kronos",
        '-1341908023': "Blue Fame or Shame Kronos",
        '-566364100': "Black Fame or Shame Kronos",
        '-724342475': "Gold Kronos Ära",
        '-1559755361': "Silver Kronos Ära",
        '-1331060510': "Black Kronos Ära",
        '-348285431': "Brown Spade Kronos Ära",
        '-1293758104': "Black Ceaseless",
        '-913244476': "Spade Ceaseless",
        '-1134238608': "Mixed Metals Ceaseless",
        '-1960902171': "Roulette Ceaseless",
        '-1887285275': "Roulette Crowex Époque",
        '-1534372325': "Gold Kronos Quad",
        '-759025012': "Silver Kronos Quad",
        '-1757529215': "Suits Kronos Quad",
        '-1621110605': "Gold Crowex Rond",
        '-1846135328': "Black Crowex Rond",
        '-2084824724': "Spade Crowex Rond",
        '-664190267': "Dice Crowex Rond",
        '-1189894313': "Gold SASS Bracelet",
        '-1489173590': "Black SASS Bracelet",
        '-554175663': "Tan Outlaw Goggles",
        '-97932876': "Mono Outlaw Goggles",
        '-360904101': "Ox Blood Outlaw Goggles",
        '-1699932676': "Tropical Urban Ski",
        '-1964280199': "Yellow Urban Ski",
        '-785117699': "Ride Free Tied",
        '-444713327': "Ace of Spades Tied",
        '-1217141458': "Black Spiked",
        '-767223088': "Ride Free Spiked",
        '-510412435': "Ace of Spades Spiked",
        '-204317206': "Skull and Snake Spiked",
        '-677956758': "Green Faggio Mod",
        '-2141338720': "Cream Mod Canvas",
        '-1509617934': "Cyan Mod Canvas",
        '-744166863': "White Mod Canvas",
        '-1746832805': "Ash Mod Canvas",
        '-1977755948': "Navy Mod Canvas",
        '-322003836': "Dark Red Mod Canvas",
        '-1008973152': "Moss Mod Canvas",
        '-917246650': "Cream Mod Pork Pie",
        '-1289371414': "Red Mod Pork Pie",
        '-1849917928': "White Mod Pork Pie",
        '-227950739': "Moss Mod Pork Pie",
        '-1000649444': "Finned Skull Cap",
        '-642849883': "Spiked Skull Cap",
        '-455132815': "Black Dome",
        '-98016253': "Carbon Dome",
        '-1796761261': "Orange Fiber Dome",
        '-1424046655': "Star and Stripes Dome",
        '-1150982578': "Green Dome",
        '-910949653': "Feathers Dome",
        '-577557847': "Ox and Hatchets Dome",
        '-204056785': "Ride Free Dome",
        '-1630133255': "Chromed Dome",
        '-2000564804': "Deadline Yellow",
        '-1221023079': "Deadline Green",
        '-1535671017': "Deadline Orange",
        '-773922843': "Deadline Purple",
        '-15484338': "Deadline Pink",
        '-305293374': "Deadline Red",
        '-1362592721': "Deadline Yellow",
        '-2003456082': "Deadline Purple",
        '-27747534': "Deadline White",
        '-477253165': "Chunky Wrist Chain (L)",
        '-539860110': "Square Wrist Chain (L)",
        '-1220182204': "Skull Wrist Chain (L)",
        '-1004783514': "Black Gauntlet (L)",
        '-1303178028': "Chocolate Gauntlet (L)",
        '-343341249': "Tan Gauntlet (L)",
        '-641899608': "Ox Blood Gauntlet (L)",
        '-652602146': "Skull Wrist Chain (R)",
        '-1894083573': "Tread Wrist Chain (R)",
        '-1594423916': "Black Gauntlet (R)",
        '-851943914': "Chocolate Gauntlet (R)",
        '-140135696': "Tan Gauntlet (R)",
        '-1218596247': "Ox Blood Gauntlet (R)",
        '-230136623': "White Riot",
        '-523239484': "Gray Woodland Riot",
        '-287204377': "Brushstroke Riot",
        '-57428149': "Moss Digital Riot",
        '-585614735': "Gray Riot",
        '-824861204': "Moss Riot",
        '-1079836793': "Brown Digital Riot",
        '-1454058773': "Gray Digital Riot",
        '-1807832897': "Crosshatch Riot",
        '-2048390126': "Blue Digital Riot",
        '-1860853015': "Fall Riot",
        '-2025615547': "Aqua Camo Riot",
        '-470808273': "Brushstroke Riot",
        '-703435404': "Moss Digital Riot",
        '-391933294': "MP Riot",
        '-631441915': "LSPD Riot",
        '-1371850072': "Gray Riot",
        '-1135061278': "Moss Riot",
        '-922292161': "Brown Digital Riot",
        '-675476053': "Gray Digital Riot",
        '-2112363934': "Aqua Camo Riot",
        '-161711824': "Black Shielded Riot",
        '-872143744': "Cream Shielded Riot",
        '-894989492': "Fall Shielded Riot",
        '-661346522': "Aqua Camo Shielded Riot",
        '-2122352383': "Gray Woodland Shielded Riot",
        '-1204525458': "No Master Shielded Riot",
        '-1444001310': "Police Shielded Riot",
        '-1852821611': "Blue Shielded Riot",
        '-53115362': "Gray Digital Shielded Riot",
        '-1908182610': "Aqua Camo Shielded Riot",
        '-294669823': "Police Shielded Riot",
        '-1429103178': "Stone Gray Shielded Riot",
        '-1170391923': "Brown Shielded Riot",
        '-872521713': "Ox Blood Shielded Riot",
        '-2091528513': "Gray Digital Shielded Riot",
        '-1786318047': "Contrast Camo Shielded Riot",
        '-461899376': "Yellow Firefighter",
        '-920272148': "Orange Firefighter",
        '-177002026': "Yellow Firefighter & Goggles",
        '-1134092333': "Black Scope Night Vision",
        '-951831155': "Sage Scope Night Vision",
        '-721301240': "Beige Scope Night Vision",
        '-215708219': "White Scope Night Vision",
        '-61890533': "Beige Digital Scope Night Vision",
        '-612573590': "Desert Digital Scope Night Vision",
        '-1303211357': "Stone Scope Night Vision",
        '-477399788': "White Scope Night Vision",
        '-707962472': "Beige Digital Scope Night Vision",
        '-1762148013': "Bugstars Forwards Cap",
        '-870700137': "Prison Authority Forwards Cap",
        '-1168472040': "Yung Ancestor Forwards Cap",
        '-443330249': "Black Forwards Cap",
        '-673139246': "Gray Forwards Cap",
        '-244934824': "Brown Skull Forwards Cap",
        '-1527939481': "Green Neon Camo Forwards Cap",
        '-907568672': "Light Gray Forwards Cap",
        '-1092735280': "Green Snakeskin Forwards Cap",
        '-1786029017': "Purple Snakeskin Forwards Cap",
        '-388179942': "Teal Forwards Cap",
        '-81560409': "Smiley Forwards Cap",
        '-2055630507': "Gray Digital Forwards Cap",
        '-1749862968': "Blue Digital Forwards Cap",
        '-592210348': "Black Backwards Cap",
        '-972592884': "Gray Backwards Cap",
        '-1051967714': "Toothy Grin Backwards Cap",
        '-1956195500': "Wolf Backwards Cap",
        '-1648789511': "Gray Camo Backwards Cap",
        '-435943283': "Black Skull Backwards Cap",
        '-143807648': "Blood Cross Backwards Cap",
        '-1031913086': "Brown Skull Backwards Cap",
        '-738925457': "Green Camo Backwards Cap",
        '-1203647103': "Light Gray Backwards Cap",
        '-1582522281': "Red Backwards Cap",
        '-1813117734': "Teal Backwards Cap",
        '-46049409': "Smiley Backwards Cap",
        '-397234782': "Blue Digital Backwards Cap",
        '-942433779': "Orange Construction Helmet",
        '-625131552': "White Construction Helmet",
        '-1291741217': "Black Undertaker Hat",
        '-1070321084': "Dark Gray Undertaker Hat",
        '-1234639842': "Ash Undertaker Hat",
        '-831303998': "Dusty Violet Undertaker Hat",
        '-604968515': "Light Gray Undertaker Hat",
        '-1768300788': "Red Undertaker Hat",
        '-1528464477': "Terracotta Undertaker Hat",
        '-1656624104': "Cream Undertaker Hat",
        '-1892724749': "Ivory Undertaker Hat",
        '-512146386': "Holly Tree",
        '-198481518': "Red Stripy Tree",
        '-837051021': "Green Stripy Tree",
        '-556187922': "Star Tree",
        '-687231161': "Santa Tree",
        '-142544843': "Elf Tree",
        '-882756821': "Naughty Elf Woolly Trail",
        '-1242625979': "Happy Elf Woolly Trail",
        '-1358792084': "Silly Elf Woolly Trail",
        '-944399713': "Blue Snowflake Cap",
        '-703154335': "Nice Cap",
        '-558053199': "Gingerbread Cap",
        '-320084721': "Bah Humbug Cap",
        '-1972900644': "Red Snowflake Flipped Cap",
        '-1287194865': "Red Santa Hat",
        '-1581755406': "Green Santa Hat",
        '-772482596': "Reindeer Antlers",
        '-2021286443': "Charcoal Suit Fedora"
      },
      'female': {
        '3113547': "Black Chips Earrings",
        '4068556': "Lime & Black Flight Helmet",
        '5422647': "White Dice Earrings",
        '7690218': "Black Broker Cap",
        '9136252': "Ride Free Tied",
        '9215386': "Red Camo Garrison Cap",
        '18623563': "Pale Blue Retro Bubble",
        '19989197': "Gold Didier Sachs Mignon",
        '20800824': "Gold Kronos Pulse",
        '24981911': "Diamonds Earrings",
        '28678404': "Black Sports",
        '29878598': "Cream Mod Pork Pie",
        '37122687': "Beige Digital Scope Night Vision",
        '38181873': "Atomic Cap",
        '39686519': "Leopard Dual Lens",
        '40909304': "Red Backwards Cap",
        '44037358': "Light Gray Bowler Hat",
        '45011350': "Gray Digital Forwards Cap",
        '51606258': "Aqua Deep Shades",
        '58591362': "Glow Pudding Woolly Knit",
        '59942738': "Yellow Firefighter & Goggles",
        '60194771': "Brown Digital Combat Helmet",
        '61814775': "White Taco Bomb Cap",
        '62243550': "White Top Hat",
        '70111784': "Burger Shot Burgers Cap",
        '72664935': "Copper Fashion",
        '74738479': "Tri Helmet",
        '76371595': "White The Diamond Cap",
        '84792928': "Black Forwards Cap",
        '87670887': "Aqua Camo Riot",
        '96238254': "Gold Enduring Watch",
        '97609403': "Black Gold Diamond Studs",
        '100477592': "Brushstroke Utility Cap",
        '101092113': "Red Retro Bubble",
        '101979507': "Green Faggio Mod",
        '107846352': "Green Pattern Quad Lens",
        '108253940': "Death Helmet",
        '110684701': "Splinter Dual Lens",
        '125862539': "Brown Quad Lens",
        '131947941': "Peach Digital Full Face",
        '139685993': "Globe Oil Cap",
        '141495645': "Santa Tree",
        '143361991': "Orange Sweatbox Snapback",
        '144636459': "White Stars Mod Helmet",
        '145710192': "White & Blue Garrison Cap",
        '146026937': "Gold Crowex Époque",
        '147288818': "Squared Helmet",
        '147630071': "Yellow Construction Helmet",
        '148714941': "Aqua Camo Riot",
        '148857449': "Sand Boonie Down",
        '160865769': "Pink Gold Le Chien Marquise",
        '161742867': "Green Deep Shades",
        '162664635': "Gold SASS Bracelet",
        '164234798': "Dusk Urban Ski",
        '165088329': "Black Boonie Up",
        '173658661': "Peach Digital Boonie Down",
        '174202283': "Orange Firefighter",
        '178745558': "Flecktarn Dual Lens",
        '179022901': "Blue Argyle Aviators",
        '187575916': "Black Retro Classics",
        '198032403': "Light Woodland Low Beanie",
        '203583500': "Woodland Yeti Cap",
        '205634429': "Dark Red Mod Canvas",
        '208386122': "Patriot Cap",
        '210152058': "Sand Beret",
        '211807384': "Teal Cat Eyes",
        '212853467': "Police Shielded Riot",
        '218884056': "Snakeskin Helmet",
        '223099377': "Desert Digital Scope Night Vision",
        '229222371': "Moss Cap",
        '231059445': "Lemon Casuals",
        '235084622': "Silver Stem Slim Glasses",
        '235655463': "Gray Backwards Cap",
        '239473974': "Patriot Combat Helmet",
        '240301293': "White Rim Tint Aviators",
        '246092660': "Crosshatch Quad Lens",
        '249229696': "Olive Boonie Down",
        '249846200': "Blue Digital Beret",
        '250663188': "Cluckin' Bell Canvas Hat",
        '252966417': "Gray Woodland Riot",
        '253463621': "Beige Scope Night Vision",
        '256755328': "Brown Mod Helmet",
        '261335322': "Cream Retro Bubble",
        '263141351': "Gold Shields",
        '266244209': "Black Plastic Glasses",
        '272076825': "Olive Bowler Hat",
        '273004049': "Atomic Helmet",
        '286127538': "Blood Cross Backwards Cap",
        '290253926': "Burger Shot Fries Cap",
        '290254858': "Black LS Diamond Cap",
        '291338199': "Mind Over Matter Flight Helmet",
        '291708861': "Olive Beanie Cap",
        '293090971': "Brown Skull Forwards Cap",
        '295996305': "Gray Woodland Utility Cap",
        '296143686': "Blue Stars Mod Helmet",
        '297616184': "Light Brown Utility Cap",
        '299088803': "Chocolate Peaked Cap",
        '302513036': "Black Gold Emerald Chains",
        '302830583': "Cream Undertaker Hat",
        '303093168': "Blue Leopard Squared",
        '304249668': "White Broker Cap",
        '308770913': "Green Camo Backwards Cap",
        '309224346': "Silver Fashion",
        '311507643': "Green Sports",
        '319110510': "Auto Exotic Cap",
        '319113786': "Contrast Camo Dual Lens",
        '320109507': "Screw You Hoops",
        '320364963': "Silver Top Hat",
        '323050498': "Gray Riot",
        '324825853': "Gray Forwards Cap",
        '327544088': "Digital Helmet",
        '331131983': "Black Peaked Cap",
        '332179101': "Black Retro Bubble",
        '335664446': "Gold Le Chien Cuff",
        '338532586': "Passion Sun Hat",
        '340468017': "Chocolate Boonie Up",
        '341406955': "Blue Digital Forwards Cap",
        '349878186': "Splinter Quad Lens",
        '351119453': "Bah Humbug Cap",
        '353302536': "Pink Pattern Full Face",
        '359612206': "51st Squad Flight Helmet",
        '361189254': "Gray Woodland Low Beanie",
        '366104487': "Crosshatch Riot",
        '367205767': "White Cashmere Fedora",
        '367442084': "Brown Digital Beanie Cap",
        '370594299': "Stone Gray Shielded Riot",
        '372154399': "Silver Kronos Ära",
        '373105450': "Brown Harsh Souls Snapback",
        '373735480': "Purple Neon Camo Forwards Cap",
        '374391354': "Orange Sports",
        '381397494': "Purple Tree",
        '385038498': "Silver Le Chien Marquise",
        '389766419': "Clubs Earrings",
        '396473131': "White Painted Güffy Cap",
        '396527258': "Ox Blood Gauntlet (R)",
        '401822288': "Rasta Stripes Low Beanie",
        '412797378': "Ombre Shields",
        '418158968': "Sunrise Deep Shades",
        '421482003': "Logger Cowgirl Hat",
        '432821856': "Brown Digital Shielded Riot",
        '438441729': "Silver Fifty Kronos Pulse",
        '446043374': "Grotti Cap",
        '460296220': "Fall Cap",
        '471040836': "Chocolate Garrison Cap",
        '472553912': "Stars Helmet",
        '482562282': "Chepalle Cap",
        '484987416': "Black Rim Tint Aviators",
        '492185786': "Stone Scope Night Vision",
        '493968191': "Suits Crowex Époque",
        '497283167': "Smiley Backwards Cap",
        '501111821': "Black Crowex Époque",
        '501451067': "Black The Diamond Cap",
        '503737509': "Black Pisswasser Cap",
        '506083506': "Downhill Helmet",
        '512761702': "Burst Helmet",
        '512987754': "White The Diamond Cap",
        '513334410': "White Scope Night Vision",
        '523025232': "Light Brown Beanie Cap",
        '523679511': "Leopard Combat Helmet",
        '523736033': "Flecktarn Full Face",
        '525084361': "USA Top Hat",
        '525978435': "Brushstroke Cap",
        '530255864': "SecuroServ Backwards Cap",
        '533567330': "Gray Yeti Cap",
        '534992240': "Star Frame Shades",
        '535452785': "White Camo Garrison Cap",
        '542974410': "Primary Squash Cap",
        '543198473': "Light Gray Forwards Cap",
        '544634364': "Black Backwards Cap",
        '545623091': "Marble Sports Shades",
        '548076869': "Brown Digital Beret",
        '549201043': "Yung Ancestor Backwards Cap",
        '549325644': "Burger Shot Bullseye Cap",
        '550389358': "White Peaked Cap",
        '555483049': "Gray Digital Boonie Down",
        '564472722': "Moss Digital Utility Cap",
        '571438509': "Purple Squared",
        '574609641': "Shell Casual Glasses",
        '578288239': "Moss Riot",
        '590575172': "Ivory Undertaker Hat",
        '591040577': "Purple Hotdogs Cap",
        '591653973': "Cream Shielded Riot",
        '607828228': "Beige Sun Hat",
        '611315928': "Black Slash Mod Helmet",
        '612685284': "Peach Digital Beanie Cap",
        '615410057': "White Firefighter & Goggles",
        '616809990': "Green Stripy Tree",
        '619747093': "White Broker Cap",
        '621614759': "Yellow Cluckin' Bell Cap",
        '626713723': "USA Boppers",
        '626853111': "Gray Bulletproof",
        '632263023': "Vibe Helmet",
        '638157098': "Blue Wave Backwards Cap",
        '647282410': "Green Cashmere Fedora",
        '648441926': "Moss Mod Canvas",
        '648514572': "Gold Fashion",
        '653114757': "Purple Bowler Hat",
        '653134663': "Red Tint Marbles",
        '654062979': "White Fame or Shame Shades",
        '654602763': "Blue Digital Riot",
        '662256573': "Green Urban Deep Shades",
        '669135370': "Vibe Helmet",
        '677758037': "Black Quad Lens",
        '678409116': "Black Kronos Pulse",
        '685201541': "FU Hoops",
        '685372445': "Stars & Stripes Low Beanie",
        '689416486': "Red SC Broker Cap",
        '693476366': "Light Woodland Shielded Riot",
        '693994327': "White Pisswasser Cap",
        '700489365': "Hornet Sports Shades",
        '702477078': "Beige Digital Scope Night Vision",
        '711466726': "Platinum Figure 8s",
        '713190801': "Flame Shields",
        '717739147': "Pink Retro Bubble",
        '719659239': "Red Garrison Cap",
        '722881756': "Brown Broker Snapback",
        '725401442': "Clan Tartan Bobble",
        '730668158': "Reindeer Antlers",
        '730931442': "Yellow Cluckin' Bell Cap",
        '731677015': "Orange Retro Bubble",
        '732329450': "Flecktarn Utility Cap",
        '738033881': "Peach Digital Boonie Up",
        '738291381': "Square Wrist Chain (L)",
        '740882594': "Wheel Crowex Époque",
        '741899064': "Brown Shielded Riot",
        '743392617': "Pink Urban Deep Shades",
        '744441552': "Green Digital Scope Night Vision",
        '744670515': "Gold JC Helmet",
        '751843682': "Imponte Racing Cap",
        '756477607': "Black Casuals",
        '760655423': "Gray Camo Backwards Cap",
        '760877684': "Brown Fedora",
        '763352592': "Rebel Radio Cap",
        '766719139': "Dark Woodland Cap",
        '773220540': "Flecktarn Cap",
        '776834589': "Teal Squared",
        '783690164': "Red Forwards Cap",
        '788217689': "Skull Helmet",
        '789956042': "Striped Deep Shades",
        '791444185': "Brushstroke Garrison Cap",
        '796465775': "Deadline Blue",
        '797434849': "White & Red Peaked Cap",
        '800908572': "Glow Reindeer Antlers",
        '808987544': "Blue Sports Shades",
        '810041826': "Gold Kronos Quad",
        '812382133': "Gold Tint Aviators",
        '821062469': "Pink Shooters",
        '822827697': "White Boonie Up",
        '831788638': "Taco Canvas Hat",
        '837046740': "Tread Wrist Chain (R)",
        '837518379': "Roulette Crowex Époque",
        '841991535': "Spots Squash Cap",
        '844853618': "Brown Digital Dual Lens",
        '846249128': "White SC Broker Cap",
        '856006728': "Charcoal Bulletproof",
        '857039529': "Elf Tree",
        '859091702': "Purple Hotdogs Cap",
        '859170964': "Gold Snake Cuff",
        '862532614': "Pink LS Diamond Cap",
        '869838273': "SA Assault Helmet",
        '870660224': "Light Woodland Boonie Down",
        '870731796': "Crosshatch Utility Cap",
        '872378356': "White Pisswasser Cap",
        '883841286': "Lobster Bowler Hat",
        '885523988': "Brown Digital Garrison Cap",
        '888654762': "Ace of Spades Dome",
        '894360887': "Yellow Urban Ski",
        '895074294': "Black The Diamond Cap",
        '897650066': "White iFruit Tech",
        '904568462': "Blue Outlaw Goggles",
        '908264513': "Light Brown Peaked Cap",
        '917238317': "Blue & Red Peaked Cap",
        '919756496': "Black Full Face",
        '923919425': "Aqua Camo Quad Lens",
        '924364720': "Black SASS Wrist Piece",
        '932722835': "Splinter Shielded Riot",
        '933935467': "Sapphire Figure 8s",
        '935212918': "White Dual Lens",
        '938692543': "Visored Skull Cap",
        '938847616': "Gray Dice Earrings",
        '939297301': "White Shrewsbury Cap",
        '940263847': "Black SA Fitted Cap",
        '947983877': "Aqua Camo Dual Lens",
        '948941033': "Gold Diamond Rounds",
        '950034841': "Silver Anna Rex Prestige",
        '951091029': "Gray Woodland Quad Lens",
        '957326241': "Tan Squared",
        '959869364': "Gold Slim Glasses",
        '960586670': "Moss Full Face",
        '960980504': "Moss Quad Lens",
        '962971662': "Black LS Diamond Cap",
        '963645821': "Light Woodland Utility Cap",
        '965012403': "Zebra Combat Helmet",
        '965549044': "Green Digital Boonie Up",
        '966582276': "Digital Deep Shades",
        '968593239': "Two-Tone Cowgirl Hat",
        '973717021': "Champagne Figure 8s",
        '975626847': "Desert Digital Scope Night Vision",
        '984032746': "Lucky Plucker White Pattern Cap",
        '988804193': "Gingerbread Cap",
        '992072494': "Crosshatch Dual Lens",
        '992611283': "Black JC Helmet",
        '992979830': "Blue Digital Backwards Cap",
        '993136766': "Fuchsia Saggy Beanie",
        '994463107': "Purple SC Broker Cap",
        '997913676': "Black SASS Bracelet",
        '1006701585': "SecuroServ Cap",
        '1009277443': "Feathers Dome",
        '1010025015': "Blue Cluckin' Bell Cap",
        '1010866145': "Beige Scope Night Vision",
        '1013976146': "Silver Retro Bubble",
        '1019960284': "SA Assault Helmet",
        '1020748209': "Dark Violet Undertaker Hat",
        '1027988462': "Crimson Helmet",
        '1029429881': "Lampadati Racing Cap",
        '1042319929': "Crosshatch Quad Lens",
        '1042504585': "Gold Diamond Chains",
        '1044343731': "Deck Enduring Watch",
        '1051482852': "Bronze Aviators",
        '1051922895': "Zap Casuals",
        '1054492439': "Fall Shielded Riot",
        '1058793252': "Black Stripes Mod Helmet",
        '1060333061': "Mono Deep Shades",
        '1069549769': "Flecktarn Quad Lens",
        '1074759702': "Deadline White",
        '1081544158': "Cobble Quad Lens",
        '1082234928': "Gold Plain Cuff",
        '1085460185': "Green The Diamond Cap",
        '1086100948': "Orange Flight Helmet",
        '1086101892': "Red Retro Classics",
        '1091909545': "Black Riot",
        '1093765426': "Tan Canvas Hat",
        '1095820292': "Flamejob Helmet",
        '1109931910': "Hotdogs Canvas Hat",
        '1115754897': "Peach Camo Cap",
        '1118356156': "Pink Tint Marbles",
        '1128946172': "Blue Cat Eyes",
        '1129430236': "MP Riot",
        '1132328842': "Navy Sun Hat",
        '1133913012': "Red & Navy Garrison Cap",
        '1134197198': "Grayscale Urban Ski",
        '1135186107': "Lime Tint Shooters",
        '1135689506': "Pink Fedora",
        '1136409137': "Beige Outlaw Goggles",
        '1139730669': "Gray Abstract Bigness Cap",
        '1141431203': "Toothy Grin Backwards Cap",
        '1142597521': "Black Scope Night Vision",
        '1145453656': "Glow Elf Hat",
        '1155222325': "Gold SASS Wrist Piece",
        '1168567912': "Bugstars Backwards Cap",
        '1172439627': "Splinter Shielded Riot",
        '1173225373': "Black Kronos Ära",
        '1180338603': "Black Beanie Cap",
        '1184790053': "Chieftain Tartan Bobble",
        '1185088643': "Black Fufu Jeunesse",
        '1186426665': "Skull and Snake Dome",
        '1186965403': "Black Shrewsbury Cap",
        '1187460712': "Gray Digital Boonie Up",
        '1194319637': "Moss Boonie Down",
        '1199976915': "Blue Shielded Riot",
        '1203935435': "Green Roundel Mod",
        '1209882676': "Brown Dual Lens",
        '1211507678': "Gold Retro Bubble",
        '1212261510': "Gear Wrist Chains (R)",
        '1213441101': "Cobble Forwards Cap",
        '1221142925': "Moss Peaked Cap",
        '1222811299': "Dark Woodland Beanie Cap",
        '1224052545': "Silver SASS Bracelet",
        '1227668279': "Fall Boonie Up",
        '1228806057': "Orange Tint Mademoiselles",
        '1229053712': "Cluckin' Bell Logos Cap",
        '1229830327': "Matte All Black Biker",
        '1234300084': "Davis Fitted Cap",
        '1235733900': "Tan Bulletproof",
        '1243708554': "Dark Woodland Utility Cap",
        '1243936518': "Silver Roulette Kronos Pulse",
        '1249281061': "Royal Enduring Watch",
        '1251424451': "Beige Houndstooth Low Beanie",
        '1254374027': "Gray Woodland Dual Lens",
        '1255294758': "Pink Striped Squared",
        '1257116963': "Black Slim Glasses",
        '1262393247': "Khaki Cap",
        '1268614884': "Brown Bowler Hat",
        '1272666697': "Black Coil Cap",
        '1272882613': "Dark Woodland Quad Lens",
        '1275830513': "Moss Beanie Cap",
        '1281464132': "Red Snowflake Cap",
        '1283001864': "Moss Boonie Up",
        '1285695028': "Contrast Camo Quad Lens",
        '1287047669': "Red Lucky Plucker Cap",
        '1288027992': "Contrast Camo Shielded Riot",
        '1294197674': "Aqua Camo Shielded Riot",
        '1297661210': "Black & Yellow Low Beanie",
        '1301834192': "Ox Blood Gauntlet (L)",
        '1303728333': "Gold iFruit Link",
        '1307245960': "Green Dome",
        '1308866081': "Red Striped Saggy Beanie",
        '1311155603': "Faggio Mod",
        '1312215722': "Gray Woodland Riot",
        '1315400258': "Blue LS Diamond Cap",
        '1319320010': "Beige Garrison Cap",
        '1320038839': "Green Flight Helmet",
        '1327643873': "Moss Utility Cap",
        '1329430076': "Chepalle Cap",
        '1330733365': "Wine Coil Cap",
        '1331762545': "Cream Trickster Snapback",
        '1333462622': "Ox and Hatchets Tied",
        '1335040932': "Star Tree",
        '1336177850': "Black & Red Full Face",
        '1338147047': "Ace of Spades Helmet",
        '1339096804': "Platinum Diamond Chains",
        '1340345486': "Splinter Deep Shades",
        '1348698753': "Ox and Hatchets Dome",
        '1349331396': "Yellow Firefighter",
        '1354257449': "Mono Outlaw Goggles",
        '1356470642': "Beige Retro",
        '1361888489': "PRB iFruit Tech",
        '1388442128': "Burger Shot Bullseye Cap",
        '1390073570': "Royalty Crowex Rond",
        '1396673584': "Navy Mod Pork Pie",
        '1397877264': "Matte All Black Biker",
        '1400202335': "Blue Digital Boonie Down",
        '1401132724': "Cream Bowler Hat",
        '1407801454': "Lucky Plucker Red Pattern Cap",
        '1408056387': "Tortoiseshell Casuals",
        '1409852679': "Slate Beanie Cap",
        '1411407481': "Moss Digital Riot",
        '1411669343': "Light Gray Backwards Cap",
        '1415415366': "Steel Aviators",
        '1417125932': "Gray Fufu Jeunesse",
        '1419732155': "Deadline White",
        '1421184015': "Red Fame or Shame Kronos",
        '1422696370': "Fall Quad Lens",
        '1426772719': "Blue Digital Boonie Up",
        '1434045011': "Stone Scope Night Vision",
        '1436694562': "Gray Digital Beanie Cap",
        '1437371496': "Pale Abstract Bigness Cap",
        '1440153852': "Red The Diamond Cap",
        '1446628467': "Cheeky Elf Woolly Trail",
        '1450206368': "Brown Plaid Fedora",
        '1453506976': "Brown Flight Helmet",
        '1453941353': "Stars & Stripes Backwards Cap",
        '1456659842': "Sage Green Undertaker Hat",
        '1462944740': "Blue JC Helmet",
        '1463079126': "Tiger Low Beanie",
        '1464797138': "Green Digital Cap",
        '1465919337': "Stars & Stripes Combat Helmet",
        '1466788119': "Forest Bulletproof",
        '1468220904': "Green Snakeskin Forwards Cap",
        '1472008492': "Star and Stripes Dome",
        '1473396148': "Tiger Quad Lens",
        '1482223132': "Teal Marbles",
        '1485453573': "Green Taco Bomb Cap",
        '1495409020': "Silver Enduring Watch",
        '1499538027': "Vintage Bowler Hat",
        '1501550221': "White Harsh Souls Snapback",
        '1509342549': "Orange Tint Shooters",
        '1520422202': "Gray Digital Peaked Cap",
        '1520646771': "Pink Tint Mademoiselles",
        '1520776139': "Green Ho Ho Ho Cap",
        '1522478085': "Light Woodland Shielded Riot",
        '1524426555': "White Squared",
        '1529908575': "Red Flying Bravo Cap",
        '1530317526': "Red Casuals",
        '1530396265': "Moss Dual Lens",
        '1543171634': "Splinter Riot",
        '1545657096': "Gray Digital Shielded Riot",
        '1548780849': "Burger Shot Burgers Cap",
        '1550891523': "Tan Cap",
        '1555966456': "Brown Hipsters",
        '1556907724': "Red Flying Bravo Cap",
        '1558284086': "Orange The Diamond Cap",
        '1562061458': "Carbon Anna Rex Prestige",
        '1563387004': "Gray Retro Bubble",
        '1565017046': "Roundel Mod",
        '1565907463': "Sage Scope Night Vision",
        '1567508410': "Moss Digital Beanie Cap",
        '1568107382': "White Lucky Plucker Cap",
        '1575507436': "White Vom Feuer Cap",
        '1576837546': "Ash Mod Pork Pie",
        '1577266424': "Cream Sun Hat",
        '1578028493': "Leopard Flight Helmet",
        '1578419940': "Gold Le Chien Marquise",
        '1585747617': "Boars Fitted Cap",
        '1585812579': "Black Gauntlet (R)",
        '1586207233': "Gray Woodland Dual Lens",
        '1591894100': "Pink iFruit Tech",
        '1593760922': "Sand Utility Cap",
        '1595158721': "Green Urban Ski",
        '1598111822': "Platinum Totems",
        '1599991698': "Roulette Ceaseless",
        '1606907335': "Brushstroke Riot",
        '1608037834': "Tiger Quad Lens",
        '1608505817': "Purple Saggy Beanie",
        '1608910789': "Leopard Dual Lens",
        '1612101340': "Charcoal Broker Snapback",
        '1614345002': "Ox Blood Outlaw Goggles",
        '1620439838': "Red Bugs",
        '1622101846': "Fall Quad Lens",
        '1622281867': "Platinum Waterfalls",
        '1622542486': "Black Gold Diamond Drops",
        '1625214621': "Black & Red Quad Lens",
        '1633029313': "White Figure 8s",
        '1640866652': "Cunning Stunts Cap",
        '1643646776': "Cream Top Hat",
        '1646929422': "Ride Free Dome",
        '1653197288': "Blue Peaked Cap",
        '1653706377': "No Master Shielded Riot",
        '1655095722': "Stars Helmet",
        '1661461139': "Moss Garrison Cap",
        '1667138219': "Moss Digital Beret",
        '1668295044': "Spade Kronos Pulse",
        '1677109583': "Downhill Helmet",
        '1677195548': "Dice Crowex Rond",
        '1677938045': "Black Flight Helmet",
        '1679641125': "Pink Chips Earrings",
        '1689896652': "Green Snakeskin Backwards Cap",
        '1692676788': "Heritage Tartan Bobble",
        '1692778472': "Green Pattern Quad Lens",
        '1692835552': "Orange & Black Flight Helmet",
        '1697239330': "Blue Canvas Hat",
        '1700363752': "Burger Shot Canvas Hat",
        '1705331345': "Yellow Slim Glasses",
        '1708725970': "Blue Garrison Cap",
        '1711856161': "Pink Pattern Quad Lens",
        '1716974000': "Splinter Dual Lens",
        '1720281330': "Tan Cowgirl Hat",
        '1720462887': "Off-White Bigness Cap",
        '1731415275': "Black Ho Ho Ho Cap",
        '1731883522': "Red Yeti Snapback",
        '1734493826': "Aqua Retro",
        '1738450000': "Blue & Orange Flight Helmet",
        '1743794938': "Prison Authority Backwards Cap",
        '1746688416': "Blue Shooters",
        '1750602562': "Black Vom Feuer Cap",
        '1754104226': "Pink Hotdogs Cap",
        '1755973330': "Gray Digital Riot",
        '1762420986': "Purple Snakeskin Forwards Cap",
        '1763377686': "Dusty Pink Undertaker Hat",
        '1764374541': "Moss Mod Pork Pie",
        '1768074233': "Crosshatch Cap",
        '1769261424': "Aqua Camo Shielded Riot",
        '1769518243': "Orange Fiber Dome",
        '1775098997': "Sand Beanie Cap",
        '1781457211': "Fall Beanie Cap",
        '1783131820': "Black Vom Feuer Cap",
        '1784800883': "Tiger Flight Helmet",
        '1786878738': "Skeleton Helmet",
        '1789520069': "Gold JC Helmet",
        '1792666126': "White Flight Helmet",
        '1793794889': "Red The Diamond Cap",
        '1793898282': "Black Kronos Quad",
        '1795530037': "Glow Cheeky Elf Woolly Trail",
        '1810423995': "White Firefighter",
        '1810965290': "Vintage Top Hat",
        '1812540768': "Orange The Diamond Cap",
        '1813835977': "Silver Accent Shields",
        '1813982639': "Brushstroke Full Face",
        '1827401558': "Red JC Helmet",
        '1828670121': "Orange Hinge Plastic Frames",
        '1832407177': "Pink Pattern Quad Lens",
        '1832973467': "White Saggy Beanie",
        '1837152235': "Dark Woodland Dual Lens",
        '1841099636': "Dark Woodland Peaked Cap",
        '1843286635': "Red Broker Snapback",
        '1844418889': "Blue Tint Marbles",
        '1851389190': "Elf Hat",
        '1854963687': "Contrast Camo Shielded Riot",
        '1855152117': "LCD Earpiece",
        '1858377982': "Ash Top Hat",
        '1859645187': "Aqua Camo Beret",
        '1859775403': "Peach Digital Quad Lens",
        '1861212367': "Nagasaki Racing Cap",
        '1861763220': "Blue Fame or Shame Kronos",
        '1864422494': "Gray Woodland Quad Lens",
        '1865656444': "Gray Figure 8s",
        '1866072577': "Yellow Sweatbox Snapback",
        '1870910964': "Gold Textured Cuff",
        '1872566970': "Deadline Purple",
        '1875861023': "Nice Cap",
        '1877771483': "Dark Woodland Dual Lens",
        '1878685072': "Luxury Ice Sports",
        '1884826134': "Gray Woodland Shielded Riot",
        '1886909784': "White Casuals",
        '1904955873': "Ace of Spades Spiked",
        '1910682212': "Tan Gauntlet (L)",
        '1911071035': "White Marbles",
        '1917291884': "Moss Digital Boonie Up",
        '1919702324': "Gold Anna Rex Prestige",
        '1921204720': "Pink Pattern Dual Lens",
        '1921801665': "Flames Combat Helmet",
        '1925632506': "Silver JC Helmet",
        '1926845998': "Hot Pink Hipsters",
        '1927767993': "Red Chips Earrings",
        '1938600505': "Teal Garrison Cap",
        '1940801949': "Digital Helmet",
        '1946961881': "Flash Cap",
        '1954336919': "Houndstooth Deep Shades",
        '1964779046': "Gray Woodland Beret",
        '1967518676': "Zebra Quad Lens",
        '1968294997': "Carbon Dome",
        '1968569108': "Chunky Wrist Chain (L)",
        '1970268516': "Naughty Cap",
        '1971818918': "Slate Beret",
        '1975896916': "Atomic Cap",
        '1980699106': "Blue Digital Shielded Riot",
        '1988160967': "Cherry Broker Snapback",
        '1989956329': "Slate Mod Pork Pie",
        '1990304449': "Crosshatch Riot",
        '1994561498': "Blue Retro Bubble",
        '1994753042': "Purple Tint Squared",
        '1998535002': "Black Gold Sun Drops",
        '2001058587': "Blue Cluckin' Bell Cap",
        '2001641421': "Black Crowex Rond",
        '2001886684': "Black Enduring Watch",
        '2003024366': "Beige Sports Shades",
        '2003858863': "Pink Canvas Hat",
        '2006880771': "Blue Digital Shielded Riot",
        '2007194744': "Black Deep Shades",
        '2007302899': "Black Skull Forwards Cap",
        '2009984738': "Copper Slim Glasses",
        '2012827005': "Black Aviators",
        '2013166731': "Cobble Cap",
        '2015797281': "Black Undertaker Hat",
        '2016392814': "Sprunk Helmet",
        '2016569598': "Slate Boonie Up",
        '2022875733': "Spade Crowex Rond",
        '2026483804': "Naughty Flipped Cap",
        '2029088472': "Chocolate Beanie Cap",
        '2033472441': "Silver Kronos Quad",
        '2034246774': "White Bugs",
        '2034746968': "White Boonie Down",
        '2037089414': "Zebra Flight Helmet",
        '2041418586': "Happy Elf Woolly Trail",
        '2041801652': "Spiked Gauntlet (L)",
        '2043153306': "Red Marble Retro Classics",
        '2048301143': "Zebra Dual Lens",
        '2049558044': "Chromed Dome",
        '2054451968': "Black JC Helmet",
        '2054530251': "Red Undertaker Hat",
        '2058765845': "Splinter Boonie Down",
        '2059095722': "Moss Digital Cap",
        '2059508112': "White Riot",
        '2059866009': "Wine Coil Cap",
        '2064297428': "Black Fedora",
        '2065360608': "Pink Hinge Plastic Frames",
        '2068969643': "Gold Diamond Cuff",
        '2069666077': "Blue Striped Low Beanie",
        '2072220237': "Glossy Black Off-road",
        '2073560006': "Splinter Cap",
        '2084733053': "White Lucky Plucker Cap",
        '2087065925': "Chunky Wrist Chain (R)",
        '2088725399': "Brown Urban Ski",
        '2093025971': "Classic Hoops",
        '2100412813': "Gold Diamond Drops",
        '2113455896': "Topaz Sports Shades",
        '2113498185': "Green Santa Hat",
        '2114404000': "White Vom Feuer Cap",
        '2116680404': "Blue Snowflake Cap",
        '2120985705': "Glossy Mirrored Biker",
        '2123418272': "Orange LS Diamond Cap",
        '2127514158': "Burger Shot Logo Cap",
        '2129325700': "Black Plastic Frames",
        '2130436251': "Green Fame or Shame Kronos",
        '2145711590': "Dark Woodland Quad Lens",
        '2146048149': "Neon iFruit Snap",
        '-1809878191': "Two-Tone Sports Shades",
        '-2039097346': "Orange Sports Shades",
        '-1951899017': "Purple Sports Shades",
        '-1622115318': "Copper Marbles",
        '-1127336187': "Black Marbles",
        '-1986768750': "Purple Marbles",
        '-869061120': "Luxury Cowhide Sports",
        '-1939493298': "Black Pattern Sports",
        '-698531240': "Blue Pattern Sports",
        '-1343589033': "Pink Pattern Sports",
        '-809108203': "Pewter Aviators",
        '-2111086111': "Neon Aviators",
        '-877660963': "Copper Aviators",
        '-438228673': "Gold Aviators",
        '-1340850778': "Slate Aviators",
        '-1614474524': "Black Cat Eyes",
        '-714703322': "Brown Marble Cat Eyes",
        '-1188084296': "Pink Cat Eyes",
        '-383048273': "Green Marble Cat Eyes",
        '-692289326': "Red Cat Eyes",
        '-94484459': "Purple Cat Eyes",
        '-1291949308': "Marble Mademoiselles",
        '-1590081670': "Copper Mademoiselles",
        '-1396875610': "Walnut Mademoiselles",
        '-1376296678': "Black Mademoiselles",
        '-2142665281': "Vintage Red Mademoiselles",
        '-1847023363': "Gold Mademoiselles",
        '-1898269116': "Zebra Shields",
        '-1270644459': "Violet Shields",
        '-972675942': "Sun Shields",
        '-34040710': "Party Shields",
        '-1389080027': "Deep Walnut Retro",
        '-1007321177': "Marble Retro",
        '-2077425645': "Dice Retro",
        '-1696060023': "Black Retro",
        '-1341433905': "Toffee Retro",
        '-1109658768': "Red Retro",
        '-15223435': "Purple Tint Bugs",
        '-2062789587': "Amethyst Figure 8s",
        '-1824132960': "Gold Figure 8s",
        '-1109834294': "Garnet Figure 8s",
        '-1717761584': "Orange Tint Squared",
        '-2001069353': "Tropic Shooters",
        '-1745634998': "Fly Shooters",
        '-1656372242': "Crimson Shooters",
        '-1300763054': "Green Tint Shooters",
        '-1213510040': "Pewter Watch",
        '-1809744555': "Zeus Flight Helmet",
        '-1174189788': "Green & Yellow Flight Helmet",
        '-1680864066': "DFA Flight Helmet",
        '-913381317': "Snake Killers Flight Helmet",
        '-14757030': "Red & White Flight Helmet",
        '-216548532': "Other Side Flight Helmet",
        '-523135296': "STFU Flight Helmet",
        '-1546790582': "Patriot Flight Helmet",
        '-1869991237': "Shark Mouth Flight Helmet",
        '-2078467615': "Yellow & Black Flight Helmet",
        '-455474194': "Black Bulletproof",
        '-304450162': "Assault Hoops",
        '-208354700': "Chunky Hoops",
        '-2076276414': "Diamond Yeti Snapback",
        '-1365582342': "Tan Fruntalot Snapback",
        '-1885102068': "Green Sweatbox Snapback",
        '-907504491': "Jungle Yeti Snapback",
        '-1118405775': "Forest Trickster Snapback",
        '-1274550056': "Coffee Broker Snapback",
        '-1041628004': "Dual Trey Baker Snapback",
        '-794058209': "Gray Sweatbox Snapback",
        '-277291079': "Cream Sweatbox Snapback",
        '-2095109685': "Navy Fruntalot Snapback",
        '-1634475852': "All Black Broker Snapback",
        '-1864940229': "Black Broker Snapback",
        '-1450063403': "Navy Trickster Snapback",
        '-2107081857': "Blue Sweatbox Snapback",
        '-1690456867': "Stripy Yeti Snapback",
        '-1517502085': "Link Trickster Snapback",
        '-1355237368': "Magnetics Script Fitted Cap",
        '-1020665878': "Magnetics Block Fitted Cap",
        '-859835626': "Low Santos Fitted Cap",
        '-148879406': "Benny's Fitted Cap",
        '-1596351674': "Westside Fitted Cap",
        '-1296810245': "Eastside Fitted Cap",
        '-1140502115': "Strawberry Fitted Cap",
        '-1443711576': "Platinum Pendulums",
        '-1639548700': "Gold Pendulums",
        '-732139551': "Platinum Diamond Drops",
        '-1904154072': "Gold Waterfalls",
        '-83147973': "Black Gold Waterfalls",
        '-1681114781': "Gold Totems",
        '-1451338553': "Black Gold Totems",
        '-194852851': "Black Gold Diamond Chains",
        '-427023211': "Gold Emerald Chains",
        '-1546281175': "Platinum Emerald Chains",
        '-755928835': "Gold Sun Drops",
        '-995437456': "Platinum Sun Drops",
        '-245056030': "Platinum Diamond Studs",
        '-745373122': "Gold Diamond Studs",
        '-852297611': "Gold CaCa Di Lusso",
        '-2059736962': "Silver CaCa Di Lusso",
        '-1803417836': "Pink Gold CaCa Di Lusso",
        '-597673684': "Silver Didier Sachs Mignon",
        '-828203599': "Pink Gold Didier Sachs Mignon",
        '-775726873': "Silver iFruit Link",
        '-670276231': "Pink Gold iFruit Link",
        '-1135607426': "Flight Helmet",
        '-980660623': "Gray Earpiece",
        '-1307283359': "Red Earpiece",
        '-1800817877': "White Casual Glasses",
        '-142113927': "Camo Collection Casuals",
        '-740901860': "Blood Casuals",
        '-201458582': "Black Casual Glasses",
        '-825739308': "Matte Black Off-road",
        '-584470541': "Glossy All Black Biker",
        '-917609546': "Glossy Mirrored Biker",
        '-430949131': "Matte Mirrored Biker",
        '-520404198': "Black Cap",
        '-314372800': "Tan Outlaw Goggles",
        '-83187505': "Black Outlaw Goggles",
        '-788523881': "Tropical Urban Ski",
        '-1743772996': "Pink Urban Ski",
        '-1984199149': "Orange Urban Ski",
        '-624091904': "Black Tied",
        '-1830679253': "Uptown Riders Tied",
        '-1362836240': "Ace of Spades Tied",
        '-1544179886': "Skull and Snake Tied",
        '-1111399703': "Stars and Stripes Tied",
        '-491375563': "Black Spiked",
        '-174892561': "Carbon Spiked",
        '-1047727645': "Orange Fiber Spiked",
        '-750414508': "Star and Stripes Spiked",
        '-1917187522': "Green Spiked",
        '-1603948651': "Feathers Spiked",
        '-1799219126': "Ox and Hatchets Spiked",
        '-1494238043': "Ride Free Spiked",
        '-2061502198': "Skull and Snake Spiked",
        '-1494028059': "Cream Mod Canvas",
        '-976015707': "Red Mod Canvas",
        '-1273722072': "Blue Mod Canvas",
        '-481400421': "Cyan Mod Canvas",
        '-812891625': "White Mod Canvas",
        '-17227536': "Ash Mod Canvas",
        '-46129794': "Navy Mod Canvas",
        '-101476639': "Slate Mod Canvas",
        '-61776295': "Red Mod Pork Pie",
        '-1426768990': "Blue Mod Pork Pie",
        '-1088134144': "Cyan Mod Pork Pie",
        '-1381777153': "White Mod Pork Pie",
        '-2007828906': "Dark Red Mod Pork Pie",
        '-649711428': "Skull Cap",
        '-1817895920': "Finned Skull Cap",
        '-236006658': "Spiked Skull Cap",
        '-2028834858': "Black Dome",
        '-2141668303': "Deadline Yellow",
        '-869575723': "Deadline Green",
        '-1781110996': "Deadline Orange",
        '-1945218152': "Deadline Pink",
        '-1646987483': "Deadline Red",
        '-629228294': "Deadline Yellow",
        '-323034758': "Deadline Green",
        '-2134898306': "Deadline Orange",
        '-1873073996': "Deadline Purple",
        '-1575367631': "Deadline Pink",
        '-1213728947': "Deadline Red",
        '-1956012343': "Deadline Blue",
        '-948790545': "Light Wrist Chain (L)",
        '-1245653009': "Skull Wrist Chain (L)",
        '-1293826866': "Tread Wrist Chain (L)",
        '-391571123': "Gear Wrist Chains (L)",
        '-851580659': "Black Gauntlet (L)",
        '-1092072350': "Chocolate Gauntlet (L)",
        '-1161764833': "Light Wrist Chain (R)",
        '-463084870': "Square Wrist Chain (R)",
        '-607053256': "Skull Wrist Chain (R)",
        '-1699812762': "Spiked Gauntlet (R)",
        '-1321453105': "Chocolate Gauntlet (R)",
        '-1022829208': "Tan Gauntlet (R)",
        '-418716130': "Two-Tone Retro Classics",
        '-1067771713': "Multicolored Retro Classics",
        '-770393038': "Peach Retro Classics",
        '-1374456784': "Baby Blue Retro Classics",
        '-1969115827': "Lime Retro Classics",
        '-1200758446': "Black Hipsters",
        '-1413199873': "Blue Hipsters",
        '-1813112749': "Marble Hipsters",
        '-1528186290': "Dipped Hipsters",
        '-1756160223': "Red Hipsters",
        '-2107312827': "Orange Hipsters",
        '-1618381103': "Cream Fedora",
        '-2000074415': "White Fedora",
        '-82235921': "Gray Fedora",
        '-464322461': "Red Plaid Fedora",
        '-1665281132': "Gray Striped Saggy Beanie",
        '-379046860': "Shatter Pattern Helmet",
        '-1120255870': "Burst Helmet",
        '-1358650345': "Tri Helmet",
        '-131451295': "Cobble Helmet",
        '-1579710019': "Cubist Helmet",
        '-19215498': "Boost Helmet",
        '-981608259': "Tropic Helmet",
        '-146359218': "Atomic Helmet",
        '-1989217217': "White Helmet",
        '-1464192299': "Slalom Helmet",
        '-1730539866': "Glossy All Black Biker",
        '-2136376254': "LTD Cap",
        '-789144321': "Nagasaki Moto Cap",
        '-223092615': "Patriot Cap",
        '-549897852': "Redwood Cap",
        '-1976889495': "Scooter Brothers Cap",
        '-1410575637': "The Mount Cap",
        '-428980242': "Total Ride Cap",
        '-1731482454': "Vapid Cap",
        '-1390357480': "Xero Gas Cap",
        '-1178170642': "Cunning Stunts Cap",
        '-880726429': "Flash Cap",
        '-699776011': "Fukaru Cap",
        '-401873032': "Globe Oil Cap",
        '-700496933': "Grotti Cap",
        '-404429018': "Imponte Racing Cap",
        '-2134238990': "Lampadati Racing Cap",
        '-498935298': "White JC Helmet",
        '-1649618733': "Pink JC Helmet",
        '-33785330': "White JC Helmet",
        '-263266637': "Blue JC Helmet",
        '-2009624954': "Red JC Helmet",
        '-1530706019': "Pink JC Helmet",
        '-2012939146': "Gold Retro Bubble",
        '-1811803020': "Silver Retro Bubble",
        '-1863109289': "Silver JC Helmet",
        '-1795774903': "Shatter Pattern Helmet",
        '-97167695': "Sprunk Helmet",
        '-1128145973': "Skeleton Helmet",
        '-768538967': "Death Helmet",
        '-1757015852': "Cobble Helmet",
        '-855868352': "Cubist Helmet",
        '-1951624263': "Squared Helmet",
        '-1906494902': "Snakeskin Helmet",
        '-2060771354': "Boost Helmet",
        '-1295975663': "Tropic Helmet",
        '-1586249913': "Crimson Helmet",
        '-1472181024': "Skull Helmet",
        '-1116178608': "Ace of Spades Helmet",
        '-1028914761': "Flamejob Helmet",
        '-654496167': "White Helmet",
        '-194779866': "Slalom Helmet",
        '-2085952908': "Matte Mirrored Biker",
        '-1437794634': "Cream Retro Bubble",
        '-736809292': "Red Retro Bubble",
        '-1787383432': "Black Retro Bubble",
        '-2018175499': "Pink Retro Bubble",
        '-547723060': "White Retro Bubble",
        '-655377453': "Gray Retro Bubble",
        '-894099618': "Orange Retro Bubble",
        '-193432860': "Pale Blue Retro Bubble",
        '-1657846705': "White Retro Bubble",
        '-904028641': "Blue Retro Bubble",
        '-1007816466': "Blue Stripes Mod Helmet",
        '-1573606020': "Red Stripes Mod Helmet",
        '-848723007': "Blue Chain Mod Helmet",
        '-102277956': "Black Jag Mod Helmet",
        '-320175686': "Swirl Mod Helmet",
        '-22469321': "Red Mod Helmet",
        '-14277051': "White Flag Mod Helmet",
        '-2014351449': "Auto Exotic Cap",
        '-6087023': "LTD Cap",
        '-296977436': "Nagasaki Racing Cap",
        '-761772932': "Nagasaki Moto Cap",
        '-197031946': "Rebel Radio Cap",
        '-504896701': "Redwood Cap",
        '-781467061': "Scooter Brothers Cap",
        '-944394529': "The Mount Cap",
        '-1242690736': "Total Ride Cap",
        '-1704799214': "Vapid Cap",
        '-1481625167': "Xero Gas Cap",
        '-2076088253': "Fukaru Cap",
        '-1309846087': "Tan Cashmere Fedora",
        '-1556662195': "Light Gray Cashmere Fedora",
        '-824766608': "Brown Cashmere Fedora",
        '-1080299242': "Red Cashmere Fedora",
        '-352139321': "Gray Cashmere Fedora",
        '-598693277': "Navy Cashmere Fedora",
        '-266807440': "Blue Fufu Jeunesse",
        '-734772944': "Lime iFruit Snap",
        '-238846898': "White iFruit Snap",
        '-1763420750': "Gold Detail Cuff",
        '-1210534984': "Gold Swirl Cuff",
        '-1909775282': "Pink Hotdogs Cap",
        '-1299649271': "Red Lucky Plucker Cap",
        '-1622686073': "Lucky Plucker Red Pattern Cap",
        '-989425148': "Lucky Plucker White Pattern Cap",
        '-373138565': "Black Pisswasser Cap",
        '-696044291': "White Taco Bomb Cap",
        '-1616148187': "Burger Shot Logo Cap",
        '-351854629': "Cluckin' Bell Logos Cap",
        '-2019567350': "Black Hotdogs Cap",
        '-1772292476': "Taco Bomb Cap",
        '-1366349395': "Burger Shot Fries Cap",
        '-244345992': "Green Taco Bomb Cap",
        '-531460813': "Black Hotdogs Cap",
        '-367550275': "Taco Bomb Cap",
        '-1207676099': "Star Spangled Shades",
        '-1820516280': "USA Bucket Hat",
        '-809555989': "Red Top Foam Hat",
        '-586628482': "Blue Top Foam Hat",
        '-996489533': "Patriotic Beanie",
        '-1890152465': "USA Crown",
        '-1603287920': "Pisswasser Beer Hat",
        '-1372102625': "Benedict Beer Hat",
        '-2062742069': "J Lager Beer Hat",
        '-1832408768': "Patriot Beer Hat",
        '-1936122689': "Blarneys Beer Hat",
        '-1697531600': "Supa Wet Beer Hat",
        '-1649042315': "Black Bigness Cap",
        '-1604279861': "Red Bigness Cap",
        '-1358863892': "Banana Squash Cap",
        '-599081858': "Splat Squash Cap",
        '-1844140013': "OJ Squash Cap",
        '-2141551457': "Multicolor Leaves Güffy Cap",
        '-373631138': "Red Güffy Cap",
        '-1695803674': "Orange Camo Sand Castle Cap",
        '-1397343622': "Purple Güffy Cap",
        '-1994165419': "Bold Abstract Bigness Cap",
        '-1842791763': "Glow Classic Tree",
        '-398661937': "Glow Purple Tree",
        '-1992808069': "Glow Holly Tree",
        '-1769847793': "Glow Star Tree",
        '-1863208386': "Woodland Combat Helmet",
        '-2138762907': "Dark Combat Helmet",
        '-969997051': "Red Star Combat Helmet",
        '-238363588': "MP Combat Helmet",
        '-731340420': "Tiger Combat Helmet",
        '-887910702': "Police Combat Helmet",
        '-1251771615': "Light Combat Helmet",
        '-896856995': "Green Stars Combat Helmet",
        '-1639140383': "Peace Combat Helmet",
        '-1482563682': "Flecktarn Combat Helmet",
        '-668516188': "Black Combat Helmet",
        '-883120369': "Medic Combat Helmet",
        '-1772143355': "Gray Woodland Combat Helmet",
        '-1532110430': "Tan Digital Combat Helmet",
        '-1159789056': "Aqua Camo Combat Helmet",
        '-919297365': "Splinter Combat Helmet",
        '-5138593': "Red Peaked Cap",
        '-980742167': "Navy Peaked Cap",
        '-804510485': "Aqua Camo Peaked Cap",
        '-1172047589': "Gray Peaked Cap",
        '-1998416231': "Green & Red Peaked Cap",
        '-1782042524': "Brown & Red Peaked Cap",
        '-1173995733': "White & Gold Garrison Cap",
        '-1586831528': "Gray Garrison Cap",
        '-1408109402': "Zebra Garrison Cap",
        '-830445537': "Gray Leopard Garrison Cap",
        '-1655896647': "Navy Garrison Cap",
        '-1975066707': "Aqua Camo Garrison Cap",
        '-1743684798': "Black Garrison Cap",
        '-480013134': "Tiger Full Face",
        '-1449483999': "Fall Full Face",
        '-1674574260': "Dark Woodland Full Face",
        '-836146626': "Crosshatch Full Face",
        '-1061957805': "Green Pattern Full Face",
        '-1439653307': "Gray Woodland Full Face",
        '-1669200152': "Aqua Camo Full Face",
        '-1501586717': "Splinter Full Face",
        '-2087192490': "Brown Full Face",
        '-1834779977': "Contrast Camo Full Face",
        '-1178449672': "Cobble Full Face",
        '-2101683482': "Zebra Full Face",
        '-1786471373': "White Full Face",
        '-1747312418': "Leopard Full Face",
        '-1424439461': "Brown Digital Full Face",
        '-1805077109': "Black Dual Lens",
        '-2073160298': "Moss Dual Lens",
        '-355861856': "Tiger Dual Lens",
        '-670051028': "Pink Pattern Dual Lens",
        '-731394608': "Peach Digital Dual Lens",
        '-2111723195': "Fall Dual Lens",
        '-1649516450': "Crosshatch Dual Lens",
        '-1659478226': "Green Pattern Dual Lens",
        '-1310068595': "Brown Dual Lens",
        '-1042176020': "Cobble Dual Lens",
        '-1310455823': "Brushstroke Dual Lens",
        '-541531238': "Flecktarn Dual Lens",
        '-1946207192': "Black & Red Dual Lens",
        '-1482433535': "White Dual Lens",
        '-311483687': "Black Dual Lens",
        '-1498568124': "Tiger Dual Lens",
        '-939725598': "Peach Digital Dual Lens",
        '-1782118281': "Fall Dual Lens",
        '-1865056620': "Green Pattern Dual Lens",
        '-119910752': "Aqua Camo Dual Lens",
        '-517268002': "Contrast Camo Dual Lens",
        '-285034099': "Cobble Dual Lens",
        '-135705766': "Brushstroke Dual Lens",
        '-1721266608': "Black & Red Dual Lens",
        '-1479726309': "Zebra Dual Lens",
        '-864198462': "Brown Digital Dual Lens",
        '-492514497': "Aqua Camo Quad Lens",
        '-1301483080': "Brushstroke Quad Lens",
        '-1541647081': "Flecktarn Quad Lens",
        '-2103373279': "Zebra Quad Lens",
        '-1913942173': "White Quad Lens",
        '-758802154': "Leopard Quad Lens",
        '-466600981': "Brown Digital Quad Lens",
        '-2116957533': "Black Quad Lens",
        '-1819382244': "Moss Quad Lens",
        '-1024132091': "Peach Digital Quad Lens",
        '-985431902': "Splinter Quad Lens",
        '-2118202767': "Brown Quad Lens",
        '-92864968': "Contrast Camo Quad Lens",
        '-1585591225': "Cobble Quad Lens",
        '-1941659179': "Brushstroke Quad Lens",
        '-1316918194': "Black & Red Quad Lens",
        '-1812238614': "White Quad Lens",
        '-1520528976': "Leopard Quad Lens",
        '-1247399361': "Brown Digital Quad Lens",
        '-784873756': "Black Low Beanie",
        '-1769746051': "Charcoal Low Beanie",
        '-665955585': "Aqua Camo Low Beanie",
        '-1934214192': "Tricolore Low Beanie",
        '-1858943799': "Rasta Trio Low Beanie",
        '-207648343': "Brown Striped Low Beanie",
        '-864273565': "Blue & Yellow Low Beanie",
        '-1397359135': "Ash Low Beanie",
        '-1842493465': "Green Houndstooth Low Beanie",
        '-1346370575': "White Low Beanie",
        '-993120755': "Red Low Beanie",
        '-1961805164': "Blue Low Beanie",
        '-531438314': "Light Blue Low Beanie",
        '-166489953': "Beige Low Beanie",
        '-649574507': "Gold Fame or Shame Mics",
        '-2157370': "Silver Fame or Shame Mics",
        '-216689464': "Hearts Earrings",
        '-832681126': "Spades Earrings",
        '-879405891': "Red Dice Earrings",
        '-590416080': "Tan Dice Earrings",
        '-229054818': "Yellow Chips Earrings",
        '-2114381102': "Dot Fade Aviators",
        '-1816150433': "Orange Fade Tint Aviators",
        '-893014934': "Walnut Aviators",
        '-259196936': "Horizon Aviators",
        '-780420710': "Purple Vine Aviators",
        '-674970068': "Herringbone Aviators",
        '-1021895471': "Magenta Tint Aviators",
        '-118159160': "Electric Blue Tint Aviators",
        '-1534020014': "Two Tone Deep Shades",
        '-2025884136': "Zebra Deep Shades",
        '-1950941429': "Mute Deep Shades",
        '-848297344': "Black Fame or Shame Shades",
        '-482267614': "Red Fame or Shame Shades",
        '-237778105': "Blue Fame or Shame Shades",
        '-1828252865': "White Deep Shades",
        '-179710113': "Red Deep Shades",
        '-2007933483': "Black Broker Cap",
        '-1251592190': "Teal Broker Cap",
        '-1967234385': "Green Flying Bravo Cap",
        '-999991808': "Black SC Broker Cap",
        '-220122377': "Teal SC Broker Cap",
        '-1460494565': "Purple SC Broker Cap",
        '-696944096': "Red SC Broker Cap",
        '-401629808': "White LS Diamond Cap",
        '-1681356233': "White SC Broker Cap",
        '-881432174': "Gray Yeti Cap",
        '-920951580': "Colors Yeti Cap",
        '-1000973478': "Woodland Yeti Cap",
        '-1329942809': "Purple The Diamond Cap",
        '-1594746655': "Pink LS Diamond Cap",
        '-309349857': "Teal Broker Cap",
        '-917050966': "Green Flying Bravo Cap",
        '-1231305676': "Black SC Broker Cap",
        '-1530257263': "Teal SC Broker Cap",
        '-351032469': "White LS Diamond Cap",
        '-1627712069': "Colors Yeti Cap",
        '-2105157031': "Blue LS Diamond Cap",
        '-2000361769': "Green The Diamond Cap",
        '-730890721': "Orange LS Diamond Cap",
        '-1557357670': "Purple The Diamond Cap",
        '-1962375860': "Roulette Enduring Watch",
        '-391557691': "Gold Kronos Tempo",
        '-160700086': "Silver Kronos Tempo",
        '-951710977': "Black Kronos Tempo",
        '-588368305': "Gold Fifty Kronos Tempo",
        '-1441574758': "Gold Roulette Kronos Tempo",
        '-1049067676': "Baroque Kronos Tempo",
        '-33792330': "Silver Kronos Pulse",
        '-1404585166': "Black Fame or Shame Kronos",
        '-390281864': "Gold Kronos Ära",
        '-1127453288': "Gold Fifty Kronos Ära",
        '-1392325115': "Tan Spade Kronos Ära",
        '-667278221': "Brown Spade Kronos Ära",
        '-269217600': "Gold Ceaseless",
        '-1512211324': "Silver Ceaseless",
        '-1265821213': "Black Ceaseless",
        '-1035782833': "Spade Ceaseless",
        '-802565860': "Mixed Metals Ceaseless",
        '-94071526': "Silver Crowex Époque",
        '-1725983849': "Roulette Kronos Quad",
        '-1965033712': "Fifty Kronos Quad",
        '-1129686356': "Suits Kronos Quad",
        '-1927099531': "Silver Crowex Rond",
        '-1622315062': "Gold Crowex Rond",
        '-985871382': "Silver SASS Wrist Piece",
        '-1510674442': "Black Riot",
        '-1594680875': "Splinter Riot",
        '-1004740568': "Brushstroke Riot",
        '-1301955398': "Moss Digital Riot",
        '-377672944': "MP Riot",
        '-80753035': "LSPD Riot",
        '-1936704211': "Gray Riot",
        '-568532931': "Moss Riot",
        '-1336802136': "Brown Digital Riot",
        '-1012978878': "Gray Digital Riot",
        '-112355682': "Fall Riot",
        '-1114525536': "White Riot",
        '-1781898800': "LSPD Riot",
        '-405961445': "Brown Digital Riot",
        '-915126171': "Blue Digital Riot",
        '-618206262': "Fall Riot",
        '-1268249711': "Black Shielded Riot",
        '-9264723': "Cream Shielded Riot",
        '-1380232692': "Fall Shielded Riot",
        '-1219336914': "Gray Woodland Shielded Riot",
        '-1306371378': "Moss Digital Shielded Riot",
        '-1544503701': "Crosshatch Shielded Riot",
        '-1900702731': "No Master Shielded Riot",
        '-385922937': "Police Shielded Riot",
        '-790969226': "Stone Gray Shielded Riot",
        '-26501217': "Ox Blood Shielded Riot",
        '-1184720748': "Black Shielded Riot",
        '-1759021132': "Moss Digital Shielded Riot",
        '-770970244': "Crosshatch Shielded Riot",
        '-806894190': "Brown Shielded Riot",
        '-2070860058': "Ox Blood Shielded Riot",
        '-1362590892': "Blue Shielded Riot",
        '-528521535': "Brown Digital Shielded Riot",
        '-1725114339': "Gray Digital Shielded Riot",
        '-237501475': "Orange Firefighter & Goggles",
        '-216857217': "Green Digital Scope Night Vision",
        '-1635669225': "Black Scope Night Vision",
        '-1457995707': "Sage Scope Night Vision",
        '-196290900': "White Scope Night Vision",
        '-430220728': "Bugstars Forwards Cap",
        '-124125499': "Prison Authority Forwards Cap",
        '-1024027777': "Yung Ancestor Forwards Cap",
        '-1462377132': "Toothy Grin Forwards Cap",
        '-752535050': "Wolf Forwards Cap",
        '-1923928497': "Gray Camo Forwards Cap",
        '-550415858': "Blood Cross Forwards Cap",
        '-1011573995': "Green Camo Forwards Cap",
        '-168657008': "Green Neon Camo Forwards Cap",
        '-435546035': "Teal Forwards Cap",
        '-1144339505': "Smiley Forwards Cap",
        '-1318146281': "Blue Wave Forwards Cap",
        '-2079501215': "Stars & Stripes Forwards Cap",
        '-87504600': "Wolf Backwards Cap",
        '-566423535': "Black Skull Backwards Cap",
        '-392747839': "Brown Skull Backwards Cap",
        '-938744917': "Green Neon Camo Backwards Cap",
        '-1172158504': "Purple Neon Camo Backwards Cap",
        '-1306150945': "Cobble Backwards Cap",
        '-1163595103': "Purple Snakeskin Backwards Cap",
        '-272755564': "Teal Backwards Cap",
        '-1938043391': "Gray Digital Backwards Cap",
        '-2136741719': "Gruppe Sechs Helmet",
        '-158989462': "Orange Construction Helmet",
        '-1289257810': "White Construction Helmet",
        '-1531322413': "Blue Construction Helmet",
        '-1967962822': "Dark Gray Undertaker Hat",
        '-1165533937': "Ash Undertaker Hat",
        '-837876702': "Eggshell Undertaker Hat",
        '-529717026': "White Undertaker Hat",
        '-1614188698': "Dusty Violet Undertaker Hat",
        '-1373697007': "Light Gray Undertaker Hat",
        '-1933129363': "Terracotta Undertaker Hat",
        '-355881275': "Blue Digital Cap",
        '-989240507': "Brown Digital Cap",
        '-1033105043': "Aqua Camo Cap",
        '-1327141280': "Contrast Camo Cap",
        '-84671880': "Light Woodland Cap",
        '-427533931': "Sand Cap",
        '-1349207972': "Gray Digital Cap",
        '-1114287011': "Peach Digital Cap",
        '-726269270': "Gray Woodland Cap",
        '-213048308': "Brown Digital Boonie Down",
        '-1325256016': "Aqua Camo Boonie Down",
        '-1786152005': "Contrast Camo Boonie Down",
        '-401202985': "Cobble Boonie Down",
        '-104086462': "Peach Camo Boonie Down",
        '-862426660': "Brushstroke Boonie Down",
        '-565768903': "Flecktarn Boonie Down",
        '-309323630': "Green Digital Boonie Down",
        '-707199107': "Black Boonie Down",
        '-1959859674': "Slate Boonie Down",
        '-525855461': "Chocolate Boonie Down",
        '-1004512244': "Light Brown Boonie Down",
        '-1974119906': "Fall Boonie Down",
        '-1131661685': "Dark Woodland Boonie Down",
        '-666472961': "Crosshatch Boonie Down",
        '-1048559501': "Moss Digital Boonie Down",
        '-352840878': "Gray Woodland Boonie Down",
        '-232321747': "Brown Digital Boonie Up",
        '-91461076': "Aqua Camo Boonie Up",
        '-858616135': "Splinter Boonie Up",
        '-111024165': "Contrast Camo Boonie Up",
        '-913602513': "Cobble Boonie Up",
        '-1546732366': "Peach Camo Boonie Up",
        '-436322028': "Brushstroke Boonie Up",
        '-1105694395': "Flecktarn Boonie Up",
        '-1873439296': "Light Woodland Boonie Up",
        '-1362963814': "Sand Boonie Up",
        '-1114311742': "Olive Boonie Up",
        '-1294344628': "Light Brown Boonie Up",
        '-1869952526': "Dark Woodland Boonie Up",
        '-1648303010': "Crosshatch Boonie Up",
        '-2140001855': "Gray Woodland Boonie Up",
        '-1845545647': "Splinter Beret",
        '-1571301886': "Contrast Camo Beret",
        '-1308723889': "Cobble Beret",
        '-1068690936': "Peach Camo Beret",
        '-685031484': "Brushstroke Beret",
        '-450831441': "Flecktarn Beret",
        '-370023087': "Light Woodland Beret",
        '-140738394': "Moss Beret",
        '-1441329137': "Green Digital Beret",
        '-1647943133': "Midnight Beret",
        '-1960723238': "Ice Beret",
        '-1756539591': "Chocolate Beret",
        '-1408532811': "Olive Beret",
        '-505451940': "Light Brown Beret",
        '-1135561598': "Gray Digital Beret",
        '-1434971939': "Peach Digital Beret",
        '-1137593264': "Fall Beret",
        '-942027872': "Dark Woodland Beret",
        '-643797203': "Crosshatch Beret",
        '-1318794481': "Blue Digital Utility Cap",
        '-1557942643': "Brown Digital Utility Cap",
        '-1094542300': "Aqua Camo Utility Cap",
        '-858277810': "Splinter Utility Cap",
        '-760429576': "Contrast Camo Utility Cap",
        '-395579530': "Cobble Utility Cap",
        '-166032685': "Peach Camo Utility Cap",
        '-1931640319': "Green Digital Utility Cap",
        '-1699228369': "Black Utility Cap",
        '-826393285': "Slate Utility Cap",
        '-1195044535': "White Utility Cap",
        '-202242142': "Chocolate Utility Cap",
        '-598091662': "Olive Utility Cap",
        '-23009914': "Gray Digital Utility Cap",
        '-396379900': "Peach Digital Utility Cap",
        '-662890177': "Fall Utility Cap",
        '-809259937': "Blue Digital Beanie Cap",
        '-570506027': "Aqua Camo Beanie Cap",
        '-339124118': "Splinter Beanie Cap",
        '-1033171538': "Contrast Camo Beanie Cap",
        '-804607763': "Cobble Beanie Cap",
        '-1829392700': "Peach Camo Beanie Cap",
        '-1598731709': "Brushstroke Beanie Cap",
        '-430516855': "Flecktarn Beanie Cap",
        '-200052478': "Light Woodland Beanie Cap",
        '-467184346': "Green Digital Beanie Cap",
        '-1690651798': "White Beanie Cap",
        '-1901614548': "Crosshatch Beanie Cap",
        '-1543875375': "Gray Woodland Beanie Cap",
        '-73647644': "Red Hawk & Little Cap",
        '-313418417': "Black Hawk & Little Cap",
        '-850093035': "Warstock Cap",
        '-698486936': "White Shrewsbury Cap",
        '-1072905530': "Black Shrewsbury Cap",
        '-1563654102': "Black Ammu-Nation Cap",
        '-720081735': "Red Ammu-Nation Cap",
        '-1765816422': "Red Hawk & Little Cap",
        '-1533320367': "Black Hawk & Little Cap",
        '-1832969872': "Warstock Cap",
        '-1997689882': "Black Coil Cap",
        '-1617209023': "Black Ammu-Nation Cap",
        '-1391954917': "Red Ammu-Nation Cap",
        '-1292107961': "Captain Peaked Cap",
        '-723493963': "Brown Bugs",
        '-500992453': "Black Cool Tint Bugs",
        '-1739758960': "Green Marble Bugs",
        '-980697844': "Teal Bugs",
        '-2017083007': "Pink Bugs",
        '-479862111': "Black Cowgirl Hat",
        '-1254685116': "Pink Cowgirl Hat",
        '-990861897': "Red Striped Cowgirl Hat",
        '-1735340808': "Striped Cowgirl Hat",
        '-1344510330': "Red Canvas Hat",
        '-1636580427': "Yellow Canvas Hat",
        '-1684357629': "Sky Blue Canvas Hat",
        '-2010147027': "Spotted Canvas Hat",
        '-344209529': "Two-Tone Sun Hat",
        '-575034365': "Dark Brown Sun Hat",
        '-92904068': "Wild Sun Hat",
        '-336046992': "Classic Tree",
        '-879422550': "Holly Tree",
        '-45091041': "Red Stripy Tree",
        '-1451177777': "Pudding Woolly Knit",
        '-1938048778': "Naughty Elf Woolly Trail",
        '-1342898200': "Silly Elf Woolly Trail",
        '-721284370': "Highland Tartan Bobble",
        '-1977527541': "Black Ho Ho Ho Flipped Cap",
        '-1670449242': "Blue Snowflake Flipped Cap",
        '-1385031204': "Nice Flipped Cap",
        '-1088111295': "Green Ho Ho Ho Flipped Cap",
        '-1530918836': "Red Snowflake Flipped Cap",
        '-1221415631': "Gingerbread Flipped Cap",
        '-629869643': "Bah Humbug Flipped Cap",
        '-1316105355': "Red Santa Hat",
        '-1901945713': "Steel Slim Glasses",
        '-1679968507': "Pewter Slim Glasses",
        '-211753462': "Gold Stem Slim Glasses",
        '-284371143': "White Plastic Glasses",
        '-1976859387': "Marbled Plastic Frames",
        '-1536312951': "Latte Plastic Frames",
        '-1243128708': "Vixen Plastic Frames",
        '-1052478666': "Sunshine Plastic Frames",
        '-746383437': "Eccentric Plastic Frames",
        '-322745805': "Shell Plastic Glasses",
        '-341686545': "Black Bowler Hat",
        '-568448021': "Gray Bowler Hat",
        '-65078692': "Ash Bowler Hat",
        '-296132911': "Navy Bowler Hat",
        '-1277007392': "Silver Bowler Hat",
        '-1516188323': "White Bowler Hat",
        '-204318893': "Blue Bowler Hat",
        '-1197753210': "Black Top Hat",
        '-1337283612': "Gray Top Hat",
        '-1795562136': "Navy Top Hat",
        '-730074042': "Blue Top Hat",
        '-1028304711': "Light Gray Top Hat",
        '-1188348515': "Olive Top Hat",
        '-1495295738': "Purple Top Hat",
        '-678528413': "Lobster Top Hat",
        '-1102297121': "Brown Top Hat",
        '-28263585': "Black Fashion"
      }
    }
  };
  ;
  var wo = Object.defineProperty;
  var xo = (_0x3a71b3, _0x57681f) => {
    for (var _0x47eb68 in _0x57681f) {
      wo(_0x3a71b3, _0x47eb68, {
        'get': _0x57681f[_0x47eb68],
        'enumerable': true
      });
    }
  };
  var yo = (_0x3657fd, _0x16f20c, _0x102b1d) => {
    if (!_0x16f20c.has(_0x3657fd)) {
      throw TypeError("Cannot " + _0x102b1d);
    }
  };
  var zo = (_0x4d42d7, _0x2cbd07, _0x283baf) => {
    yo(_0x4d42d7, _0x2cbd07, "read from private field");
    return _0x283baf ? _0x283baf.call(_0x4d42d7) : _0x2cbd07.get(_0x4d42d7);
  };
  var Ao = (_0x49e9d1, _0x48f0d6, _0x41c426) => {
    if (_0x48f0d6.has(_0x49e9d1)) {
      throw TypeError("Cannot add the same private member more than once");
    }
    if (_0x48f0d6 instanceof WeakSet) {
      _0x48f0d6.add(_0x49e9d1);
    } else {
      _0x48f0d6.set(_0x49e9d1, _0x41c426);
    }
  };
  var Bo = (_0x2e931e, _0x180bc8, _0x40107d, _0x973e11) => {
    yo(_0x2e931e, _0x180bc8, "write to private field");
    if (_0x973e11) {
      _0x973e11.call(_0x2e931e, _0x40107d);
    } else {
      _0x180bc8.set(_0x2e931e, _0x40107d);
    }
    return _0x40107d;
  };
  var Co = (_0x5ace01, _0x208e49, _0x2ebd06) => {
    yo(_0x5ace01, _0x208e49, "access private method");
    return _0x2ebd06;
  };
  var Go = {
    'warning': 0x1,
    'log': 0x2,
    'error': 0x3,
    'debug': 0x4
  };
  var Ho = typeof GetConvar === "function" ? GetConvar(GetCurrentResourceName() + "_logLevel", '') : '';
  var Io = typeof GetConvar === "function" ? GetConvar("sv_loglevel", "warning") : "warning";
  Io = (Ho == null ? undefined : Ho.length) > 0x0 ? Ho : Io;
  (() => {
    if (!Go[Io]) {
      throw new Error("Invalid log level: " + Io);
    }
  })();
  var Jo = () => Go[Io] >= 0x1;
  var Ko = () => Go[Io] >= 0x2;
  var Lo = () => Go[Io] >= 0x3;
  var Mo = () => Io === "debug";
  var Oo = {};
  var Po = {
    'MathUtils': () => Zo
  };
  xo(Oo, Po);
  var Qo;
  var Ro;
  var So = class a {
    constructor(_0x3b7369, _0xc6313e, _0x4af7dd) {
      Ao(this, Qo);
      const _0x4b6cfa = Co(this, Qo, Ro).call(this, _0x3b7369, _0xc6313e, _0x4af7dd);
      this.x = _0x4b6cfa.x;
      this.y = _0x4b6cfa.y;
      this.z = _0x4b6cfa.z;
    }
    ["equals"](_0x38073f, _0x2cf911, _0x504ecf) {
      const _0x3fabde = Co(this, Qo, Ro).call(this, _0x38073f, _0x2cf911, _0x504ecf);
      return this.x === _0x3fabde.x && this.y === _0x3fabde.y && this.z === _0x3fabde.z;
    }
    ["add"](_0x2a9779, _0x3ee5db, _0x11ba17, _0x344447) {
      let _0x74890a = Co(this, Qo, Ro).call(this, _0x2a9779, _0x3ee5db, _0x11ba17);
      this.x += _0x344447 ? _0x74890a.x * _0x344447 : _0x74890a.x;
      this.y += _0x344447 ? _0x74890a.y * _0x344447 : _0x74890a.y;
      this.z += _0x344447 ? _0x74890a.z * _0x344447 : _0x74890a.z;
      return this;
    }
    ["addScalar"](_0x5b2035) {
      if (typeof _0x5b2035 !== 'number') {
        throw new Error("Invalid scalar");
      }
      this.x += _0x5b2035;
      this.y += _0x5b2035;
      this.z += _0x5b2035;
      return this;
    }
    ["sub"](_0x1d0f05, _0x1d25c0, _0x2ab5d5, _0x5141b4) {
      const _0x14875b = Co(this, Qo, Ro).call(this, _0x1d0f05, _0x1d25c0, _0x2ab5d5);
      this.x -= _0x5141b4 ? _0x14875b.x * _0x5141b4 : _0x14875b.x;
      this.y -= _0x5141b4 ? _0x14875b.y * _0x5141b4 : _0x14875b.y;
      this.z -= _0x5141b4 ? _0x14875b.z * _0x5141b4 : _0x14875b.z;
      return this;
    }
    ["subScalar"](_0x5e54b2) {
      if (typeof _0x5e54b2 !== "number") {
        throw new Error("Invalid scalar");
      }
      this.x -= _0x5e54b2;
      this.y -= _0x5e54b2;
      this.z -= _0x5e54b2;
      return this;
    }
    ["multiply"](_0xbf5844, _0x115ca0, _0xf9cdc3) {
      const _0x4bbe26 = Co(this, Qo, Ro).call(this, _0xbf5844, _0x115ca0, _0xf9cdc3);
      this.x *= _0x4bbe26.x;
      this.y *= _0x4bbe26.y;
      this.z *= _0x4bbe26.z;
      return this;
    }
    ["multiplyScalar"](_0x1a3427) {
      if (typeof _0x1a3427 !== "number") {
        throw new Error("Invalid scalar");
      }
      this.x *= _0x1a3427;
      this.y *= _0x1a3427;
      this.z *= _0x1a3427;
      return this;
    }
    ["divide"](_0x62313c, _0x316c7e, _0x45a8dc) {
      const _0x3ac889 = Co(this, Qo, Ro).call(this, _0x62313c, _0x316c7e, _0x45a8dc);
      this.x /= _0x3ac889.x;
      this.y /= _0x3ac889.y;
      this.z /= _0x3ac889.z;
      return this;
    }
    ["divideScalar"](_0x36a0d4) {
      if (typeof _0x36a0d4 !== "number") {
        throw new Error("Invalid scalar");
      }
      this.x /= _0x36a0d4;
      this.y /= _0x36a0d4;
      this.z /= _0x36a0d4;
      return this;
    }
    ["round"]() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    ["floor"]() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    ["ceil"]() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    ["getCenter"](_0x20f175, _0x291a9f, _0x109e9f) {
      const _0x27a1fc = Co(this, Qo, Ro).call(this, _0x20f175, _0x291a9f, _0x109e9f);
      return new a((this.x + _0x27a1fc.x) / 0x2, (this.y + _0x27a1fc.y) / 0x2, (this.z + _0x27a1fc.z) / 0x2);
    }
    ["getDistance"](_0x5017f8, _0xfe5b13, _0x5d16cc) {
      const [_0x262518, _0x3cab78, _0x28c849] = _0x5017f8 instanceof Array ? _0x5017f8 : typeof _0x5017f8 === "object" ? [_0x5017f8.x, _0x5017f8.y, _0x5017f8.z] : [_0x5017f8, _0xfe5b13, _0x5d16cc];
      if (typeof _0x262518 !== "number" || typeof _0x3cab78 !== 'number' || typeof _0x28c849 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      const [_0x18309c, _0x297234, _0x18558c] = [this.x - _0x262518, this.y - _0x3cab78, this.z - _0x28c849];
      return Math.sqrt(_0x18309c * _0x18309c + _0x297234 * _0x297234 + _0x18558c * _0x18558c);
    }
    ["toArray"](_0x375991) {
      if (typeof _0x375991 === "number") {
        return [parseFloat(this.x.toFixed(_0x375991)), parseFloat(this.y.toFixed(_0x375991)), parseFloat(this.z.toFixed(_0x375991))];
      }
      return [this.x, this.y, this.z];
    }
    ["toJSON"](_0x30578b) {
      if (typeof _0x30578b === "number") {
        return {
          'x': parseFloat(this.x.toFixed(_0x30578b)),
          'y': parseFloat(this.y.toFixed(_0x30578b)),
          'z': parseFloat(this.z.toFixed(_0x30578b))
        };
      }
      var _0x319b7d = {
        'x': this.x,
        'y': this.y,
        'z': this.z
      };
      return _0x319b7d;
    }
    ["toString"](_0x8cb668) {
      return JSON.stringify(this.toJSON(_0x8cb668));
    }
  };
  Qo = new WeakSet();
  Ro = function (_0x29d676, _0x122bf8, _0x674b6c) {
    let _0x4098be = {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    };
    if (_0x29d676 instanceof So) {
      _0x4098be = _0x29d676;
    } else {
      if (_0x29d676 instanceof Array) {
        var _0x28d2f2 = {
          'x': _0x29d676[0x0],
          'y': _0x29d676[0x1],
          'z': _0x29d676[0x2]
        };
        _0x4098be = _0x28d2f2;
      } else {
        if (typeof _0x29d676 === "object") {
          _0x4098be = _0x29d676;
        } else {
          var _0x1280aa = {
            'x': _0x29d676,
            'y': _0x122bf8,
            'z': _0x674b6c
          };
          _0x4098be = _0x1280aa;
        }
      }
    }
    if (typeof _0x4098be.x !== "number" || typeof _0x4098be.y !== "number" || typeof _0x4098be.z !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    return _0x4098be;
  };
  var Clamp = (_0x5b7fc1, _0x17cff8, _0x1fef3e) => {
    return Math.min(Math.max(_0x5b7fc1, _0x17cff8), _0x1fef3e);
  };
  var GetMapRange = (_0x4d8df1, _0x547f53, _0x2457cb) => {
    return _0x547f53[0x0] + (_0x2457cb - _0x4d8df1[0x0]) * (_0x547f53[0x1] - _0x547f53[0x0]) / (_0x4d8df1[0x1] - _0x4d8df1[0x0]);
  };
  var GetDistance = ([_0x2de65e, _0x38c461, _0xa4a675], [_0x328dcc, _0xbb48c2, _0x2d2495]) => {
    const [_0x4cb4c3, _0x453e47, _0x4ace89] = [_0x2de65e - _0x328dcc, _0x38c461 - _0xbb48c2, _0xa4a675 - _0x2d2495];
    return Math.sqrt(_0x4cb4c3 * _0x4cb4c3 + _0x453e47 * _0x453e47 + _0x4ace89 * _0x4ace89);
  };
  var returnRandomNum = (_0xc3382b, _0x27b76d) => {
    return _0x27b76d ? Math.floor(Math.random() * (_0x27b76d - _0xc3382b + 0x1) + _0xc3382b) : Math.floor(Math.random() * _0xc3382b);
  };
  var ParseVector3 = (_0xaebe61, _0x48a01c, _0x5972a7) => {
    if (_0xaebe61 instanceof So) {
      return _0xaebe61;
    } else {
      if (_0xaebe61 instanceof Array) {
        return new So(_0xaebe61);
      } else {
        if (typeof _0xaebe61 === "object") {
          return new So(_0xaebe61);
        }
      }
    }
    if (typeof _0xaebe61 !== 'number' || typeof _0x48a01c !== "number" || typeof _0x5972a7 !== "number") {
      throw new Error("Invalid vector coordinates");
    }
    return new So(_0xaebe61, _0x48a01c, _0x5972a7);
  };
  var Zo = {
    'getMapRange': GetMapRange,
    'getDistance': GetDistance,
    'getRandomNumber': returnRandomNum,
    'parseVector3': ParseVector3
  };
  function Cachee_Ghost(_0x507ba0, _0x14d0c5) {
    const _0x434caa = CacheableMap((_0x23fa28, _0xe3abf3, ..._0x1a9672) => {
      return _0x507ba0(_0x23fa28, ..._0x1a9672);
    }, _0x14d0c5);
    return {
      'get': function (..._0x308762) {
        return _0x434caa.get('_', ..._0x308762);
      },
      'reset': function () {
        _0x434caa.reset('_');
      }
    };
  }
  function CacheableMap(_0x49fa5b, _0x209606) {
    const _0x73bd87 = _0x209606.timeToLive || 0xea60;
    const _0x1639d0 = {};
    async function _0x1f33a0(_0x4cfa53, ..._0x21ba18) {
      let _0x1e290c = _0x1639d0[_0x4cfa53];
      if (!_0x1e290c) {
        _0x1e290c = {
          'value': null,
          'lastUpdated': 0x0
        };
        _0x1639d0[_0x4cfa53] = _0x1e290c;
      }
      const _0x142c16 = Date.now();
      if (_0x1e290c.lastUpdated === 0x0 || _0x142c16 - _0x1e290c.lastUpdated > _0x73bd87) {
        const [_0x2625f5, _0x785e64] = await _0x49fa5b(_0x1e290c, _0x4cfa53, ..._0x21ba18);
        if (_0x2625f5) {
          _0x1e290c.lastUpdated = _0x142c16;
          _0x1e290c.value = _0x785e64;
        }
        return _0x785e64;
      }
      return await new Promise(_0x3558a5 => setTimeout(() => _0x3558a5(_0x1e290c.value), 0x0));
    }
    return {
      'get': async function (_0x442073, ..._0x235f92) {
        return await _0x1f33a0(_0x442073, ..._0x235f92);
      },
      'reset': function (_0x54bd7a) {
        const _0xeb94f6 = _0x1639d0[_0x54bd7a];
        if (_0xeb94f6) {
          _0xeb94f6.lastUpdated = 0x0;
        }
      }
    };
  }
  function GetStringHash(_0x4a3f20) {
    return B(_0x4a3f20, B.URL);
  }
  function WaitForCondition(_0x32a593, _0x1d19c4) {
    return new Promise((_0x3d72c8, _0x3805c4) => {
      const _0x562a99 = Date.now();
      const _0x499a49 = setInterval(() => {
        const _0x1d80a4 = Date.now() - _0x562a99 > _0x1d19c4;
        if (_0x32a593() || _0x1d80a4) {
          clearInterval(_0x499a49);
          return _0x3d72c8(_0x1d80a4);
        }
      }, 0x1);
    });
  }
  function GhostWait(_0x2995d7) {
    return new Promise(_0x2c8741 => setTimeout(() => _0x2c8741(), _0x2995d7));
  }
  function WaitForNextFrame() {
    return GhostWait(0x0);
  }
  var gp = {
    'cache': Cachee_Ghost,
    'cacheableMap': CacheableMap,
    'waitForCondition': WaitForCondition,
    'getStringHash': GetStringHash,
    'wait': GhostWait,
    'waitForNextFrame': WaitForNextFrame,
    ...Oo
  };
  var ip;
  var jp;
  var kp = class {
    constructor(_0x268fa0) {
      Ao(this, ip, undefined);
      Ao(this, jp, undefined);
      Bo(this, jp, _0x268fa0 ?? 0x5);
      Bo(this, ip, new Map());
    }
    ["setTTL"](_0xc2851a) {
      Bo(this, jp, _0xc2851a);
    }
    ["set"](_0x363f97, _0x183e54, _0xc84f83) {
      zo(this, ip).set(_0x363f97, {
        'value': _0x183e54,
        'expiration': Date.now() + (_0xc84f83 ?? zo(this, jp)) * 0x3e8
      });
      return this;
    }
    ["get"](_0xc8827c, _0x84b83a = false) {
      const _0xf0e348 = zo(this, ip).get(_0xc8827c);
      const _0x28ffc2 = _0xf0e348 ? _0x84b83a ? true : _0xf0e348.expiration > Date.now() : false;
      if (!_0xf0e348 || !_0x28ffc2) {
        if (_0xf0e348) {
          zo(this, ip)["delete"](_0xc8827c);
        }
        return;
      }
      return _0xf0e348.value;
    }
    ['has'](_0x17acf3, _0x14860c = false) {
      const _0x3a46ff = zo(this, ip).get(_0x17acf3);
      const _0x286a54 = _0x3a46ff ? _0x14860c ? true : _0x3a46ff.expiration > Date.now() : false;
      if (_0x3a46ff && !_0x286a54) {
        zo(this, ip)['delete'](_0x17acf3);
      }
      return _0x286a54;
    }
    ["delete"](_0x4af409) {
      return zo(this, ip)["delete"](_0x4af409);
    }
    ["clear"]() {
      zo(this, ip).clear();
    }
    ["values"](_0x2369b2 = false) {
      const _0x35f230 = [];
      const _0x2c8da6 = Date.now();
      for (const _0x4b71a3 of zo(this, ip).values()) {
        if (_0x2369b2 || _0x4b71a3.expiration > _0x2c8da6) {
          _0x35f230.push(_0x4b71a3.value);
        }
      }
      return _0x35f230;
    }
    ["keys"](_0x50c2f7 = false) {
      const _0x3ce0e9 = [];
      const _0x2fe458 = Date.now();
      for (const [_0x11685a, _0x1b3bbc] of zo(this, ip).entries()) {
        if (_0x50c2f7 || _0x1b3bbc.expiration > _0x2fe458) {
          _0x3ce0e9.push(_0x11685a);
        }
      }
      return _0x3ce0e9;
    }
    ["entries"](_0x491733 = false) {
      const _0x5a8696 = [];
      const _0x4517ab = Date.now();
      for (const [_0x45760e, _0x16385e] of zo(this, ip).entries()) {
        if (_0x491733 || _0x16385e.expiration > _0x4517ab) {
          _0x5a8696.push([_0x45760e, _0x16385e.value]);
        }
      }
      return _0x5a8696;
    }
  };
  ip = new WeakMap();
  jp = new WeakMap();
  var lp = (_0x590c16 => {
    _0x590c16[_0x590c16.hat = 0x0] = "hat";
    _0x590c16[_0x590c16.mask = 0x1] = "mask";
    _0x590c16[_0x590c16.glasses = 0x2] = "glasses";
    _0x590c16[_0x590c16.armor = 0x3] = "armor";
    _0x590c16[_0x590c16.shoes = 0x4] = "shoes";
    _0x590c16[_0x590c16.idcard = 0x5] = "idcard";
    _0x590c16[_0x590c16.mobilephone = 0x6] = "mobilephone";
    _0x590c16[_0x590c16.keyring = 0x7] = "keyring";
    _0x590c16[_0x590c16.bankcard = 0x8] = "bankcard";
    _0x590c16[_0x590c16.backpack = 0x9] = "backpack";
    return _0x590c16;
  })(lp || {});
  ;
  var mp = /\u0000/g;
  function getEntityHandle(_0x53b202, _0x2a5a2a) {
    var _0x15e7b7 = new Uint8Array(_0x53b202, _0x2a5a2a, 0x40);
    var _0x32ef66 = Array.from(_0x15e7b7);
    return String.fromCharCode.apply(null, _0x32ef66).replace(mp, '');
  }
  ;
  function op(_0x305bd4, _0x767e6a, _0x895875, _0x5490f3, _0x3127e4, _0x24bbd3, _0x3449f5) {
    try {
      var _0x5a797c = _0x305bd4[_0x24bbd3](_0x3449f5);
      var _0x12ffe1 = _0x5a797c.value;
    } catch (_0x56e71c) {
      _0x895875(_0x56e71c);
      return;
    }
    if (_0x5a797c.done) {
      _0x767e6a(_0x12ffe1);
    } else {
      Promise.resolve(_0x12ffe1).then(_0x5490f3, _0x3127e4);
    }
  }
  function pp(_0x5db4f5) {
    return function () {
      var _0x4f18a4 = this;
      return new Promise(function (_0x235087, _0x3ca860) {
        var _0x1893bf = _0x5db4f5.apply(_0x4f18a4, arguments);
        function _0x2b29d4(_0x2ae39f) {
          op(_0x1893bf, _0x235087, _0x3ca860, _0x2b29d4, _0x2bc83a, "next", _0x2ae39f);
        }
        function _0x2bc83a(_0x4a64ba) {
          op(_0x1893bf, _0x235087, _0x3ca860, _0x2b29d4, _0x2bc83a, "throw", _0x4a64ba);
        }
        _0x2b29d4(undefined);
      });
    };
  }
  function welcome() {
    console.log("^5 Thank you for purchasing karma-clothing if you need support contact us here: https://discord.gg/Rsg9FgYevK");
  }
  function ehCorrect() {
    console.log("^1 Resource is not named 'karma-clothing' ! if you need support contact us here: https://discord.gg/Rsg9FgYevK");
  }
  function qp(_0x1561e9, _0x1217b6) {
    var _0x189e5a;
    var _0x4de9d2;
    var _0x185365;
    var _0x4f4103;
    var _0x2c9926 = {
      'label': 0x0,
      'sent': function () {
        if (_0x185365[0x0] & 0x1) {
          throw _0x185365[0x1];
        }
        return _0x185365[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x4f4103 = {
      'next': _0x463a62(0x0),
      'throw': _0x463a62(0x1),
      'return': _0x463a62(0x2)
    };
    if (typeof Symbol === "function") {
      _0x4f4103[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x4f4103;
    function _0x463a62(_0x44a7a9) {
      return function (_0x131da9) {
        return _0x25d87f([_0x44a7a9, _0x131da9]);
      };
    }
    function _0x25d87f(_0x17fead) {
      if (_0x189e5a) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x2c9926) {
        try {
          _0x189e5a = 0x1;
          if (_0x4de9d2 && (_0x185365 = _0x17fead[0x0] & 0x2 ? _0x4de9d2["return"] : _0x17fead[0x0] ? _0x4de9d2["throw"] || ((_0x185365 = _0x4de9d2["return"]) && _0x185365.call(_0x4de9d2), 0x0) : _0x4de9d2.next) && !(_0x185365 = _0x185365.call(_0x4de9d2, _0x17fead[0x1])).done) {
            return _0x185365;
          }
          _0x4de9d2 = 0x0;
          if (_0x185365) {
            _0x17fead = [_0x17fead[0x0] & 0x2, _0x185365.value];
          }
          switch (_0x17fead[0x0]) {
            case 0x0:
            case 0x1:
              _0x185365 = _0x17fead;
              break;
            case 0x4:
              _0x2c9926.label++;
              var _0x46c50e = {
                'value': _0x17fead[0x1],
                'done': false
              };
              return _0x46c50e;
            case 0x5:
              _0x2c9926.label++;
              _0x4de9d2 = _0x17fead[0x1];
              _0x17fead = [0x0];
              continue;
            case 0x7:
              _0x17fead = _0x2c9926.ops.pop();
              _0x2c9926.trys.pop();
              continue;
            default:
              _0x185365 = _0x2c9926.trys;
              if (!(_0x185365 = _0x185365.length > 0x0 && _0x185365[_0x185365.length - 0x1]) && (_0x17fead[0x0] === 0x6 || _0x17fead[0x0] === 0x2)) {
                _0x2c9926 = 0x0;
                continue;
              }
              if (_0x17fead[0x0] === 0x3 && (!_0x185365 || _0x17fead[0x1] > _0x185365[0x0] && _0x17fead[0x1] < _0x185365[0x3])) {
                _0x2c9926.label = _0x17fead[0x1];
                break;
              }
              if (_0x17fead[0x0] === 0x6 && _0x2c9926.label < _0x185365[0x1]) {
                _0x2c9926.label = _0x185365[0x1];
                _0x185365 = _0x17fead;
                break;
              }
              if (_0x185365 && _0x2c9926.label < _0x185365[0x2]) {
                _0x2c9926.label = _0x185365[0x2];
                _0x2c9926.ops.push(_0x17fead);
                break;
              }
              if (_0x185365[0x2]) {
                _0x2c9926.ops.pop();
              }
              _0x2c9926.trys.pop();
              continue;
          }
          _0x17fead = _0x1217b6.call(_0x1561e9, _0x2c9926);
        } catch (_0x1c3e15) {
          _0x17fead = [0x6, _0x1c3e15];
          _0x4de9d2 = 0x0;
        } finally {
          _0x189e5a = _0x185365 = 0x0;
        }
      }
      if (_0x17fead[0x0] & 0x5) {
        throw _0x17fead[0x1];
      }
      var _0x5c7a82 = {
        'value': _0x17fead[0x0] ? _0x17fead[0x1] : undefined,
        'done': true
      };
      return _0x5c7a82;
    }
  }
  var SetupGeneartor = function () {
    var _0x20f4de = pp(function () {
      return qp(this, function (_0x3a6fc0) {
        return [0x2];
      });
    });
    return function _0x1629e8() {
      return _0x20f4de.apply(this, arguments);
    };
  }();
  function getLabelForEntity(_0x414c39, _0x2f4124, _0x2923e8, _0x14a74f, _0x1041c6, _0x4a8ebb = false) {
    var _0x1128e3 = (!_0x4a8ebb ? GetHashNameForComponent(_0x414c39, _0x2923e8, _0x14a74f, _0x1041c6) : GetHashNameForProp(_0x414c39, _0x2923e8, _0x14a74f, _0x1041c6)) & 0xffffffff;
    if (_0x1128e3) {
      var _0xce173e = new ArrayBuffer(0xb4);
      var _0x185122 = new Uint32Array(_0xce173e);
      Citizen.invokeNative(!_0x4a8ebb ? "0x74C0E2A57EC66760" : "0x5D5CAFF661DDF6FC", _0x1128e3, _0x185122);
      var _0x76c3a3 = getEntityHandle(_0xce173e, 0x42);
      if (_0x76c3a3) {
        var _0x20f74a = GetLabelText(_0x76c3a3);
        if (_0x20f74a !== "NULL") {
          return _0x20f74a;
        }
      }
    } else {
      if (_0x2923e8 == 0x0 && _0x4a8ebb) {
        var _0x2c19af = "HT_FM" + (_0x2f4124 == "male" ? 'M' : 'F') + '_' + _0x14a74f + '_' + _0x1041c6;
        var _0x33b74d = GetLabelText(_0x2c19af);
        if (_0x33b74d !== "NULL") {
          return _0x33b74d;
        }
      } else {
        var _0x340c99 = GetHashKey("SP_" + (_0x2f4124 == "male" ? 'M' : 'F') + '_' + (_0x4a8ebb ? 'P' : '') + (!_0x4a8ebb ? Kn[_0x2923e8] : Ln[_0x2923e8]) + '_' + _0x14a74f + '_' + _0x1041c6);
        var _0x19ee94 = !_0x4a8ebb ? AllClothingItemsAvail.clothing : AllClothingItemsAvail.props;
        var _0x2296df = _0x19ee94[_0x2f4124][_0x340c99];
        if (_0x2296df) {
          return _0x2296df;
        }
      }
    }
    return null;
  }
  var updatePlayerAppearanceDetails = gp.cacheableMap(function () {
    return async function (_0x3ee030, _0x23915f) {
      const _0x171979 = PlayerPedId();
      const _0x24649e = {
        'male': {},
        'female': {}
      };
      const _0x528609 = {
        'male': {},
        'female': {}
      };
      for (let _0x45695d = 0x0; _0x45695d < Object.keys(ClothsTable1).length / 0x2; _0x45695d++) {
        const _0x56d2f0 = GetNumberOfPedDrawableVariations(_0x171979, _0x45695d);
        for (let _0xeedbd4 = 0x0; _0xeedbd4 < _0x56d2f0; _0xeedbd4++) {
          const _0x7a4f3e = GetNumberOfPedTextureVariations(_0x171979, _0x45695d, _0xeedbd4);
          for (let _0x309ed2 = 0x0; _0x309ed2 < _0x7a4f3e; _0x309ed2++) {
            const _0x2f7bbe = getLabelForEntity(_0x171979, _0x23915f, _0x45695d, _0xeedbd4, _0x309ed2);
            if (_0x2f7bbe) {
              _0x24649e[_0x23915f][_0x45695d] = _0x24649e[_0x23915f][_0x45695d] || {};
              _0x24649e[_0x23915f][_0x45695d][_0xeedbd4] = _0x24649e[_0x23915f][_0x45695d][_0xeedbd4] || {};
              _0x24649e[_0x23915f][_0x45695d][_0xeedbd4][_0x309ed2] = _0x2f7bbe;
            }
          }
        }
      }
      let _0x61cedb;
      let _0x2ab4e1;
      try {
        for (const _0x5eb266 of Object.values(ClothingType).filter(_0x13b390 => typeof _0x13b390 === "number")) {
          const _0x3bd329 = GetNumberOfPedPropDrawableVariations(_0x171979, _0x5eb266);
          for (let _0x17dd03 = 0x0; _0x17dd03 < _0x3bd329; _0x17dd03++) {
            const _0x395def = GetNumberOfPedPropTextureVariations(_0x171979, _0x5eb266, _0x17dd03);
            for (let _0x2abdbd = 0x0; _0x2abdbd < _0x395def; _0x2abdbd++) {
              const _0x47749f = getLabelForEntity(_0x171979, _0x23915f, _0x5eb266, _0x17dd03, _0x2abdbd, true);
              if (_0x47749f) {
                _0x528609[_0x23915f][_0x5eb266] = _0x528609[_0x23915f][_0x5eb266] || {};
                _0x528609[_0x23915f][_0x5eb266][_0x17dd03] = _0x528609[_0x23915f][_0x5eb266][_0x17dd03] || {};
                _0x528609[_0x23915f][_0x5eb266][_0x17dd03][_0x2abdbd] = _0x47749f;
              }
            }
          }
        }
      } catch (_0x2a7bdf) {
        _0x61cedb = true;
        _0x2ab4e1 = _0x2a7bdf;
      }
      const _0x39e3df = {
        'clothing': _0x24649e,
        'props': _0x528609
      };
      return [true, _0x39e3df];
    };
  }(), {
    'timeToLive': 0x1b7740
  });
  var vp = false;
  var wp = false;
  var xp = new Set();
  var yp = new Set();
  function zp() {
    vp = !vp;
    if (!vp) {
      var _0x3193c9 = true;
      var _0x35bc74 = false;
      var _0x4b6c51 = undefined;
      try {
        var _0x22e032 = xp.values()[Symbol.iterator]();
        for (var _0x149669; !(_0x3193c9 = (_0x149669 = _0x22e032.next()).done); _0x3193c9 = true) {
          var _0x3efa82 = _0x149669.value;
          RemoveBlip(_0x3efa82);
        }
      } catch (_0x44dc5e) {
        _0x35bc74 = true;
        _0x4b6c51 = _0x44dc5e;
      } finally {
        try {
          if (!_0x3193c9 && _0x22e032["return"] != null) {
            _0x22e032["return"]();
          }
        } finally {
          if (_0x35bc74) {
            throw _0x4b6c51;
          }
        }
      }
      xp.clear();
      return;
    }
    var _0x9716de = true;
    var _0x246171 = false;
    var _0x6f99f7 = undefined;
    try {
      var _0x13a315 = lu[Symbol.iterator]();
      for (var _0x4ec22a; !(_0x9716de = (_0x4ec22a = _0x13a315.next()).done); _0x9716de = true) {
        var _0x2e43f1 = _0x4ec22a.value;
        var _0x47a46b = im.createBlip("coord", _0x2e43f1.vectors.x, _0x2e43f1.vectors.y, _0x2e43f1.vectors.z);
        im.applyBlipSettings(_0x47a46b, "Barber Shop", 0x47, 0x1);
        xp.add(_0x47a46b);
      }
    } catch (_0x42a358) {
      _0x246171 = true;
      _0x6f99f7 = _0x42a358;
    } finally {
      try {
        if (!_0x9716de && _0x13a315["return"] != null) {
          _0x13a315['return']();
        }
      } finally {
        if (_0x246171) {
          throw _0x6f99f7;
        }
      }
    }
  }
  function HandleSomeBlipsForShopTattos() {
    wp = !wp;
    if (!wp) {
      var _0x259b83 = true;
      var _0x872fc3 = false;
      var _0x1e7d69 = undefined;
      try {
        var _0x52307d = yp.values()[Symbol.iterator]();
        for (var _0x1be7d9; !(_0x259b83 = (_0x1be7d9 = _0x52307d.next()).done); _0x259b83 = true) {
          var _0x427e9c = _0x1be7d9.value;
          RemoveBlip(_0x427e9c);
        }
      } catch (_0x9eba50) {
        _0x872fc3 = true;
        _0x1e7d69 = _0x9eba50;
      } finally {
        try {
          if (!_0x259b83 && _0x52307d["return"] != null) {
            _0x52307d["return"]();
          }
        } finally {
          if (_0x872fc3) {
            throw _0x1e7d69;
          }
        }
      }
      yp.clear();
      return;
    }
    var _0x5348c2 = true;
    var _0x2ed033 = false;
    var _0x543adc = undefined;
    try {
      var _0x2a1319 = AleckZoneData[Symbol.iterator]();
      for (var _0x17031e; !(_0x5348c2 = (_0x17031e = _0x2a1319.next()).done); _0x5348c2 = true) {
        var _0x1b0cdc = _0x17031e.value;
        var _0x327022 = im.createBlip("coord", _0x1b0cdc.vectors.x, _0x1b0cdc.vectors.y, _0x1b0cdc.vectors.z);
        im.applyBlipSettings(_0x327022, "Tattoo Shop", 0x4b, 0x1);
        yp.add(_0x327022);
      }
    } catch (_0x1be62d) {
      _0x2ed033 = true;
      _0x543adc = _0x1be62d;
    } finally {
      try {
        if (!_0x5348c2 && _0x2a1319["return"] != null) {
          _0x2a1319["return"]();
        }
      } finally {
        if (_0x2ed033) {
          throw _0x543adc;
        }
      }
    }
  }
  ;
  function Dp(_0x1982cd, _0x272bf8) {
    if (_0x272bf8 == null || _0x272bf8 > _0x1982cd.length) {
      _0x272bf8 = _0x1982cd.length;
    }
    var _0xc4a146 = 0x0;
    for (var _0x547add = new Array(_0x272bf8); _0xc4a146 < _0x272bf8; _0xc4a146++) {
      _0x547add[_0xc4a146] = _0x1982cd[_0xc4a146];
    }
    return _0x547add;
  }
  function Ep(_0x2ea892) {
    if (Array.isArray(_0x2ea892)) {
      return _0x2ea892;
    }
  }
  function Fp(_0x5c2839) {
    if (Array.isArray(_0x5c2839)) {
      return Dp(_0x5c2839);
    }
  }
  function Gp(_0x515cdb, _0x3f9890, _0x4f728d, _0x59eb6d, _0x2e2dc8, _0x3935df, _0x2c7dc4) {
    try {
      var _0x10ab2f = _0x515cdb[_0x3935df](_0x2c7dc4);
      var _0x57824d = _0x10ab2f.value;
    } catch (_0xa16a23) {
      _0x4f728d(_0xa16a23);
      return;
    }
    if (_0x10ab2f.done) {
      _0x3f9890(_0x57824d);
    } else {
      Promise.resolve(_0x57824d).then(_0x59eb6d, _0x2e2dc8);
    }
  }
  function Hp(_0x449a4b) {
    return function () {
      var _0x14d7db = this;
      return new Promise(function (_0x30cc9a, _0x450851) {
        var _0x27268d = _0x449a4b.apply(_0x14d7db, arguments);
        function _0xba677a(_0x3a3a66) {
          Gp(_0x27268d, _0x30cc9a, _0x450851, _0xba677a, _0x13e0b5, "next", _0x3a3a66);
        }
        function _0x13e0b5(_0x3e39fe) {
          Gp(_0x27268d, _0x30cc9a, _0x450851, _0xba677a, _0x13e0b5, "throw", _0x3e39fe);
        }
        _0xba677a(undefined);
      });
    };
  }
  function Ip(_0x27a930) {
    if (typeof Symbol !== "undefined" && _0x27a930[Symbol.iterator] != null || _0x27a930["@@iterator"] != null) {
      return Array.from(_0x27a930);
    }
  }
  function Jp(_0x388dac, _0x3db68d) {
    var _0x404029 = _0x388dac == null ? null : typeof Symbol !== "undefined" && _0x388dac[Symbol.iterator] || _0x388dac["@@iterator"];
    if (_0x404029 == null) {
      return;
    }
    var _0xddea60 = [];
    var _0x373464 = true;
    var _0x5346b2 = false;
    var _0x1c12fd;
    var _0x1b3583;
    try {
      for (_0x404029 = _0x404029.call(_0x388dac); !(_0x373464 = (_0x1c12fd = _0x404029.next()).done); _0x373464 = true) {
        _0xddea60.push(_0x1c12fd.value);
        if (_0x3db68d && _0xddea60.length === _0x3db68d) {
          break;
        }
      }
    } catch (_0x8dcf27) {
      _0x5346b2 = true;
      _0x1b3583 = _0x8dcf27;
    } finally {
      try {
        if (!_0x373464 && _0x404029["return"] != null) {
          _0x404029["return"]();
        }
      } finally {
        if (_0x5346b2) {
          throw _0x1b3583;
        }
      }
    }
    return _0xddea60;
  }
  function Kp() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function Lp() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function Mp(_0x264d95, _0x129e47) {
    return Ep(_0x264d95) || Jp(_0x264d95, _0x129e47) || Op(_0x264d95, _0x129e47) || Kp();
  }
  function Np(_0x1aaab8) {
    return Fp(_0x1aaab8) || Ip(_0x1aaab8) || Op(_0x1aaab8) || Lp();
  }
  function Op(_0x106d99, _0x5f3ffc) {
    if (!_0x106d99) {
      return;
    }
    if (typeof _0x106d99 === "string") {
      return Dp(_0x106d99, _0x5f3ffc);
    }
    var _0x3264eb = Object.prototype.toString.call(_0x106d99).slice(0x8, -0x1);
    if (_0x3264eb === "Object" && _0x106d99.constructor) {
      _0x3264eb = _0x106d99.constructor.name;
    }
    if (_0x3264eb === "Map" || _0x3264eb === "Set") {
      return Array.from(_0x3264eb);
    }
    if (_0x3264eb === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x3264eb)) {
      return Dp(_0x106d99, _0x5f3ffc);
    }
  }
  function Pp(_0x47b9d1, _0x493c97) {
    var _0x28b13f;
    var _0x5662f8;
    var _0x3d24ed;
    var _0x475dee;
    var _0x6fceea = {
      'label': 0x0,
      'sent': function () {
        if (_0x3d24ed[0x0] & 0x1) {
          throw _0x3d24ed[0x1];
        }
        return _0x3d24ed[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x475dee = {
      'next': _0x24af95(0x0),
      'throw': _0x24af95(0x1),
      'return': _0x24af95(0x2)
    };
    if (typeof Symbol === "function") {
      _0x475dee[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x475dee;
    function _0x24af95(_0x40a604) {
      return function (_0x345568) {
        return _0x57b261([_0x40a604, _0x345568]);
      };
    }
    function _0x57b261(_0x3a65d4) {
      if (_0x28b13f) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x6fceea) {
        try {
          _0x28b13f = 0x1;
          if (_0x5662f8 && (_0x3d24ed = _0x3a65d4[0x0] & 0x2 ? _0x5662f8["return"] : _0x3a65d4[0x0] ? _0x5662f8["throw"] || ((_0x3d24ed = _0x5662f8["return"]) && _0x3d24ed.call(_0x5662f8), 0x0) : _0x5662f8.next) && !(_0x3d24ed = _0x3d24ed.call(_0x5662f8, _0x3a65d4[0x1])).done) {
            return _0x3d24ed;
          }
          _0x5662f8 = 0x0;
          if (_0x3d24ed) {
            _0x3a65d4 = [_0x3a65d4[0x0] & 0x2, _0x3d24ed.value];
          }
          switch (_0x3a65d4[0x0]) {
            case 0x0:
            case 0x1:
              _0x3d24ed = _0x3a65d4;
              break;
            case 0x4:
              _0x6fceea.label++;
              var _0xa7a185 = {
                'value': _0x3a65d4[0x1],
                'done': false
              };
              return _0xa7a185;
            case 0x5:
              _0x6fceea.label++;
              _0x5662f8 = _0x3a65d4[0x1];
              _0x3a65d4 = [0x0];
              continue;
            case 0x7:
              _0x3a65d4 = _0x6fceea.ops.pop();
              _0x6fceea.trys.pop();
              continue;
            default:
              _0x3d24ed = _0x6fceea.trys;
              if (!(_0x3d24ed = _0x3d24ed.length > 0x0 && _0x3d24ed[_0x3d24ed.length - 0x1]) && (_0x3a65d4[0x0] === 0x6 || _0x3a65d4[0x0] === 0x2)) {
                _0x6fceea = 0x0;
                continue;
              }
              if (_0x3a65d4[0x0] === 0x3 && (!_0x3d24ed || _0x3a65d4[0x1] > _0x3d24ed[0x0] && _0x3a65d4[0x1] < _0x3d24ed[0x3])) {
                _0x6fceea.label = _0x3a65d4[0x1];
                break;
              }
              if (_0x3a65d4[0x0] === 0x6 && _0x6fceea.label < _0x3d24ed[0x1]) {
                _0x6fceea.label = _0x3d24ed[0x1];
                _0x3d24ed = _0x3a65d4;
                break;
              }
              if (_0x3d24ed && _0x6fceea.label < _0x3d24ed[0x2]) {
                _0x6fceea.label = _0x3d24ed[0x2];
                _0x6fceea.ops.push(_0x3a65d4);
                break;
              }
              if (_0x3d24ed[0x2]) {
                _0x6fceea.ops.pop();
              }
              _0x6fceea.trys.pop();
              continue;
          }
          _0x3a65d4 = _0x493c97.call(_0x47b9d1, _0x6fceea);
        } catch (_0x51accb) {
          _0x3a65d4 = [0x6, _0x51accb];
          _0x5662f8 = 0x0;
        } finally {
          _0x28b13f = _0x3d24ed = 0x0;
        }
      }
      if (_0x3a65d4[0x0] & 0x5) {
        throw _0x3a65d4[0x1];
      }
      var _0x494fea = {
        'value': _0x3a65d4[0x0] ? _0x3a65d4[0x1] : undefined,
        'done': true
      };
      return _0x494fea;
    }
  }
  var GhostsTattoosMap = new Map();
  var fadeCollectionData = null;
  var fadeLayer = undefined;
  var fadeLayerCounter = 0x0;
  var fetchGetFadeNextLayer = DevUtilz.cacheableMap(function () {
    var _0x118132 = Hp(function (_0x3d49b1, _0x582c00) {
      var _0x454e30;
      return Pp(this, function (_0x1f68c0) {
        switch (_0x1f68c0.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:getNextFadeLayerId", _0x582c00)];
          case 0x1:
            _0x454e30 = _0x1f68c0.sent();
            return [0x2, [true, _0x454e30]];
        }
      });
    });
    return function (_0x163af2, _0x2d67ef) {
      return _0x118132.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0x36ee80
  });
  function characterSpawned() {
    return new Promise(function (_0x4e6ee8, _0x41f0f6) {
      Hp(function () {
        Pp(this, function (_0x444e56) {
          switch (_0x444e56.label) {
            case 0x0:
              var _0x53683a = PlayerPedId();
              var _0x2c14eb = GetEntityModel(_0x53683a);
              fetchGetFadeNextLayer.get(_0x2c14eb).then(function (_0x3cdf00) {
                if (_0x3cdf00 === null) {
                  _0x4e6ee8(null);
                } else {
                  fadeLayerCounter = _0x3cdf00 + 0x1;
                  _0x4e6ee8();
                }
              })["catch"](function (_0x25677b) {
                _0x41f0f6(_0x25677b);
              });
              break;
          }
        });
      });
    });
  }
  function setPlayerFadeStatus(_0x3e7649) {
    fadeLayer = _0x3e7649;
  }
  function AddDecorationFromHashes(_0x211cce, _0x31d28d, _0x4f6311) {
    AddPedDecorationFromHashes(_0x211cce, _0x31d28d, _0x4f6311);
  }
  function applyDecorations(_0x3eb375, _0x4501e9) {
    ClearPedDecorations(_0x3eb375);
    if (_0x4501e9.tattoos) {
      var _0x2e97bb = true;
      var _0x54bf2f = false;
      var _0x5d96f9 = undefined;
      try {
        var _0x2bd87c = Object.values(_0x4501e9.tattoos)[Symbol.iterator]();
        for (var _0x2a803b; !(_0x2e97bb = (_0x2a803b = _0x2bd87c.next()).done); _0x2e97bb = true) {
          var _0x46510f = _0x2a803b.value;
          var _0xa59d0d = true;
          var _0x47204f = false;
          var _0x32bf54 = undefined;
          try {
            var _0x354e6f = _0x46510f[Symbol.iterator]();
            for (var _0x767424; !(_0xa59d0d = (_0x767424 = _0x354e6f.next()).done); _0xa59d0d = true) {
              var _0x3c6418 = _0x767424.value;
              AddDecorationFromHashes(_0x3eb375, _0x3c6418.collection, _0x3c6418.overlay);
            }
          } catch (_0x5eeb16) {
            _0x47204f = true;
            _0x32bf54 = _0x5eeb16;
          } finally {
            try {
              if (!_0xa59d0d && _0x354e6f["return"] != null) {
                _0x354e6f["return"]();
              }
            } finally {
              if (_0x47204f) {
                throw _0x32bf54;
              }
            }
          }
        }
      } catch (_0x31e39c) {
        _0x54bf2f = true;
        _0x5d96f9 = _0x31e39c;
      } finally {
        try {
          if (!_0x2e97bb && _0x2bd87c["return"] != null) {
            _0x2bd87c["return"]();
          }
        } finally {
          if (_0x54bf2f) {
            throw _0x5d96f9;
          }
        }
      }
    }
    if (_0x4501e9.fade) {
      AddDecorationFromHashes(_0x3eb375, _0x4501e9.fade.collection, _0x4501e9.fade.overlay);
    }
  }
  function fetchAndApplyPlayerDecorations(_0x2a9e16, _0x30ac8b = {}, _0x1cb268 = false) {
    return new Promise(async (_0x299532, _0x4e78a1) => {
      try {
        const _0x5d8bf6 = GetEntityModel(_0x2a9e16);
        const _0x1eb50a = await fetchgetFade.get(_0x5d8bf6);
        const _0x40c61c = await fetchGetTattoos.get(_0x5d8bf6);
        const _0x51f745 = {
          'fade': _0x1cb268 ? undefined : _0x1eb50a ?? undefined,
          'tattoos': _0x40c61c
        };
        applyDecorations(_0x2a9e16, _0x51f745);
        _0x299532();
      } catch (_0x1eba27) {
        _0x4e78a1(_0x1eba27);
      }
    });
  }
  var fetchgetFade = DevUtilz.cache(function () {
    var _0x3c1ebf = Hp(function (_0x5e0a20, _0x74bd2c) {
      var _0x25b6de;
      return Pp(this, function (_0x58bb5d) {
        switch (_0x58bb5d.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:getFade", _0x74bd2c, fadeLayer)];
          case 0x1:
            _0x25b6de = _0x58bb5d.sent();
            if (!fadeLayer) {
              fadeLayer = _0x25b6de.layer;
            }
            return [0x2, [true, _0x25b6de]];
        }
      });
    });
    return function (_0x374750, _0xf769e7) {
      return _0x3c1ebf.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0x927c0
  });
  var fetchGetTattoos = DevUtilz.cacheableMap(function () {
    var _0x2cb403 = Hp(function (_0x57903a, _0x26cf21) {
      var _0x1ec66c;
      return Pp(this, function (_0x560e18) {
        switch (_0x560e18.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:getTattoos", _0x26cf21)];
          case 0x1:
            _0x1ec66c = _0x560e18.sent();
            return [0x2, [true, _0x1ec66c]];
        }
      });
    });
    return function (_0x1dfe8b, _0x406bf0) {
      return _0x2cb403.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0x927c0
  });
  var fetchFadeDatabase = DevUtilz.cacheableMap(function () {
    var _0x4fcff9 = Hp(function (_0x36168d, _0x1fb1d5, _0xdd3372, _0x4c8677) {
      var _0x3dc10e;
      return Pp(this, function (_0x2503f9) {
        switch (_0x2503f9.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:getFade", _0xdd3372, _0x4c8677)];
          case 0x1:
            _0x3dc10e = _0x2503f9.sent();
            return [0x2, [true, _0x3dc10e]];
        }
      });
    });
    return function (_0x4349ec, _0x4ecb82, _0x1f7c8e, _0x5044ae) {
      return _0x4fcff9.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0x1b7740
  });
  function fq(_0x2d8118) {
    var _0x31f56d = _0x2d8118 === "male" ? 0x3 : 0x4;
    var _0x1bda87 = [];
    for (var _0x281105 = 0x0; _0x281105 < GetNumTattooShopDlcItems(_0x31f56d); _0x281105++) {
      var _0x3abe2e = new ArrayBuffer(0x78);
      var _0x10c780 = new Uint32Array(_0x3abe2e);
      var _0x19203a = new DataView(_0x3abe2e, 0x0, _0x3abe2e.byteLength);
      var _0x13676f = Citizen.invokeNative("0xFF56381874F82086", _0x31f56d, _0x281105, _0x10c780);
      if (_0x13676f) {
        var _0x36a16a = _0x19203a.getUint32(0x10, true) & 0xffffffff;
        var _0xb914c = _0x19203a.getUint32(0x18, true) & 0xffffffff;
        var _0x1df192 = _0x19203a.getUint32(0x30, true) & 0xffffffff;
        if (_0x1df192 !== Zn.hairOverlay) {
          continue;
        }
        var _0x4c46a6 = {
          'overlay': _0xb914c,
          'collection': _0x36a16a
        };
        _0x1bda87.push(_0x4c46a6);
      }
    }
    return _0x1bda87;
  }
  function getTattooShopItemsByGender(_0x1a19f2) {
    var _0x3610f2 = _0x1a19f2 === "male" ? 0x3 : 0x4;
    var _0x5a16e = {};
    for (var _0xdbb1f9 = 0x0; _0xdbb1f9 < GetNumTattooShopDlcItems(_0x3610f2); _0xdbb1f9++) {
      var _0x31e804 = new ArrayBuffer(0x78);
      var _0x54ee84 = new Uint32Array(_0x31e804);
      var _0x28341f = new DataView(_0x31e804, 0x0, _0x31e804.byteLength);
      var _0x12b78b = Citizen.invokeNative('0xFF56381874F82086', _0x3610f2, _0xdbb1f9, _0x54ee84);
      if (_0x12b78b) {
        var _0x4f841a = _0x28341f.getUint32(0x10, true) & 0xffffffff;
        var _0x2f29f0 = _0x28341f.getUint32(0x18, true) & 0xffffffff;
        var _0x5ae353 = GetPedDecorationZoneFromHashes(_0x4f841a, _0x2f29f0);
        var _0x4d1ac8 = _0x28341f.getUint32(0x30, true) & 0xffffffff;
        var _0x48691b = getEntityHandle(_0x31e804, 0x38);
        if (_0x4d1ac8 === 0x3cc214b0 || _0x4d1ac8 === Zn.hairOverlay || _0x4d1ac8 === Zn.torsoDecal || _0x4d1ac8 === Zn.rank) {
          continue;
        }
        var _0x8fbf7e = Yn[_0x5ae353];
        if (!_0x5a16e[_0x8fbf7e]) {
          _0x5a16e[_0x8fbf7e] = [];
        }
        _0x5a16e[_0x8fbf7e].push({
          'overlay': _0x2f29f0,
          'collection': _0x4f841a,
          'label': GetLabelText(_0x48691b)
        });
      }
    }
    return _0x5a16e;
  }
  function applydTattoosMybe(_0x209095, _0x46906b) {
    return new Promise(function (_0x29250f, _0x530978) {
      var _0x59df0b = GetEntityModel(_0x209095);
      var _0x2920de = new Map();
      try {
        var _0xea091c = Object.entries(_0x46906b)[Symbol.iterator]();
        for (var _0x4bd79d; !(_0x4bd79d = _0xea091c.next()).done;) {
          var _0x44ef93 = _0x4bd79d.value;
          var _0xef6561 = _0x44ef93[0x0];
          var _0x3c8d46 = _0x44ef93[0x1];
          _0x2920de.set(_0xef6561, _0x3c8d46);
        }
      } catch (_0xf85bc3) {
        _0x530978(_0xf85bc3);
        return;
      }
      fetchgetFade.get(_0x59df0b).then(function (_0x11af22) {
        var _0x5cfcf0 = {
          'tattoos': _0x46906b,
          'fade': _0x11af22
        };
        applyDecorations(_0x209095, _0x5cfcf0);
        _0x29250f();
      })["catch"](function (_0x4ed198) {
        _0x530978(_0x4ed198);
      });
    });
  }
  var adddecorationFromhashes = function () {
    var _0x34392c = Hp(function (_0x1a5bd1, _0x4c9907) {
      return Pp(this, function (_0xcbfc23) {
        switch (_0xcbfc23.label) {
          case 0x0:
            if (!!_0x4c9907.overlay && !!_0x4c9907.collection) {
              return [0x3, 0x2];
            }
            fadeCollectionData = null;
            return [0x4, fetchAndApplyPlayerDecorations(_0x1a5bd1, {}, true)];
          case 0x1:
            _0xcbfc23.sent();
            return [0x2];
          case 0x2:
            return [0x4, fetchAndApplyPlayerDecorations(_0x1a5bd1, {}, true)];
          case 0x3:
            _0xcbfc23.sent();
            AddDecorationFromHashes(_0x1a5bd1, _0x4c9907.collection, _0x4c9907.overlay);
            fadeCollectionData = _0x4c9907;
            return [0x2];
        }
      });
    });
    return function _0x3e450c(_0x1fffa4, _0x138f63) {
      return _0x34392c.apply(this, arguments);
    };
  }();
  async function funcSaveTattoos(_0x6549ce) {
    if (GhostsTattoosMap.size === 0x0) {
      return true;
    }
    const _0x294aeb = GetEntityModel(_0x6549ce);
    const _0x211698 = await RPC.execute("karma-clothing:saveTattoos", _0x294aeb, Array.from(GhostsTattoosMap.entries()));
    GhostsTattoosMap.clear();
    fetchGetTattoos.reset(_0x294aeb);
    return _0x211698;
  }
  var SaveFadeFunction = function () {
    var _0x5a06f1 = Hp(function (_0x34380a) {
      var _0x5699a5;
      var _0x812b06;
      var _0x4ab46c;
      return Pp(this, function (_0x705c33) {
        switch (_0x705c33.label) {
          case 0x0:
            if (!fadeCollectionData) {
              return [0x2, true];
            }
            _0x5699a5 = GetEntityModel(_0x34380a);
            _0x812b06 = fadeLayerCounter++;
            fetchGetFadeNextLayer.reset(_0x5699a5);
            fadeCollectionData.layer = _0x812b06;
            return [0x4, RPC.execute("karma-clothing:saveFade", _0x5699a5, fadeCollectionData)];
          case 0x1:
            _0x4ab46c = _0x705c33.sent();
            if (!_0x4ab46c) {
              return [0x2, false];
            }
            fetchFadeDatabase.reset(_0x5699a5 + '-' + _0x812b06);
            fadeLayer = _0x812b06;
            fadeCollectionData = null;
            fetchgetFade.reset();
            return [0x2, true];
        }
      });
    });
    return function _0x11dd2f(_0x30ed6e) {
      return _0x5a06f1.apply(this, arguments);
    };
  }();
  exports("ApplyDecorations", applyDecorations);
  var createAnimationData = {};
  var hat_ = {
    'name': "hat",
    'type': "prop",
    'item': 'hat',
    'componentId': ClothingType.Hat,
    'animOn': {
      'animDict': "mp_masks@on_foot",
      'animName': "put_on_mask",
      'length': 0x352
    },
    'animOff': {
      'animDict': "mp_masks@on_foot",
      'animName': "put_on_mask",
      'length': 0x352
    }
  };
  var earrings_ = {
    'name': "earrings",
    'type': "prop",
    'componentId': ClothingType.Ears,
    'animOn': {
      'animDict': "mp_cp_stolen_tut",
      'animName': "b_think",
      'length': 0x834
    },
    'animOff': {
      'animDict': 'mp_cp_stolen_tut',
      'animName': "b_think",
      'length': 0x834
    }
  };
  var glasses_ = {
    'name': "glasses",
    'type': "prop",
    'componentId': ClothingType.Glasses,
    'animOn': {
      'animDict': "clothingspecs",
      'animName': 'put_on',
      'length': 0x708,
      'stopSpeed': 2.5,
      'offset': 0.4
    },
    'animOff': {
      'animDict': "clothingspecs",
      'animName': "take_off",
      'length': 0x5dc,
      'stopSpeed': 2.5
    }
  };
  var vest_ = {
    'name': "vest",
    'type': "drawable",
    'componentId': ClothsTable1.Kevlar,
    'animOn': {
      'animDict': "clothingtie",
      'animName': "try_tie_negative_a",
      'length': 0x7d0,
      'stopSpeed': 2.5
    },
    'animOff': {
      'animDict': "clothingtie",
      'animName': "try_tie_negative_a",
      'length': 0x7d0,
      'stopSpeed': 2.5
    }
  };
  var mask_ = {
    'name': "mask",
    'type': "drawable",
    'componentId': ClothsTable1.Mask,
    'item': "mask",
    'zeroIndex': true,
    'animOn': {
      'animDict': "mp_masks@on_foot",
      'animName': "put_on_mask",
      'length': 0x352
    },
    'animOff': {
      'animDict': "missfbi4",
      'animName': "takeoff_mask",
      'length': 0x640
    }
  };
  var necklace_ = {
    'name': "necklace",
    'type': "drawable",
    'componentId': ClothsTable1.Accessory,
    'zeroIndex': true,
    'animOn': {
      'animDict': "clothingtie",
      'animName': "try_tie_negative_a",
      'length': 0x7d0,
      'stopSpeed': 2.5
    },
    'animOff': {
      'animDict': "clothingtie",
      'animName': "try_tie_negative_a",
      'length': 0x7d0,
      'stopSpeed': 2.5
    }
  };
  var pAnimsCloth = [hat_, earrings_, glasses_, vest_, mask_, necklace_];
  function ClearAnimationData() {
    createAnimationData = {};
  }
  function FaceWear(_0x459972, _0xbdee27, _0x2817b7) {
    return new Promise((_0x1c1b2c, _0xcfe287) => {
      var _0x373bb7;
      var _0x492149;
      var _0x1be27f;
      var _0x4375b6;
      var _0x40fbb3;
      var _0x2a1028;
      var _0x43ad3e;
      var _0x9cd6ad;
      var _0x5e60ea;
      var _0x3434c2;
      var _0x55b3da;
      var _0x2898c6;
      var _0xde2f8;
      var _0x362ec7;
      var _0x45d9d5;
      var _0x144995;
      var _0x5b9744;
      var _0x2bfa01;
      var _0x53620b;
      _0x373bb7 = PlayerPedId();
      _0x492149 = GetEntityModel(_0x373bb7);
      _0x1be27f = checkIfTattooIsUnique(_0x492149);
      _0x2817b7 = _0x2817b7 ? _0x2817b7 : pAnimsCloth.find(function (_0x14c63b) {
        return _0x14c63b.name === _0x459972;
      });
      if (!_0x2817b7) {
        _0xcfe287("Animation not found");
        return;
      }
      _0x4375b6 = _0xbdee27 ? _0x2817b7.animOn : _0x2817b7.animOff;
      _0x40fbb3 = _0x2817b7.type === "drawable" ? ClothsTable1[_0x2817b7.componentId] : ClothingType[_0x2817b7.componentId];
      _0x2a1028 = _0x2817b7.type === "drawable" ? getEntityClothingDrawables(_0x373bb7)[_0x40fbb3] : getProps(_0x373bb7)[_0x40fbb3];
      rpcGetCurrentClothing.get().then(_0x25350a => {
        if (!_0x25350a) {
          _0xcfe287("Current clothing data not available");
          return;
        }
        _0x43ad3e = _0xbdee27 ? _0xbdee27 : _0x2817b7.type === "drawable" ? _0x25350a.drawables?.[_0x40fbb3] : _0x25350a.props?.[_0x40fbb3];
        createAnimationData[_0x40fbb3] = _0xbdee27 ? !!_0xbdee27 : createAnimationData[_0x40fbb3];
        _0x9cd6ad = _0x2a1028[0x0];
        _0x5e60ea = _0x2a1028[0x1];
        _0x3434c2 = _0x43ad3e[0x0];
        _0x55b3da = _0x43ad3e[0x1];
        if (_0xbdee27 && (!_0x3434c2 && !_0x1be27f && _0x2817b7.zeroIndex || _0x3434c2 === -0x1) && _0x9cd6ad === _0x3434c2 && _0x5e60ea === _0x55b3da) {
          _0xcfe287("You don't have that item stored");
          return;
        }
        if (!_0xbdee27 && (_0x9cd6ad === -0x1 || !_0x9cd6ad && !_0x1be27f && _0x2817b7.zeroIndex)) {
          _0xcfe287("No valid clothing item selected");
          return;
        }
        FiveMUtil.loadAnim(_0x4375b6.animDict).then(() => {
          if (_0x4375b6.offset) {
            _0x2898c6 = GetEntityCoords(_0x373bb7, false);
            _0xde2f8 = _0x2898c6[0x0];
            _0x362ec7 = _0x2898c6[0x1];
            _0x45d9d5 = _0x2898c6[0x2];
            _0x144995 = GetEntityRotation(_0x373bb7, 0x2);
            _0x5b9744 = _0x144995[0x0];
            _0x2bfa01 = _0x144995[0x1];
            _0x53620b = _0x144995[0x2];
            TaskPlayAnimAdvanced(_0x373bb7, _0x4375b6.animDict, _0x4375b6.animName, _0xde2f8, _0x362ec7, _0x45d9d5, _0x5b9744, _0x2bfa01, _0x53620b, 0x4, 0x3, -0x1, 0x32, _0x4375b6.offset, 0x0, 0x0);
          } else {
            TaskPlayAnim(_0x373bb7, _0x4375b6.animDict, _0x4375b6.animName, 0x4, 0x3, -0x1, 0x32, 0x0, false, false, false);
          }
          if (!_0x4375b6.length) {
            _0x1c1b2c();
            return;
          }
          delay(_0x4375b6.length).then(() => {
            if (_0xbdee27) {
              if (_0x2817b7.type === "drawable") {
                setPedComponentVariation(_0x373bb7, Object.assign({}, _0x40fbb3, _0x43ad3e));
              } else {
                setPedPropsIndices(_0x373bb7, Object.assign({}, _0x40fbb3, _0x43ad3e));
              }
              if (_0x2817b7.item && createAnimationData[_0x40fbb3] && _0x9cd6ad !== _0x3434c2) {
                TriggerEvent("inventory:removeItemByMetaKV", _0x2817b7.item, 0x1, _0x2817b7.item, _0x3434c2);
                createAnimationData[_0x40fbb3] = false;
              }
            } else if (_0x2817b7.type === "drawable") {
              setPedComponentVariation(_0x373bb7, Object.assign({}, _0x40fbb3, [-0x1, 0x0]));
            } else {
              setPedPropsIndices(_0x373bb7, Object.assign({}, _0x40fbb3, [-0x1, 0x0]));
            }
            StopAnimTask(_0x373bb7, _0x4375b6.animDict, _0x4375b6.animName, _0x4375b6.stopSpeed ?? 0x10);
            _0x1c1b2c();
          })["catch"](_0xcfe287);
        })["catch"](_0xcfe287);
      })["catch"](_0xcfe287);
    });
  }
  onNet("clothing:equip", function (_0x2343a3, _0x18deab) {
    if (!_0x18deab) {
      FaceWear(_0x2343a3, false);
      return;
    }
    var _0x4b9eb9 = GetEntityModel(PlayerPedId());
    if (_0x4b9eb9 !== _0x18deab.model) {
      return;
    }
    FaceWear(_0x2343a3, true, [_0x18deab.componentId, _0x18deab.texture]);
  });
  ;
  function Rq(_0x16b273, _0x15be3c) {
    if (_0x15be3c == null || _0x15be3c > _0x16b273.length) {
      _0x15be3c = _0x16b273.length;
    }
    var _0x53a5d9 = 0x0;
    for (var _0x5afd42 = new Array(_0x15be3c); _0x53a5d9 < _0x15be3c; _0x53a5d9++) {
      _0x5afd42[_0x53a5d9] = _0x16b273[_0x53a5d9];
    }
    return _0x5afd42;
  }
  function Sq(_0x5da3f7) {
    if (Array.isArray(_0x5da3f7)) {
      return _0x5da3f7;
    }
  }
  function Tq(_0x261bf7, _0x381e68, _0x3d3d19, _0x1c324b, _0x4db352, _0x5ec488, _0x37d39f) {
    try {
      var _0x3c7445 = _0x261bf7[_0x5ec488](_0x37d39f);
      var _0xf03f6e = _0x3c7445.value;
    } catch (_0xcee481) {
      _0x3d3d19(_0xcee481);
      return;
    }
    if (_0x3c7445.done) {
      _0x381e68(_0xf03f6e);
    } else {
      Promise.resolve(_0xf03f6e).then(_0x1c324b, _0x4db352);
    }
  }
  function Uq(_0x50f285) {
    return function () {
      var _0xa33081 = this;
      return new Promise(function (_0x833904, _0x15ab03) {
        var _0x4f9b57 = _0x50f285.apply(_0xa33081, arguments);
        function _0x46e654(_0x498184) {
          Tq(_0x4f9b57, _0x833904, _0x15ab03, _0x46e654, _0x54af82, "next", _0x498184);
        }
        function _0x54af82(_0x2b8354) {
          Tq(_0x4f9b57, _0x833904, _0x15ab03, _0x46e654, _0x54af82, "throw", _0x2b8354);
        }
        _0x46e654(undefined);
      });
    };
  }
  function Vq(_0x226c6f, _0x373546) {
    var _0x17ae9e = _0x226c6f == null ? null : typeof Symbol !== "undefined" && _0x226c6f[Symbol.iterator] || _0x226c6f["@@iterator"];
    if (_0x17ae9e == null) {
      return;
    }
    var _0x1316e9 = [];
    var _0x12fc10 = true;
    var _0x403c9f = false;
    var _0x400fea;
    var _0x18fef3;
    try {
      for (_0x17ae9e = _0x17ae9e.call(_0x226c6f); !(_0x12fc10 = (_0x400fea = _0x17ae9e.next()).done); _0x12fc10 = true) {
        _0x1316e9.push(_0x400fea.value);
        if (_0x373546 && _0x1316e9.length === _0x373546) {
          break;
        }
      }
    } catch (_0x24c770) {
      _0x403c9f = true;
      _0x18fef3 = _0x24c770;
    } finally {
      try {
        if (!_0x12fc10 && _0x17ae9e["return"] != null) {
          _0x17ae9e["return"]();
        }
      } finally {
        if (_0x403c9f) {
          throw _0x18fef3;
        }
      }
    }
    return _0x1316e9;
  }
  function Wq() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function Xq(_0x33e489, _0x3c776c) {
    return Sq(_0x33e489) || Vq(_0x33e489, _0x3c776c) || Yq(_0x33e489, _0x3c776c) || Wq();
  }
  function Yq(_0x2be8fe, _0x2ef6b8) {
    if (!_0x2be8fe) {
      return;
    }
    if (typeof _0x2be8fe === "string") {
      return Rq(_0x2be8fe, _0x2ef6b8);
    }
    var _0x4a9b79 = Object.prototype.toString.call(_0x2be8fe).slice(0x8, -0x1);
    if (_0x4a9b79 === "Object" && _0x2be8fe.constructor) {
      _0x4a9b79 = _0x2be8fe.constructor.name;
    }
    if (_0x4a9b79 === "Map" || _0x4a9b79 === "Set") {
      return Array.from(_0x4a9b79);
    }
    if (_0x4a9b79 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x4a9b79)) {
      return Rq(_0x2be8fe, _0x2ef6b8);
    }
  }
  function Zq(_0x2b6b90, _0x5ad36f) {
    var _0x22166c;
    var _0x32d151;
    var _0x23e043;
    var _0x4129f9;
    var _0x34bc7b = {
      'label': 0x0,
      'sent': function () {
        if (_0x23e043[0x0] & 0x1) {
          throw _0x23e043[0x1];
        }
        return _0x23e043[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x4129f9 = {
      'next': _0x597e6a(0x0),
      'throw': _0x597e6a(0x1),
      'return': _0x597e6a(0x2)
    };
    if (typeof Symbol === "function") {
      _0x4129f9[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x4129f9;
    function _0x597e6a(_0x52e45a) {
      return function (_0x1f7019) {
        return _0x45b7e7([_0x52e45a, _0x1f7019]);
      };
    }
    function _0x45b7e7(_0x2ae1e5) {
      if (_0x22166c) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x34bc7b) {
        try {
          _0x22166c = 0x1;
          if (_0x32d151 && (_0x23e043 = _0x2ae1e5[0x0] & 0x2 ? _0x32d151["return"] : _0x2ae1e5[0x0] ? _0x32d151["throw"] || ((_0x23e043 = _0x32d151["return"]) && _0x23e043.call(_0x32d151), 0x0) : _0x32d151.next) && !(_0x23e043 = _0x23e043.call(_0x32d151, _0x2ae1e5[0x1])).done) {
            return _0x23e043;
          }
          _0x32d151 = 0x0;
          if (_0x23e043) {
            _0x2ae1e5 = [_0x2ae1e5[0x0] & 0x2, _0x23e043.value];
          }
          switch (_0x2ae1e5[0x0]) {
            case 0x0:
            case 0x1:
              _0x23e043 = _0x2ae1e5;
              break;
            case 0x4:
              _0x34bc7b.label++;
              var _0x3a584d = {
                'value': _0x2ae1e5[0x1],
                'done': false
              };
              return _0x3a584d;
            case 0x5:
              _0x34bc7b.label++;
              _0x32d151 = _0x2ae1e5[0x1];
              _0x2ae1e5 = [0x0];
              continue;
            case 0x7:
              _0x2ae1e5 = _0x34bc7b.ops.pop();
              _0x34bc7b.trys.pop();
              continue;
            default:
              _0x23e043 = _0x34bc7b.trys;
              if (!(_0x23e043 = _0x23e043.length > 0x0 && _0x23e043[_0x23e043.length - 0x1]) && (_0x2ae1e5[0x0] === 0x6 || _0x2ae1e5[0x0] === 0x2)) {
                _0x34bc7b = 0x0;
                continue;
              }
              if (_0x2ae1e5[0x0] === 0x3 && (!_0x23e043 || _0x2ae1e5[0x1] > _0x23e043[0x0] && _0x2ae1e5[0x1] < _0x23e043[0x3])) {
                _0x34bc7b.label = _0x2ae1e5[0x1];
                break;
              }
              if (_0x2ae1e5[0x0] === 0x6 && _0x34bc7b.label < _0x23e043[0x1]) {
                _0x34bc7b.label = _0x23e043[0x1];
                _0x23e043 = _0x2ae1e5;
                break;
              }
              if (_0x23e043 && _0x34bc7b.label < _0x23e043[0x2]) {
                _0x34bc7b.label = _0x23e043[0x2];
                _0x34bc7b.ops.push(_0x2ae1e5);
                break;
              }
              if (_0x23e043[0x2]) {
                _0x34bc7b.ops.pop();
              }
              _0x34bc7b.trys.pop();
              continue;
          }
          _0x2ae1e5 = _0x5ad36f.call(_0x2b6b90, _0x34bc7b);
        } catch (_0x58d68f) {
          _0x2ae1e5 = [0x6, _0x58d68f];
          _0x32d151 = 0x0;
        } finally {
          _0x22166c = _0x23e043 = 0x0;
        }
      }
      if (_0x2ae1e5[0x0] & 0x5) {
        throw _0x2ae1e5[0x1];
      }
      var _0x3eb91d = {
        'value': _0x2ae1e5[0x0] ? _0x2ae1e5[0x1] : undefined,
        'done': true
      };
      return _0x3eb91d;
    }
  }
  function BarberDataFM_() {
    var _0x468228 = GetPedHeadBlendNumHeads(0x0) + GetPedHeadBlendNumHeads(0x1) + GetPedHeadBlendNumHeads(0x2) + GetPedHeadBlendNumHeads(0x3);
    var _0x21c0e8 = Object.values(FacialBarberStuff).filter(function (_0x101135) {
      return typeof _0x101135 === "number";
    }).map(function (_0x375e43) {
      var _0x25b675 = GetPedHeadOverlayNum(+_0x375e43);
      var _0x5f1091 = {
        'name': FacialBarberStuff[_0x375e43],
        'total': _0x25b675
      };
      return _0x5f1091;
    });
    var _0x18150d = {
      'heads': _0x468228,
      'headOverlays': _0x21c0e8
    };
    return _0x18150d;
  }
  function getHairColorMybe() {
    var _0x5559c6 = [];
    for (var _0x47a284 = 0x0; _0x47a284 < 0x40; _0x47a284++) {
      var _0x4ca2f6 = Sq(GetPedHairRgbColor(_0x47a284)) || Vq(GetPedHairRgbColor(_0x47a284), 0x3) || Yq(GetPedHairRgbColor(_0x47a284), 0x3) || Wq();
      var _0x3c4cea = _0x4ca2f6[0x0];
      var _0x3fdd93 = _0x4ca2f6[0x1];
      var _0xe5e176 = _0x4ca2f6[0x2];
      var _0x212a9c = {
        'id': _0x47a284,
        'r': _0x3c4cea,
        'g': _0x3fdd93,
        'b': _0xe5e176
      };
      _0x5559c6.push(_0x212a9c);
    }
    return _0x5559c6;
  }
  function ar() {
    var _0x3e4f9d = [];
    for (var _0x493a10 = 0x0; _0x493a10 < 0x40; _0x493a10++) {
      var _0x4ed5d2 = Sq(GetPedMakeupRgbColor(_0x493a10)) || Vq(GetPedMakeupRgbColor(_0x493a10), 0x3) || Yq(GetPedMakeupRgbColor(_0x493a10), 0x3) || Wq();
      var _0x53cff2 = _0x4ed5d2[0x0];
      var _0x248cab = _0x4ed5d2[0x1];
      var _0x1f2c8e = _0x4ed5d2[0x2];
      _0x3e4f9d[_0x493a10] = {
        'id': _0x493a10,
        'r': _0x53cff2,
        'g': _0x248cab,
        'b': _0x1f2c8e
      };
    }
    return _0x3e4f9d;
  }
  function getHeadBlend(_0x1e8316) {
    var _0x462441 = new Uint32Array(new ArrayBuffer(0x50));
    var _0x520e9b = new Float32Array(new ArrayBuffer(0x50));
    Citizen.invokeNative("0x2746BD9D88C5C5D0", _0x1e8316, _0x462441);
    Citizen.invokeNative("0x2746BD9D88C5C5D0", _0x1e8316, _0x520e9b);
    return {
      'ShapeFirst': _0x462441[0x0],
      'ShapeSecond': _0x462441[0x2],
      'ShapeThird': _0x462441[0x4],
      'SkinFirst': _0x462441[0x6],
      'SkinSecond': _0x462441[0x8],
      'SkinThird': _0x462441[0xa],
      'ShapeMix': +_0x520e9b[0xc].toFixed(0x2),
      'SkinMix': +_0x520e9b[0xe].toFixed(0x2),
      'ThirdMix': +_0x520e9b[0x10].toFixed(0x2)
    };
  }
  function setPedHeadBlendData(_0x2b3c81, _0x3a9144) {
    SetPedHeadBlendData(_0x2b3c81, _0x3a9144.ShapeFirst ?? 0x0, _0x3a9144.ShapeSecond ?? 0x0, _0x3a9144.ShapeThird ?? 0x0, _0x3a9144.SkinFirst ?? 0x0, _0x3a9144.SkinSecond ?? 0x0, _0x3a9144.SkinThird ?? 0x0, _0x3a9144.ShapeMix ?? 0x0, _0x3a9144.SkinMix ?? 0x0, _0x3a9144.ThirdMix ?? 0x0, false);
  }
  function getPlayerHairStyleDetails(_0x2cbc57) {
    return {
      'component': GetPedDrawableVariation(_0x2cbc57, 0x2),
      'color': GetPedHairColor(_0x2cbc57),
      'highlightColor': GetPedHairHighlightColor(_0x2cbc57)
    };
  }
  function setPedHairColor(_0x186dd7, _0x5bfea1, _0x230a56) {
    SetPedHairColor(_0x186dd7, _0x5bfea1, _0x230a56);
  }
  function FetchEyeColors() {
    return ["Parents", "Green", "Very Light Blue", "Dark Blue", "Brown", "Dark Brown", "Light Brown", "Blue", "Light Blue", "Pink", "Yellow", "Purple", "Black", "Gradient Spiral", "Orange", "Nuclear", "White Spiral", "Red Spiral", "Shiny Half Blue/Half Red", "Ying Yang", "Red Outline", "Green Snake", "Red Snake", "Blue Snake", "Yellow Snake", "Bright Yellow", "Fully Black", "Red Small Pupil", "Devil Blue", "Devil Black", "White Small Pupil", "Glossed Over", "Emerald"];
  }
  function getFeatures(_0x1ececc) {
    return Object.values(Pn).filter(function (_0x39aa74) {
      return typeof _0x39aa74 === "number";
    }).reduce(function (_0x256b3f, _0x597572) {
      _0x256b3f[Pn[_0x597572]] = +GetPedFaceFeature(_0x1ececc, +_0x597572).toFixed(0x2);
      return _0x256b3f;
    }, {});
  }
  function setPedFaceFeature(_0x5c553e, _0x497d40) {
    try {
      for (const [_0x36310a, _0x3e48b5] of Object.entries(_0x497d40)) {
        const _0x5c25cb = Pn[_0x36310a];
        const _0xa08d5d = +_0x3e48b5;
        SetPedFaceFeature(_0x5c553e, _0x5c25cb, _0xa08d5d);
      }
    } catch (_0x4a9f69) {
      console.error("Error while setting ped face feature:", _0x4a9f69);
      throw _0x4a9f69;
    }
  }
  function getOverlays(_0xef93d4) {
    return Object.values(FacialBarberStuff).filter(function (_0x5e15cb) {
      return typeof _0x5e15cb === "number";
    }).reduce(function (_0x53d19b, _0x145903) {
      var _0xd35f7f = GetPedHeadOverlayData(_0xef93d4, +_0x145903);
      var _0x67b6fd = {
        'value': _0xd35f7f[0x1],
        'colorType': _0xd35f7f[0x2],
        'firstColor': _0xd35f7f[0x3],
        'secondColor': _0xd35f7f[0x4],
        'opacity': +_0xd35f7f[0x5].toFixed(0x2)
      };
      _0x53d19b[FacialBarberStuff[_0x145903]] = _0x67b6fd;
      return _0x53d19b;
    }, {});
  }
  function setPedHeadoverlay(_0x403b65, _0x37072a) {
    try {
      for (const [_0x365520, _0xe523e0] of Object.entries(_0x37072a)) {
        const _0x2a7486 = FacialBarberStuff[_0x365520];
        const _0x320d9f = _0xe523e0.value;
        const _0x2df1d9 = _0xe523e0.opacity;
        SetPedHeadOverlay(_0x403b65, _0x2a7486, _0x320d9f, _0x2df1d9);
        const _0x489215 = _0xe523e0.colorType;
        const _0x41b2c5 = _0xe523e0.firstColor;
        const _0x24dcad = _0xe523e0.secondColor;
        SetPedHeadOverlayColor(_0x403b65, _0x2a7486, _0x489215, _0x41b2c5, _0x24dcad);
      }
    } catch (_0x6d290f) {
      console.error("Error while setting ped head overlay:", _0x6d290f);
      throw _0x6d290f;
    }
  }
  async function setModel(_0x280202, _0x4c144f, _0x25c0f9, _0x4dd863) {
    var _0x165ada;
    if (_0x280202 == 0x705e61f2 || _0x280202 == -0x63610028) {
      _0x165ada = await LoadModelGhost(_0x280202);
    } else {
      _0x165ada = await FiveMUtil.loadModel(_0x280202);
    }
    if (!_0x165ada) {
      console.log("[CLOTHING] Model failed to load", _0x280202);
      return PlayerPedId();
    }
    SetPlayerModel(PlayerId(), _0x280202);
    var _0x4b1124 = PlayerPedId();
    emit("karma-clothing:pedChanged", _0x4b1124);
    SetModelAsNoLongerNeeded(_0x280202);
    manageAnimalBehavior(_0x280202);
    if (!checkIfTattooIsUnique(_0x280202)) {
      loadPedDefaults(_0x4b1124, _0x4dd863);
      _0x4c144f = true;
      if (_0x4c144f) {
        await applyPedDataToEntity(_0x4b1124, _0x4dd863);
      }
      if (_0x25c0f9) {
        fetchGetTattoos.reset(_0x280202);
        fetchgetFade.reset();
        await fetchAndApplyPlayerDecorations(_0x4b1124);
      }
      return _0x4b1124;
    }
    return _0x4b1124;
  }
  ;
  var mr = DevUtilz.cache(function () {
    var _0x265958 = Uq(function (_0x4d96eb) {
      var _0x55475f;
      return Zq(this, function (_0xe7d295) {
        switch (_0xe7d295.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:getAllowedPeds")];
          case 0x1:
            _0x55475f = _0xe7d295.sent();
            return [0x2, [true, _0x55475f]];
        }
      });
    });
    return function (_0x45a423) {
      return _0x265958.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0x36ee80
  });
  var PedDataFM = DevUtilz.cacheableMap(async function (_0x6db2f6, _0x304b1e) {
    try {
      var _0x4f3864 = await RPC.execute("karma-clothing:getPedData", _0x304b1e);
      return [true, _0x4f3864];
    } catch (_0x52fdfa) {
      throw _0x52fdfa;
    }
  }, {
    'timeToLive': 0x1b7740
  });
  async function applyPedDataToEntity(_0x606389, _0x386dd8 = false) {
    var _0x29243f = GetEntityModel(_0x606389);
    var _0x2d9341 = await PedDataFM.get(_0x29243f);
    if (_0x2d9341) {
      applyPedData(_0x606389, _0x2d9341.headblend, _0x2d9341.features, _0x2d9341.overlays, _0x2d9341.eyeColor, _0x386dd8);
      return Promise.resolve();
    } else {
      throw new Error("Failed to fetch PedData for entity model: " + _0x29243f);
    }
  }
  async function getMaleFemaleFM() {
    var _0x372eb4;
    _0x372eb4 = getCurrentResourceConfig("models");
    var _0x54f87c = {
      'male': _0x372eb4.male,
      'female': _0x372eb4.female,
      'whitelist': false ?? []
    };
    return _0x54f87c;
  }
  ;
  var funcSavePedData = function () {
    var _0x59bbde = Uq(function (_0x39f30b) {
      return Zq(this, function (_0x2095b9) {
        switch (_0x2095b9.label) {
          case 0x0:
            var _0x487032 = GetEntityModel(_0x39f30b);
            var _0x3e704e = getHeadBlend(_0x39f30b);
            var _0x2ecb13 = getFeatures(_0x39f30b);
            var _0x37bd40 = getOverlays(_0x39f30b);
            var _0x3595a2 = GetPedEyeColor(_0x39f30b);
            PedDataFM.reset(_0x487032);
            if (GetEntityArchetypeName(PlayerPedId()) == "mp_m_freemode_01" || GetEntityArchetypeName(PlayerPedId()) == "mp_f_freemode_01") {
              return [0x4, RPC.execute("karma-clothing:savePedData", _0x487032, _0x3e704e, _0x2ecb13, _0x37bd40, _0x3595a2)];
            }
            return [0x4, RPC.execute("karma-clothing:savePedData", GetEntityArchetypeName(PlayerPedId()), _0x3e704e, _0x2ecb13, _0x37bd40, _0x3595a2)];
          case 0x1:
            return [0x2, _0x2095b9.sent()];
        }
      });
    });
    return function _0x22fde4(_0x34d936) {
      return _0x59bbde.apply(this, arguments);
    };
  }();
  function applyPedData(_0x54b1c4, _0x5c1925, _0xc29c4, _0x194aef, _0x10fb4b, _0x41b202 = false) {
    if (!_0x41b202) {
      setPedHeadBlendData(_0x54b1c4, _0x5c1925);
    }
    setPedFaceFeature(_0x54b1c4, _0xc29c4);
    setPedHeadoverlay(_0x54b1c4, _0x194aef);
    SetPedEyeColor(_0x54b1c4, _0x10fb4b);
  }
  function loadPedDefaults(_0x448d53, _0x5cb484 = false) {
    SetPedDefaultComponentVariation(_0x448d53);
    if (!_0x5cb484) {
      SetPedHeadBlendData(_0x448d53, 0x0, 0x0, 0x0, 0xf, 0x0, 0x0, 0x0, 0x1, 0x0, false);
    }
    SetPedComponentVariation(_0x448d53, 0xb, 0x0, 0x1, 0x0);
    SetPedComponentVariation(_0x448d53, 0x8, 0x0, 0x1, 0x0);
    SetPedComponentVariation(_0x448d53, 0x6, 0x1, 0x2, 0x0);
    SetPedHeadOverlayColor(_0x448d53, 0x1, 0x1, 0x0, 0x0);
    SetPedHeadOverlayColor(_0x448d53, 0x2, 0x1, 0x0, 0x0);
    SetPedHeadOverlayColor(_0x448d53, 0x4, 0x2, 0x0, 0x0);
    SetPedHeadOverlayColor(_0x448d53, 0x5, 0x2, 0x0, 0x0);
    SetPedHeadOverlayColor(_0x448d53, 0x8, 0x2, 0x0, 0x0);
    SetPedHeadOverlayColor(_0x448d53, 0xa, 0x1, 0x0, 0x0);
    SetPedHeadOverlay(_0x448d53, 0x1, 0x0, 0x0);
    SetPedHairColor(_0x448d53, 0x1, 0x1);
  }
  var AnimalModels1 = [GetHashKey("a_c_raccoon_01"), GetHashKey("a_c_racoon_01"), GetHashKey("a_c_seagull"), GetHashKey("a_c_pigeon"), GetHashKey("a_c_rat"), GetHashKey("a_c_cormorant"), GetHashKey("a_c_crow"), GetHashKey("a_c_hen"), GetHashKey("a_c_chickenhawk"), GetHashKey("a_c_boar"), GetHashKey("a_c_rabbit_01"), GetHashKey("a_c_pigeon"), GetHashKey("a_c_panther"), GetHashKey("a_c_horse"), GetHashKey("a_c_mtlion"), GetHashKey("a_c_seagull"), GetHashKey("a_c_deer"), GetHashKey("a_c_leopard"), GetHashKey("a_c_coyote")];
  var AnimalModels2 = [GetHashKey("a_c_raccoon_01"), GetHashKey("a_c_racoon_01"), GetHashKey("a_c_hen"), GetHashKey("a_c_cat"), GetHashKey("a_c_cat_01"), GetHashKey("a_c_chop"), GetHashKey("a_c_retriever"), GetHashKey("a_c_husky"), GetHashKey("a_c_shepherd"), GetHashKey("a_c_shepherd_np"), GetHashKey("a_c_rottweiler"), GetHashKey("a_c_westy"), GetHashKey("a_c_westy_np"), GetHashKey("a_c_pug"), GetHashKey("a_c_poodle"), GetHashKey("a_c_panther"), GetHashKey("a_c_horse"), GetHashKey("a_c_mtlion"), GetHashKey("a_c_deer"), GetHashKey("a_c_leopard"), GetHashKey("a_c_coyote")];
  var AnimalsModels3 = [GetHashKey("a_c_raccoon_01"), GetHashKey("a_c_racoon_01"), GetHashKey("a_c_hen"), GetHashKey("a_c_cat"), GetHashKey("a_c_cat_01"), GetHashKey("a_c_westy"), GetHashKey("a_c_westy_np"), GetHashKey("a_c_pug")];
  function manageAnimalBehavior(_0x1a6de4) {
    var _0x11d2e8 = typeof _0x1a6de4 === "string" ? GetHashKey(_0x1a6de4) : _0x1a6de4;
    if (AnimalModels1.includes(_0x11d2e8)) {
      var _0x57267c = PlayerPedId();
      var _0x50afdc = GetEntityMaxHealth(_0x57267c);
      setEntityHealth(_0x57267c, _0x50afdc);
    }
    if (AnimalModels2.includes(_0x11d2e8)) {
      var _0x1252d2 = setInterval(function () {
        if (GetEntityModel(PlayerPedId()) !== _0x11d2e8) {
          clearInterval(_0x1252d2);
          return;
        }
        ResetPlayerStamina(PlayerId());
      }, 0x7d0);
    }
    if (AnimalsModels3.includes(_0x11d2e8)) {
      var _0x1252d2 = setInterval(function () {
        var _0x5016dc = PlayerPedId();
        if (GetEntityModel(_0x5016dc) !== _0x11d2e8) {
          clearInterval(_0x1252d2);
          return;
        }
        if (IsPedSprinting(_0x5016dc)) {
          SetPedMoveRateOverride(_0x5016dc, 1.45);
        } else if (IsPedRunning(_0x5016dc)) {
          SetPedMoveRateOverride(_0x5016dc, 1.15);
        }
      });
    }
  }
  exports("ApplyPedData", applyPedData);
  exports("SetModel", setModel);
  exports("LoadPedDefaults", loadPedDefaults);
  ;
  function yr(_0x1ea209, _0x58c0fe, _0x5b146e, _0x159675, _0x3b8ad9, _0x17b121, _0x865c0d) {
    try {
      var _0xff5103 = _0x1ea209[_0x17b121](_0x865c0d);
      var _0x13e6ee = _0xff5103.value;
    } catch (_0x471ee2) {
      _0x5b146e(_0x471ee2);
      return;
    }
    if (_0xff5103.done) {
      _0x58c0fe(_0x13e6ee);
    } else {
      Promise.resolve(_0x13e6ee).then(_0x159675, _0x3b8ad9);
    }
  }
  function zr(_0x3cd348) {
    return function () {
      var _0x5428a6 = this;
      return new Promise(function (_0x39a465, _0x3e8558) {
        var _0x1804c3 = _0x3cd348.apply(_0x5428a6, arguments);
        function _0x41baff(_0x3284c3) {
          yr(_0x1804c3, _0x39a465, _0x3e8558, _0x41baff, _0x1f5fcb, "next", _0x3284c3);
        }
        function _0x1f5fcb(_0x3809ad) {
          yr(_0x1804c3, _0x39a465, _0x3e8558, _0x41baff, _0x1f5fcb, "throw", _0x3809ad);
        }
        _0x41baff(undefined);
      });
    };
  }
  function Ar(_0x3035a1, _0x186ce5) {
    var _0x591065;
    var _0x42a48c;
    var _0x2046d5;
    var _0xf9331c;
    var _0x594737 = {
      'label': 0x0,
      'sent': function () {
        if (_0x2046d5[0x0] & 0x1) {
          throw _0x2046d5[0x1];
        }
        return _0x2046d5[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0xf9331c = {
      'next': _0x22cfe1(0x0),
      'throw': _0x22cfe1(0x1),
      'return': _0x22cfe1(0x2)
    };
    if (typeof Symbol === "function") {
      _0xf9331c[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0xf9331c;
    function _0x22cfe1(_0xc40b4f) {
      return function (_0x2a170f) {
        return _0xb9568a([_0xc40b4f, _0x2a170f]);
      };
    }
    function _0xb9568a(_0x20ac48) {
      if (_0x591065) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x594737) {
        try {
          _0x591065 = 0x1;
          if (_0x42a48c && (_0x2046d5 = _0x20ac48[0x0] & 0x2 ? _0x42a48c["return"] : _0x20ac48[0x0] ? _0x42a48c["throw"] || ((_0x2046d5 = _0x42a48c["return"]) && _0x2046d5.call(_0x42a48c), 0x0) : _0x42a48c.next) && !(_0x2046d5 = _0x2046d5.call(_0x42a48c, _0x20ac48[0x1])).done) {
            return _0x2046d5;
          }
          _0x42a48c = 0x0;
          if (_0x2046d5) {
            _0x20ac48 = [_0x20ac48[0x0] & 0x2, _0x2046d5.value];
          }
          switch (_0x20ac48[0x0]) {
            case 0x0:
            case 0x1:
              _0x2046d5 = _0x20ac48;
              break;
            case 0x4:
              _0x594737.label++;
              var _0x38f0d0 = {
                'value': _0x20ac48[0x1],
                'done': false
              };
              return _0x38f0d0;
            case 0x5:
              _0x594737.label++;
              _0x42a48c = _0x20ac48[0x1];
              _0x20ac48 = [0x0];
              continue;
            case 0x7:
              _0x20ac48 = _0x594737.ops.pop();
              _0x594737.trys.pop();
              continue;
            default:
              _0x2046d5 = _0x594737.trys;
              if (!(_0x2046d5 = _0x2046d5.length > 0x0 && _0x2046d5[_0x2046d5.length - 0x1]) && (_0x20ac48[0x0] === 0x6 || _0x20ac48[0x0] === 0x2)) {
                _0x594737 = 0x0;
                continue;
              }
              if (_0x20ac48[0x0] === 0x3 && (!_0x2046d5 || _0x20ac48[0x1] > _0x2046d5[0x0] && _0x20ac48[0x1] < _0x2046d5[0x3])) {
                _0x594737.label = _0x20ac48[0x1];
                break;
              }
              if (_0x20ac48[0x0] === 0x6 && _0x594737.label < _0x2046d5[0x1]) {
                _0x594737.label = _0x2046d5[0x1];
                _0x2046d5 = _0x20ac48;
                break;
              }
              if (_0x2046d5 && _0x594737.label < _0x2046d5[0x2]) {
                _0x594737.label = _0x2046d5[0x2];
                _0x594737.ops.push(_0x20ac48);
                break;
              }
              if (_0x2046d5[0x2]) {
                _0x594737.ops.pop();
              }
              _0x594737.trys.pop();
              continue;
          }
          _0x20ac48 = _0x186ce5.call(_0x3035a1, _0x594737);
        } catch (_0x58483f) {
          _0x20ac48 = [0x6, _0x58483f];
          _0x42a48c = 0x0;
        } finally {
          _0x591065 = _0x2046d5 = 0x0;
        }
      }
      if (_0x20ac48[0x0] & 0x5) {
        throw _0x20ac48[0x1];
      }
      var _0x16978f = {
        'value': _0x20ac48[0x0] ? _0x20ac48[0x1] : undefined,
        'done': true
      };
      return _0x16978f;
    }
  }
  var hasCustomHeadModel = false;
  function setHasCustomModelVariable(_0x227128) {
    hasCustomHeadModel = _0x227128;
  }
  function fmDrawables(_0x396042) {
    var _0x599feb = {};
    for (var _0x2c3893 = 0x0; _0x2c3893 < Object.keys(ClothsTable1).length / 0x2; _0x2c3893++) {
      var _0x2860fc = ClothsTable1[_0x2c3893];
      var _0x40fd1a = GetNumberOfPedDrawableVariations(_0x396042, _0x2c3893);
      if (!_0x599feb[_0x2860fc]) {
        _0x599feb[_0x2860fc] = [];
      }
      for (var _0x3870d0 = 0x0; _0x3870d0 < _0x40fd1a; _0x3870d0++) {
        var _0x37e375 = GetNumberOfPedTextureVariations(_0x396042, _0x2c3893, _0x3870d0);
        _0x599feb[_0x2860fc].push(_0x37e375);
      }
    }
    return _0x599feb;
  }
  function fmProps(_0x1133d2) {
    var _0xd9db24 = {};
    var _0x4999f7 = true;
    var _0x5f302d = false;
    var _0x6c9bab = undefined;
    try {
      var _0x1fda4a = Object.values(ClothingType).filter(function (_0x3ac3b5) {
        return typeof _0x3ac3b5 === "number";
      })[Symbol.iterator]();
      for (var _0xdb8026; !(_0x4999f7 = (_0xdb8026 = _0x1fda4a.next()).done); _0x4999f7 = true) {
        var _0xda6d63 = _0xdb8026.value;
        var _0x464ee0 = ClothingType[_0xda6d63];
        var _0x22392a = GetNumberOfPedPropDrawableVariations(_0x1133d2, _0xda6d63);
        if (!_0xd9db24[_0x464ee0]) {
          _0xd9db24[_0x464ee0] = [];
        }
        for (var _0x4df534 = 0x0; _0x4df534 < _0x22392a; _0x4df534++) {
          var _0x46facf = GetNumberOfPedPropTextureVariations(_0x1133d2, _0xda6d63, _0x4df534);
          _0xd9db24[_0x464ee0].push(_0x46facf);
        }
      }
    } catch (_0x33716e) {
      _0x5f302d = true;
      _0x6c9bab = _0x33716e;
    } finally {
      try {
        if (!_0x4999f7 && _0x1fda4a["return"] != null) {
          _0x1fda4a["return"]();
        }
      } finally {
        if (_0x5f302d) {
          throw _0x6c9bab;
        }
      }
    }
    return _0xd9db24;
  }
  function setPedComponentVariation(_0x2579cb, _0x56fa2d) {
    for (var _0x2dfa67 in _0x56fa2d) {
      var _0x499810 = ClothsTable1[_0x2dfa67];
      if (_0x499810 === ClothsTable1.Face) {
        if (_0x56fa2d[_0x2dfa67][0x0] < 0x0) {
          _0x56fa2d[_0x2dfa67][0x0] = 0x0;
        }
      }
      SetPedComponentVariation(_0x2579cb, _0x499810, _0x56fa2d[_0x2dfa67][0x0], _0x56fa2d[_0x2dfa67][0x1], 0x2);
    }
  }
  function setPedPropsIndices(_0xa29516, _0x8bdd40) {
    for (var _0xe7d9e5 in _0x8bdd40) {
      if (_0x8bdd40[_0xe7d9e5][0x0] === -0x1) {
        ClearPedProp(_0xa29516, ClothingType[_0xe7d9e5]);
        continue;
      }
      SetPedPropIndex(_0xa29516, ClothingType[_0xe7d9e5], _0x8bdd40[_0xe7d9e5][0x0], _0x8bdd40[_0xe7d9e5][0x1], true);
    }
  }
  function getEntityClothingDrawables(_0x160879) {
    var _0x32f181 = {};
    for (var _0xc35bbb = 0x0; _0xc35bbb < Object.keys(ClothsTable1).length / 0x2; _0xc35bbb++) {
      var _0x288b32 = ClothsTable1[_0xc35bbb];
      var _0x113fd7 = GetPedDrawableVariation(_0x160879, _0xc35bbb);
      var _0x35a891 = GetPedTextureVariation(_0x160879, _0xc35bbb);
      _0x32f181[_0x288b32] = [_0x113fd7, _0x35a891];
    }
    return _0x32f181;
  }
  function getProps(_0x59ad3f) {
    var _0x4a786f = {};
    var _0x14fce7 = true;
    var _0x1de5dd = false;
    var _0x5da5fe = undefined;
    try {
      var _0x5a8935 = Object.values(ClothingType).filter(function (_0x45a4a7) {
        return typeof _0x45a4a7 === "number";
      })[Symbol.iterator]();
      for (var _0x33a32c; !(_0x14fce7 = (_0x33a32c = _0x5a8935.next()).done); _0x14fce7 = true) {
        var _0x5b563d = _0x33a32c.value;
        var _0x121245 = ClothingType[_0x5b563d];
        var _0x32b78e = GetPedPropIndex(_0x59ad3f, _0x5b563d);
        var _0x8d8d92 = GetPedPropTextureIndex(_0x59ad3f, _0x5b563d);
        _0x4a786f[_0x121245] = [_0x32b78e, _0x8d8d92];
      }
    } catch (_0x9a189c) {
      _0x1de5dd = true;
      _0x5da5fe = _0x9a189c;
    } finally {
      try {
        if (!_0x14fce7 && _0x5a8935["return"] != null) {
          _0x5a8935["return"]();
        }
      } finally {
        if (_0x1de5dd) {
          throw _0x5da5fe;
        }
      }
    }
    return _0x4a786f;
  }
  var Kr = DevUtilz.cache(function () {
    var _0x373f8f = zr(function (_0x4afee2) {
      var _0x4299f9;
      var _0x31d87f;
      return Ar(this, function (_0xb525ac) {
        switch (_0xb525ac.label) {
          case 0x0:
            _0x4299f9 = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : false;
            return [0x4, RPC.execute("karma-clothing:fetchBlockedClothingForCharacter", _0x4299f9)];
          case 0x1:
            _0x31d87f = _0xb525ac.sent();
            if (!_0x31d87f) {
              return [0x2, [false, null]];
            }
            return [0x2, [true, _0x31d87f]];
        }
      });
    });
    return function (_0x3cba75) {
      return _0x373f8f.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0xdbba0
  });
  var Mr = DevUtilz.cache(function () {
    var _0x187cba = zr(function (_0x4752af) {
      var _0x3fa304;
      var _0x5c6781;
      return Ar(this, function (_0x5b61d8) {
        switch (_0x5b61d8.label) {
          case 0x0:
            _0x3fa304 = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : false;
            return [0x4, RPC.execute("karma-clothing:fetchBlockedTattoosForCharacter", _0x3fa304)];
          case 0x1:
            _0x5c6781 = _0x5b61d8.sent();
            if (!_0x5c6781) {
              return [0x2, [false, null]];
            }
            return [0x2, [true, _0x5c6781]];
        }
      });
    });
    return function (_0x1e6277) {
      return _0x187cba.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0xdbba0
  });
  var rpcGetCurrentClothing = DevUtilz.cache(function () {
    return new Promise(function (_0x46ca30, _0x2a3324) {
      RPC.execute("karma-clothing:getCurrentClothing").then(function (_0x5e89c9) {
        _0x46ca30([true, _0x5e89c9]);
      })["catch"](function (_0x33b261) {
        _0x2a3324(_0x33b261);
      });
    });
  }, {
    'timeToLive': 0xdbba0
  });
  function saveCurrentClothing(_0x19390e) {
    var _0x1b9a44 = GetEntityModel(_0x19390e);
    var _0xaa27b7 = getEntityClothingDrawables(_0x19390e);
    var _0x4f7bf8 = getProps(_0x19390e);
    var _0x1b3c18 = {
      'component': GetPedDrawableVariation(_0x19390e, 0x2),
      'color': GetPedHairColor(_0x19390e),
      'highlightColor': GetPedHairHighlightColor(_0x19390e)
    };
    rpcGetCurrentClothing.reset();
    ClearAnimationData();
    if (GetEntityArchetypeName(PlayerPedId()) == 'mp_m_freemode_01' || GetEntityArchetypeName(PlayerPedId()) == "mp_f_freemode_01") {
      return RPC.execute("karma-clothing:saveCurrentClothing", _0x1b9a44, _0xaa27b7, _0x4f7bf8, [_0x1b3c18.color, _0x1b3c18.highlightColor], fadeLayer, hasCustomHeadModel);
    }
    return RPC.execute("karma-clothing:saveCurrentClothing", GetEntityArchetypeName(PlayerPedId()), _0xaa27b7, _0x4f7bf8, [_0x1b3c18.color, _0x1b3c18.highlightColor], fadeLayer, hasCustomHeadModel);
  }
  async function ApplyCurrentClothing(_0x5c142f, _0x323169) {
    var _0x6078c4 = GetEntityModel(_0x5c142f);
    var _0x4aed27 = await rpcGetCurrentClothing.get();
    if (!_0x4aed27) {
      return;
    }
    if (_0x4aed27.fadeLayer) {
      setPlayerFadeStatus(_0x4aed27.fadeLayer);
    }
    var _0x3c5878 = hasCustomHeadModel;
    hasCustomHeadModel = _0x4aed27.customHeadModel;
    if (!_0x4aed27.model) {
      return;
    }
    if (_0x4aed27.model === _0x6078c4 && !_0x323169 && !hasCustomHeadModel && !_0x3c5878) {
      return;
    }
    await setModel(_0x4aed27.model, true, true, hasCustomHeadModel);
    if (!_0x4aed27.drawables || !_0x4aed27.props || !_0x4aed27.hairColor) {
      return;
    }
    applyPedClothing(_0x5c142f, _0x4aed27.drawables, _0x4aed27.props, _0x4aed27.hairColor);
  }
  function applyPedClothing(_0x5eec17, _0x51a491, _0x382001, _0x58f687, _0x111331) {
    setPedComponentVariation(_0x5eec17, _0x51a491);
    setPedPropsIndices(_0x5eec17, _0x382001);
    setPedHairColor(_0x5eec17, _0x58f687[0x0], _0x58f687[0x1]);
    if (!_0x111331 && !checkIfTattooIsUnique(GetEntityModel(_0x5eec17))) {
      fetchgetFade.reset();
      fetchAndApplyPlayerDecorations(_0x5eec17);
    }
  }
  async function getCurrentPed() {
    return new Promise(async (_0x9b1a9e, _0x318d92) => {
      try {
        let _0xa03b2f = PlayerPedId();
        let _0x607b66 = GetEntityModel(_0xa03b2f);
        let _0x2e4f1d = {
          'component': GetPedDrawableVariation(_0xa03b2f, 0x2),
          'color': GetPedHairColor(_0xa03b2f),
          'highlightColor': GetPedHairHighlightColor(_0xa03b2f)
        };
        let _0x29223b = {
          "tattoos": await fetchGetTattoos.get(_0x607b66),
          "fade": await fetchgetFade.get()
        };
        let _0x567c40 = {
          'clothing': {
            'model': _0x607b66,
            'drawables': getEntityClothingDrawables(_0xa03b2f),
            'props': getProps(_0xa03b2f),
            'hairColor': [_0x2e4f1d.color, _0x2e4f1d.highlightColor],
            'customHeadModel': hasCustomHeadModel
          },
          'pedData': {
            'headblend': getHeadBlend(_0xa03b2f),
            'features': getFeatures(_0xa03b2f),
            'overlays': getOverlays(_0xa03b2f),
            'eyeColor': GetPedEyeColor(_0xa03b2f)
          },
          'decorations': _0x29223b
        };
        _0x9b1a9e(_0x567c40);
      } catch (_0x432901) {
        _0x318d92(_0x432901);
      }
    });
  }
  exports("ApplyPedClothing", applyPedClothing);
  exports('SaveCurrentClothing', saveCurrentClothing);
  exports("GetCurrentPed", getCurrentPed);
  ;
  function Tr(_0x278995, _0x2590f7, _0x34e846, _0x1abf94, _0x2a17ef, _0x1c78c9, _0x37dead) {
    try {
      var _0xc03037 = _0x278995[_0x1c78c9](_0x37dead);
      var _0x30a6bd = _0xc03037.value;
    } catch (_0x337f05) {
      _0x34e846(_0x337f05);
      return;
    }
    if (_0xc03037.done) {
      _0x2590f7(_0x30a6bd);
    } else {
      Promise.resolve(_0x30a6bd).then(_0x1abf94, _0x2a17ef);
    }
  }
  function Ur(_0x43a88b) {
    return function () {
      var _0x43fe3c = this;
      return new Promise(function (_0x525c70, _0x2297e5) {
        var _0x426895 = _0x43a88b.apply(_0x43fe3c, arguments);
        function _0x2b4b6e(_0x34a10e) {
          Tr(_0x426895, _0x525c70, _0x2297e5, _0x2b4b6e, _0x4adcfc, "next", _0x34a10e);
        }
        function _0x4adcfc(_0x3770bd) {
          Tr(_0x426895, _0x525c70, _0x2297e5, _0x2b4b6e, _0x4adcfc, "throw", _0x3770bd);
        }
        _0x2b4b6e(undefined);
      });
    };
  }
  function Vr(_0x185a38, _0x187b81) {
    var _0x544d86;
    var _0x439374;
    var _0x521d98;
    var _0x240b08;
    var _0x375316 = {
      'label': 0x0,
      'sent': function () {
        if (_0x521d98[0x0] & 0x1) {
          throw _0x521d98[0x1];
        }
        return _0x521d98[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x240b08 = {
      'next': _0x21c369(0x0),
      'throw': _0x21c369(0x1),
      'return': _0x21c369(0x2)
    };
    if (typeof Symbol === "function") {
      _0x240b08[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x240b08;
    function _0x21c369(_0xa5d5b1) {
      return function (_0xbd1ed3) {
        return _0x872186([_0xa5d5b1, _0xbd1ed3]);
      };
    }
    function _0x872186(_0x5b7251) {
      if (_0x544d86) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x375316) {
        try {
          _0x544d86 = 0x1;
          if (_0x439374 && (_0x521d98 = _0x5b7251[0x0] & 0x2 ? _0x439374['return'] : _0x5b7251[0x0] ? _0x439374["throw"] || ((_0x521d98 = _0x439374["return"]) && _0x521d98.call(_0x439374), 0x0) : _0x439374.next) && !(_0x521d98 = _0x521d98.call(_0x439374, _0x5b7251[0x1])).done) {
            return _0x521d98;
          }
          _0x439374 = 0x0;
          if (_0x521d98) {
            _0x5b7251 = [_0x5b7251[0x0] & 0x2, _0x521d98.value];
          }
          switch (_0x5b7251[0x0]) {
            case 0x0:
            case 0x1:
              _0x521d98 = _0x5b7251;
              break;
            case 0x4:
              _0x375316.label++;
              var _0x47a9cb = {
                'value': _0x5b7251[0x1],
                'done': false
              };
              return _0x47a9cb;
            case 0x5:
              _0x375316.label++;
              _0x439374 = _0x5b7251[0x1];
              _0x5b7251 = [0x0];
              continue;
            case 0x7:
              _0x5b7251 = _0x375316.ops.pop();
              _0x375316.trys.pop();
              continue;
            default:
              _0x521d98 = _0x375316.trys;
              if (!(_0x521d98 = _0x521d98.length > 0x0 && _0x521d98[_0x521d98.length - 0x1]) && (_0x5b7251[0x0] === 0x6 || _0x5b7251[0x0] === 0x2)) {
                _0x375316 = 0x0;
                continue;
              }
              if (_0x5b7251[0x0] === 0x3 && (!_0x521d98 || _0x5b7251[0x1] > _0x521d98[0x0] && _0x5b7251[0x1] < _0x521d98[0x3])) {
                _0x375316.label = _0x5b7251[0x1];
                break;
              }
              if (_0x5b7251[0x0] === 0x6 && _0x375316.label < _0x521d98[0x1]) {
                _0x375316.label = _0x521d98[0x1];
                _0x521d98 = _0x5b7251;
                break;
              }
              if (_0x521d98 && _0x375316.label < _0x521d98[0x2]) {
                _0x375316.label = _0x521d98[0x2];
                _0x375316.ops.push(_0x5b7251);
                break;
              }
              if (_0x521d98[0x2]) {
                _0x375316.ops.pop();
              }
              _0x375316.trys.pop();
              continue;
          }
          _0x5b7251 = _0x187b81.call(_0x185a38, _0x375316);
        } catch (_0x5d0550) {
          _0x5b7251 = [0x6, _0x5d0550];
          _0x439374 = 0x0;
        } finally {
          _0x544d86 = _0x521d98 = 0x0;
        }
      }
      if (_0x5b7251[0x0] & 0x5) {
        throw _0x5b7251[0x1];
      }
      var _0x2a4202 = {
        'value': _0x5b7251[0x0] ? _0x5b7251[0x1] : undefined,
        'done': true
      };
      return _0x2a4202;
    }
  }
  ;
  var isCameraActive = true;
  var isCameraReady = true;
  var isOutfitMenuOpen = false;
  var getOutFitsRPC = DevUtilz.cache(function () {
    var _0x281298 = Ur(function (_0x45d187) {
      var _0x2e9da4;
      return Vr(this, function (_0x3a4271) {
        switch (_0x3a4271.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:getOutfits")];
          case 0x1:
            _0x2e9da4 = _0x3a4271.sent();
            return [0x2, [true, _0x2e9da4]];
        }
      });
    });
    return function (_0x1308b0) {
      return _0x281298.apply(this, arguments);
    };
  }(), {
    'timeToLive': 0xdbba0
  });
  var SaveOutfitFunc = function () {
    var _0xc6984 = Ur(function (_0x35a74d, _0x290615, _0x5b8af3, _0x456622) {
      var _0x2e3605;
      var _0x186368;
      var _0x5e6bd8;
      var _0x2170ba;
      var _0x309f14;
      return Vr(this, function (_0x100d24) {
        switch (_0x100d24.label) {
          case 0x0:
            _0x2e3605 = GetEntityModel(_0x35a74d);
            _0x186368 = getEntityClothingDrawables(_0x35a74d);
            _0x5e6bd8 = getProps(_0x35a74d);
            _0x2170ba = {
              'component': GetPedDrawableVariation(_0x35a74d, 0x2),
              'color': GetPedHairColor(_0x35a74d),
              'highlightColor': GetPedHairHighlightColor(_0x35a74d)
            };
            return [0x4, RPC.execute('karma-clothing:saveOutfit', _0x290615, _0x5b8af3, _0x456622 ?? '', _0x2e3605, _0x186368, _0x5e6bd8, [_0x2170ba.color, _0x2170ba.highlightColor], fadeLayer, hasCustomHeadModel)];
          case 0x1:
            _0x309f14 = _0x100d24.sent();
            return [0x2, _0x309f14];
        }
      });
    });
    return function _0x4b803b(_0x46c6a4, _0x38faf3, _0x115835, _0x349512) {
      return _0xc6984.apply(this, arguments);
    };
  }();
  function applyOutfitAndPedClothing(_0x3da4d8, _0x1dfa42) {
    getOutFitsRPC.get().then(async function (_0x47b12b) {
      if (!_0x47b12b) {
        return;
      }
      var _0x6edd31 = typeof _0x1dfa42 === "number" ? _0x47b12b.find(function (_0x4af69) {
        return _0x4af69.slot === _0x1dfa42;
      }) : _0x1dfa42;
      if (!_0x6edd31) {
        return;
      }
      var _0x36c544 = _0x6edd31.model;
      var _0x3e0ce9 = _0x6edd31.drawables;
      var _0xd4513 = _0x6edd31.props;
      var _0xe8da45 = _0x6edd31.hairColor;
      var _0x5c1531 = _0x6edd31.fadeLayer;
      var _0x8056e9 = _0x6edd31.customHeadModel;
      if (_0x5c1531) {
        setPlayerFadeStatus(_0x5c1531);
      }
      if (_0x8056e9) {
        setHasCustomModelVariable(_0x8056e9);
      }
      if (_0x36c544 === GetEntityModel(_0x7f11fb) && !_0x8056e9) {
        setImmediate(function () {});
        return;
      }
      var _0x7f11fb = await setModel(_0x36c544, true, true, _0x8056e9);
      applyPedClothing(_0x7f11fb, _0x3e0ce9, _0xd4513, _0xe8da45);
      saveCurrentClothing(_0x7f11fb);
      TriggerEvent("InteractSound_CL:PlayOnOne", 'Clothes1', 0.6);
    });
  }
  function openOutfits_() {
    getOutFitsRPC.get().then(function (_0x314b50) {
      if (!_0x314b50) {
        return;
      }
      var _0x5e40c5 = _0x314b50.map(function (_0x153c6b) {
        var _0x5eeb2f = {
          'name': _0x153c6b.name,
          'tags': _0x153c6b.tags,
          'slot': _0x153c6b.slot
        };
        return _0x5eeb2f;
      });
      var _0x199e93 = IsPedInAnyVehicle(PlayerPedId(), true);
      if (!isOutfitMenuOpen && isCameraActive && isCameraReady && !_0x199e93) {
        HandleCameraGhost(PlayerPedId(), true, 0x2);
      }
      isOutfitMenuOpen = true;
      exports.outfits.open(_0x5e40c5);
    })["catch"](function (_0x1e9ef5) {
      console.error("^5 [clothing]Error #1004");
    });
  }
  var ds = function () {
    var _0xd07fdd = Ur(function (_0x4dcd7c) {
      var _0x381f08;
      var _0x953ce2;
      var _0x2a2726;
      var _0x39039b;
      var _0x554a15;
      var _0x44d56e;
      var _0x4e846d;
      var _0x557969;
      var _0x5cc11d;
      var _0x509800;
      return Vr(this, function (_0xf6025b) {
        switch (_0xf6025b.label) {
          case 0x0:
            _0x381f08 = PlayerPedId();
            _0x953ce2 = _0x4dcd7c.model;
            _0x2a2726 = _0x4dcd7c.drawables;
            _0x39039b = _0x4dcd7c.props;
            _0x554a15 = _0x4dcd7c.hairColor;
            _0x44d56e = _0x4dcd7c.fadeLayer;
            _0x4e846d = _0x4dcd7c.customHeadModel;
            _0x557969 = checkIfTattooIsUnique(_0x953ce2);
            if (_0x953ce2 === GetEntityModel(_0x381f08) && !_0x4e846d) {
              return [0x3, 0x2];
            }
            return [0x4, setModel(_0x953ce2, true, false, _0x4e846d)];
          case 0x1:
            _0x381f08 = _0xf6025b.sent();
            DoSomeFunctionStuff(_0x381f08);
            _0xf6025b.label = 0x2;
          case 0x2:
            if (!!_0x557969) {
              return [0x3, 0x5];
            }
            return [0x4, fetchFadeDatabase.get(_0x953ce2 + '-' + _0x44d56e, _0x953ce2, _0x44d56e)];
          case 0x3:
            _0x5cc11d = _0xf6025b.sent();
            return [0x4, fetchGetTattoos.get(_0x953ce2)];
          case 0x4:
            _0x509800 = _0xf6025b.sent();
            if (!_0x509800 || !_0x5cc11d) {
              return [0x2];
            }
            var _0xe99645 = {
              'tattoos': _0x509800,
              'fade': _0x5cc11d
            };
            applyDecorations(_0x381f08, _0xe99645);
            _0xf6025b.label = 0x5;
          case 0x5:
            applyPedClothing(_0x381f08, _0x2a2726, _0x39039b, _0x554a15, true);
            return [0x2];
        }
      });
    });
    return function _0x201b9e(_0x260f0e) {
      return _0xd07fdd.apply(this, arguments);
    };
  }();
  async function PerformCleanup() {
    try {
      var _0x3503c6 = PlayerPedId();
      await ApplyCurrentClothing(_0x3503c6);
    } catch (_0x3178fa) {
      console.error("Error while performing cleanup:", _0x3178fa);
      throw _0x3178fa;
    }
  }
  on("outfits:onClose", function () {
    if (!isOutfitMenuOpen) {
      return;
    }
    isOutfitMenuOpen = false;
    if (!isCameraReady || false) {
      return;
    }
    PerformCleanup();
    CleanUpCameras();
  });
  on('outfits:preview', function () {
    var _0x5b3ec3 = Ur(function (_0x4f63e0) {
      var _0xdd25bb;
      var _0xeb21e1;
      return Vr(this, function (_0x5911e0) {
        switch (_0x5911e0.label) {
          case 0x0:
            if (!isOutfitMenuOpen || !isCameraReady || false) {
              return [0x2];
            }
            return [0x4, getOutFitsRPC.get()];
          case 0x1:
            _0xdd25bb = _0x5911e0.sent();
            if (!_0xdd25bb) {
              return [0x2];
            }
            _0xeb21e1 = _0xdd25bb.find(function (_0x466422) {
              return _0x466422.slot === _0x4f63e0;
            });
            if (!_0xeb21e1) {
              return [0x2];
            }
            return [0x4, ds(_0xeb21e1)];
          case 0x2:
            _0x5911e0.sent();
            return [0x2];
        }
      });
    });
    return function (_0xe7611) {
      return _0x5b3ec3.apply(this, arguments);
    };
  }());
  on("outfits:apply", async function (_0x2166ff) {
    if (!isOutfitMenuOpen) {
      return;
    }
    try {
      await applyOutfitAndPedClothing(PlayerPedId(), _0x2166ff);
      CleanUpCameras();
      isOutfitMenuOpen = false;
      exports.outfits.close();
    } catch (_0x1ec176) {
      console.error("^2 [clothing] Error #1005");
    }
  });
  on("outfits:save", async function (_0x29a629) {
    try {
      if (!isOutfitMenuOpen) {
        return;
      }
      const _0x1ef9ea = await getOutFitsRPC.get();
      if (!_0x1ef9ea) {
        return;
      }
      let _0x48eb20 = getCurrentResourceConfig("maxOutfits");
      let _0x57d34f = 0x0;
      for (let _0x5b95ad = 0x1; _0x5b95ad <= _0x48eb20; _0x5b95ad++) {
        let _0x345dd0 = false;
        for (let _0x424f3d = 0x0; _0x424f3d < _0x1ef9ea.length; _0x424f3d++) {
          if (_0x1ef9ea[_0x424f3d].slot === _0x5b95ad) {
            _0x345dd0 = true;
            break;
          }
        }
        if (!_0x345dd0) {
          _0x57d34f = _0x5b95ad;
          break;
        }
      }
      const _0x107357 = await SaveOutfitFunc(PlayerPedId(), _0x57d34f, _0x29a629.name, _0x29a629.tags);
      if (_0x107357) {
        getOutFitsRPC.reset();
        openOutfits_();
      }
    } catch (_0x35913e) {
      console.error("Error saving outfit: #9003");
    }
  });
  on("outfits:edit", function () {
    var _0x54cd34 = Ur(function (_0x4ac2dd) {
      var _0x275b6d;
      var _0x4a3229;
      var _0x507c17;
      return Vr(this, function (_0x17bb82) {
        switch (_0x17bb82.label) {
          case 0x0:
            if (!isOutfitMenuOpen) {
              return [0x2];
            }
            return [0x4, getOutFitsRPC.get()];
          case 0x1:
            _0x275b6d = _0x17bb82.sent();
            if (!_0x275b6d) {
              return [0x2];
            }
            _0x4a3229 = _0x275b6d.find(function (_0x253c96) {
              return _0x253c96.slot === _0x4ac2dd.slot;
            });
            if (!_0x4a3229) {
              return [0x2];
            }
            return [0x4, ds(_0x4a3229)];
          case 0x2:
            _0x17bb82.sent();
            return [0x4, SaveOutfitFunc(PlayerPedId(), _0x4ac2dd.slot, _0x4ac2dd.name, _0x4ac2dd.tags)];
          case 0x3:
            _0x507c17 = _0x17bb82.sent();
            if (_0x507c17) {
              PerformCleanup();
              getOutFitsRPC.reset();
              openOutfits_();
            }
            return [0x2];
        }
      });
    });
    return function (_0x2f6b71) {
      return _0x54cd34.apply(this, arguments);
    };
  }());
  on("outfits:delete", function () {
    var _0x30babb = Ur(function (_0x3eaca8) {
      var _0x9d53b4;
      return Vr(this, function (_0x2166af) {
        switch (_0x2166af.label) {
          case 0x0:
            return [0x4, RPC.execute("karma-clothing:deleteOutfit", _0x3eaca8)];
          case 0x1:
            _0x9d53b4 = _0x2166af.sent();
            if (!_0x9d53b4) {
              return [0x3, 0x4];
            }
            if (!isCameraReady) {
              return [0x3, 0x3];
            }
            return [0x4, PerformCleanup()];
          case 0x2:
            _0x2166af.sent();
            _0x2166af.label = 0x3;
          case 0x3:
            getOutFitsRPC.reset();
            openOutfits_();
            _0x2166af.label = 0x4;
          case 0x4:
            return [0x2];
        }
      });
    });
    return function (_0x48292d) {
      return _0x30babb.apply(this, arguments);
    };
  }());
  function SetPreferences(_0x4b5e8a) {
    isCameraActive = _0x4b5e8a["hud.outfits.camera.enabled"];
    isCameraReady = _0x4b5e8a["hud.outfits.preview.enabled"];
  }
  onNet("np-preferences:setPreferences", SetPreferences);
  function gs() {
    return false || false;
  }
  ;
  function hs(_0xe626bd, _0x2acd1e) {
    if (_0x2acd1e == null || _0x2acd1e > _0xe626bd.length) {
      _0x2acd1e = _0xe626bd.length;
    }
    var _0x461f53 = 0x0;
    for (var _0x86b882 = new Array(_0x2acd1e); _0x461f53 < _0x2acd1e; _0x461f53++) {
      _0x86b882[_0x461f53] = _0xe626bd[_0x461f53];
    }
    return _0x86b882;
  }
  function is(_0x5b98de) {
    if (Array.isArray(_0x5b98de)) {
      return _0x5b98de;
    }
  }
  function js(_0x5c401c, _0x4d3b33, _0x1d0961, _0x182f8d, _0x2965eb, _0x305458, _0x45cb2c) {
    try {
      var _0x13ad63 = _0x5c401c[_0x305458](_0x45cb2c);
      var _0x2b75ab = _0x13ad63.value;
    } catch (_0x2c033e) {
      _0x1d0961(_0x2c033e);
      return;
    }
    if (_0x13ad63.done) {
      _0x4d3b33(_0x2b75ab);
    } else {
      Promise.resolve(_0x2b75ab).then(_0x182f8d, _0x2965eb);
    }
  }
  function ks(_0x24f421) {
    return function () {
      var _0x39de98 = this;
      return new Promise(function (_0x235374, _0x32c6b7) {
        var _0x28fbda = _0x24f421.apply(_0x39de98, arguments);
        function _0x3714cf(_0x609458) {
          js(_0x28fbda, _0x235374, _0x32c6b7, _0x3714cf, _0x34268a, "next", _0x609458);
        }
        function _0x34268a(_0x50f5a4) {
          js(_0x28fbda, _0x235374, _0x32c6b7, _0x3714cf, _0x34268a, "throw", _0x50f5a4);
        }
        _0x3714cf(undefined);
      });
    };
  }
  function ls(_0x1c2c6f) {
    if (typeof Symbol !== "undefined" && _0x1c2c6f[Symbol.iterator] != null || _0x1c2c6f["@@iterator"] != null) {
      return Array.from(_0x1c2c6f);
    }
  }
  function ms() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ns(_0x454e43) {
    return is(_0x454e43) || ls(_0x454e43) || os(_0x454e43) || ms();
  }
  function os(_0x5d6c63, _0x5e2ff1) {
    if (!_0x5d6c63) {
      return;
    }
    if (typeof _0x5d6c63 === "string") {
      return hs(_0x5d6c63, _0x5e2ff1);
    }
    var _0x62cca1 = Object.prototype.toString.call(_0x5d6c63).slice(0x8, -0x1);
    if (_0x62cca1 === 'Object' && _0x5d6c63.constructor) {
      _0x62cca1 = _0x5d6c63.constructor.name;
    }
    if (_0x62cca1 === "Map" || _0x62cca1 === "Set") {
      return Array.from(_0x62cca1);
    }
    if (_0x62cca1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x62cca1)) {
      return hs(_0x5d6c63, _0x5e2ff1);
    }
  }
  function ps(_0x47c0f3, _0x5f2ace) {
    var _0x4f29f0;
    var _0x4be8ce;
    var _0x53e54b;
    var _0x25354f;
    var _0x3515b3 = {
      'label': 0x0,
      'sent': function () {
        if (_0x53e54b[0x0] & 0x1) {
          throw _0x53e54b[0x1];
        }
        return _0x53e54b[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x25354f = {
      'next': _0x4dc629(0x0),
      'throw': _0x4dc629(0x1),
      'return': _0x4dc629(0x2)
    };
    if (typeof Symbol === "function") {
      _0x25354f[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x25354f;
    function _0x4dc629(_0x789c7c) {
      return function (_0x2963ed) {
        return _0x3d9fec([_0x789c7c, _0x2963ed]);
      };
    }
    function _0x3d9fec(_0xc4b772) {
      if (_0x4f29f0) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x3515b3) {
        try {
          _0x4f29f0 = 0x1;
          if (_0x4be8ce && (_0x53e54b = _0xc4b772[0x0] & 0x2 ? _0x4be8ce["return"] : _0xc4b772[0x0] ? _0x4be8ce["throw"] || ((_0x53e54b = _0x4be8ce['return']) && _0x53e54b.call(_0x4be8ce), 0x0) : _0x4be8ce.next) && !(_0x53e54b = _0x53e54b.call(_0x4be8ce, _0xc4b772[0x1])).done) {
            return _0x53e54b;
          }
          _0x4be8ce = 0x0;
          if (_0x53e54b) {
            _0xc4b772 = [_0xc4b772[0x0] & 0x2, _0x53e54b.value];
          }
          switch (_0xc4b772[0x0]) {
            case 0x0:
            case 0x1:
              _0x53e54b = _0xc4b772;
              break;
            case 0x4:
              _0x3515b3.label++;
              var _0x2a1b27 = {
                'value': _0xc4b772[0x1],
                'done': false
              };
              return _0x2a1b27;
            case 0x5:
              _0x3515b3.label++;
              _0x4be8ce = _0xc4b772[0x1];
              _0xc4b772 = [0x0];
              continue;
            case 0x7:
              _0xc4b772 = _0x3515b3.ops.pop();
              _0x3515b3.trys.pop();
              continue;
            default:
              _0x53e54b = _0x3515b3.trys;
              if (!(_0x53e54b = _0x53e54b.length > 0x0 && _0x53e54b[_0x53e54b.length - 0x1]) && (_0xc4b772[0x0] === 0x6 || _0xc4b772[0x0] === 0x2)) {
                _0x3515b3 = 0x0;
                continue;
              }
              if (_0xc4b772[0x0] === 0x3 && (!_0x53e54b || _0xc4b772[0x1] > _0x53e54b[0x0] && _0xc4b772[0x1] < _0x53e54b[0x3])) {
                _0x3515b3.label = _0xc4b772[0x1];
                break;
              }
              if (_0xc4b772[0x0] === 0x6 && _0x3515b3.label < _0x53e54b[0x1]) {
                _0x3515b3.label = _0x53e54b[0x1];
                _0x53e54b = _0xc4b772;
                break;
              }
              if (_0x53e54b && _0x3515b3.label < _0x53e54b[0x2]) {
                _0x3515b3.label = _0x53e54b[0x2];
                _0x3515b3.ops.push(_0xc4b772);
                break;
              }
              if (_0x53e54b[0x2]) {
                _0x3515b3.ops.pop();
              }
              _0x3515b3.trys.pop();
              continue;
          }
          _0xc4b772 = _0x5f2ace.call(_0x47c0f3, _0x3515b3);
        } catch (_0x50fa63) {
          _0xc4b772 = [0x6, _0x50fa63];
          _0x4be8ce = 0x0;
        } finally {
          _0x4f29f0 = _0x53e54b = 0x0;
        }
      }
      if (_0xc4b772[0x0] & 0x5) {
        throw _0xc4b772[0x1];
      }
      var _0x16b106 = {
        'value': _0xc4b772[0x0] ? _0xc4b772[0x1] : undefined,
        'done': true
      };
      return _0x16b106;
    }
  }
  var isInSpawnSelect = false;
  function SetClothingMenuEnabled(_0x5d03d5) {
    isInSpawnSelect = _0x5d03d5;
  }
  AddEventHandler("QBCore:Client:OnPlayerLoaded", function () {
    characterLoaded();
    characterSpawned();
  });
  on("np-base:spawnInitialized", function () {
    characterLoaded();
  });
  onNet("np-base:characterLoaded", function () {
    characterLoaded();
  });
  on("np-spawn:characterSpawned", function () {
    characterSpawned();
  });
  onNet("karma-clothing:openClothing", function (_0x5ac1af, _0xf02b88, _0x64b849 = false, _0x1b3fc1) {
    isInSpawnSelect = _0xf02b88;
    openClothing("clothing", false, _0x64b849);
  });
  onNet("karma-clothing:openBarber", function (_0x14b5dd, _0x5167ca) {
    openBarber(_0x14b5dd);
  });
  onNet("karma-clothing:openTattoo", function (_0x53fce8, _0x4f9e1c = false, _0x50f2f2) {
    FMZoneFunction(_0x53fce8, _0x4f9e1c);
  });
  RegisterNetEvent("karma-clothing:applyCurrentClothing");
  AddEventHandler("karma-clothing:applyCurrentClothing", function () {
    var _0x3f9b1b = PlayerPedId();
    TriggerServerEvent("Police:getMeta");
    emit("playerstate:pedUpdated", _0x3f9b1b);
    TriggerEvent('Animation:Set:Reset');
    return ApplyCurrentClothing(_0x3f9b1b, true);
  });
  on("karma-clothing:pedChanged", function (_0x4f2ab6) {
    emit("playerstate:pedUpdated", _0x4f2ab6);
    characterSpawned();
  });
  onNet("karma-clothing:setModel", function (_0x576305) {
    setModel(_0x576305);
  });
  onNet("karma-clothing:outfits", function (_0x14ccbe) {
    if (!(false || false) && !_0x14ccbe) {
      return;
    }
    openOutfits_();
  });
  onNet("karma-clothing:addOutfit", function () {
    var _0x263798 = ks(function (_0x55938a) {
      var _0x41a284;
      var _0x4e68f3;
      var _0x271b8e;
      var _0xf62841;
      var _0xe37408;
      var _0x69accf;
      var _0xe3eeea;
      var _0x4ed01;
      return ps(this, function (_0x35a501) {
        switch (_0x35a501.label) {
          case 0x0:
            _0x41a284 = is(_0x55938a) || ls(_0x55938a) || os(_0x55938a) || ms();
            _0x4e68f3 = _0x41a284[0x0];
            _0x271b8e = _0x41a284[0x1];
            _0xf62841 = _0x41a284.slice(0x2);
            if (!(false || false)) {
              return [0x2];
            }
            _0xe37408 = +_0x271b8e;
            _0x69accf = _0xf62841.join(" ");
            _0xe3eeea = getCurrentResourceConfig("maxOutfits");
            if (!_0xe37408 || _0xe37408 > _0xe3eeea) {
              return [0x2];
            }
            return [0x4, SaveOutfitFunc(PlayerPedId(), _0xe37408, _0x69accf)];
          case 0x1:
            _0x4ed01 = _0x35a501.sent();
            if (_0x4ed01) {
              getOutFitsRPC.reset();
              emit("DoLongHudText", "Outfit saved");
            }
            return [0x2];
        }
      });
    });
    return function (_0x531396) {
      return _0x263798.apply(this, arguments);
    };
  }());
  onNet("karma-clothing:useOutfit", function () {
    var _0x54a3e8 = ks(function (_0x463691) {
      return ps(this, function (_0x3a693d) {
        switch (_0x3a693d.label) {
          case 0x0:
            if (!(false || false)) {
              return [0x2];
            }
            return [0x4, applyOutfitAndPedClothing(PlayerPedId(), +_0x463691)];
          case 0x1:
            _0x3a693d.sent();
            return [0x2];
        }
      });
    });
    return function (_0x2affe9) {
      return _0x54a3e8.apply(this, arguments);
    };
  }());
  onNet("karma-clothing:deleteOutfit", function () {
    var _0x5d2b20 = ks(function (_0x32a17c) {
      var _0x40b86e;
      return ps(this, function (_0x2918d5) {
        switch (_0x2918d5.label) {
          case 0x0:
            if (!(false || false)) {
              return [0x2];
            }
            return [0x4, RPC.execute("karma-clothing:deleteOutfit", +_0x32a17c)];
          case 0x1:
            _0x40b86e = _0x2918d5.sent();
            if (_0x40b86e) {
              getOutFitsRPC.reset();
              emit("DoLongHudText", "Outfit deleted");
            }
            return [0x2];
        }
      });
    });
    return function (_0x4d532f) {
      return _0x5d2b20.apply(this, arguments);
    };
  }());
  on("np-inventory:itemUsed", function () {
    var _0x5e12a0 = ks(function (_0x341b11, _0x3196f0) {
      var _0x1134c3;
      var _0x527179;
      var _0x3f80bc;
      var _0xf1eb6b;
      var _0x35228c;
      var _0x148c0d;
      var _0x25d922;
      var _0x364060;
      var _0x21c665;
      var _0x1581e5;
      var _0xd3bcd5;
      var _0x4bafa9;
      return ps(this, function (_0x2f5e70) {
        switch (_0x2f5e70.label) {
          case 0x0:
            if (_0x341b11 !== "customclothing") {
              return [0x3, 0x3];
            }
            _0x1134c3 = JSON.parse(_0x3196f0);
            if (_0x1134c3.type !== "clothing") {
              return [0x3, 0x2];
            }
            _0x527179 = _0x1134c3.model;
            _0x3f80bc = _0x1134c3.drawables;
            _0xf1eb6b = _0x1134c3.props;
            _0x35228c = _0x1134c3.hair;
            return [0x4, setModel(_0x527179, true, true)];
          case 0x1:
            _0x148c0d = _0x2f5e70.sent();
            applyPedClothing(_0x148c0d, _0x3f80bc, _0xf1eb6b, [_0x35228c.color, _0x35228c.highlightColor], true);
            saveCurrentClothing(_0x148c0d);
            _0x2f5e70.label = 0x2;
          case 0x2:
            if (_0x1134c3.type === "barber") {
              _0x25d922 = _0x1134c3.headblend;
              _0x364060 = _0x1134c3.features;
              _0x21c665 = _0x1134c3.overlays;
              _0x1581e5 = _0x1134c3.eyeColor;
              _0xd3bcd5 = PlayerPedId();
              applyPedData(_0xd3bcd5, _0x25d922, _0x364060, _0x21c665, _0x1581e5);
              funcSavePedData(_0xd3bcd5);
            }
            _0x2f5e70.label = 0x3;
          case 0x3:
            if (_0x341b11 !== "mask" && _0x341b11 !== 'hat') {
              return [0x3, 0x5];
            }
            _0x4bafa9 = JSON.parse(_0x3196f0);
            return [0x4, FaceWear(_0x341b11, true, [_0x4bafa9[_0x341b11], _0x4bafa9.txd])];
          case 0x4:
            _0x2f5e70.sent();
            saveCurrentClothing(PlayerPedId());
            _0x2f5e70.label = 0x5;
          case 0x5:
            return [0x2];
        }
      });
    });
    return function (_0xb65a91, _0x412837) {
      return _0x5e12a0.apply(this, arguments);
    };
  }());
  onNet('karma-clothing:faceWear', function () {
    var _0x970086 = ks(function (_0x534447, _0x4aac41) {
      return ps(this, function (_0x1727cf) {
        FaceWear(_0x534447, _0x4aac41);
        return [0x2];
      });
    });
    return function (_0x1de0a3, _0x3a87b2) {
      return _0x970086.apply(this, arguments);
    };
  }());
  onNet("karma-clothing:removeShoes", ks(function () {
    return ps(this, function (_0x15d6ed) {
      var _0x4da5d4 = PlayerPedId();
      var _0x1a959a = GetEntityModel(_0x4da5d4);
      if (checkIfTattooIsUnique(_0x1a959a)) {
        return [0x2];
      }
      var _0x3d733d = getTattooGender(_0x1a959a) === "male" ? [0x22, 0x0] : [0x23, 0x0];
      var _0x37b650 = {
        'Shoes': _0x3d733d
      };
      setPedComponentVariation(_0x4da5d4, _0x37b650);
      return [0x2];
    });
  }));
  on("karma-clothing:toggleBarberBlips", function () {
    ToggleBarberBlips();
  });
  on("karma-clothing:toggleTattooBlips", function () {
    HandleSomeBlipsForShopTattos();
  });
  function characterLoaded() {
    Kr.reset();
    Mr.reset();
    rpcGetCurrentClothing.reset();
    getOutFitsRPC.reset();
    fetchgetFade.reset();
    PedDataFM.reset(existingTattoos.male);
    PedDataFM.reset(existingTattoos.female);
    fetchGetTattoos.reset(existingTattoos.male);
    fetchGetTattoos.reset(existingTattoos.female);
    mr.reset();
  }
  ;
  function ts(_0x1781bf, _0x4b7aa6) {
    if (_0x4b7aa6 == null || _0x4b7aa6 > _0x1781bf.length) {
      _0x4b7aa6 = _0x1781bf.length;
    }
    var _0x2fcc88 = 0x0;
    for (var _0x3c6bcd = new Array(_0x4b7aa6); _0x2fcc88 < _0x4b7aa6; _0x2fcc88++) {
      _0x3c6bcd[_0x2fcc88] = _0x1781bf[_0x2fcc88];
    }
    return _0x3c6bcd;
  }
  function us(_0x304c35) {
    if (Array.isArray(_0x304c35)) {
      return _0x304c35;
    }
  }
  function vs(_0x219d2a, _0x3e5fbf, _0x4e4f5b, _0x1a81c1, _0x2c70f6, _0x4210cd, _0x1347e0) {
    try {
      var _0x1bf056 = _0x219d2a[_0x4210cd](_0x1347e0);
      var _0x3c099d = _0x1bf056.value;
    } catch (_0x36a524) {
      _0x4e4f5b(_0x36a524);
      return;
    }
    if (_0x1bf056.done) {
      _0x3e5fbf(_0x3c099d);
    } else {
      Promise.resolve(_0x3c099d).then(_0x1a81c1, _0x2c70f6);
    }
  }
  function ws(_0xf2e063) {
    return function () {
      var _0x4451e0 = this;
      return new Promise(function (_0x5c5f6c, _0x423b38) {
        var _0x3ad8a7 = _0xf2e063.apply(_0x4451e0, arguments);
        function _0x44bdaf(_0x5cdf10) {
          vs(_0x3ad8a7, _0x5c5f6c, _0x423b38, _0x44bdaf, _0x7925db, "next", _0x5cdf10);
        }
        function _0x7925db(_0x4f3113) {
          vs(_0x3ad8a7, _0x5c5f6c, _0x423b38, _0x44bdaf, _0x7925db, "throw", _0x4f3113);
        }
        _0x44bdaf(undefined);
      });
    };
  }
  function xs(_0x2410f4, _0x3e2084) {
    var _0x52a4b4 = _0x2410f4 == null ? null : typeof Symbol !== "undefined" && _0x2410f4[Symbol.iterator] || _0x2410f4["@@iterator"];
    if (_0x52a4b4 == null) {
      return;
    }
    var _0xf7665f = [];
    var _0x280f9c = true;
    var _0x1b8b90 = false;
    var _0x2def1d;
    var _0x105864;
    try {
      for (_0x52a4b4 = _0x52a4b4.call(_0x2410f4); !(_0x280f9c = (_0x2def1d = _0x52a4b4.next()).done); _0x280f9c = true) {
        _0xf7665f.push(_0x2def1d.value);
        if (_0x3e2084 && _0xf7665f.length === _0x3e2084) {
          break;
        }
      }
    } catch (_0x40205f) {
      _0x1b8b90 = true;
      _0x105864 = _0x40205f;
    } finally {
      try {
        if (!_0x280f9c && _0x52a4b4["return"] != null) {
          _0x52a4b4["return"]();
        }
      } finally {
        if (_0x1b8b90) {
          throw _0x105864;
        }
      }
    }
    return _0xf7665f;
  }
  function ys() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function zs(_0x4a1b77, _0x439537) {
    return us(_0x4a1b77) || xs(_0x4a1b77, _0x439537) || As(_0x4a1b77, _0x439537) || ys();
  }
  function As(_0xfab5d6, _0x7e69d7) {
    if (!_0xfab5d6) {
      return;
    }
    if (typeof _0xfab5d6 === "string") {
      return ts(_0xfab5d6, _0x7e69d7);
    }
    var _0x4590d2 = Object.prototype.toString.call(_0xfab5d6).slice(0x8, -0x1);
    if (_0x4590d2 === 'Object' && _0xfab5d6.constructor) {
      _0x4590d2 = _0xfab5d6.constructor.name;
    }
    if (_0x4590d2 === "Map" || _0x4590d2 === "Set") {
      return Array.from(_0x4590d2);
    }
    if (_0x4590d2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x4590d2)) {
      return ts(_0xfab5d6, _0x7e69d7);
    }
  }
  function Bs(_0x283e50, _0x19cefe) {
    var _0x14e5ec;
    var _0x510092;
    var _0x53071f;
    var _0x529b08;
    var _0x9667e = {
      'label': 0x0,
      'sent': function () {
        if (_0x53071f[0x0] & 0x1) {
          throw _0x53071f[0x1];
        }
        return _0x53071f[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x529b08 = {
      'next': _0x3fb81a(0x0),
      'throw': _0x3fb81a(0x1),
      'return': _0x3fb81a(0x2)
    };
    if (typeof Symbol === 'function') {
      _0x529b08[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x529b08;
    function _0x3fb81a(_0x16542d) {
      return function (_0x1624f8) {
        return _0x410219([_0x16542d, _0x1624f8]);
      };
    }
    function _0x410219(_0x5167b5) {
      if (_0x14e5ec) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x9667e) {
        try {
          _0x14e5ec = 0x1;
          if (_0x510092 && (_0x53071f = _0x5167b5[0x0] & 0x2 ? _0x510092["return"] : _0x5167b5[0x0] ? _0x510092["throw"] || ((_0x53071f = _0x510092["return"]) && _0x53071f.call(_0x510092), 0x0) : _0x510092.next) && !(_0x53071f = _0x53071f.call(_0x510092, _0x5167b5[0x1])).done) {
            return _0x53071f;
          }
          _0x510092 = 0x0;
          if (_0x53071f) {
            _0x5167b5 = [_0x5167b5[0x0] & 0x2, _0x53071f.value];
          }
          switch (_0x5167b5[0x0]) {
            case 0x0:
            case 0x1:
              _0x53071f = _0x5167b5;
              break;
            case 0x4:
              _0x9667e.label++;
              var _0x5dd485 = {
                'value': _0x5167b5[0x1],
                'done': false
              };
              return _0x5dd485;
            case 0x5:
              _0x9667e.label++;
              _0x510092 = _0x5167b5[0x1];
              _0x5167b5 = [0x0];
              continue;
            case 0x7:
              _0x5167b5 = _0x9667e.ops.pop();
              _0x9667e.trys.pop();
              continue;
            default:
              _0x53071f = _0x9667e.trys;
              if (!(_0x53071f = _0x53071f.length > 0x0 && _0x53071f[_0x53071f.length - 0x1]) && (_0x5167b5[0x0] === 0x6 || _0x5167b5[0x0] === 0x2)) {
                _0x9667e = 0x0;
                continue;
              }
              if (_0x5167b5[0x0] === 0x3 && (!_0x53071f || _0x5167b5[0x1] > _0x53071f[0x0] && _0x5167b5[0x1] < _0x53071f[0x3])) {
                _0x9667e.label = _0x5167b5[0x1];
                break;
              }
              if (_0x5167b5[0x0] === 0x6 && _0x9667e.label < _0x53071f[0x1]) {
                _0x9667e.label = _0x53071f[0x1];
                _0x53071f = _0x5167b5;
                break;
              }
              if (_0x53071f && _0x9667e.label < _0x53071f[0x2]) {
                _0x9667e.label = _0x53071f[0x2];
                _0x9667e.ops.push(_0x5167b5);
                break;
              }
              if (_0x53071f[0x2]) {
                _0x9667e.ops.pop();
              }
              _0x9667e.trys.pop();
              continue;
          }
          _0x5167b5 = _0x19cefe.call(_0x283e50, _0x9667e);
        } catch (_0x4fdf6a) {
          _0x5167b5 = [0x6, _0x4fdf6a];
          _0x510092 = 0x0;
        } finally {
          _0x14e5ec = _0x53071f = 0x0;
        }
      }
      if (_0x5167b5[0x0] & 0x5) {
        throw _0x5167b5[0x1];
      }
      var _0x1ea65b = {
        'value': _0x5167b5[0x0] ? _0x5167b5[0x1] : undefined,
        'done': true
      };
      return _0x1ea65b;
    }
  }
  var ActiveCamera = null;
  var Ds = null;
  var curIndex = 0x1;
  var currentRotation = 0x0;
  var entityMaybe_;
  var Ks = {
    'fov': 0x32,
    'attachZ': -0.1,
    'attachOffset': 2.5,
    'widthOffset': 0.4
  };
  var Ls = {
    'fov': 0x1e,
    'attachZ': -0.7,
    'attachOffset': 1.5,
    'widthOffset': 0.2
  };
  var EntityList = [{
    'fov': 0x14,
    'attachZ': 0.65,
    'attachOffset': 1.5,
    'widthOffset': 0.125
  }, {
    'fov': 0x1e,
    'attachZ': 0.4,
    'attachOffset': 0x2,
    'widthOffset': 0.2
  }, {
    'fov': 0x28,
    'attachZ': 0.3,
    'attachOffset': 0x2,
    'widthOffset': 0.3
  }, Ks, Ls];
  function DoSomeFunctionStuff(_0x56a246) {
    entityMaybe_ = _0x56a246;
  }
  var HandleCameraGhost = function () {
    var _0x2c23ef = ws(function (_0x20e2f3) {
      var _0x50cf99;
      var _0xc1c825;
      var _0x2a2c7e;
      var _0x2be9d6;
      return Bs(this, function (_0x11f422) {
        switch (_0x11f422.label) {
          case 0x0:
            _0x50cf99 = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : true;
            _0xc1c825 = arguments.length > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0x1;
            entityMaybe_ = _0x20e2f3;
            _0x2a2c7e = GetGameplayCamRot(0x2)[0x2];
            SetEntityHeading(PlayerPedId(), _0x2a2c7e + 0xb4);
            currentRotation = GetEntityHeading(entityMaybe_) + 0x5a;
            SetFollowPedCamViewMode(0x0);
            SetPedCanPlayAmbientIdles(entityMaybe_, true, true);
            curIndex = _0xc1c825;
            ActiveCamera = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
            _0x2be9d6 = EntityList[curIndex];
            SetCamFov(ActiveCamera, _0x2be9d6.fov);
            updateCameraPosition(entityMaybe_, ActiveCamera, 0x0, currentRotation);
            return [0x4, delay(0x0)];
          case 0x1:
            _0x11f422.sent();
            return [0x4, delay(0x0)];
          case 0x2:
            _0x11f422.sent();
            return [0x4, delay(0x0)];
          case 0x3:
            _0x11f422.sent();
            updateCameraPosition(entityMaybe_, ActiveCamera, 0.1);
            RenderScriptCams(true, _0x50cf99, 0x1f4, true, true);
            initializeControls();
            emit('np-binds:should-execute', false);
            return [0x2];
        }
      });
    });
    return function _0x15734b(_0x146cc5) {
      return _0x2c23ef.apply(this, arguments);
    };
  }();
  function CleanUpCameras(_0x14bae5 = true) {
    SetGameplayCamRelativeHeading(0x0);
    SetGameplayCamRelativePitch(0x0, 0x1);
    ClearPedTasks(entityMaybe_);
    RenderScriptCams(false, _0x14bae5, 0x1f4, false, false);
    if (ActiveCamera) {
      DestroyCam(ActiveCamera, true);
      ActiveCamera = null;
    }
    emit("np-binds:should-execute", true);
  }
  function initializeControls() {
    var _0x15687d = GetActiveScreenResolution();
    var _0x6f9f7a = _0x15687d[0x0];
    var _0xb60e68 = setTick(function () {
      if (!ActiveCamera) {
        clearTick(_0xb60e68);
        return;
      }
      var _0x35db35 = GetNuiCursorPosition();
      for (var _0x239cef = 0x8; _0x239cef <= 0x8f; _0x239cef++) {
        DisableControlAction(0x0, _0x239cef, true);
      }
      DisableControlAction(0x0, 0xf5, true);
      if (IsDisabledControlJustPressed(0x0, 0x18)) {
        if (!IsNuiFocused() && isFirstTime) {
          exports.focusmanager.SetUIFocus(true, true);
        }
      }
      if (_0x35db35[0x0] > _0x6f9f7a * 0.65) {
        return;
      }
      var _0x181745 = GetDisabledControlNormal(0x0, 0xdc);
      if (IsDisabledControlPressed(0x0, 0x18)) {
        Ts(entityMaybe_, _0x181745 * _0x6f9f7a * 0.0125);
      }
      if (IsDisabledControlPressed(0x0, 0x19) && !isInSpawnSelect) {
        updateCameraPosition(entityMaybe_, ActiveCamera, _0x181745 * _0x6f9f7a * 0.0125);
      }
      var _0x22b073 = IsDisabledControlPressed(0x0, 0x10);
      if (_0x22b073) {
        Rs(entityMaybe_, true);
      }
      var _0x554369 = IsDisabledControlPressed(0x0, 0x11);
      if (_0x554369) {
        Rs(entityMaybe_, false);
      }
    });
  }
  function Rs(_0xfe3335, _0x5cf68e, _0x510fef) {
    if (!ActiveCamera || Ds) {
      return;
    }
    var _0x110696 = curIndex;
    if (_0x110696 === EntityList.length - 0x1 && _0x5cf68e) {
      _0x5cf68e = false;
    }
    curIndex = _0x5cf68e ? Math.min(curIndex + 0x1, EntityList.length - 0x1) : Math.max(curIndex - 0x1, 0x0);
    var _0x5e16ea = _0x510fef ? EntityList[_0x510fef] : EntityList[curIndex];
    Ds = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
    SetCamFov(Ds, _0x5e16ea.fov);
    updateCameraPosition(_0xfe3335, Ds, 0x0, currentRotation);
    SetCamActiveWithInterp(Ds, ActiveCamera, 0x1f4, 0x1, 0x1);
    if (curIndex === 0x0 && curIndex !== _0x110696) {
      ws(function () {
        var _0x2571ac;
        var _0x5addcc;
        return Bs(this, function (_0x195805) {
          switch (_0x195805.label) {
            case 0x0:
              _0x2571ac = "gestures@m@standing@fat";
              _0x5addcc = "gesture_hello";
              return [0x4, FiveMUtil.loadAnim(_0x2571ac)];
            case 0x1:
              _0x195805.sent();
              TaskPlayAnim(_0xfe3335, _0x2571ac, _0x5addcc, 0x3e8, 0x8, -0x1, 0x2, 0x64, false, false, false);
              return [0x2];
          }
        });
      })();
    } else if (curIndex !== _0x110696) {
      ClearPedTasks(_0xfe3335);
    }
    setTimeout(function () {
      if (!ActiveCamera) {
        return;
      }
      DestroyCam(ActiveCamera, false);
      ActiveCamera = Ds;
      Ds = null;
    }, 0x1f5);
  }
  function updateCameraPosition(_0x18ae44, _0x14ee37, _0x411ad8, _0x1f4595) {
    if (!ActiveCamera) {
      return;
    }
    currentRotation = (currentRotation + _0x411ad8) % 0x168;
    var _0x3dc915 = _0x1f4595 ?? currentRotation;
    var _0x3af143 = EntityList[curIndex];
    var _0x85c95e = Math.cos(_0x3dc915 * Math.PI / 0xb4) * _0x3af143.attachOffset;
    var _0x1ea05b = Math.sin(_0x3dc915 * Math.PI / 0xb4) * _0x3af143.attachOffset;
    AttachCamToEntity(_0x14ee37, _0x18ae44, _0x85c95e, _0x1ea05b, _0x3af143.attachZ, false);
    var _0x322aa5 = us(GetCamRot(ActiveCamera, 0x2)) || xs(GetCamRot(ActiveCamera, 0x2), 0x3) || As(GetCamRot(ActiveCamera, 0x2), 0x3) || ys();
    var _0xa2e02a = _0x322aa5[0x2];
    var _0x213203 = Math.sin(_0xa2e02a * Math.PI / 0xb4) * _0x3af143.widthOffset;
    var _0x46ce65 = Math.cos(_0xa2e02a * Math.PI / 0xb4) * _0x3af143.widthOffset;
    PointCamAtEntity(_0x14ee37, _0x18ae44, _0x46ce65, _0x213203, _0x3af143.attachZ, false);
  }
  function Ts(_0x300ff6, _0x230ef3) {
    SetEntityHeading(_0x300ff6, GetEntityHeading(_0x300ff6) + _0x230ef3);
  }
  ;
  function Us(_0x3fb648, _0x135b73) {
    if (_0x135b73 == null || _0x135b73 > _0x3fb648.length) {
      _0x135b73 = _0x3fb648.length;
    }
    var _0x3b0b6e = 0x0;
    for (var _0x3c4771 = new Array(_0x135b73); _0x3b0b6e < _0x135b73; _0x3b0b6e++) {
      _0x3c4771[_0x3b0b6e] = _0x3fb648[_0x3b0b6e];
    }
    return _0x3c4771;
  }
  function Vs(_0x13311d) {
    if (Array.isArray(_0x13311d)) {
      return _0x13311d;
    }
  }
  function Ws(_0x4edeac, _0x5d5ce9, _0x166541, _0x273be6, _0x3314ed, _0x18a887, _0x4423cc) {
    try {
      var _0x427b95 = _0x4edeac[_0x18a887](_0x4423cc);
      var _0x295c31 = _0x427b95.value;
    } catch (_0x1d2f39) {
      _0x166541(_0x1d2f39);
      return;
    }
    if (_0x427b95.done) {
      _0x5d5ce9(_0x295c31);
    } else {
      Promise.resolve(_0x295c31).then(_0x273be6, _0x3314ed);
    }
  }
  function Xs(_0x119134) {
    return function () {
      var _0x4c51bd = this;
      return new Promise(function (_0x55ab90, _0x540c3e) {
        var _0x16f068 = _0x119134.apply(_0x4c51bd, arguments);
        function _0x1d04a9(_0x3e7d2c) {
          Ws(_0x16f068, _0x55ab90, _0x540c3e, _0x1d04a9, _0x39bb5a, "next", _0x3e7d2c);
        }
        function _0x39bb5a(_0x1d7a4f) {
          Ws(_0x16f068, _0x55ab90, _0x540c3e, _0x1d04a9, _0x39bb5a, "throw", _0x1d7a4f);
        }
        _0x1d04a9(undefined);
      });
    };
  }
  function Ys(_0x2fbf40, _0x4e44f9, _0x30818d) {
    if (_0x4e44f9 in _0x2fbf40) {
      var _0x5eb018 = {
        'value': _0x30818d,
        'enumerable': true,
        'configurable': true,
        'writable': true
      };
      Object.defineProperty(_0x2fbf40, _0x4e44f9, _0x5eb018);
    } else {
      _0x2fbf40[_0x4e44f9] = _0x30818d;
    }
    return _0x2fbf40;
  }
  function Zs(_0x428810, _0x33c1ec) {
    var _0x4433bd = _0x428810 == null ? null : typeof Symbol !== "undefined" && _0x428810[Symbol.iterator] || _0x428810["@@iterator"];
    if (_0x4433bd == null) {
      return;
    }
    var _0x1efb36 = [];
    var _0xe89de8 = true;
    var _0x4a9556 = false;
    var _0x5c98fd;
    var _0x7d257c;
    try {
      for (_0x4433bd = _0x4433bd.call(_0x428810); !(_0xe89de8 = (_0x5c98fd = _0x4433bd.next()).done); _0xe89de8 = true) {
        _0x1efb36.push(_0x5c98fd.value);
        if (_0x33c1ec && _0x1efb36.length === _0x33c1ec) {
          break;
        }
      }
    } catch (_0x447465) {
      _0x4a9556 = true;
      _0x7d257c = _0x447465;
    } finally {
      try {
        if (!_0xe89de8 && _0x4433bd["return"] != null) {
          _0x4433bd["return"]();
        }
      } finally {
        if (_0x4a9556) {
          throw _0x7d257c;
        }
      }
    }
    return _0x1efb36;
  }
  function $s() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function SomeRandomFunc1(_0x498527) {
    for (var _0x4583c9 = 0x1; _0x4583c9 < arguments.length; _0x4583c9++) {
      var _0x3682eb = arguments[_0x4583c9] ?? {};
      var _0x4c584a = Object.keys(_0x3682eb);
      if (typeof Object.getOwnPropertySymbols === "function") {
        _0x4c584a = _0x4c584a.concat(Object.getOwnPropertySymbols(_0x3682eb).filter(function (_0x205100) {
          return Object.getOwnPropertyDescriptor(_0x3682eb, _0x205100).enumerable;
        }));
      }
      _0x4c584a.forEach(function (_0x52b8a2) {
        Ys(_0x498527, _0x52b8a2, _0x3682eb[_0x52b8a2]);
      });
    }
    return _0x498527;
  }
  function at(_0x727a80, _0x2a015) {
    var _0x1ed077 = Object.keys(_0x727a80);
    if (Object.getOwnPropertySymbols) {
      var _0x1d80cb = Object.getOwnPropertySymbols(_0x727a80);
      if (_0x2a015) {
        _0x1d80cb = _0x1d80cb.filter(function (_0x50a903) {
          return Object.getOwnPropertyDescriptor(_0x727a80, _0x50a903).enumerable;
        });
      }
      _0x1ed077.push.apply(_0x1ed077, _0x1d80cb);
    }
    return _0x1ed077;
  }
  function bt(_0x92f02a, _0x5d893e) {
    _0x5d893e = _0x5d893e ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(_0x92f02a, Object.getOwnPropertyDescriptors(_0x5d893e));
    } else {
      at(Object(_0x5d893e)).forEach(function (_0x4d314a) {
        Object.defineProperty(_0x92f02a, _0x4d314a, Object.getOwnPropertyDescriptor(_0x5d893e, _0x4d314a));
      });
    }
    return _0x92f02a;
  }
  function ct(_0x59626b, _0x3221c0) {
    return Vs(_0x59626b) || Zs(_0x59626b, _0x3221c0) || dt(_0x59626b, _0x3221c0) || $s();
  }
  function dt(_0xb0ae98, _0x5798d7) {
    if (!_0xb0ae98) {
      return;
    }
    if (typeof _0xb0ae98 === "string") {
      return Us(_0xb0ae98, _0x5798d7);
    }
    var _0x331465 = Object.prototype.toString.call(_0xb0ae98).slice(0x8, -0x1);
    if (_0x331465 === "Object" && _0xb0ae98.constructor) {
      _0x331465 = _0xb0ae98.constructor.name;
    }
    if (_0x331465 === "Map" || _0x331465 === "Set") {
      return Array.from(_0x331465);
    }
    if (_0x331465 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x331465)) {
      return Us(_0xb0ae98, _0x5798d7);
    }
  }
  function et(_0x575c78, _0x50bd5f) {
    var _0x5e4052;
    var _0x5ad415;
    var _0x40e442;
    var _0x12899b;
    var _0xb0647b = {
      'label': 0x0,
      'sent': function () {
        if (_0x40e442[0x0] & 0x1) {
          throw _0x40e442[0x1];
        }
        return _0x40e442[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x12899b = {
      'next': _0x32a9d7(0x0),
      'throw': _0x32a9d7(0x1),
      'return': _0x32a9d7(0x2)
    };
    if (typeof Symbol === "function") {
      _0x12899b[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x12899b;
    function _0x32a9d7(_0x40eeb7) {
      return function (_0x5d83bd) {
        return _0x5531e7([_0x40eeb7, _0x5d83bd]);
      };
    }
    function _0x5531e7(_0x314501) {
      if (_0x5e4052) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0xb0647b) {
        try {
          _0x5e4052 = 0x1;
          if (_0x5ad415 && (_0x40e442 = _0x314501[0x0] & 0x2 ? _0x5ad415["return"] : _0x314501[0x0] ? _0x5ad415["throw"] || ((_0x40e442 = _0x5ad415["return"]) && _0x40e442.call(_0x5ad415), 0x0) : _0x5ad415.next) && !(_0x40e442 = _0x40e442.call(_0x5ad415, _0x314501[0x1])).done) {
            return _0x40e442;
          }
          _0x5ad415 = 0x0;
          if (_0x40e442) {
            _0x314501 = [_0x314501[0x0] & 0x2, _0x40e442.value];
          }
          switch (_0x314501[0x0]) {
            case 0x0:
            case 0x1:
              _0x40e442 = _0x314501;
              break;
            case 0x4:
              _0xb0647b.label++;
              var _0x1914bb = {
                'value': _0x314501[0x1],
                'done': false
              };
              return _0x1914bb;
            case 0x5:
              _0xb0647b.label++;
              _0x5ad415 = _0x314501[0x1];
              _0x314501 = [0x0];
              continue;
            case 0x7:
              _0x314501 = _0xb0647b.ops.pop();
              _0xb0647b.trys.pop();
              continue;
            default:
              _0x40e442 = _0xb0647b.trys;
              if (!(_0x40e442 = _0x40e442.length > 0x0 && _0x40e442[_0x40e442.length - 0x1]) && (_0x314501[0x0] === 0x6 || _0x314501[0x0] === 0x2)) {
                _0xb0647b = 0x0;
                continue;
              }
              if (_0x314501[0x0] === 0x3 && (!_0x40e442 || _0x314501[0x1] > _0x40e442[0x0] && _0x314501[0x1] < _0x40e442[0x3])) {
                _0xb0647b.label = _0x314501[0x1];
                break;
              }
              if (_0x314501[0x0] === 0x6 && _0xb0647b.label < _0x40e442[0x1]) {
                _0xb0647b.label = _0x40e442[0x1];
                _0x40e442 = _0x314501;
                break;
              }
              if (_0x40e442 && _0xb0647b.label < _0x40e442[0x2]) {
                _0xb0647b.label = _0x40e442[0x2];
                _0xb0647b.ops.push(_0x314501);
                break;
              }
              if (_0x40e442[0x2]) {
                _0xb0647b.ops.pop();
              }
              _0xb0647b.trys.pop();
              continue;
          }
          _0x314501 = _0x50bd5f.call(_0x575c78, _0xb0647b);
        } catch (_0x13ce93) {
          _0x314501 = [0x6, _0x13ce93];
          _0x5ad415 = 0x0;
        } finally {
          _0x5e4052 = _0x40e442 = 0x0;
        }
      }
      if (_0x314501[0x0] & 0x5) {
        throw _0x314501[0x1];
      }
      var _0x229b87 = {
        'value': _0x314501[0x0] ? _0x314501[0x1] : undefined,
        'done': true
      };
      return _0x229b87;
    }
  }
  var isFirstTime = false;
  var StoreType = "clothing";
  var mainDetailsDataForModel;
  var isCustomModel = false;
  var hasCustomHeadModel = false;
  var keyValuePairs = {};
  var localVarkarma = undefined;
  var numberOfTypes_ = {
    'clothing': 0x1,
    'barber': 0x3,
    'tattoo': 0x9
  };
  async function OpenShopType(_0x26db0a, _0x25d843, _0x288975, _0x2d2806) {
    var _0x32d7da = PlayerPedId();
    var _0x245dcf = GetEntityModel(_0x32d7da);
    if (!_0x2d2806) {
      keyValuePairs = {};
      HandleCameraGhost(_0x26db0a);
    }
    FreezeEntityPosition(_0x26db0a, true);
    SetCurrentPedWeapon(PlayerPedId(), GetHashKey("WEAPON_UNARMED"), true);
    var _0x329294 = _0x329294 !== undefined ? _0x329294 : false;
    var _0x2f7486 = await getBarberMenuData(_0x32d7da, _0x245dcf, _0x329294);
    if (_0x329294) {
      if (!isInSpawnSelect) {
        return;
      }
      var _0x58d836 = {
        'show': true,
        'type': "spawn",
        'active': numberOfTypes_[_0x25d843],
        'data': _0x288975,
        'barberData': _0x2f7486,
        'isFree': _0x288975.isFree ?? false
      };
      SendNUIMessage({
        'action': "clothing:show",
        'data': _0x58d836
      });
      exports.focusmanager.SetUIFocus(true, true);
    } else {
      var _0x576b7d = {
        'show': true,
        'type': _0x25d843,
        'active': numberOfTypes_[_0x25d843],
        'data': _0x288975,
        'barberData': _0x2f7486,
        'isFree': _0x288975.isFree ?? false
      };
      SendNUIMessage({
        'action': "clothing:show",
        'data': {
          'show': true,
          'type': _0x25d843,
          'active': numberOfTypes_[_0x25d843],
          'data': _0x288975,
          'barberData': _0x2f7486,
          'isFree': _0x288975.isFree ?? false
        }
      });
      _0x576b7d.isDev = true;
      exports.focusmanager.SetUIFocus(true, true);
    }
    emit("np-binds:should-execute", false);
    StoreType = _0x25d843;
    isFirstTime = true;
    return _0x26db0a;
  }
  ;
  function HandleClosingMenuCleanup(_0x33ca36, _0x419537) {
    CleanUpCameras();
    FreezeEntityPosition(_0x33ca36, false);
    exports.focusmanager.SetUIFocus(false, false);
    emit("np-binds:should-execute", true);
    if (_0x419537) {
      SendNUIMessage({
        'action': "clothing:show",
        'data': {
          'show': false
        }
      });
    }
    SetClothingMenuEnabled(false);
  }
  RegisterNuiCallbackType("karma-clothing:ui:onChange");
  on("__cfx_nui:karma-clothing:ui:onChange", async (_0x3e5303, _0x5197f4) => {
    let _0x246c4e = await modifyCharacter(_0x3e5303);
    _0x5197f4(_0x246c4e);
  });
  async function modifyCharacter(_0x3072c3) {
    var _0x452a45 = {
      'currentDrawables': {
        '-1': 0x1
      },
      'currentProps': {
        '-1': 0x1
      },
      'currentHair': {
        '-1': 0x1
      }
    };
    var _0x44ed0b = PlayerPedId();
    var _0x5f4e97 = _0x3072c3.type;
    _0x3072c3 = _0x3072c3.data || _0x3072c3;
    switch (_0x5f4e97) {
      case "drawable":
        _0x452a45.currentDrawables[_0x3072c3.name] = [_0x3072c3.component, _0x3072c3.texture];
        if (_0x3072c3.name === "Hair") {
          var _0x942d57 = {
            'component': _0x3072c3.component
          };
          _0x452a45.currentHair = _0x942d57;
        }
        setPedComponentVariation(_0x44ed0b, Ys({}, _0x3072c3.name, [_0x3072c3.component, _0x3072c3.texture]));
        break;
      case "prop":
        _0x452a45.currentProps[_0x3072c3.name] = [_0x3072c3.component, _0x3072c3.texture];
        setPedPropsIndices(_0x44ed0b, Ys({}, _0x3072c3.name, [_0x3072c3.component, _0x3072c3.texture]));
        break;
      case "hairColors":
        _0x452a45.currentHair = SomeRandomFunc1({}, _0x3072c3);
        setPedHairColor(_0x44ed0b, _0x3072c3.color, _0x3072c3.highlightColor);
        break;
      case "headBlend":
        _0x452a45.currentHeadBlend = SomeRandomFunc1({}, _0x3072c3);
        isCustomModel = true;
        setPedHeadBlendData(_0x44ed0b, _0x3072c3);
        break;
      case "randomizeHeadblend":
        var _0x1eedf8 = {
          'ShapeFirst': Math.floor(Math.random() * 0x2d),
          'ShapeSecond': Math.floor(Math.random() * 0x2d),
          'ShapeThird': Math.floor(Math.random() * 0x2d),
          'SkinFirst': Math.floor(Math.random() * 0x2d),
          'SkinSecond': Math.floor(Math.random() * 0x2d),
          'SkinThird': Math.floor(Math.random() * 0x2d),
          'ShapeMix': Math.random() * 0x1,
          'SkinMix': Math.random() * 0x1,
          'ThirdMix': Math.random() * 0x1
        };
        _0x452a45.currentHeadBlend = SomeRandomFunc1({}, _0x1eedf8);
        isCustomModel = true;
        setPedHeadBlendData(_0x44ed0b, _0x1eedf8);
        break;
      case "face":
        _0x452a45.currentFace = SomeRandomFunc1({}, _0x3072c3);
        isCustomModel = true;
        setPedFaceFeature(_0x44ed0b, _0x3072c3);
        break;
      case "overlays":
        _0x452a45.currentOverlays = SomeRandomFunc1({}, _0x3072c3);
        isCustomModel = true;
        setPedHeadoverlay(_0x44ed0b, _0x3072c3);
        break;
      case "eyeColor":
        _0x452a45.currentEyeColor = _0x3072c3;
        isCustomModel = true;
        SetPedEyeColor(_0x44ed0b, _0x3072c3);
        break;
      case "ped":
        var _0x500d7d = await getMaleFemaleFM();
        var _0x2994ca = _0x3072c3.type === "custom" ? _0x3072c3.model : _0x500d7d[_0x3072c3.type][_0x3072c3.value];
        isCustomModel = true;
        var _0x44ed0b = await setModel(_0x2994ca, true, true);
        DoSomeFunctionStuff(_0x44ed0b);
        var _0x320397 = GetEntityModel(_0x44ed0b);
        var _0x48531a = await getClothingMenuData(_0x44ed0b, _0x320397, localVarkarma);
        _0x452a45.overwriteData = _0x48531a;
        break;
      case "tattoo":
        applydTattoosMybe(_0x44ed0b, _0x3072c3);
        _0x452a45.currentTattoos = SomeRandomFunc1({}, _0x3072c3);
        isCustomModel = true;
        break;
      case "fade":
        var _0x5a011a = _0x3072c3;
        if (Array.isArray(_0x5a011a)) {
          _0x5a011a = {
            'overlay': false,
            'collection': false
          };
        }
        adddecorationFromhashes(_0x44ed0b, _0x5a011a);
        _0x452a45.currentFade = _0x5a011a;
        isCustomModel = true;
        break;
      case "headModel":
        var _0x78a28b = _0x3072c3;
        hasCustomHeadModel = _0x78a28b;
        isCustomModel = true;
        var _0x3ded52 = getEntityClothingDrawables(_0x44ed0b);
        var _0xa203c6 = getProps(_0x44ed0b);
        var _0x44ed0b = await setModel(GetEntityModel(_0x44ed0b), false, true, true);
        DoSomeFunctionStuff(_0x44ed0b);
        setPedComponentVariation(_0x44ed0b, _0x3ded52);
        setPedPropsIndices(_0x44ed0b, _0xa203c6);
        break;
    }
    return {
      'data': _0x452a45,
      'cost': GetPricingMaybe_FM(_0x44ed0b)
    };
  }
  ;
  RegisterNuiCallbackType("karma-clothing:ui:close");
  on("__cfx_nui:karma-clothing:ui:close", (_0x40cc40, _0x47f1cd) => {
    CloseClothingMenu(_0x40cc40);
    _0x47f1cd('ok');
  });
  async function CloseClothingMenu(_0x183da4) {
    try {
      var _0x558b7f = PlayerPedId();
      var _0x255397;
      if (_0x183da4.action === "discard") {
        updatePlayerAppearance(_0x558b7f);
        if (isInSpawnSelect) {
          SetClothingMenuEnabled(false);
          emit("np-spawn:finishedClothing", "Old");
        }
      } else {
        if (_0x183da4.action === "cash" || _0x183da4.action === "bank") {
          var _0x2c8cab = _0x183da4.cost;
          var _0x29e59e = !!_0x2c8cab ? RPC.execute("karma-clothing:purchaseClothing", _0x183da4.action, _0x2c8cab) : true;
          if (_0x29e59e) {
            var _0x36c76f = Object.entries(keyValuePairs);
            for (var _0x33c64e = 0x0; _0x33c64e < _0x36c76f.length; _0x33c64e++) {
              var _0x2d8578 = _0x36c76f[_0x33c64e];
              var _0x4f4434 = _0x2d8578[0x0];
              var _0x1e8d5a = _0x2d8578[0x1];
              if (_0x1e8d5a.drawables && Object.keys(_0x1e8d5a.drawables).length > 0x0) {
                setPedComponentVariation(_0x558b7f, _0x1e8d5a.drawables);
              }
              if (_0x1e8d5a.props && Object.keys(_0x1e8d5a.props).length > 0x0) {
                setPedPropsIndices(_0x558b7f, _0x1e8d5a.props);
              }
              keyValuePairs[_0x1e8d5a.id] = null;
            }
            if (_0x183da4.type === "clothing" || _0x183da4.type === "spawn") {
              if (hasCustomHeadModel) {
                setHasCustomModelVariable(hasCustomHeadModel);
              }
              _0x255397 = await saveCurrentClothing(_0x558b7f);
            }
            if (_0x183da4.type === "barber" || _0x183da4.type === "spawn") {
              var _0x4397c5 = await SaveFadeFunction(_0x558b7f);
              _0x255397 = (await Promise.all([saveCurrentClothing(_0x558b7f), funcSavePedData(_0x558b7f)])).every(function (_0x572ae9) {
                return _0x572ae9;
              }) && _0x4397c5;
            }
            if (_0x183da4.type === "tattoo") {
              _0x255397 = await funcSaveTattoos(_0x558b7f);
            }
            if (!_0x255397) {
              updatePlayerAppearance(_0x558b7f);
            }
            if (_0x183da4.type === "spawn") {
              SetClothingMenuEnabled(false);
              emit("np-spawn:finishedClothing", "Finished");
            }
          } else {
            emit("DoLongHudText", "Not enough money!", 0x2);
            updatePlayerAppearance(_0x558b7f);
          }
        }
      }
      isFirstTime = false;
      HandleClosingMenuCleanup(PlayerPedId(), true);
      emit("karma-clothing:ui:closed", _0x183da4);
      return true;
    } catch (_0x455056) {
      console.log("Error #8791 Fatal Error Please Contact Karma Developments On Discord: https://discord.gg/66A7DtzA9V");
      return false;
    }
  }
  on("karma-clothing:setToggles", function (_0x5d3197) {
    var _0x4948d6 = PlayerPedId();
    for (var _0x26ee88 = 0x0; _0x26ee88 < _0x5d3197.length; _0x26ee88++) {
      var _0x51c52a = _0x5d3197[_0x26ee88];
      if (!_0x51c52a.active && keyValuePairs[_0x51c52a.id]) {
        var _0x5565a4 = Object.keys(keyValuePairs[_0x51c52a.id]?.["drawables"] || {});
        if (_0x5565a4.length > 0x0) {
          setPedComponentVariation(_0x4948d6, keyValuePairs[_0x51c52a.id].drawables);
        }
        var _0x1faae7 = Object.keys(keyValuePairs[_0x51c52a.id]?.["props"] || {});
        if (_0x1faae7.length > 0x0) {
          setPedPropsIndices(_0x4948d6, keyValuePairs[_0x51c52a.id].props);
        }
        delete keyValuePairs[_0x51c52a.id];
      } else {
        if (_0x51c52a.active && !keyValuePairs[_0x51c52a.id]) {
          var _0x3c8b6e = getTattooGender(GetEntityModel(_0x4948d6));
          var _0x242c83 = getEntityClothingDrawables(_0x4948d6);
          var _0x1b2963 = getProps(_0x4948d6);
          var _0xc0430 = _0x51c52a[_0x3c8b6e].drawables;
          var _0x36460d = _0x51c52a.props;
          keyValuePairs[_0x51c52a.id] = {};
          keyValuePairs[_0x51c52a.id].drawables = Object.entries(_0x242c83).reduce(function (_0x5c5d9a, [_0x50ff3b, _0x536f72]) {
            if (_0xc0430[_0x50ff3b] === undefined || _0xc0430[_0x50ff3b] === null) {
              return _0x5c5d9a;
            }
            return Object.assign({}, _0x5c5d9a, {
              [_0x50ff3b]: _0x536f72
            });
          }, {});
          keyValuePairs[_0x51c52a.id].props = Object.entries(_0x1b2963).reduce(function (_0x5400c3, [_0x42c5d6, _0x85b3a3]) {
            if (_0x36460d[_0x42c5d6] === undefined || _0x36460d[_0x42c5d6] === null) {
              return _0x5400c3;
            }
            return Object.assign({}, _0x5400c3, {
              [_0x42c5d6]: _0x85b3a3
            });
          }, {});
          setPedComponentVariation(_0x4948d6, _0xc0430);
          setPedPropsIndices(_0x4948d6, _0x36460d);
        }
      }
    }
  });
  RegisterNuiCallbackType("karma-clothing:setToggles");
  on("__cfx_nui:karma-clothing:setToggles", (_0x186227, _0x3e1777) => {
    emit("karma-clothing:setToggles", _0x186227.toggles);
    _0x3e1777('ok');
  });
  RegisterNuiCallbackType("karma-clothing:reset");
  on("__cfx_nui:karma-clothing:reset", (_0x422a59, _0xec6c11) => {
    updatePlayerAppearance(PlayerPedId());
    isCustomModel = false;
    _0xec6c11({
      'cost': 0x0
    });
  });
  RegisterNuiCallbackType("karma-clothing:dev:saveClothing");
  on("__cfx_nui:karma-clothing:dev:saveClothing", (_0x547a3d, _0x3305e7) => {
    var _0x11dfc4 = Xs(function (_0x3f6e1b) {
      var _0x47ca2d;
      var _0x2bb122;
      var _0x25280c;
      var _0x1d47b7;
      var _0x2c8ea0;
      return et(this, function (_0x87839d) {
        _0x47ca2d = PlayerPedId();
        _0x2bb122 = GetEntityModel(_0x47ca2d);
        _0x25280c = getEntityClothingDrawables(_0x47ca2d);
        _0x1d47b7 = getProps(_0x47ca2d);
        _0x2c8ea0 = {
          'component': GetPedDrawableVariation(_0x47ca2d, 0x2),
          'color': GetPedHairColor(_0x47ca2d),
          'highlightColor': GetPedHairHighlightColor(_0x47ca2d)
        };
        var _0x4fabd8 = {
          'type': "clothing",
          'model': _0x2bb122,
          'drawables': _0x25280c,
          'props': _0x1d47b7,
          'hair': _0x2c8ea0,
          '_hideKeys': ["model", "drawables", "props", "hair"]
        };
        emit("player:receiveItem", "customclothing", 0x1, false, _0x4fabd8);
        return [0x2, {
          'cost': 0x0
        }];
      });
    });
    return function (_0x11faa1) {
      return _0x11dfc4.apply(this, arguments);
    };
    _0x3305e7('ok');
  });
  RegisterNuiCallbackType("karma-clothing:dev:saveBarber");
  on("__cfx_nui:karma-clothing:dev:saveBarber", (_0x297231, _0x2cff0f) => {
    var _0x3ebe20 = Xs(function (_0x3f79f) {
      var _0x489c71;
      return et(this, function (_0x365357) {
        _0x489c71 = PlayerPedId();
        var _0x57b0e6 = getHeadBlend(_0x489c71);
        var _0x3a9425 = getFeatures(_0x489c71);
        var _0x33a820 = getOverlays(_0x489c71);
        var _0x12deae = GetPedEyeColor(_0x489c71);
        var _0xc21f66 = {
          'type': "barber",
          'headblend': _0x57b0e6,
          'features': _0x3a9425,
          'overlays': _0x33a820,
          'eyeColor': _0x12deae,
          '_hideKeys': ["headblend", "features", "overlays", "eyeColor"]
        };
        emit("player:receiveItem", "customclothing", 0x1, false, _0xc21f66);
        return [0x2, {
          'cost': 0x0
        }];
      });
    });
    return function (_0x179a55) {
      return _0x3ebe20.apply(this, arguments);
    };
    _0x2cff0f('ok');
  });
  async function updatePlayerAppearance(_0x17e3dc) {
    if (!mainDetailsDataForModel) {
      return console.log("No Details For This Player !");
    }
    if (!isCustomModel) {
      return await setModel(mainDetailsDataForModel.model, true, false, hasCustomHeadModel);
    }
    var _0x17e3dc = await setModel(mainDetailsDataForModel.model, false, false, hasCustomHeadModel);
    await delay(0x1f4);
    if (!checkIfTattooIsUnique(mainDetailsDataForModel.model)) {
      setPedFaceFeature(_0x17e3dc, mainDetailsDataForModel.face);
      if (!hasCustomHeadModel) {
        setPedHeadBlendData(_0x17e3dc, mainDetailsDataForModel.headblend);
      }
      setPedHeadoverlay(_0x17e3dc, mainDetailsDataForModel.overlays);
      SetPedEyeColor(_0x17e3dc, mainDetailsDataForModel.eyeColor);
      applyDecorations(_0x17e3dc, mainDetailsDataForModel.decorations);
    }
    setPedComponentVariation(_0x17e3dc, mainDetailsDataForModel.drawables);
    setPedPropsIndices(_0x17e3dc, mainDetailsDataForModel.props);
    setPedHairColor(_0x17e3dc, mainDetailsDataForModel.hair.color, mainDetailsDataForModel.hair.highlightColor);
  }
  ;
  async function fetchPlayerAppearanceData(_0x270433, _0x3773e9) {
    var _0x5b8c7a = await getClothingMenuData(_0x270433, _0x3773e9);
    var _0x3ad211 = await fetchGetTattoos.get(_0x3773e9);
    var _0x188daf = await fetchgetFade.get(_0x3773e9);
    if (_0x188daf) {
      mainDetailsDataForModel = {
        'model': _0x3773e9,
        'drawables': _0x5b8c7a.currentDrawables,
        'customHeadModel': _0x5b8c7a.customHeadModel ?? false,
        'props': _0x5b8c7a.currentProps,
        'hair': _0x5b8c7a.currentHair,
        'headblend': getHeadBlend(_0x270433),
        'face': getFeatures(_0x270433),
        'overlays': getOverlays(_0x270433),
        'eyeColor': GetPedEyeColor(_0x270433),
        'decorations': {
          'tattoos': _0x3ad211 ?? {},
          'fade': _0x188daf
        }
      };
    }
  }
  async function openClothing(_0x1cfbbd, _0x59a061, _0x4bd55c) {
    var _0x4bd55c = _0x4bd55c !== undefined ? _0x4bd55c : false;
    var _0x2493ab = PlayerPedId();
    var _0x39135c = GetEntityModel(_0x2493ab);
    try {
      var _0x477f09 = await getClothingMenuData(_0x2493ab, _0x39135c, _0x4bd55c);
      await fetchPlayerAppearanceData(_0x2493ab, _0x39135c);
      OpenShopType(_0x2493ab, "clothing", bt(SomeRandomFunc1({}, _0x477f09), {
        'isFree': _0x1cfbbd
      }));
    } catch (_0x3206b1) {
      console.log("Error #8791 Fatal Error Please Contact Karma Developments On Discord: https://discord.gg/66A7DtzA9V");
    }
  }
  async function openBarber(_0xaf556a = false, _0xfb7790) {
    try {
      const _0x3904d2 = PlayerPedId();
      const _0x5d9277 = GetEntityModel(_0x3904d2);
      const _0x109ed5 = await getClothingMenuData(_0x3904d2, _0x5d9277, _0xaf556a);
      await fetchPlayerAppearanceData(_0x3904d2, _0x5d9277);
      const _0x5c85ad = {
        'isFree': _0xaf556a
      };
      OpenShopType(_0x3904d2, "barber", bt(SomeRandomFunc1({}, _0x109ed5), _0x5c85ad), _0xfb7790);
    } catch (_0x39ad6f) {
      console.error("Error opening barber shop");
    }
  }
  var allClothesFunc = function () {
    var _0x4e58ec = Xs(function (_0x3c9b9a) {
      var _0x59cf42;
      var _0x27d800;
      var _0x2bceb1;
      var _0x152022;
      return et(this, function (_0x595192) {
        switch (_0x595192.label) {
          case 0x0:
            _0x59cf42 = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : false;
            _0x27d800 = PlayerPedId();
            _0x2bceb1 = GetEntityModel(_0x27d800);
            return [0x4, getClothingMenuData(_0x27d800, _0x2bceb1, _0x59cf42)];
          case 0x1:
            _0x152022 = _0x595192.sent();
            return [0x4, fetchPlayerAppearanceData(_0x27d800, _0x2bceb1)];
          case 0x2:
            _0x595192.sent();
            var _0x1cc852 = {
              'isFree': _0x3c9b9a
            };
            OpenShopType(_0x27d800, "spawn", bt(SomeRandomFunc1({}, _0x152022), _0x1cc852));
            return [0x2];
        }
      });
    });
    return function _0x28d656(_0x5bf7ea) {
      return _0x4e58ec.apply(this, arguments);
    };
  }();
  var FMZoneFunction = function () {
    var _0x2b4838 = Xs(function (_0x2accf6) {
      var _0x27c97d;
      var _0x5b5cbd;
      var _0x7e7dfa;
      var _0x54dc12;
      var _0x162f98;
      var _0x1d7520;
      var _0x3dc0ec;
      var _0x561103;
      var _0x407d7e;
      var _0x16aa45;
      return et(this, function (_0x34210b) {
        switch (_0x34210b.label) {
          case 0x0:
            _0x27c97d = arguments.length > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : false;
            _0x5b5cbd = PlayerPedId();
            _0x7e7dfa = GetEntityModel(_0x5b5cbd);
            _0x54dc12 = checkIfTattooIsUnique(_0x7e7dfa);
            if (_0x54dc12) {
              emit("DoLongHudText", "The tattoo shop is only available for customized characters.", 0x2);
              return [0x2];
            }
            if (_0x27c97d != localVarkarma) {
              Mr.reset();
              localVarkarma = _0x27c97d;
            }
            _0x162f98 = getTattooGender(_0x7e7dfa);
            _0x1d7520 = Object.values(Yn).filter(function (_0x294274) {
              return typeof _0x294274 === "string";
            });
            _0x3dc0ec = getTattooShopItemsByGender(_0x162f98);
            return [0x4, fetchGetTattoos.get(_0x7e7dfa)];
          case 0x1:
            _0x561103 = _0x34210b.sent();
            return [0x4, Mr.get(_0x27c97d)];
          case 0x2:
            _0x407d7e = _0x34210b.sent();
            return [0x4, fetchPlayerAppearanceData(_0x5b5cbd, _0x7e7dfa)];
          case 0x3:
            _0x34210b.sent();
            _0x16aa45 = GetEntityArchetypeName(_0x5b5cbd);
            var _0x553f56 = {
              'model': _0x7e7dfa,
              'modelName': _0x16aa45,
              'gender': _0x162f98,
              'zones': _0x1d7520,
              'tattoos': _0x3dc0ec,
              'currentTattoos': _0x561103,
              'whitelistedTattoos': _0x407d7e
            };
            var _0x326f25 = {
              'isFree': _0x2accf6
            };
            OpenShopType(_0x5b5cbd, "tattoo", bt(SomeRandomFunc1({}, _0x553f56), _0x326f25));
            return [0x2];
        }
      });
    });
    return function _0x491e2b(_0x5af152) {
      return _0x2b4838.apply(this, arguments);
    };
  }();
  async function getBarberMenuData(_0x2bf662, _0x403323, _0x29d1e2) {
    try {
      var _0x146438 = getTattooGender(_0x403323);
      var _0x424fb7 = BarberDataFM_();
      var _0x5dea00 = {
        'component': GetPedDrawableVariation(_0x2bf662, 0x2),
        'color': GetPedHairColor(_0x2bf662),
        'highlightColor': GetPedHairHighlightColor(_0x2bf662)
      };
      var _0x48f684 = getHairColorMybe();
      var _0x248252 = await getClothingMenuData(_0x2bf662, _0x403323);
      var _0x483fc5 = getHeadBlend(_0x2bf662);
      var _0x551122 = getFeatures(_0x2bf662);
      var _0x16c873 = getOverlays(_0x2bf662);
      var _0x12013d = ar();
      var _0x3df555 = ["Parents", "Green", "Very Light Blue", "Dark Blue", "Brown", "Dark Brown", "Light Brown", "Blue", "Light Blue", "Pink", "Yellow", "Purple", "Black", "Gradient Spiral", "Orange", "Nuclear", "White Spiral", "Red Spiral", "Shiny Half Blue/Half Red", "Ying Yang", "Red Outline", "Green Snake", "Red Snake", "Blue Snake", "Yellow Snake", "Bright Yellow", "Fully Black", "Red Small Pupil", "Devil Blue", "Devil Black", "White Small Pupil", "Glossed Over", "Emerald"];
      var _0x495b4b = GetPedEyeColor(_0x2bf662);
      var _0x642cb5 = fq(_0x146438);
      var _0x11a781 = await fetchgetFade.get(_0x403323);
      var _0x347085 = {
        'Hair': _0x248252.drawables.Hair
      };
      var _0x2ef5f7 = {
        'Hair': _0x248252.currentDrawables.Hair
      };
      var _0x5738d0 = {
        'model': _0x403323,
        'gender': _0x146438,
        'barberData': _0x424fb7,
        'currentHair': _0x5dea00,
        'hairColors': _0x48f684,
        'currentHeadBlend': _0x483fc5,
        'currentFace': _0x551122,
        'currentEyeColor': _0x495b4b,
        'availableEyeColors': _0x3df555,
        'currentOverlays': _0x16c873,
        'makeupColors': _0x12013d,
        'drawables': _0x347085,
        'currentDrawables': _0x2ef5f7,
        'nameData': karmaDATA.nameData,
        'availableFades': _0x642cb5,
        'currentFade': _0x11a781
      };
      return _0x5738d0;
    } catch (_0x4e83dc) {
      console.log("Error #1002 Fatal Error Please Contact Karma Developments On Discord: https://discord.gg/66A7DtzA9V");
      return null;
    }
  }
  async function getWhitelisted() {
    return Config.WhiteListClothingItems;
  }
  async function getClothingMenuData(_0x373ae5, _0x53a86d, _0x5ca6ce) {
    var _0x24f4e3 = fmDrawables(_0x373ae5);
    var _0x40388d = fmProps(_0x373ae5);
    var _0x35e361 = getEntityClothingDrawables(_0x373ae5);
    var _0xb28638 = getProps(_0x373ae5);
    var _0x5b82fc = {
      'component': GetPedDrawableVariation(_0x373ae5, 0x2),
      'color': GetPedHairColor(_0x373ae5),
      'highlightColor': GetPedHairHighlightColor(_0x373ae5)
    };
    var _0x1b046c = getHairColorMybe();
    var _0x2895af = checkIfTattooIsUnique(_0x53a86d);
    var _0x541c1d = _0x541c1d;
    var _0x33f6d0 = await getMaleFemaleFM();
    if (_0x5ca6ce != localVarkarma) {
      Kr.reset();
      localVarkarma = _0x5ca6ce;
    }
    var _0xdef55f = await Config.WhiteListClothingItems;
    var _0x5486c4 = getTattooGender(_0x53a86d);
    var _0x3045de = await updatePlayerAppearanceDetails.get(_0x5486c4);
    var _0x4d1d9f = GetEntityArchetypeName(_0x373ae5);
    var _0xf7f3bf = {
      'model': _0x53a86d,
      'modelName': _0x4d1d9f,
      'gender': _0x5486c4,
      'drawables': _0x24f4e3,
      'props': _0x40388d,
      'currentDrawables': _0x35e361,
      'currentProps': _0xb28638,
      'currentHair': _0x5b82fc,
      'hairColors': _0x1b046c,
      'isCustom': _0x2895af,
      'pedEntries': _0x33f6d0,
      'whitelistedClothing': _0xdef55f,
      'nameData': _0x3045de,
      'customHeadModel': _0x541c1d
    };
    return karmaDATA = _0xf7f3bf;
  }
  function GetPricingMaybe_FM(_0x2f7632) {
    var _0x59c067 = GetEntityModel(_0x2f7632);
    var _0x56f034 = getCurrentResourceConfig("pricing");
    try {
      if (mainDetailsDataForModel.model !== _0x59c067) {
        return _0x56f034.model;
      }
      var _0x116cd4 = 0x0;
      if (StoreType === 'tattoo') {
        var _0x47822c = GhostsTattoosMap.entries();
        var _0x309952 = true;
        var _0x2cd02b = false;
        var _0x547809 = undefined;
        try {
          var _0x83a3b1 = _0x47822c[Symbol.iterator]();
          for (var _0xc255ce; !(_0x309952 = (_0xc255ce = _0x83a3b1.next()).done); _0x309952 = true) {
            _0x2f7632();
          }
        } catch (_0x99dd83) {
          _0x2cd02b = true;
          _0x547809 = _0x99dd83;
        } finally {
          try {
            if (!_0x309952 && _0x83a3b1['return'] != null) {
              _0x83a3b1["return"]();
            }
          } finally {
            if (_0x2cd02b) {
              throw _0x547809;
            }
          }
        }
        return _0x116cd4;
      }
      var _0x4f6ad0 = {};
      var _0x1d2502 = {};
      var _0x51d235 = true;
      var _0x5db12e = false;
      var _0x315304 = undefined;
      try {
        var _0x1362d7 = Object.entries(keyValuePairs)[Symbol.iterator]();
        for (var _0x14adda; !(_0x51d235 = (_0x14adda = _0x1362d7.next()).done); _0x51d235 = true) {
          var _0x51797d = Vs(_0x14adda.value) || Zs(_0x14adda.value, 0x2) || dt(_0x14adda.value, 0x2) || $s();
          var _0xbbf72f = _0x51797d[0x0];
          var _0x5e7ae3 = _0x51797d[0x1];
          if (_0x5e7ae3.drawables && Object.keys(_0x5e7ae3.drawables).length > 0x0) {
            _0x4f6ad0 = _0x5e7ae3.drawables;
          }
          if (_0x5e7ae3.props && Object.keys(_0x5e7ae3.props).length > 0x0) {
            _0x1d2502 = _0x5e7ae3.props;
          }
        }
      } catch (_0x1d1242) {
        _0x5db12e = true;
        _0x315304 = _0x1d1242;
      } finally {
        try {
          if (!_0x51d235 && _0x1362d7["return"] != null) {
            _0x1362d7["return"]();
          }
        } finally {
          if (_0x5db12e) {
            throw _0x315304;
          }
        }
      }
      var _0x47f5ac = mainDetailsDataForModel.drawables;
      var _0x3df709 = getEntityClothingDrawables(_0x2f7632);
      if (StoreType === "barber") {
        _0x3df709 = {
          'Hair': _0x3df709.Hair
        };
      }
      var _0x3b405a = true;
      var _0x53aaf8 = false;
      var _0x1b43a0 = undefined;
      try {
        var _0x2f601c = Object.entries(_0x3df709)[Symbol.iterator]();
        for (var _0x1c7212; !(_0x3b405a = (_0x1c7212 = _0x2f601c.next()).done); _0x3b405a = true) {
          var _0x4ed091 = Vs(_0x1c7212.value) || Zs(_0x1c7212.value, 0x2) || dt(_0x1c7212.value, 0x2) || $s();
          var _0x374597 = _0x4ed091[0x0];
          var _0x17ecdb = _0x4ed091[0x1];
          if ((_0x47f5ac[_0x374597][0x0] !== _0x17ecdb[0x0] || _0x47f5ac[_0x374597][0x1] !== _0x17ecdb[0x1]) && !_0x4f6ad0[_0x374597]) {
            _0x116cd4 += _0x56f034.drawables[_0x374597];
          }
        }
      } catch (_0x404167) {
        _0x53aaf8 = true;
        _0x1b43a0 = _0x404167;
      } finally {
        try {
          if (!_0x3b405a && _0x2f601c["return"] != null) {
            _0x2f601c["return"]();
          }
        } finally {
          if (_0x53aaf8) {
            throw _0x1b43a0;
          }
        }
      }
      if (StoreType === "clothing") {
        var _0x82b163 = mainDetailsDataForModel.props;
        var _0x2f1fdd = getProps(_0x2f7632);
        var _0x19bca7 = true;
        var _0x1cc520 = false;
        var _0x509b40 = undefined;
        try {
          var _0x4bc10d = Object.entries(_0x2f1fdd)[Symbol.iterator]();
          for (var _0x29f82b; !(_0x19bca7 = (_0x29f82b = _0x4bc10d.next()).done); _0x19bca7 = true) {
            var _0x5ed6cc = Vs(_0x29f82b.value) || Zs(_0x29f82b.value, 0x2) || dt(_0x29f82b.value, 0x2) || $s();
            var _0x3e28c2 = _0x5ed6cc[0x0];
            var _0x49291c = _0x5ed6cc[0x1];
            if ((_0x82b163[_0x3e28c2][0x0] !== _0x49291c[0x0] || _0x82b163[_0x3e28c2][0x1] !== _0x49291c[0x1]) && !_0x1d2502[_0x3e28c2]) {
              _0x116cd4 += _0x56f034.props[_0x3e28c2];
            }
          }
        } catch (_0x52d534) {
          _0x1cc520 = true;
          _0x509b40 = _0x52d534;
        } finally {
          try {
            if (!_0x19bca7 && _0x4bc10d["return"] != null) {
              _0x4bc10d["return"]();
            }
          } finally {
            if (_0x1cc520) {
              throw _0x509b40;
            }
          }
        }
      }
      var _0x234eaf = mainDetailsDataForModel.hair;
      var _0x385117 = {
        'component': GetPedDrawableVariation(_0x2f7632, 0x2),
        'color': GetPedHairColor(_0x2f7632),
        'highlightColor': GetPedHairHighlightColor(_0x2f7632)
      };
      if (_0x234eaf.color !== _0x385117.color || _0x234eaf.highlightColor !== _0x385117.highlightColor) {
        _0x116cd4 += _0x56f034.hairColor;
      }
      if (!checkIfTattooIsUnique(_0x59c067) && StoreType == "barber") {
        var _0x2cc2f0 = mainDetailsDataForModel.headblend;
        var _0x5c502f = getHeadBlend(_0x2f7632);
        var _0x5ea13b = true;
        var _0x31e2a3 = false;
        var _0x2f975c = undefined;
        try {
          var _0x43e6a8 = Object.entries(_0x5c502f)[Symbol.iterator]();
          for (var _0x208cff; !(_0x5ea13b = (_0x208cff = _0x43e6a8.next()).done); _0x5ea13b = true) {
            var _0x131ce7 = Vs(_0x208cff.value) || Zs(_0x208cff.value, 0x2) || dt(_0x208cff.value, 0x2) || $s();
            var _0x12b027 = _0x131ce7[0x0];
            var _0x4ce449 = _0x131ce7[0x1];
            if (_0x2cc2f0[_0x12b027] !== _0x4ce449) {
              _0x116cd4 += _0x56f034.headblend[_0x12b027];
            }
          }
        } catch (_0x5c07b8) {
          _0x31e2a3 = true;
          _0x2f975c = _0x5c07b8;
        } finally {
          try {
            if (!_0x5ea13b && _0x43e6a8["return"] != null) {
              _0x43e6a8["return"]();
            }
          } finally {
            if (_0x31e2a3) {
              throw _0x2f975c;
            }
          }
        }
        var _0x3b5432 = mainDetailsDataForModel.face;
        var _0x378047 = getFeatures(_0x2f7632);
        var _0x2190d4 = true;
        var _0x17fef1 = false;
        var _0xf43e64 = undefined;
        try {
          var _0x22fffb = Object.entries(_0x378047)[Symbol.iterator]();
          for (var _0x76e275; !(_0x2190d4 = (_0x76e275 = _0x22fffb.next()).done); _0x2190d4 = true) {
            var _0x1db26c = Vs(_0x76e275.value) || Zs(_0x76e275.value, 0x2) || dt(_0x76e275.value, 0x2) || $s();
            var _0x36b2b2 = _0x1db26c[0x0];
            var _0x3586a7 = _0x1db26c[0x1];
            if (_0x3b5432[_0x36b2b2] !== _0x3586a7) {
              _0x116cd4 += _0x56f034.features[_0x36b2b2];
            }
          }
        } catch (_0x454219) {
          _0x17fef1 = true;
          _0xf43e64 = _0x454219;
        } finally {
          try {
            if (!_0x2190d4 && _0x22fffb["return"] != null) {
              _0x22fffb["return"]();
            }
          } finally {
            if (_0x17fef1) {
              throw _0xf43e64;
            }
          }
        }
        var _0x1f1784 = mainDetailsDataForModel.overlays;
        var _0x4602be = getOverlays(_0x2f7632);
        var _0x28909b = true;
        var _0x3bf93e = false;
        var _0xbc78d8 = undefined;
        try {
          var _0xbdfe5e = Object.entries(_0x4602be)[Symbol.iterator]();
          for (var _0x57e1ad; !(_0x28909b = (_0x57e1ad = _0xbdfe5e.next()).done); _0x28909b = true) {
            var _0xaa8fba = Vs(_0x57e1ad.value) || Zs(_0x57e1ad.value, 0x2) || dt(_0x57e1ad.value, 0x2) || $s();
            var _0x19d95c = _0xaa8fba[0x0];
            var _0x5860f4 = _0xaa8fba[0x1];
            if (_0x1f1784[_0x19d95c].value !== _0x5860f4.value) {
              _0x116cd4 += _0x56f034.overlays[_0x19d95c];
            }
          }
        } catch (_0x1c80a4) {
          _0x3bf93e = true;
          _0xbc78d8 = _0x1c80a4;
        } finally {
          try {
            if (!_0x28909b && _0xbdfe5e["return"] != null) {
              _0xbdfe5e["return"]();
            }
          } finally {
            if (_0x3bf93e) {
              throw _0xbc78d8;
            }
          }
        }
        var _0x415157 = mainDetailsDataForModel.eyeColor;
        var _0x248c00 = GetPedEyeColor(_0x2f7632);
        if (_0x415157 !== _0x248c00) {
          _0x116cd4 += _0x56f034.eyeColor;
        }
        var _0x1ab722 = mainDetailsDataForModel.decorations.fade;
        var _0x98072 = fadeCollectionData;
        if (_0x98072 && _0x1ab722.collection !== _0x98072.collection && _0x1ab722.overlay !== _0x98072.overlay) {
          _0x116cd4 += _0x56f034.fade;
        }
      }
      return _0x116cd4;
    } catch (_0x2c31a6) {
      console.log(_0x2c31a6);
    }
    return 0x0;
  }
  var FetchRanksRPC = DevUtilz.cache(Xs(function () {
    var _0x383946 = RPC.execute("np-admin:isRanks", ["event", "dev", "junior", "special"]);
    true;
    return _0x383946;
  }), {
    'timeToLive': 0x927c0
  });
  exports("GetClothingMenuData", function (_0x16db78, _0x396977) {
    return getClothingMenuData(_0x16db78, _0x396977);
  });
  exports("GetBarberMenuData", function (_0x14fb71, _0x105d41) {
    return getBarberMenuData(_0x14fb71, _0x105d41);
  });
  var Gt = {
    'x': -1153.52,
    'y': -1426.09,
    'z': 3.85
  };
  var It = {
    'id': "bbmc_tattoo",
    'vectors': Gt,
    'length': 2.8,
    'width': 2.8,
    'options': {
      'heading': 0xd4,
      'minZ': 3.85,
      'maxZ': 6.85
    }
  };
  var AleckZoneData = [{
    'id': "vinewood_boulevard_barbershop",
    'vectors': {
      'x': 323.34,
      'y': 180.65,
      'z': 103.59
    },
    'length': 5.2,
    'width': 6.4,
    'options': {
      'heading': 0x151,
      'minZ': 102.24,
      'maxZ': 106.64
    }
  }, It, {
    'id': "prison_tattoo_parlor",
    'vectors': {
      'x': 1771.34,
      'y': 2583.39,
      'z': 45.73
    },
    'length': 0x2,
    'width': 2.2,
    'options': {
      'heading': 0x0,
      'minZ': 44.73,
      'maxZ': 46.93
    },
    'data': {
      'isFree': true
    }
  }];
  var Rt = {
    'x': -277.51,
    'y': 6227.35,
    'z': 31.7
  };
  var Tt = {
    'id': "paleto_barbershop",
    'vectors': Rt,
    'length': 5.6,
    'width': 0x5,
    'options': {
      'heading': 0x2d,
      'minZ': 30.7,
      'maxZ': 33.7
    }
  };
  var Ut = {
    'x': 1213.32,
    'y': -473.15,
    'z': 66.21
  };
  var Wt = {
    'id': "mirror_park_barbershop",
    'vectors': Ut,
    'length': 6.8,
    'width': 5.4,
    'options': {
      'heading': 0x4b,
      'minZ': 65.01,
      'maxZ': 68.01
    }
  };
  var Xt = {
    'x': -33.67,
    'y': -153.46,
    'z': 57.08
  };
  var Zt = {
    'id': "hawick_ave_barbershop",
    'vectors': Xt,
    'length': 5.2,
    'width': 7.2,
    'options': {
      'heading': 0x46,
      'minZ': 55.88,
      'maxZ': 58.88
    }
  };
  var $t = {
    'x': 137.73,
    'y': -1707.2,
    'z': 29.29
  };
  var au = {
    'id': "carson_avenue_barbershop",
    'vectors': $t,
    'length': 5.6,
    'width': 0x7,
    'options': {
      'heading': 0x32,
      'minZ': 28.09,
      'maxZ': 31.29
    }
  };
  var bu = {
    'x': -813.86,
    'y': -184.15,
    'z': 37.57
  };
  var du = {
    'id': "bob_mulet_barbershop",
    'vectors': bu,
    'length': 7.4,
    'width': 8.6,
    'options': {
      'heading': 0x1e,
      'minZ': 36.57,
      'maxZ': 39.37
    }
  };
  var eu = {
    'x': -1281.76,
    'y': -1117.41,
    'z': 6.99
  };
  var gu = {
    'id': "vespucci_barbershop",
    'vectors': eu,
    'length': 0x6,
    'width': 0x7,
    'options': {
      'heading': 0x0,
      'minZ': 5.99,
      'maxZ': 8.99
    }
  };
  var lu = [{
    'id': "sandy_shores_barbershop",
    'vectors': {
      'x': 1931.27,
      'y': 3730.69,
      'z': 32.84
    },
    'length': 4.8,
    'width': 4.6,
    'options': {
      'heading': 0x1e,
      'minZ': 31.84,
      'maxZ': 34.64
    }
  }, Tt, Wt, Zt, au, du, gu, {
    'id': "prison_barbershop",
    'vectors': {
      'x': 1769.06,
      'y': 2588.21,
      'z': 45.73
    },
    'length': 2.2,
    'width': 2.8,
    'options': {
      'heading': 0x0,
      'minZ': 44.73,
      'maxZ': 47.13
    },
    'data': {
      'isFree': true
    }
  }];
  var su = {
    'x': -1177.32,
    'y': -1780.57,
    'z': 3.91
  };
  var uu = {
    'id': 'vespucci_beach_clothing',
    'vectors': su,
    'length': 2.4,
    'width': 2.6,
    'options': {
      'heading': 0x22,
      'minZ': 2.09,
      'maxZ': 5.69
    }
  };
  var vu = {
    'x': 198.53,
    'y': -1647.11,
    'z': 29.8
  };
  var xu = {
    'id': "davis_firedept_clothing",
    'vectors': vu,
    'length': 3.2,
    'width': 0x2,
    'options': {
      'heading': 0x32,
      'minZ': 28.8,
      'maxZ': 31.4
    }
  };
  var yu = {
    'x': -710.38,
    'y': -153.34,
    'z': 37.42
  };
  var Au = {
    'id': "portala_drive_clothing",
    'vectors': yu,
    'length': 3.6,
    'width': 0x2,
    'options': {
      'heading': 0x1e,
      'minZ': 36.37,
      'maxZ': 38.77
    }
  };
  var Bu = {
    'x': -1191.46,
    'y': -770.67,
    'z': 17.32
  };
  var Du = {
    'id': "prosperity_street_promenade_clothing",
    'vectors': Bu,
    'length': 6.8,
    'width': 0x6,
    'options': {
      'heading': 0x23,
      'minZ': 16.32,
      'maxZ': 18.52
    }
  };
  var Eu = {
    'x': 423.71,
    'y': -807.34,
    'z': 29.49
  };
  var Gu = {
    'id': "sinner_street_clothing",
    'vectors': Eu,
    'length': 4.6,
    'width': 4.4,
    'options': {
      'heading': 0x0,
      'minZ': 28.49,
      'maxZ': 31.09
    }
  };
  var Hu = {
    'x': -162.12,
    'y': -303.49,
    'z': 39.73
  };
  var Ju = {
    'id': "las_lagunas_boulevard_clothing",
    'vectors': Hu,
    'length': 4.8,
    'width': 3.4,
    'options': {
      'heading': 0x154,
      'minZ': 38.73,
      'maxZ': 41.13
    }
  };
  var Ku = {
    'x': -820.24,
    'y': -1074.56,
    'z': 11.33
  };
  var Mu = {
    'id': "south_rockford_drive_clothing",
    'vectors': Ku,
    'length': 4.6,
    'width': 5.2,
    'options': {
      'heading': 0x1e,
      'minZ': 10.33,
      'maxZ': 12.73
    }
  };
  var Nu = {
    'x': -1451.41,
    'y': -236.7,
    'z': 49.8
  };
  var Pu = {
    'id': "cougar_ave_clothing",
    'vectors': Nu,
    'length': 5.6,
    'width': 3.4,
    'options': {
      'heading': 0x13f,
      'minZ': 48.09,
      'maxZ': 51.69
    }
  };
  var Zu = {
    'x': -3173.26,
    'y': 1045.35,
    'z': 20.86
  };
  var _u = {
    'id': "chumash_clothing",
    'vectors': Zu,
    'length': 5.2,
    'width': 0x7,
    'options': {
      'heading': 0x14f,
      'minZ': 19.66,
      'maxZ': 22.26
    }
  };
  var av = {
    'x': -1099.3,
    'y': 2709.9,
    'z': 19.12
  };
  var cv = {
    'id': "route68_clothing",
    'vectors': av,
    'length': 4.6,
    'width': 4.6,
    'options': {
      'heading': 0x2b,
      'minZ': 17.92,
      'maxZ': 21.12
    }
  };
  var dv = {
    'x': 122.81,
    'y': -222.09,
    'z': 54.56
  };
  var fv = {
    'id': "hawick_awe_clothing",
    'vectors': dv,
    'length': 5.4,
    'width': 0x8,
    'options': {
      'heading': 0x154,
      'minZ': 53.36,
      'maxZ': 56.36
    }
  };
  var kv = {
    'x': 107.71,
    'y': -1305.32,
    'z': 28.77
  };
  var mv = {
    'id': "vanilla_unicorn_clothing",
    'vectors': kv,
    'length': 0x3,
    'width': 4.2,
    'options': {
      'heading': 0x23,
      'minZ': 27.77,
      'maxZ': 31.17
    }
  };
  var nv = {
    'x': 77.83099365234375,
    'y': -1392.9818725585938,
    'z': 30.026136779785155
  };
  var pv = {
    'id': "southside_clothing",
    'vectors': nv,
    'length': 7.8,
    'width': 6.7,
    'options': {
      'heading': 0xb4,
      'minZ': 28.32,
      'maxZ': 31.82
    }
  };
  var qv = [{
    'id': "casino_clothing",
    'vectors': {
      'x': 965.5,
      'y': 26.63,
      'z': 71.47
    },
    'length': 1.8,
    'width': 2.4,
    'options': {
      'heading': 0x13b,
      'minZ': 71.4,
      'maxZ': 73.4
    }
  }, {
    'id': "grapeseed_clothing",
    'vectors': {
      'x': 1692.16,
      'y': 4822.06,
      'z': 42.06
    },
    'length': 5.2,
    'width': 4.4,
    'options': {
      'heading': 0x8,
      'minZ': 41.09,
      'maxZ': 43.69
    }
  }, uu, xu, Au, Du, Gu, Ju, Mu, Pu, {
    'id': "paleto_bay_clothing",
    'vectors': {
      'x': 2.7,
      'y': 6512.82,
      'z': 31.88
    },
    'length': 0x5,
    'width': 4.2,
    'options': {
      'heading': 0x13b,
      'minZ': 30.09,
      'maxZ': 32.69
    }
  }, {
    'id': 'harmony_dollarpill_clothing',
    'vectors': {
      'x': 617.2,
      'y': 2762.5,
      'z': 42.09
    },
    'length': 5.6,
    'width': 8.4,
    'options': {
      'heading': 0x3,
      'minZ': 41.09,
      'maxZ': 43.69
    }
  }, {
    'id': "harmony_bank_clothing",
    'vectors': {
      'x': 1197.9,
      'y': 2708.73,
      'z': 38.22
    },
    'length': 0x4,
    'width': 0x5,
    'options': {
      'heading': 0x0,
      'minZ': 37.22,
      'maxZ': 39.82
    }
  }, _u, cv, fv, {
    'id': "prison_clothing",
    'vectors': {
      'x': 1738.37,
      'y': 2496.74,
      'z': 45.82
    },
    'length': 0x4,
    'width': 0x4,
    'options': {
      'heading': 0x1e,
      'minZ': 44.82,
      'maxZ': 47.82
    },
    'data': {
      'isFree': true
    }
  }, mv, pv];
  var TattoShopZone = {
    'zoneName': "tattoo_shop",
    'zoneFunction': FMZoneFunction,
    'zoneData': AleckZoneData
  };
  var clothingShopZone = {
    'zoneName': "clothing_shop",
    'zoneFunction': openClothing,
    'zoneData': qv
  };
  var BarberShopZone = {
    'zoneName': "barber_shop",
    'zoneFunction': openBarber,
    'zoneData': lu
  };
  var pZones_ = [TattoShopZone, clothingShopZone, BarberShopZone];
  ;
  function vv(_0x18c003, _0x25b58e, _0x5ce270, _0x136ffb, _0x5b92b8, _0xe0be56, _0x28d782) {
    try {
      var _0x5919d6 = _0x18c003[_0xe0be56](_0x28d782);
      var _0x705291 = _0x5919d6.value;
    } catch (_0x11f71c) {
      _0x5ce270(_0x11f71c);
      return;
    }
    if (_0x5919d6.done) {
      _0x25b58e(_0x705291);
    } else {
      Promise.resolve(_0x705291).then(_0x136ffb, _0x5b92b8);
    }
  }
  function wv(_0x4b09b4) {
    return function () {
      var _0x7243fe = this;
      return new Promise(function (_0x47615b, _0x52cb41) {
        var _0x525b8d = _0x4b09b4.apply(_0x7243fe, arguments);
        function _0x475812(_0x4c47d4) {
          vv(_0x525b8d, _0x47615b, _0x52cb41, _0x475812, _0x4d9fe7, "next", _0x4c47d4);
        }
        function _0x4d9fe7(_0x1bcb0a) {
          vv(_0x525b8d, _0x47615b, _0x52cb41, _0x475812, _0x4d9fe7, "throw", _0x1bcb0a);
        }
        _0x475812(undefined);
      });
    };
  }
  function xv(_0x5df40f, _0x22c745) {
    var _0xce5b56;
    var _0x41d27;
    var _0x591e57;
    var _0x228bf0;
    var _0x3fa3cb = {
      'label': 0x0,
      'sent': function () {
        if (_0x591e57[0x0] & 0x1) {
          throw _0x591e57[0x1];
        }
        return _0x591e57[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x228bf0 = {
      'next': _0x44aae6(0x0),
      'throw': _0x44aae6(0x1),
      'return': _0x44aae6(0x2)
    };
    if (typeof Symbol === "function") {
      _0x228bf0[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x228bf0;
    function _0x44aae6(_0x1c09da) {
      return function (_0x5688ae) {
        return _0x42e3ef([_0x1c09da, _0x5688ae]);
      };
    }
    function _0x42e3ef(_0x1eda4a) {
      if (_0xce5b56) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x3fa3cb) {
        try {
          _0xce5b56 = 0x1;
          if (_0x41d27 && (_0x591e57 = _0x1eda4a[0x0] & 0x2 ? _0x41d27['return'] : _0x1eda4a[0x0] ? _0x41d27["throw"] || ((_0x591e57 = _0x41d27["return"]) && _0x591e57.call(_0x41d27), 0x0) : _0x41d27.next) && !(_0x591e57 = _0x591e57.call(_0x41d27, _0x1eda4a[0x1])).done) {
            return _0x591e57;
          }
          _0x41d27 = 0x0;
          if (_0x591e57) {
            _0x1eda4a = [_0x1eda4a[0x0] & 0x2, _0x591e57.value];
          }
          switch (_0x1eda4a[0x0]) {
            case 0x0:
            case 0x1:
              _0x591e57 = _0x1eda4a;
              break;
            case 0x4:
              _0x3fa3cb.label++;
              var _0x5c2f74 = {
                'value': _0x1eda4a[0x1],
                'done': false
              };
              return _0x5c2f74;
            case 0x5:
              _0x3fa3cb.label++;
              _0x41d27 = _0x1eda4a[0x1];
              _0x1eda4a = [0x0];
              continue;
            case 0x7:
              _0x1eda4a = _0x3fa3cb.ops.pop();
              _0x3fa3cb.trys.pop();
              continue;
            default:
              _0x591e57 = _0x3fa3cb.trys;
              if (!(_0x591e57 = _0x591e57.length > 0x0 && _0x591e57[_0x591e57.length - 0x1]) && (_0x1eda4a[0x0] === 0x6 || _0x1eda4a[0x0] === 0x2)) {
                _0x3fa3cb = 0x0;
                continue;
              }
              if (_0x1eda4a[0x0] === 0x3 && (!_0x591e57 || _0x1eda4a[0x1] > _0x591e57[0x0] && _0x1eda4a[0x1] < _0x591e57[0x3])) {
                _0x3fa3cb.label = _0x1eda4a[0x1];
                break;
              }
              if (_0x1eda4a[0x0] === 0x6 && _0x3fa3cb.label < _0x591e57[0x1]) {
                _0x3fa3cb.label = _0x591e57[0x1];
                _0x591e57 = _0x1eda4a;
                break;
              }
              if (_0x591e57 && _0x3fa3cb.label < _0x591e57[0x2]) {
                _0x3fa3cb.label = _0x591e57[0x2];
                _0x3fa3cb.ops.push(_0x1eda4a);
                break;
              }
              if (_0x591e57[0x2]) {
                _0x3fa3cb.ops.pop();
              }
              _0x3fa3cb.trys.pop();
              continue;
          }
          _0x1eda4a = _0x22c745.call(_0x5df40f, _0x3fa3cb);
        } catch (_0x5675fc) {
          _0x1eda4a = [0x6, _0x5675fc];
          _0x41d27 = 0x0;
        } finally {
          _0xce5b56 = _0x591e57 = 0x0;
        }
      }
      if (_0x1eda4a[0x0] & 0x5) {
        throw _0x1eda4a[0x1];
      }
      var _0x157efc = {
        'value': _0x1eda4a[0x0] ? _0x1eda4a[0x1] : undefined,
        'done': true
      };
      return _0x157efc;
    }
  }
  var FMpZone_ = '';
  var StartZonesFuncListener = function () {
    var _0x18aab7 = wv(function () {
      return xv(this, function (_0x56bccc) {
        pZones_.forEach(function (_0x154ee5) {
          if (_0x154ee5.zoneData) {
            _0x154ee5.zoneData.forEach(function (_0x5e0969) {
              Zones.addBoxZone(_0x5e0969.id, _0x154ee5.zoneName, _0x5e0969.vectors, _0x5e0969.length, _0x5e0969.width, _0x5e0969.options, _0x5e0969.data);
            });
            ZoneEnterFunc(_0x154ee5.zoneName, _0x154ee5.zoneFunction);
          }
        });
        return [0x2];
      });
    });
    return function _0x5a08a5() {
      return _0x18aab7.apply(this, arguments);
    };
  }();
  on("karma-clothing:ui:closed", function (_0x1e3808) {
    if (Zones.isActive(FMpZone_)) {
      Config.ZoneDisplayText(" Get stylish");
    }
  });
  function ZoneEnterFunc(_0x5bf792, _0x4860ee) {
    function _0x2fe04e(_0x30a650, _0x35c958 = false) {
      if (_0x30a650 !== 0x26) {
        return;
      }
      _0x4860ee(_0x35c958);
      Config.ZoneHideText();
    }
    Zones.onEnter(_0x5bf792, function (_0x1c16c1) {
      if (currentState.hasKey("karma-clothing:showMenu", 0x26)) {
        return;
      }
      Config.ZoneDisplayText(" Get stylish");
      currentState.addKey("karma-clothing:showMenu", 0x26);
      currentState.on("IsControlJustReleased", function () {
        _0x2fe04e(0x26, _0x1c16c1.isFree);
      });
      FMpZone_ = _0x5bf792;
    });
    Zones.onExit(_0x5bf792, function () {
      Config.ZoneHideText();
      if (!currentState.hasKey("karma-clothing:showMenu", 0x26)) {
        return;
      }
      currentState.removeKey('karma-clothing:showMenu', 0x26);
      currentState.removeListener("IsControlJustReleased", _0x2fe04e);
    });
  }
  ;
  function Ev(_0x5b9598, _0x32a307) {
    if (_0x32a307 == null || _0x32a307 > _0x5b9598.length) {
      _0x32a307 = _0x5b9598.length;
    }
    var _0x216dab = 0x0;
    for (var _0x26c4cc = new Array(_0x32a307); _0x216dab < _0x32a307; _0x216dab++) {
      _0x26c4cc[_0x216dab] = _0x5b9598[_0x216dab];
    }
    return _0x26c4cc;
  }
  function Fv(_0x311ee9) {
    if (Array.isArray(_0x311ee9)) {
      return _0x311ee9;
    }
  }
  function Gv(_0x2ab0d3) {
    if (_0x2ab0d3 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return _0x2ab0d3;
  }
  function Hv(_0x1037b1, _0x49a049) {
    if (!(_0x1037b1 instanceof _0x49a049)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function Iv(_0x17c853, _0x2fe6ea) {
    for (var _0x502e2a = 0x0; _0x502e2a < _0x2fe6ea.length; _0x502e2a++) {
      var _0x409e1e = _0x2fe6ea[_0x502e2a];
      _0x409e1e.enumerable = _0x409e1e.enumerable || false;
      _0x409e1e.configurable = true;
      if ("value" in _0x409e1e) {
        _0x409e1e.writable = true;
      }
      Object.defineProperty(_0x17c853, _0x409e1e.key, _0x409e1e);
    }
  }
  function Jv(_0x3f9fc8, _0x47ea78, _0x5182a2) {
    if (_0x47ea78) {
      Iv(_0x3f9fc8.prototype, _0x47ea78);
    }
    if (_0x5182a2) {
      Iv(_0x3f9fc8, _0x5182a2);
    }
    return _0x3f9fc8;
  }
  function Kv(_0x15d3d1, _0x465985, _0x355ae1) {
    if (_0x465985 in _0x15d3d1) {
      var _0x27c526 = {
        'value': _0x355ae1,
        'enumerable': true,
        'configurable': true,
        'writable': true
      };
      Object.defineProperty(_0x15d3d1, _0x465985, _0x27c526);
    } else {
      _0x15d3d1[_0x465985] = _0x355ae1;
    }
    return _0x15d3d1;
  }
  function Lv(_0x245a82) {
    Lv = Object.setPrototypeOf ? Object.getPrototypeOf : function _0x4b0f0e(_0x5b2717) {
      return _0x5b2717.__proto__ || Object.getPrototypeOf(_0x5b2717);
    };
    return Lv(_0x245a82);
  }
  function Mv(_0x2a1bae, _0x17540c) {
    if (typeof _0x17540c !== "function" && _0x17540c !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    _0x2a1bae.prototype = Object.create(_0x17540c && _0x17540c.prototype, {
      'constructor': {
        'value': _0x2a1bae,
        'writable': true,
        'configurable': true
      }
    });
    if (_0x17540c) {
      Qv(_0x2a1bae, _0x17540c);
    }
  }
  function Nv(_0x58266e, _0x226438) {
    var _0xf8eac2 = _0x58266e == null ? null : typeof Symbol !== "undefined" && _0x58266e[Symbol.iterator] || _0x58266e["@@iterator"];
    if (_0xf8eac2 == null) {
      return;
    }
    var _0x789555 = [];
    var _0x1de08b = true;
    var _0x104972 = false;
    var _0x35cee5;
    var _0x1122ca;
    try {
      for (_0xf8eac2 = _0xf8eac2.call(_0x58266e); !(_0x1de08b = (_0x35cee5 = _0xf8eac2.next()).done); _0x1de08b = true) {
        _0x789555.push(_0x35cee5.value);
        if (_0x226438 && _0x789555.length === _0x226438) {
          break;
        }
      }
    } catch (_0x4f9d4f) {
      _0x104972 = true;
      _0x1122ca = _0x4f9d4f;
    } finally {
      try {
        if (!_0x1de08b && _0xf8eac2["return"] != null) {
          _0xf8eac2["return"]();
        }
      } finally {
        if (_0x104972) {
          throw _0x1122ca;
        }
      }
    }
    return _0x789555;
  }
  function Ov() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function Pv(_0x1fc3b1, _0x13fab5) {
    if (_0x13fab5 && ((_0x13fab5 && typeof Symbol !== "undefined" && _0x13fab5.constructor === Symbol ? "symbol" : typeof _0x13fab5) === "object" || typeof _0x13fab5 === "function")) {
      return _0x13fab5;
    }
    return Gv(_0x1fc3b1);
  }
  function Qv(_0x480d83, _0x4b2d0b) {
    Qv = Object.setPrototypeOf || function _0x7dc342(_0x20a186, _0x406abd) {
      _0x20a186.__proto__ = _0x406abd;
      return _0x20a186;
    };
    return Qv(_0x480d83, _0x4b2d0b);
  }
  function Rv(_0x478316, _0x5119ee) {
    return Fv(_0x478316) || Nv(_0x478316, _0x5119ee) || Tv(_0x478316, _0x5119ee) || Ov();
  }
  function Sv(_0x1f15f5) {
    '@swc/helpers - typeof';
  
    return _0x1f15f5 && typeof Symbol !== "undefined" && _0x1f15f5.constructor === Symbol ? "symbol" : typeof _0x1f15f5;
  }
  function Tv(_0x37e83b, _0x1c2584) {
    if (!_0x37e83b) {
      return;
    }
    if (typeof _0x37e83b === "string") {
      return Ev(_0x37e83b, _0x1c2584);
    }
    var _0x51eebc = Object.prototype.toString.call(_0x37e83b).slice(0x8, -0x1);
    if (_0x51eebc === "Object" && _0x37e83b.constructor) {
      _0x51eebc = _0x37e83b.constructor.name;
    }
    if (_0x51eebc === "Map" || _0x51eebc === "Set") {
      return Array.from(_0x51eebc);
    }
    if (_0x51eebc === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x51eebc)) {
      return Ev(_0x37e83b, _0x1c2584);
    }
  }
  function Uv() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if (typeof Proxy === "function") {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (_0xfddec5) {
      return false;
    }
  }
  function Vv(_0x4c8eff) {
    var _0x29380e = Uv();
    return function _0x566ec2() {
      var _0x52baf4 = Lv(_0x4c8eff);
      var _0x3cbc3b;
      if (_0x29380e) {
        var _0x454f9f = Lv(this).constructor;
        _0x3cbc3b = Reflect.construct(_0x52baf4, arguments, _0x454f9f);
      } else {
        _0x3cbc3b = _0x52baf4.apply(this, arguments);
      }
      return Pv(this, _0x3cbc3b);
    };
  }
  class CreateNewMap_ {
    constructor() {
      this.thread = undefined;
      this.contexts = undefined;
      this.keys = undefined;
      this.keys = new Set();
      this.contexts = new Map();
      this.listeners = {};
    }
    ["refresh"]() {
      this.keys.forEach(_0x5f26cd => {
        let _0x1ed745 = false;
        for (let [_0x3b6384, _0xf6d788] of this.contexts) {
          if (_0xf6d788.has(_0x5f26cd)) {
            _0x1ed745 = true;
            break;
          }
        }
        if (!_0x1ed745) {
          this.keys["delete"](_0x5f26cd);
        }
      });
      if (this.thread && this.keys.size === 0x0) {
        this.stop();
      }
    }
    ["hasKey"](_0x227b4b, _0x161f56) {
      return this.contexts.get(_0x227b4b)?.["has"](_0x161f56) ?? false;
    }
    ["addKey"](_0xed7e3f, _0x38f524) {
      if (!this.contexts.has(_0xed7e3f)) {
        this.contexts.set(_0xed7e3f, new Set());
      }
      this.keys.add(_0x38f524);
      this.contexts.get(_0xed7e3f)?.["add"](_0x38f524);
      if (!this.thread) {
        this.start();
      }
    }
    ["removeKey"](_0x1a70fd, _0x251b83) {
      if (!this.contexts.has(_0x1a70fd)) {
        this.contexts.set(_0x1a70fd, new Set());
      }
      const _0x3b4cfa = this.contexts.get(_0x1a70fd);
      if (!_0x3b4cfa?.["has"](_0x251b83)) {
        return;
      }
      _0x3b4cfa["delete"](_0x251b83);
      this.refresh();
    }
    ["start"]() {
      if (this.thread) {
        return;
      }
      this.thread = setTick(() => {
        if (this.keys.size === 0x0) {
          return this.stop();
        }
        this.keys.forEach(_0x4f7dcf => {
          if (IsControlJustReleased(0x0, _0x4f7dcf)) {
            this.emit("IsControlJustReleased", _0x4f7dcf);
          }
        });
      });
    }
    ["stop"]() {
      if (!this.thread) {
        return;
      }
      const _0x2095cf = this.thread;
      this.thread = undefined;
      clearTick(_0x2095cf);
      this.removeAllListeners();
    }
    ['on'](_0x1ffe6f, _0x1721b9) {
      if (!this.listeners[_0x1ffe6f]) {
        this.listeners[_0x1ffe6f] = [];
      }
      this.listeners[_0x1ffe6f].push(_0x1721b9);
    }
    ["removeListener"](_0x5337a6, _0x24e664) {
      if (!this.listeners[_0x5337a6]) {
        return;
      }
      this.listeners[_0x5337a6] = this.listeners[_0x5337a6].filter(_0x9be0cc => _0x9be0cc !== _0x24e664);
    }
    ["emit"](_0x15a71c, ..._0x3e61c7) {
      if (this.listeners[_0x15a71c]) {
        this.listeners[_0x15a71c].forEach(_0x330faa => {
          _0x330faa(..._0x3e61c7);
        });
      }
    }
    ["removeAllListeners"]() {
      for (const _0x313db8 in this.listeners) {
        delete this.listeners[_0x313db8];
      }
    }
  }
  var aVariable_ = false;
  var pDrawables = undefined;
  var MaleOrFemale = {
    'male': 0x2,
    'female': 0x4
  };
  on("np-inventory:itemUsed", function (_0x1c8384) {
    if (_0x1c8384 !== "hairtie") {
      return;
    }
    var _0x2ab8a1 = PlayerPedId();
    var _0x18e5c1 = GetEntityModel(_0x2ab8a1);
    if (checkIfTattooIsUnique(_0x18e5c1)) {
      return;
    }
    emit("animation:PlayAnimation", "hairtie");
    aVariable_ = !aVariable_;
    if (aVariable_) {
      pDrawables = getEntityClothingDrawables(_0x2ab8a1).Hair;
      var _0x4416ab = MaleOrFemale[getTattooGender(_0x18e5c1)];
      if (!pDrawables) {
        return;
      }
      var _0x5ebfab = {
        'Hair': [_0x4416ab, pDrawables[0x1]]
      };
      setPedComponentVariation(_0x2ab8a1, _0x5ebfab);
      return;
    }
    var _0x521f8d = {
      'Hair': pDrawables
    };
    setPedComponentVariation(_0x2ab8a1, _0x521f8d);
    pDrawables = undefined;
  });
  function AnotherFunc12(_0xf43798, _0x33268c, _0x44bafc, _0xf9712e, _0x53c9f1, _0xa32dc3, _0x3b2b3c) {
    try {
      var _0x443873 = _0xf43798[_0xa32dc3](_0x3b2b3c);
      var _0x107ac0 = _0x443873.value;
    } catch (_0x52dcd4) {
      _0x44bafc(_0x52dcd4);
      return;
    }
    if (_0x443873.done) {
      _0x33268c(_0x107ac0);
    } else {
      Promise.resolve(_0x107ac0).then(_0xf9712e, _0x53c9f1);
    }
  }
  function aw(_0x29ea1f) {
    return function () {
      var _0x4b78ac = this;
      return new Promise(function (_0x3e15c4, _0x4b8f50) {
        var _0x335ea7 = _0x29ea1f.apply(_0x4b78ac, arguments);
        function _0x142d6b(_0x48348e) {
          AnotherFunc12(_0x335ea7, _0x3e15c4, _0x4b8f50, _0x142d6b, _0x314a26, "next", _0x48348e);
        }
        function _0x314a26(_0x30579a) {
          AnotherFunc12(_0x335ea7, _0x3e15c4, _0x4b8f50, _0x142d6b, _0x314a26, "throw", _0x30579a);
        }
        _0x142d6b(undefined);
      });
    };
  }
  function bw(_0x6e95e8, _0x2af121) {
    var _0x306496;
    var _0x3e6672;
    var _0x2217b8;
    var _0x1d4953;
    var _0x29dda1 = {
      'label': 0x0,
      'sent': function () {
        if (_0x2217b8[0x0] & 0x1) {
          throw _0x2217b8[0x1];
        }
        return _0x2217b8[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x1d4953 = {
      'next': _0x4b59a2(0x0),
      'throw': _0x4b59a2(0x1),
      'return': _0x4b59a2(0x2)
    };
    if (typeof Symbol === "function") {
      _0x1d4953[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x1d4953;
    function _0x4b59a2(_0x322e0d) {
      return function (_0x47b07c) {
        return _0xf16317([_0x322e0d, _0x47b07c]);
      };
    }
    function _0xf16317(_0x411091) {
      if (_0x306496) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x29dda1) {
        try {
          _0x306496 = 0x1;
          if (_0x3e6672 && (_0x2217b8 = _0x411091[0x0] & 0x2 ? _0x3e6672["return"] : _0x411091[0x0] ? _0x3e6672["throw"] || ((_0x2217b8 = _0x3e6672["return"]) && _0x2217b8.call(_0x3e6672), 0x0) : _0x3e6672.next) && !(_0x2217b8 = _0x2217b8.call(_0x3e6672, _0x411091[0x1])).done) {
            return _0x2217b8;
          }
          _0x3e6672 = 0x0;
          if (_0x2217b8) {
            _0x411091 = [_0x411091[0x0] & 0x2, _0x2217b8.value];
          }
          switch (_0x411091[0x0]) {
            case 0x0:
            case 0x1:
              _0x2217b8 = _0x411091;
              break;
            case 0x4:
              _0x29dda1.label++;
              var _0x4fa9fd = {
                'value': _0x411091[0x1],
                'done': false
              };
              return _0x4fa9fd;
            case 0x5:
              _0x29dda1.label++;
              _0x3e6672 = _0x411091[0x1];
              _0x411091 = [0x0];
              continue;
            case 0x7:
              _0x411091 = _0x29dda1.ops.pop();
              _0x29dda1.trys.pop();
              continue;
            default:
              _0x2217b8 = _0x29dda1.trys;
              if (!(_0x2217b8 = _0x2217b8.length > 0x0 && _0x2217b8[_0x2217b8.length - 0x1]) && (_0x411091[0x0] === 0x6 || _0x411091[0x0] === 0x2)) {
                _0x29dda1 = 0x0;
                continue;
              }
              if (_0x411091[0x0] === 0x3 && (!_0x2217b8 || _0x411091[0x1] > _0x2217b8[0x0] && _0x411091[0x1] < _0x2217b8[0x3])) {
                _0x29dda1.label = _0x411091[0x1];
                break;
              }
              if (_0x411091[0x0] === 0x6 && _0x29dda1.label < _0x2217b8[0x1]) {
                _0x29dda1.label = _0x2217b8[0x1];
                _0x2217b8 = _0x411091;
                break;
              }
              if (_0x2217b8 && _0x29dda1.label < _0x2217b8[0x2]) {
                _0x29dda1.label = _0x2217b8[0x2];
                _0x29dda1.ops.push(_0x411091);
                break;
              }
              if (_0x2217b8[0x2]) {
                _0x29dda1.ops.pop();
              }
              _0x29dda1.trys.pop();
              continue;
          }
          _0x411091 = _0x2af121.call(_0x6e95e8, _0x29dda1);
        } catch (_0x2963bc) {
          _0x411091 = [0x6, _0x2963bc];
          _0x3e6672 = 0x0;
        } finally {
          _0x306496 = _0x2217b8 = 0x0;
        }
      }
      if (_0x411091[0x0] & 0x5) {
        throw _0x411091[0x1];
      }
      var _0x2d5528 = {
        'value': _0x411091[0x0] ? _0x411091[0x1] : undefined,
        'done': true
      };
      return _0x2d5528;
    }
  }
  var currentState = new CreateNewMap_();
  function fetchDataz_() {
    LoadNPXConfig.apply(this, arguments);
    StartZonesFuncListener();
    SetupGeneartor();
  }
  ;
  function fw(_0x1f877a, _0x4a382f, _0x2a17e7, _0x251446, _0x5d4cb7, _0x2f99fb, _0x31f566) {
    try {
      var _0x317696 = _0x1f877a[_0x2f99fb](_0x31f566);
      var _0x5c9a1d = _0x317696.value;
    } catch (_0x1613c8) {
      _0x2a17e7(_0x1613c8);
      return;
    }
    if (_0x317696.done) {
      _0x4a382f(_0x5c9a1d);
    } else {
      Promise.resolve(_0x5c9a1d).then(_0x251446, _0x5d4cb7);
    }
  }
  function gw(_0x175a0a) {
    return function () {
      var _0x212104 = this;
      return new Promise(function (_0x54b98f, _0x1fe817) {
        var _0x2952de = _0x175a0a.apply(_0x212104, arguments);
        function _0x3a8a33(_0x4bb5c0) {
          fw(_0x2952de, _0x54b98f, _0x1fe817, _0x3a8a33, _0x97a2ff, "next", _0x4bb5c0);
        }
        function _0x97a2ff(_0x4fe941) {
          fw(_0x2952de, _0x54b98f, _0x1fe817, _0x3a8a33, _0x97a2ff, "throw", _0x4fe941);
        }
        _0x3a8a33(undefined);
      });
    };
  }
  function hw(_0x2c95c9, _0x495c98) {
    if (!(_0x2c95c9 instanceof _0x495c98)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function iw(_0x417f72, _0x42ee18) {
    for (var _0x5a48f4 = 0x0; _0x5a48f4 < _0x42ee18.length; _0x5a48f4++) {
      var _0x5aecb2 = _0x42ee18[_0x5a48f4];
      _0x5aecb2.enumerable = _0x5aecb2.enumerable || false;
      _0x5aecb2.configurable = true;
      if ("value" in _0x5aecb2) {
        _0x5aecb2.writable = true;
      }
      Object.defineProperty(_0x417f72, _0x5aecb2.key, _0x5aecb2);
    }
  }
  function jw(_0x5ea479, _0x4316de, _0x2456fe) {
    if (_0x4316de) {
      iw(_0x5ea479.prototype, _0x4316de);
    }
    if (_0x2456fe) {
      iw(_0x5ea479, _0x2456fe);
    }
    return _0x5ea479;
  }
  function kw(_0x2e5031, _0x27f769, _0x62f5a6) {
    if (_0x27f769 in _0x2e5031) {
      var _0x577eea = {
        'value': _0x62f5a6,
        'enumerable': true,
        'configurable': true,
        'writable': true
      };
      Object.defineProperty(_0x2e5031, _0x27f769, _0x577eea);
    } else {
      _0x2e5031[_0x27f769] = _0x62f5a6;
    }
    return _0x2e5031;
  }
  function lw(_0x1861ab, _0x2d20c3) {
    var _0x526ac5;
    var _0x5cbd6a;
    var _0x7a5997;
    var _0x1c0297;
    var _0xb3d6f3 = {
      'label': 0x0,
      'sent': function () {
        if (_0x7a5997[0x0] & 0x1) {
          throw _0x7a5997[0x1];
        }
        return _0x7a5997[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x1c0297 = {
      'next': _0x526122(0x0),
      'throw': _0x526122(0x1),
      'return': _0x526122(0x2)
    };
    if (typeof Symbol === "function") {
      _0x1c0297[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x1c0297;
    function _0x526122(_0x297c23) {
      return function (_0x3dd491) {
        return _0xa8c261([_0x297c23, _0x3dd491]);
      };
    }
    function _0xa8c261(_0x453781) {
      if (_0x526ac5) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0xb3d6f3) {
        try {
          _0x526ac5 = 0x1;
          if (_0x5cbd6a && (_0x7a5997 = _0x453781[0x0] & 0x2 ? _0x5cbd6a["return"] : _0x453781[0x0] ? _0x5cbd6a["throw"] || ((_0x7a5997 = _0x5cbd6a["return"]) && _0x7a5997.call(_0x5cbd6a), 0x0) : _0x5cbd6a.next) && !(_0x7a5997 = _0x7a5997.call(_0x5cbd6a, _0x453781[0x1])).done) {
            return _0x7a5997;
          }
          _0x5cbd6a = 0x0;
          if (_0x7a5997) {
            _0x453781 = [_0x453781[0x0] & 0x2, _0x7a5997.value];
          }
          switch (_0x453781[0x0]) {
            case 0x0:
            case 0x1:
              _0x7a5997 = _0x453781;
              break;
            case 0x4:
              _0xb3d6f3.label++;
              var _0x44dd31 = {
                'value': _0x453781[0x1],
                'done': false
              };
              return _0x44dd31;
            case 0x5:
              _0xb3d6f3.label++;
              _0x5cbd6a = _0x453781[0x1];
              _0x453781 = [0x0];
              continue;
            case 0x7:
              _0x453781 = _0xb3d6f3.ops.pop();
              _0xb3d6f3.trys.pop();
              continue;
            default:
              _0x7a5997 = _0xb3d6f3.trys;
              if (!(_0x7a5997 = _0x7a5997.length > 0x0 && _0x7a5997[_0x7a5997.length - 0x1]) && (_0x453781[0x0] === 0x6 || _0x453781[0x0] === 0x2)) {
                _0xb3d6f3 = 0x0;
                continue;
              }
              if (_0x453781[0x0] === 0x3 && (!_0x7a5997 || _0x453781[0x1] > _0x7a5997[0x0] && _0x453781[0x1] < _0x7a5997[0x3])) {
                _0xb3d6f3.label = _0x453781[0x1];
                break;
              }
              if (_0x453781[0x0] === 0x6 && _0xb3d6f3.label < _0x7a5997[0x1]) {
                _0xb3d6f3.label = _0x7a5997[0x1];
                _0x7a5997 = _0x453781;
                break;
              }
              if (_0x7a5997 && _0xb3d6f3.label < _0x7a5997[0x2]) {
                _0xb3d6f3.label = _0x7a5997[0x2];
                _0xb3d6f3.ops.push(_0x453781);
                break;
              }
              if (_0x7a5997[0x2]) {
                _0xb3d6f3.ops.pop();
              }
              _0xb3d6f3.trys.pop();
              continue;
          }
          _0x453781 = _0x2d20c3.call(_0x1861ab, _0xb3d6f3);
        } catch (_0x559550) {
          _0x453781 = [0x6, _0x559550];
          _0x5cbd6a = 0x0;
        } finally {
          _0x526ac5 = _0x7a5997 = 0x0;
        }
      }
      if (_0x453781[0x0] & 0x5) {
        throw _0x453781[0x1];
      }
      var _0x4701fb = {
        'value': _0x453781[0x0] ? _0x453781[0x1] : undefined,
        'done': true
      };
      return _0x4701fb;
    }
  }
  var SomeClothingUtils = {
    'shoes': function (_0x21a308) {
      var _0x29051e = GetWorldPositionOfEntityBone(_0x21a308, GetPedBoneIndex(_0x21a308, 0x3779));
      var _0x3fb4db = GetWorldPositionOfEntityBone(_0x21a308, GetPedBoneIndex(_0x21a308, 0xcc4d));
      var _0x324a66 = [(_0x29051e[0x0] + _0x3fb4db[0x0]) / 0x2, (_0x29051e[0x1] + _0x3fb4db[0x1]) / 0x2, (_0x29051e[0x2] + _0x3fb4db[0x2]) / 0x2];
      var _0x14e595 = GetEntityHeading(_0x21a308);
      var _0x13a7c8 = GetObjectOffsetFromCoords(_0x324a66[0x0], _0x324a66[0x1], _0x324a66[0x2], _0x14e595, 0.01, 0x2, 0.1);
      return _0x13a7c8;
    },
    'pants': function (_0x53347f) {
      var _0x14d0d0 = GetWorldPositionOfEntityBone(_0x53347f, GetPedBoneIndex(_0x53347f, 0x3779));
      var _0x4ad86a = GetWorldPositionOfEntityBone(_0x53347f, GetPedBoneIndex(_0x53347f, 0xcc4d));
      var _0x4ee3b5 = [(_0x14d0d0[0x0] + _0x4ad86a[0x0]) / 0x2, (_0x14d0d0[0x1] + _0x4ad86a[0x1]) / 0x2, (_0x14d0d0[0x2] + _0x4ad86a[0x2]) / 0x2];
      var _0x1380c8 = GetEntityHeading(_0x53347f);
      var _0x3296d7 = GetObjectOffsetFromCoords(_0x4ee3b5[0x0], _0x4ee3b5[0x1], _0x4ee3b5[0x2], _0x1380c8, 0.01, 3.45, 0.62);
      return _0x3296d7;
    },
    'jacket': function (_0x5d6055) {
      var _0x557c18 = GetWorldPositionOfEntityBone(_0x5d6055, GetPedBoneIndex(_0x5d6055, 0x0));
      var _0x1bf684 = GetEntityHeading(_0x5d6055);
      var _0x34c277 = GetObjectOffsetFromCoords(_0x557c18[0x0], _0x557c18[0x1], _0x557c18[0x2], _0x1bf684, 0x0, 3.45, 0.45);
      return _0x34c277;
    },
    'undershirt': function (_0x18e44b) {
      var _0x19f801 = GetWorldPositionOfEntityBone(_0x18e44b, GetPedBoneIndex(_0x18e44b, 0x0));
      var _0x386959 = GetEntityHeading(_0x18e44b);
      var _0x3cf96 = GetObjectOffsetFromCoords(_0x19f801[0x0], _0x19f801[0x1], _0x19f801[0x2], _0x386959, 0x0, 3.45, 0.45);
      return _0x3cf96;
    },
    'masks': function (_0x3c70a1) {
      var _0x4cbb78 = GetWorldPositionOfEntityBone(_0x3c70a1, GetPedBoneIndex(_0x3c70a1, 0x796e));
      var _0x479213 = GetEntityHeading(_0x3c70a1);
      var _0x3e142b = GetObjectOffsetFromCoords(_0x4cbb78[0x0], _0x4cbb78[0x1], _0x4cbb78[0x2], _0x479213, 0x0, 1.35, 0.09);
      return _0x3e142b;
    },
    'accessory': function (_0x434716) {
      var _0x30e4bb = GetWorldPositionOfEntityBone(_0x434716, GetPedBoneIndex(_0x434716, 0x0));
      var _0x32109e = GetEntityHeading(_0x434716);
      var _0x326f16 = GetObjectOffsetFromCoords(_0x30e4bb[0x0], _0x30e4bb[0x1], _0x30e4bb[0x2], _0x32109e, 0x0, 0x2, 0.45);
      return _0x326f16;
    },
    'kevlar': function (_0x4a0823) {
      var _0x2b79b3 = GetWorldPositionOfEntityBone(_0x4a0823, GetPedBoneIndex(_0x4a0823, 0x0));
      var _0x3afc3a = GetEntityHeading(_0x4a0823);
      var _0x54d7a3 = GetObjectOffsetFromCoords(_0x2b79b3[0x0], _0x2b79b3[0x1], _0x2b79b3[0x2], _0x3afc3a, 0x0, 3.45, 0.45);
      return _0x54d7a3;
    },
    'bags': function (_0x1de6d8) {
      var _0x4a1aca = GetWorldPositionOfEntityBone(_0x1de6d8, GetPedBoneIndex(_0x1de6d8, 0x0));
      var _0x5c6ca1 = GetEntityHeading(_0x1de6d8);
      var _0x56578a = GetObjectOffsetFromCoords(_0x4a1aca[0x0], _0x4a1aca[0x1], _0x4a1aca[0x2], _0x5c6ca1, 0x0, 3.45, 0.45);
      return _0x56578a;
    },
    'hats': function (_0x1f508c) {
      var _0x460c43 = GetWorldPositionOfEntityBone(_0x1f508c, GetPedBoneIndex(_0x1f508c, 0x796e));
      var _0x2d05a4 = GetEntityHeading(_0x1f508c);
      var _0x3624d8 = GetObjectOffsetFromCoords(_0x460c43[0x0], _0x460c43[0x1], _0x460c43[0x2], _0x2d05a4, 0x0, 1.35, 0.12);
      return _0x3624d8;
    },
    'glasses': function (_0x58b4b7) {
      var _0x2664e1 = GetWorldPositionOfEntityBone(_0x58b4b7, GetPedBoneIndex(_0x58b4b7, 0x796e));
      var _0x2d5954 = GetEntityHeading(_0x58b4b7);
      var _0x3109b2 = GetObjectOffsetFromCoords(_0x2664e1[0x0], _0x2664e1[0x1], _0x2664e1[0x2], _0x2d5954, 0x0, 1.35, 0.12);
      return _0x3109b2;
    },
    'ears': function (_0x238bff) {
      var _0x38add8 = GetWorldPositionOfEntityBone(_0x238bff, GetPedBoneIndex(_0x238bff, 0x796e));
      var _0x859fd8 = GetEntityHeading(_0x238bff);
      var _0x532457 = GetObjectOffsetFromCoords(_0x38add8[0x0], _0x38add8[0x1], _0x38add8[0x2], _0x859fd8, 0x0, 0.6, 0.08);
      return _0x532457;
    },
    'watches': function (_0x28de0a) {
      var _0x39d6d3 = GetWorldPositionOfEntityBone(_0x28de0a, GetPedBoneIndex(_0x28de0a, 0x49d9));
      var _0x2da0f6 = GetEntityHeading(_0x28de0a);
      var _0x30a09d = GetObjectOffsetFromCoords(_0x39d6d3[0x0], _0x39d6d3[0x1], _0x39d6d3[0x2], _0x2da0f6, 0x0, 0.4, 0.04);
      return _0x30a09d;
    },
    'bracelets': function (_0x1c5662) {
      var _0x4c6175 = GetWorldPositionOfEntityBone(_0x1c5662, GetPedBoneIndex(_0x1c5662, 0xdead));
      var _0x30dc75 = GetEntityHeading(_0x1c5662);
      var _0x408627 = GetObjectOffsetFromCoords(_0x4c6175[0x0], _0x4c6175[0x1], _0x4c6175[0x2], _0x30dc75, 0x0, 0.4, 0.04);
      return _0x408627;
    },
    'torso': function (_0x250b33) {
      var _0x1f619a = GetWorldPositionOfEntityBone(_0x250b33, GetPedBoneIndex(_0x250b33, 0x0));
      var _0x100441 = GetEntityHeading(_0x250b33);
      var _0x465a28 = GetObjectOffsetFromCoords(_0x1f619a[0x0], _0x1f619a[0x1], _0x1f619a[0x2] - 0.1, _0x100441, 0x0, 3.45, 0.45);
      return _0x465a28;
    },
    'hair': function (_0x1f984a) {
      var _0x1f0843 = GetWorldPositionOfEntityBone(_0x1f984a, GetPedBoneIndex(_0x1f984a, 0x796e));
      var _0x39dfbf = GetEntityHeading(_0x1f984a);
      var _0x24a55d = GetObjectOffsetFromCoords(_0x1f0843[0x0], _0x1f0843[0x1], _0x1f0843[0x2], _0x39dfbf, 0x0, 1.35, 0.12);
      return _0x24a55d;
    },
    'decals': function (_0x4332ef) {
      var _0x1fdc29 = GetWorldPositionOfEntityBone(_0x4332ef, GetPedBoneIndex(_0x4332ef, 0x0));
      var _0x5add05 = GetEntityHeading(_0x4332ef);
      var _0x3df783 = GetObjectOffsetFromCoords(_0x1fdc29[0x0], _0x1fdc29[0x1], _0x1fdc29[0x2] - 0.1, _0x5add05, 0x0, 3.45, 0.45);
      return _0x3df783;
    },
    'facialHair': function (_0x5c6151) {
      var _0x28b1dc = GetWorldPositionOfEntityBone(_0x5c6151, GetPedBoneIndex(_0x5c6151, 0x796e));
      var _0x51882b = GetEntityHeading(_0x5c6151);
      var _0x5a6bac = GetObjectOffsetFromCoords(_0x28b1dc[0x0], _0x28b1dc[0x1], _0x28b1dc[0x2], _0x51882b, 0x0, 0.9, 0.05);
      return _0x5a6bac;
    },
    'makeup': function (_0x235ddb) {
      var _0x43a36b = GetWorldPositionOfEntityBone(_0x235ddb, GetPedBoneIndex(_0x235ddb, 0x796e));
      var _0xc62e0e = GetEntityHeading(_0x235ddb);
      var _0x592723 = GetObjectOffsetFromCoords(_0x43a36b[0x0], _0x43a36b[0x1], _0x43a36b[0x2], _0xc62e0e, 0x0, 0.9, 0.05);
      return _0x592723;
    },
    'blush': function (_0x55a316) {
      var _0x1e04ce = GetWorldPositionOfEntityBone(_0x55a316, GetPedBoneIndex(_0x55a316, 0x796e));
      var _0x11c57b = GetEntityHeading(_0x55a316);
      var _0xce6fc6 = GetObjectOffsetFromCoords(_0x1e04ce[0x0], _0x1e04ce[0x1], _0x1e04ce[0x2], _0x11c57b, 0x0, 0.9, 0.05);
      return _0xce6fc6;
    },
    'blemishes': function (_0x2cb169) {
      var _0x59f6d2 = GetWorldPositionOfEntityBone(_0x2cb169, GetPedBoneIndex(_0x2cb169, 0x796e));
      var _0x4ce421 = GetEntityHeading(_0x2cb169);
      var _0xe2a23f = GetObjectOffsetFromCoords(_0x59f6d2[0x0], _0x59f6d2[0x1], _0x59f6d2[0x2], _0x4ce421, 0x0, 0.9, 0.05);
      return _0xe2a23f;
    },
    'lipstick': function (_0x3ff767) {
      var _0x3c75a7 = GetWorldPositionOfEntityBone(_0x3ff767, GetPedBoneIndex(_0x3ff767, 0x796e));
      var _0x50572d = GetEntityHeading(_0x3ff767);
      var _0x145b26 = GetObjectOffsetFromCoords(_0x3c75a7[0x0], _0x3c75a7[0x1], _0x3c75a7[0x2], _0x50572d, 0x0, 0.9, 0.05);
      return _0x145b26;
    },
    'ageing': function (_0x5b04f0) {
      var _0x549dc6 = GetWorldPositionOfEntityBone(_0x5b04f0, GetPedBoneIndex(_0x5b04f0, 0x796e));
      var _0x4c88a9 = GetEntityHeading(_0x5b04f0);
      var _0x68dae = GetObjectOffsetFromCoords(_0x549dc6[0x0], _0x549dc6[0x1], _0x549dc6[0x2], _0x4c88a9, 0x0, 0.9, 0.05);
      return _0x68dae;
    },
    'complexion': function (_0x3fc522) {
      var _0x3990ad = GetWorldPositionOfEntityBone(_0x3fc522, GetPedBoneIndex(_0x3fc522, 0x796e));
      var _0xf5e3d8 = GetEntityHeading(_0x3fc522);
      var _0x3bf1ad = GetObjectOffsetFromCoords(_0x3990ad[0x0], _0x3990ad[0x1], _0x3990ad[0x2], _0xf5e3d8, 0x0, 0.9, 0.05);
      return _0x3bf1ad;
    },
    'sunDamage': function (_0x3743a7) {
      var _0x2b5c75 = GetWorldPositionOfEntityBone(_0x3743a7, GetPedBoneIndex(_0x3743a7, 0x796e));
      var _0x8bb047 = GetEntityHeading(_0x3743a7);
      var _0x54d1c1 = GetObjectOffsetFromCoords(_0x2b5c75[0x0], _0x2b5c75[0x1], _0x2b5c75[0x2], _0x8bb047, 0x0, 0.9, 0.05);
      return _0x54d1c1;
    },
    'freckles': function (_0x19720f) {
      var _0x37ea89 = GetWorldPositionOfEntityBone(_0x19720f, GetPedBoneIndex(_0x19720f, 0x796e));
      var _0x2cb1e9 = GetEntityHeading(_0x19720f);
      var _0x42f54d = GetObjectOffsetFromCoords(_0x37ea89[0x0], _0x37ea89[0x1], _0x37ea89[0x2], _0x2cb1e9, 0x0, 0.9, 0.05);
      return _0x42f54d;
    },
    'chestHair': function (_0x213aeb) {
      var _0x46915b = GetWorldPositionOfEntityBone(_0x213aeb, GetPedBoneIndex(_0x213aeb, 0x0));
      var _0x4f8c6e = GetEntityHeading(_0x213aeb);
      var _0x522d04 = GetObjectOffsetFromCoords(_0x46915b[0x0], _0x46915b[0x1], _0x46915b[0x2] - 0.1, _0x4f8c6e, 0x0, 3.45, 0.45);
      return _0x522d04;
    },
    'bodyBlemishes': function (_0x5ad36a) {
      var _0x5dae54 = GetWorldPositionOfEntityBone(_0x5ad36a, GetPedBoneIndex(_0x5ad36a, 0x0));
      var _0x261484 = GetEntityHeading(_0x5ad36a);
      var _0x4c1a58 = GetObjectOffsetFromCoords(_0x5dae54[0x0], _0x5dae54[0x1], _0x5dae54[0x2] - 0.1, _0x261484, 0x0, 3.45, 0.45);
      return _0x4c1a58;
    },
    'addBodyBlemishes': function (_0x5d6bc8) {
      var _0x4076c1 = GetWorldPositionOfEntityBone(_0x5d6bc8, GetPedBoneIndex(_0x5d6bc8, 0x0));
      var _0x3e8c64 = GetEntityHeading(_0x5d6bc8);
      var _0x55993a = GetObjectOffsetFromCoords(_0x4076c1[0x0], _0x4076c1[0x1], _0x4076c1[0x2] - 0.1, _0x3e8c64, 0x0, 3.45, 0.45);
      return _0x55993a;
    },
    'contacts': function (_0x53cc60) {
      var _0x39bef2 = GetWorldPositionOfEntityBone(_0x53cc60, GetPedBoneIndex(_0x53cc60, 0x796e));
      var _0x39d749 = GetEntityHeading(_0x53cc60);
      var _0x311667 = GetObjectOffsetFromCoords(_0x39bef2[0x0], _0x39bef2[0x1], _0x39bef2[0x2], _0x39d749, 0.01, 0x1, 0.1);
      return _0x311667;
    }
  };
  var CameraHandler = function () {
    'use strict';
  
    function _0x48a576() {
      hw(this, _0x48a576);
    }
    jw(_0x48a576, null, [{
      'key': "start",
      'value': function _0x4567cd(_0x1692a8) {
        var _0x434ea8 = this;
        return gw(function () {
          var _0x265ca3;
          var _0x1d080f;
          var _0x43f6b4;
          var _0x373bdc;
          return lw(this, function (_0x344f4b) {
            switch (_0x344f4b.label) {
              case 0x0:
                _0x265ca3 = PlayerPedId();
                _0x434ea8.cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
                FreezeEntityPosition(_0x265ca3, true);
                SetEntityCoords(_0x265ca3, -582.51, -923.15, 23.81, false, false, false, false);
                SetEntityHeading(_0x265ca3, 0xb4);
                _0x1d080f = SomeClothingUtils[_0x1692a8](_0x265ca3);
                SetCamCoord(_0x434ea8.cam, _0x1d080f[0x0], _0x1d080f[0x1], _0x1d080f[0x2]);
                SetCamRot(_0x434ea8.cam, -0x3, 0x0, 0x0, 0x2);
                RenderScriptCams(true, true, 0x2ee, true, false);
                SetCamFov(_0x434ea8.cam, 0x28);
                _0x43f6b4 = "amb@code_human_wander_idles_fat@male@static";
                _0x373bdc = "static";
                return [0x4, FiveMUtil.loadAnim(_0x43f6b4)];
              case 0x1:
                _0x344f4b.sent();
                TaskPlayAnim(PlayerPedId(), _0x43f6b4, _0x373bdc, 0x3e8, 0x8, -0x1, 0x2, 0x64, false, false, false);
                return [0x4, DevUtilz.wait(0x7d0)];
              case 0x2:
                _0x344f4b.sent();
                return [0x2, true];
            }
          });
        })();
      }
    }, {
      'key': "stop",
      'value': function _0x1809a3() {
        DestroyCam(this.cam, true);
        RenderScriptCams(false, true, 0x3e8, true, false);
      }
    }]);
    return _0x48a576;
  }();
  kw(CameraHandler, "cam", 0x0);
  ;
  function ow(_0x99ad89, _0x9081a0) {
    if (_0x9081a0 == null || _0x9081a0 > _0x99ad89.length) {
      _0x9081a0 = _0x99ad89.length;
    }
    var _0x1742a0 = 0x0;
    for (var _0x1fb107 = new Array(_0x9081a0); _0x1742a0 < _0x9081a0; _0x1742a0++) {
      _0x1fb107[_0x1742a0] = _0x99ad89[_0x1742a0];
    }
    return _0x1fb107;
  }
  function pw(_0x5031cf) {
    if (Array.isArray(_0x5031cf)) {
      return _0x5031cf;
    }
  }
  function qw(_0x1ff170, _0x49ea66, _0x162f86, _0x985f3e, _0x3ca7b1, _0x5c2121, _0x309e7d) {
    try {
      var _0x5a9c6f = _0x1ff170[_0x5c2121](_0x309e7d);
      var _0x1a4eae = _0x5a9c6f.value;
    } catch (_0x4d4fa2) {
      _0x162f86(_0x4d4fa2);
      return;
    }
    if (_0x5a9c6f.done) {
      _0x49ea66(_0x1a4eae);
    } else {
      Promise.resolve(_0x1a4eae).then(_0x985f3e, _0x3ca7b1);
    }
  }
  function rw(_0x43dc43) {
    return function () {
      var _0x511605 = this;
      return new Promise(function (_0xc8db88, _0x4b0006) {
        var _0x2fb782 = _0x43dc43.apply(_0x511605, arguments);
        function _0x372500(_0x53179a) {
          qw(_0x2fb782, _0xc8db88, _0x4b0006, _0x372500, _0x89ecc1, "next", _0x53179a);
        }
        function _0x89ecc1(_0x568707) {
          qw(_0x2fb782, _0xc8db88, _0x4b0006, _0x372500, _0x89ecc1, "throw", _0x568707);
        }
        _0x372500(undefined);
      });
    };
  }
  function sw(_0x12d58f, _0x50a263) {
    var _0x4bd184 = _0x12d58f == null ? null : typeof Symbol !== "undefined" && _0x12d58f[Symbol.iterator] || _0x12d58f['@@iterator'];
    if (_0x4bd184 == null) {
      return;
    }
    var _0x245d2b = [];
    var _0x201ee1 = true;
    var _0x190db0 = false;
    var _0x820254;
    var _0xebc033;
    try {
      for (_0x4bd184 = _0x4bd184.call(_0x12d58f); !(_0x201ee1 = (_0x820254 = _0x4bd184.next()).done); _0x201ee1 = true) {
        _0x245d2b.push(_0x820254.value);
        if (_0x50a263 && _0x245d2b.length === _0x50a263) {
          break;
        }
      }
    } catch (_0x2b6e99) {
      _0x190db0 = true;
      _0xebc033 = _0x2b6e99;
    } finally {
      try {
        if (!_0x201ee1 && _0x4bd184["return"] != null) {
          _0x4bd184["return"]();
        }
      } finally {
        if (_0x190db0) {
          throw _0xebc033;
        }
      }
    }
    return _0x245d2b;
  }
  function tw() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function uw(_0x1df8d9, _0x209957) {
    return pw(_0x1df8d9) || sw(_0x1df8d9, _0x209957) || vw(_0x1df8d9, _0x209957) || tw();
  }
  function vw(_0x31f32c, _0x507527) {
    if (!_0x31f32c) {
      return;
    }
    if (typeof _0x31f32c === "string") {
      return ow(_0x31f32c, _0x507527);
    }
    var _0x26f668 = Object.prototype.toString.call(_0x31f32c).slice(0x8, -0x1);
    if (_0x26f668 === "Object" && _0x31f32c.constructor) {
      _0x26f668 = _0x31f32c.constructor.name;
    }
    if (_0x26f668 === "Map" || _0x26f668 === "Set") {
      return Array.from(_0x26f668);
    }
    if (_0x26f668 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x26f668)) {
      return ow(_0x31f32c, _0x507527);
    }
  }
  function ww(_0x78392, _0x7a7557) {
    var _0x11f7e5;
    var _0x2b058c;
    var _0x402aea;
    var _0x4d9cf4;
    var _0x38b8c7 = {
      'label': 0x0,
      'sent': function () {
        if (_0x402aea[0x0] & 0x1) {
          throw _0x402aea[0x1];
        }
        return _0x402aea[0x1];
      },
      'trys': [],
      'ops': []
    };
    _0x4d9cf4 = {
      'next': _0x46f72f(0x0),
      'throw': _0x46f72f(0x1),
      'return': _0x46f72f(0x2)
    };
    if (typeof Symbol === "function") {
      _0x4d9cf4[Symbol.iterator] = function () {
        return this;
      };
    }
    return _0x4d9cf4;
    function _0x46f72f(_0x5dee91) {
      return function (_0x2d69ed) {
        return _0x4fff85([_0x5dee91, _0x2d69ed]);
      };
    }
    function _0x4fff85(_0x4993cc) {
      if (_0x11f7e5) {
        throw new TypeError("Generator is already executing.");
      }
      while (_0x38b8c7) {
        try {
          _0x11f7e5 = 0x1;
          if (_0x2b058c && (_0x402aea = _0x4993cc[0x0] & 0x2 ? _0x2b058c["return"] : _0x4993cc[0x0] ? _0x2b058c["throw"] || ((_0x402aea = _0x2b058c['return']) && _0x402aea.call(_0x2b058c), 0x0) : _0x2b058c.next) && !(_0x402aea = _0x402aea.call(_0x2b058c, _0x4993cc[0x1])).done) {
            return _0x402aea;
          }
          _0x2b058c = 0x0;
          if (_0x402aea) {
            _0x4993cc = [_0x4993cc[0x0] & 0x2, _0x402aea.value];
          }
          switch (_0x4993cc[0x0]) {
            case 0x0:
            case 0x1:
              _0x402aea = _0x4993cc;
              break;
            case 0x4:
              _0x38b8c7.label++;
              var _0x36aa21 = {
                'value': _0x4993cc[0x1],
                'done': false
              };
              return _0x36aa21;
            case 0x5:
              _0x38b8c7.label++;
              _0x2b058c = _0x4993cc[0x1];
              _0x4993cc = [0x0];
              continue;
            case 0x7:
              _0x4993cc = _0x38b8c7.ops.pop();
              _0x38b8c7.trys.pop();
              continue;
            default:
              _0x402aea = _0x38b8c7.trys;
              if (!(_0x402aea = _0x402aea.length > 0x0 && _0x402aea[_0x402aea.length - 0x1]) && (_0x4993cc[0x0] === 0x6 || _0x4993cc[0x0] === 0x2)) {
                _0x38b8c7 = 0x0;
                continue;
              }
              if (_0x4993cc[0x0] === 0x3 && (!_0x402aea || _0x4993cc[0x1] > _0x402aea[0x0] && _0x4993cc[0x1] < _0x402aea[0x3])) {
                _0x38b8c7.label = _0x4993cc[0x1];
                break;
              }
              if (_0x4993cc[0x0] === 0x6 && _0x38b8c7.label < _0x402aea[0x1]) {
                _0x38b8c7.label = _0x402aea[0x1];
                _0x402aea = _0x4993cc;
                break;
              }
              if (_0x402aea && _0x38b8c7.label < _0x402aea[0x2]) {
                _0x38b8c7.label = _0x402aea[0x2];
                _0x38b8c7.ops.push(_0x4993cc);
                break;
              }
              if (_0x402aea[0x2]) {
                _0x38b8c7.ops.pop();
              }
              _0x38b8c7.trys.pop();
              continue;
          }
          _0x4993cc = _0x7a7557.call(_0x78392, _0x38b8c7);
        } catch (_0x136aae) {
          _0x4993cc = [0x6, _0x136aae];
          _0x2b058c = 0x0;
        } finally {
          _0x11f7e5 = _0x402aea = 0x0;
        }
      }
      if (_0x4993cc[0x0] & 0x5) {
        throw _0x4993cc[0x1];
      }
      var _0x530140 = {
        'value': _0x4993cc[0x0] ? _0x4993cc[0x1] : undefined,
        'done': true
      };
      return _0x530140;
    }
  }
  var additionalDataFetch = function () {
    var _0x2e694e = rw(function () {
      return ww(this, function (_0x204dd9) {
        return [0x2];
      });
    });
    return function _0x369825() {
      return _0x2e694e.apply(this, arguments);
    };
  }();
  RegisterCommand("allClothes", function () {
    allClothesFunc(true, false);
  }, false);
  onNet("karma-clothing:firstCharacterMenu", function () {
    allClothesFunc(true, false);
  });
  RegisterCommand("recordClothes", function () {
    var _0x12ef7c = rw(function (_0x27b948, _0x1e8c0b) {
      var _0x501bbd;
      var _0x24753b;
      var _0x54149d;
      return ww(this, function (_0x3ea57a) {
        switch (_0x3ea57a.label) {
          case 0x0:
            _0x501bbd = _0x1e8c0b[0x0];
            return [0x4, CameraHandler.start(_0x501bbd)];
          case 0x1:
            _0x24753b = _0x3ea57a.sent();
            if (!_0x24753b) {
              return [0x2];
            }
            switch (_0x501bbd) {
              case 'shoes':
                return [0x3, 0x2];
              case "pants":
                return [0x3, 0x4];
              case "jacket":
                return [0x3, 0x6];
              case "undershirt":
                return [0x3, 0x8];
              case "masks":
                return [0x3, 0xa];
              case 'accessory':
                return [0x3, 0xc];
              case "kevlar":
                return [0x3, 0xe];
              case "bags":
                return [0x3, 0x10];
              case "hats":
                return [0x3, 0x12];
              case "glasses":
                return [0x3, 0x14];
              case "ears":
                return [0x3, 0x16];
              case "watches":
                return [0x3, 0x18];
              case "bracelets":
                return [0x3, 0x1a];
              case "torso":
                return [0x3, 0x1c];
              case "hair":
                return [0x3, 0x1e];
              case "decals":
                return [0x3, 0x20];
              case "facialHair":
                return [0x3, 0x22];
              case "makeup":
                return [0x3, 0x24];
              case "blush":
                return [0x3, 0x26];
              case "lipstick":
                return [0x3, 0x28];
              case "blemishes":
                return [0x3, 0x2a];
              case "ageing":
                return [0x3, 0x2c];
              case "complexion":
                return [0x3, 0x2e];
              case "sunDamage":
                return [0x3, 0x30];
              case "freckles":
                return [0x3, 0x32];
              case "chestHair":
                return [0x3, 0x34];
              case "bodyBlemishes":
                return [0x3, 0x36];
              case "addBodyBlemishes":
                return [0x3, 0x38];
              case "contacts":
                return [0x3, 0x3a];
            }
            return [0x3, 0x3c];
          case 0x2:
            return [0x4, yw(0x6)];
          case 0x3:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x4:
            return [0x4, yw(0x4)];
          case 0x5:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x6:
            return [0x4, yw(0xb)];
          case 0x7:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x8:
            return [0x4, yw(0x8)];
          case 0x9:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0xa:
            return [0x4, yw(0x1)];
          case 0xb:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0xc:
            return [0x4, yw(0x7)];
          case 0xd:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0xe:
            return [0x4, yw(0x9)];
          case 0xf:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x10:
            _0x54149d = PlayerPedId();
            SetEntityHeading(_0x54149d, 0x0);
            return [0x4, yw(0x5)];
          case 0x11:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x12:
            return [0x4, zw(0x0)];
          case 0x13:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x14:
            return [0x4, zw(0x1)];
          case 0x15:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x16:
            return [0x4, zw(0x2)];
          case 0x17:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x18:
            return [0x4, zw(0x6)];
          case 0x19:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x1a:
            return [0x4, zw(0x7)];
          case 0x1b:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x1c:
            return [0x4, yw(0x3)];
          case 0x1d:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x1e:
            return [0x4, yw(0x2)];
          case 0x1f:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x20:
            return [0x4, yw(0xa)];
          case 0x21:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x22:
            return [0x4, Bw(0x1)];
          case 0x23:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x24:
            return [0x4, Bw(0x4)];
          case 0x25:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x26:
            return [0x4, Bw(0x5)];
          case 0x27:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x28:
            return [0x4, Bw(0x8)];
          case 0x29:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x2a:
            return [0x4, Bw(0x0)];
          case 0x2b:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x2c:
            return [0x4, Bw(0x3)];
          case 0x2d:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x2e:
            return [0x4, Bw(0x6)];
          case 0x2f:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x30:
            return [0x4, Bw(0x7)];
          case 0x31:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x32:
            return [0x4, Bw(0x9)];
          case 0x33:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x34:
            return [0x4, Bw(0xa)];
          case 0x35:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x36:
            return [0x4, Bw(0xb)];
          case 0x37:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x38:
            return [0x4, Bw(0xc)];
          case 0x39:
            _0x3ea57a.sent();
            return [0x3, 0x3d];
          case 0x3a:
            return [0x4, Aw(0x0)];
          case 0x3b:
            _0x3ea57a.sent();
            _0x3ea57a.label = 0x3c;
          case 0x3c:
            return [0x3, 0x3d];
          case 0x3d:
            return [0x2];
        }
      });
    });
    return function (_0x18af99, _0x20cf4d) {
      return _0x12ef7c.apply(this, arguments);
    };
  }(), false);
  var yw = function () {
    var _0x2e1872 = rw(function (_0x1c9561) {
      var _0x17e124;
      var _0x419557;
      var _0x5e5bcc;
      return ww(this, function (_0x44851b) {
        switch (_0x44851b.label) {
          case 0x0:
            _0x17e124 = PlayerPedId();
            _0x419557 = GetNumberOfPedDrawableVariations(_0x17e124, _0x1c9561);
            _0x5e5bcc = 0x0;
            _0x44851b.label = 0x1;
          case 0x1:
            if (_0x5e5bcc >= _0x419557) {
              return [0x3, 0x4];
            }
            SetPedComponentVariation(_0x17e124, _0x1c9561, _0x5e5bcc, 0x0, 0x0);
            return [0x4, DevUtilz.wait(0x96)];
          case 0x2:
            _0x44851b.sent();
            exports.screenshots.run(_0x5e5bcc, 0x7d);
            _0x44851b.label = 0x3;
          case 0x3:
            _0x5e5bcc++;
            return [0x3, 0x1];
          case 0x4:
            return [0x2];
        }
      });
    });
    return function _0x1ec130(_0x126258) {
      return _0x2e1872.apply(this, arguments);
    };
  }();
  var zw = function () {
    var _0x34ffad = rw(function (_0x1e9aa9) {
      var _0x24ca27;
      var _0x4cdcdc;
      var _0x35470e;
      return ww(this, function (_0x26dc19) {
        switch (_0x26dc19.label) {
          case 0x0:
            _0x24ca27 = PlayerPedId();
            _0x4cdcdc = GetNumberOfPedPropDrawableVariations(_0x24ca27, _0x1e9aa9);
            _0x35470e = 0x0;
            _0x26dc19.label = 0x1;
          case 0x1:
            if (_0x35470e >= _0x4cdcdc) {
              return [0x3, 0x4];
            }
            ClearPedProp(_0x24ca27, _0x1e9aa9);
            SetPedPropIndex(_0x24ca27, _0x1e9aa9, _0x35470e, 0x0, true);
            return [0x4, DevUtilz.wait(0x96)];
          case 0x2:
            _0x26dc19.sent();
            exports.screenshots.run(_0x35470e, 0x7d);
            _0x26dc19.label = 0x3;
          case 0x3:
            _0x35470e++;
            return [0x3, 0x1];
          case 0x4:
            return [0x2];
        }
      });
    });
    return function _0x20e79e(_0x2480d9) {
      return _0x34ffad.apply(this, arguments);
    };
  }();
  var Aw = function () {
    var _0x2ca453 = rw(function (_0x2b2a3f) {
      var _0x577447;
      var _0x1e22de;
      var _0x56d245;
      var _0x253438;
      var _0x323d8b;
      var _0x3eadff;
      var _0x43bad3;
      var _0x43309a;
      var _0x319396;
      var _0x1deff9;
      var _0x4d46a3;
      var _0x21e6f0;
      var _0x1178ac;
      return ww(this, function (_0x2808ef) {
        switch (_0x2808ef.label) {
          case 0x0:
            return [0x4, RPC.execute("contacts:getContacts")];
          case 0x1:
            _0x577447 = _0x2808ef.sent();
            _0x1e22de = true;
            _0x56d245 = false;
            _0x253438 = undefined;
            _0x2808ef.label = 0x2;
          case 0x2:
            _0x2808ef.trys.push([0x2, 0x8, 0x9, 0xa]);
            _0x323d8b = _0x577447.entries()[Symbol.iterator]();
            _0x2808ef.label = 0x3;
          case 0x3:
            if (!!(_0x1e22de = (_0x3eadff = _0x323d8b.next()).done)) {
              return [0x3, 0x7];
            }
            _0x43bad3 = pw(_0x3eadff.value) || sw(_0x3eadff.value, 0x2) || vw(_0x3eadff.value, 0x2) || tw();
            _0x43309a = _0x43bad3[0x0];
            _0x319396 = _0x43bad3[0x1];
            return [0x4, FiveMUtil.loadModel(_0x319396.npc.model)];
          case 0x4:
            _0x2808ef.sent();
            SetPlayerModel(PlayerId(), _0x319396.npc.model);
            _0x1deff9 = "gestures@m@standing@fat";
            _0x4d46a3 = 'gesture_hello';
            return [0x4, FiveMUtil.loadAnim(_0x1deff9)];
          case 0x5:
            _0x2808ef.sent();
            _0x21e6f0 = PlayerPedId();
            TaskPlayAnim(_0x21e6f0, _0x1deff9, _0x4d46a3, 0x3e8, 0x8, -0x1, 0x2, 0x64, false, false, false);
            _0x2808ef.label = 0x6;
          case 0x6:
            _0x1e22de = true;
            return [0x3, 0x3];
          case 0x7:
            return [0x3, 0xa];
          case 0x8:
            _0x1178ac = _0x2808ef.sent();
            _0x56d245 = true;
            _0x253438 = _0x1178ac;
            return [0x3, 0xa];
          case 0x9:
            try {
              if (!_0x1e22de && _0x323d8b["return"] != null) {
                _0x323d8b["return"]();
              }
            } finally {
              if (_0x56d245) {
                throw _0x253438;
              }
            }
            return [0x7];
          case 0xa:
            return [0x2];
        }
      });
    });
    return function _0x5e2d43(_0x3aa13c) {
      return _0x2ca453.apply(this, arguments);
    };
  }();
  var Bw = function () {
    var _0x22e832 = rw(function (_0x2ba8e8) {
      var _0x519d0a;
      var _0x174867;
      var _0x5e1c30;
      return ww(this, function (_0xbbbea4) {
        switch (_0xbbbea4.label) {
          case 0x0:
            _0x519d0a = PlayerPedId();
            _0x174867 = GetNumHeadOverlayValues(_0x2ba8e8);
            _0x5e1c30 = 0x0;
            _0xbbbea4.label = 0x1;
          case 0x1:
            if (_0x5e1c30 >= _0x174867) {
              return [0x3, 0x4];
            }
            SetPedHeadOverlay(_0x519d0a, _0x2ba8e8, _0x5e1c30, 0x1);
            return [0x4, DevUtilz.wait(0x96)];
          case 0x2:
            _0xbbbea4.sent();
            exports.screenshots.run(_0x5e1c30, 0x7d);
            _0xbbbea4.label = 0x3;
          case 0x3:
            _0x5e1c30++;
            return [0x3, 0x1];
          case 0x4:
            return [0x2];
        }
      });
    });
    return function _0x37d7d0(_0x4ea142) {
      return _0x22e832.apply(this, arguments);
    };
  }();
  function initializeApp() {
    fetchDataz_();
    exports.focusmanager.RegisterFocusHandler(function (_0x31e617, _0x3b444e) {
      SetNuiFocus(_0x31e617, _0x3b444e);
      SetNuiFocusKeepInput(_0x31e617);
    });
    return false;
    additionalDataFetch();
  }
  ;
  initializeApp();
  if (GetCurrentResourceName() === "karma-clothing") {
    welcome();
  } else {
    ehCorrect();
  }