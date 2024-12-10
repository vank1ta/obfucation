function a() {}
function e() {}
if (GetCurrentResourceName() === "karma-clothing") {
  var f = exports[Config[c(0x20a)]][c(0x1e8)]();
  RPC[c(0x1d4)](c(0x209), async (_0x1972bc, _0x2bd073) => {
    let _0x4ebba7 = f[c(0x215)][c(0x1bb)](source);
    let _0x470954 = _0x4ebba7[c(0x1a9)].cid;
    let _0x42acc6 = await SQL.execute(c(0x1f6), [JSON[c(0x20e)](_0x2bd073), _0x470954]);
    if (!_0x42acc6) {
      false;
      return print(c(0x1bf));
    }
    return true;
  });
  RPC.register(c(0x1c2), async _0x4b0b65 => {
    let _0x47ee7c = f[c(0x215)][c(0x1bb)](source);
    let _0xb6c248 = _0x47ee7c[c(0x1a9)][c(0x20f)];
    let _0x56bc36 = await SQL.execute(c(0x1be), [_0xb6c248]);
    if (!_0x56bc36) {
      false;
      return print(c(0x1e2) + _0xb6c248);
    }
    return _0x56bc36 || false;
  });
  RPC[c(0x1d4)](c(0x1f0), async (_0x29022d, _0x5b1fbc) => {
    let _0x592768 = f[c(0x215)].GetPlayer(source);
    if (!_0x592768) {
      return;
    }
    let _0x326584 = _0x592768[c(0x1a9)].cid;
    const _0x4dcb53 = await SQL.execute("\n        SELECT fade \n        FROM karma_head_clothing \n        WHERE cid = ?\n    ", [_0x326584]);
    if (_0x4dcb53.length === 0x0) {
      console[c(0x20b)](c(0x1ff));
      return undefined;
    }
    var _0x2f9fd6 = _0x4dcb53[0x0][c(0x1ec)];
    var _0x4d4721 = JSON[c(0x1c1)](_0x2f9fd6);
    return _0x4d4721 ? _0x4d4721 : undefined;
  });
  RPC.register("karma-clothing:getAllowedPeds", async () => {
    false;
    return false;
  });
  RPC[c(0x1d4)]('karma-clothing:purchaseClothing', async (_0x5c59d0, _0x194381) => {
    let _0x1b3b13 = f[c(0x215)][c(0x1bb)](source);
    let _0x4c718a = _0x1b3b13[c(0x1a9)][c(0x210)].cash;
    let _0x39b169 = _0x1b3b13[c(0x1a9)][c(0x210)].bank;
    if (_0x5c59d0 == c(0x213) && _0x4c718a >= _0x194381) {
      _0x1b3b13[c(0x215)].RemoveMoney(c(0x213), _0x194381);
      return true;
    } else {
      return _0x5c59d0 == c(0x1db) && _0x39b169 >= _0x194381 ? (_0x1b3b13.Functions[c(0x1d0)](c(0x1db), _0x194381), true) : false;
    }
  });
  RPC.register(c(0x1ca), async (_0x32743d, _0x301666, _0x214999, _0x289866, _0x5d4b6d) => {
    let _0x1a804b = JSON.stringify(_0x301666);
    let _0x32294f = JSON[c(0x20e)](_0x214999);
    let _0x1de360 = JSON[c(0x20e)](_0x289866);
    let _0x5aca8b = f[c(0x215)][c(0x1bb)](source);
    let _0x55e91d = _0x5aca8b[c(0x1a9)][c(0x20f)];
    if (!_0x55e91d) {
      return false;
    }
    let _0x3f42ee = await SQL[c(0x1f7)](c(0x1ad), [_0x55e91d]);
    if (_0x3f42ee[c(0x216)] > 0x0 || !_0x3f42ee) {
      const _0x1b60a5 = await SQL[c(0x1f7)]("\n            UPDATE karma_head_clothing \n            SET head_blend = ?, \n            head_features = ?, \n            head_overlays = ?, \n            eye_color = ?, \n            model = ? \n            WHERE cid = ?\n        ", [_0x1a804b, _0x32294f, _0x1de360, _0x5d4b6d, _0x32743d, _0x55e91d]);
      return _0x1b60a5;
    } else {
      const _0x588d9a = c(0x1f8);
      const _0x48ce10 = await SQL[c(0x1f7)](_0x588d9a, [_0x55e91d, _0x1a804b, _0x32294f, _0x1de360, _0x5d4b6d, _0x32743d]);
      return _0x48ce10;
    }
  });
  async function a(_0x3cb574) {
    let _0x1f2cc2 = await SQL[c(0x1f7)](c(0x1ad), [_0x3cb574]);
    if (_0x1f2cc2[c(0x216)] === 0x0) {
      return undefined;
    }
    return _0x1f2cc2;
  }
  RPC[c(0x1d4)](c(0x1fa), async _0x561639 => {
    if (_0x561639 !== 0x705e61f2 || _0x561639 !== -0x63610028) {
      TriggerClientEvent('karma-clothing:applyCurrentClothing', source);
    }
    let _0x34b80f = f[c(0x215)][c(0x1bb)](source);
    let _0x7d994d = _0x34b80f.PlayerData[c(0x20f)];
    if (!_0x34b80f) {
      return {
        'headblend': {},
        'features': {},
        'overlays': [],
        'eyeColor': 0x0,
        'applyBlend': false
      };
    }
    let _0x1c2ba8 = await a(_0x7d994d);
    if (!_0x1c2ba8) {
      return {
        'headblend': {},
        'features': {},
        'overlays': [],
        'eyeColor': 0x0,
        'applyBlend': false
      };
    }
    let _0x2d62da = _0x1c2ba8[0x0];
    let _0xf1e163 = JSON[c(0x1c1)](_0x2d62da[c(0x1ef)]);
    let _0x20cd4d = JSON[c(0x1c1)](_0x2d62da[c(0x1ac)]);
    let _0x1619c2 = JSON[c(0x1c1)](_0x2d62da[c(0x1b1)]);
    return {
      'headblend': {
        'ShapeFirst': _0xf1e163[c(0x1d3)],
        'ShapeSecond': _0xf1e163[c(0x1b8)],
        'ShapeThird': _0xf1e163[c(0x1c3)],
        'SkinFirst': _0xf1e163[c(0x1b9)],
        'SkinSecond': _0xf1e163[c(0x207)],
        'SkinThird': _0xf1e163[c(0x1c4)],
        'ShapeMix': _0xf1e163[c(0x1fe)],
        'SkinMix': _0xf1e163.SkinMix,
        'ThirdMix': _0xf1e163.ThirdMix
      },
      'features': {
        'nose_width': _0x20cd4d[c(0x1c7)],
        'nose_peak': _0x20cd4d.nose_peak,
        'nose_length': _0x20cd4d.nose_length,
        'nose_bone_curveness': _0x20cd4d.nose_bone_curveness,
        'nose_tip': _0x20cd4d.nose_tip,
        'nose_bone_twist': _0x20cd4d[c(0x1f2)],
        'eyebrow_up_down': _0x20cd4d[c(0x1c6)],
        'eyebrow_in_out': _0x20cd4d[c(0x1af)],
        'cheek_bones': _0x20cd4d[c(0x208)],
        'cheek_sideways_bone_size': _0x20cd4d.cheek_sideways_bone_size,
        'cheek_bones_width': _0x20cd4d[c(0x1f4)],
        'eye_opening': _0x20cd4d.eye_opening,
        'lip_thickness': _0x20cd4d[c(0x1ab)],
        'jaw_bone_width': _0x20cd4d[c(0x1ed)],
        'jaw_bone_shape': _0x20cd4d.jaw_bone_shape,
        'chin_bone': _0x20cd4d[c(0x217)],
        'chin_bone_length': _0x20cd4d[c(0x1e1)],
        'chin_bone_shape': _0x20cd4d[c(0x204)],
        'chin_hole': _0x20cd4d[c(0x1fb)],
        'neck_thickness': _0x20cd4d.neck_thickness
      },
      'overlays': _0x1619c2,
      'eyeColor': _0x2d62da[c(0x1aa)],
      'applyBlend': true
    };
  });
  RPC.register(c(0x1ce), async (_0x43c293, _0x2bdb19, _0x357c0c, _0x35a89d, _0xfc4fe, _0x35cb68) => {
    let _0xa2eaff = f.Functions[c(0x1bb)](source);
    let _0x1c9603 = _0xa2eaff[c(0x1a9)][c(0x20f)];
    await c(_0x1c9603, _0x43c293, {
      'drawables': _0x2bdb19,
      'props': _0x357c0c,
      'hairColor': _0x35a89d,
      'pLayer': _0xfc4fe,
      'hasCustomHeadModel': _0x35cb68
    });
    return true;
  });
  async function c(_0x208fad, _0x1eb2cf, _0x40b761) {
    const _0x19f311 = await SQL.execute("SELECT * FROM karma_clothing WHERE cid = ?", [_0x208fad]);
    if (_0x19f311[c(0x216)] > 0x0) {
      const _0x4959d9 = c(0x1bc);
      await SQL.execute(_0x4959d9, [_0x1eb2cf, JSON[c(0x20e)](_0x40b761[c(0x1f1)]), JSON[c(0x20e)](_0x40b761[c(0x1e7)]), JSON[c(0x20e)](_0x40b761[c(0x1d9)]), JSON.stringify(_0x40b761[c(0x203)]), JSON[c(0x20e)](_0x40b761[c(0x1cd)]), _0x208fad]);
    } else {
      const _0x4a8ac8 = c(0x1d6);
      await SQL.execute(_0x4a8ac8, [_0x208fad, _0x1eb2cf, JSON.stringify(_0x40b761[c(0x1f1)]), JSON[c(0x20e)](_0x40b761[c(0x1e7)]), JSON[c(0x20e)](_0x40b761[c(0x1d9)]), JSON[c(0x20e)](_0x40b761[c(0x203)]), JSON.stringify(_0x40b761[c(0x1cd)])]);
    }
  }
  RPC.register(c(0x1c5), async () => {
    let _0x39b759 = f[c(0x215)][c(0x1bb)](source);
    let _0x38defe = _0x39b759[c(0x1a9)][c(0x20f)];
    const _0x4c83f1 = c(0x1d8);
    const _0x1bd190 = await SQL[c(0x1f7)](_0x4c83f1, [_0x38defe]);
    if (_0x1bd190[c(0x216)] > 0x0) {
      const _0x5e3428 = _0x1bd190[0x0];
      return {
        'model': _0x5e3428[c(0x1b0)],
        'drawables': JSON[c(0x1c1)](_0x5e3428.drawables_texture),
        'props': JSON[c(0x1c1)](_0x5e3428[c(0x1de)]),
        'hairColor': JSON.parse(_0x5e3428[c(0x1d9)]),
        'fadeLayer': JSON[c(0x1c1)](_0x5e3428.fadeLayer),
        'customHeadModel': _0x5e3428[c(0x1b6)]
      };
    } else {
      return {
        'model': c(0x1ee),
        'drawables': {},
        'props': {},
        'hairColor': {},
        'fadeLayer': null,
        'customHeadModel': false
      };
    }
  });
  RPC[c(0x1d4)](c(0x1fc), async (_0x11e1ad, _0x182c7f) => {
    return true;
  });
  RPC[c(0x1d4)](c(0x1ae), async _0x25996c => {
    return undefined;
  });
  RPC[c(0x1d4)]("karma-clothing:fetchBlockedTattoosForCharacter", async _0x1a6784 => {
    false;
    return false;
  });
  RPC[c(0x1d4)](c(0x211), async (_0x3cde82, _0x3f02bd, _0x31480e, _0x4fc8f8, _0x36b4e3, _0x534548, _0xe8244e, _0x213d30, _0x267145) => {
    let _0x778ebd = f.Functions.GetPlayer(source);
    let _0x526bf3 = _0x778ebd[c(0x1a9)].cid;
    const _0x339af4 = c(0x20d);
    try {
      await SQL[c(0x1f7)](_0x339af4, [_0x526bf3, _0x3f02bd, _0x31480e, _0x3cde82, _0x4fc8f8, JSON[c(0x20e)](_0x36b4e3), JSON[c(0x20e)](_0x534548), JSON[c(0x20e)](_0xe8244e), JSON.stringify(_0x213d30), _0x267145]);
      return {
        'success': true
      };
    } catch (_0x2a5dda) {
      console[c(0x1e4)](c(0x1d2), _0x2a5dda);
      return {
        'success': false,
        'error': c(0x1dc)
      };
    }
  });
  RPC[c(0x1d4)](c(0x1b5), async () => {
    let _0x19ade4 = f[c(0x215)].GetPlayer(source);
    let _0x24ab17 = _0x19ade4[c(0x1a9)][c(0x20f)];
    const _0x27b054 = c(0x1d7);
    const _0x19e213 = await SQL[c(0x1f7)](_0x27b054, [_0x24ab17]);
    if (_0x19e213.length > 0x0) {
      const _0x4c0419 = _0x19e213[c(0x1ea)](_0x4c4aa6 => ({
        'name': _0x4c4aa6[c(0x1c0)],
        'tags': _0x4c4aa6[c(0x1b3)],
        'slot': _0x4c4aa6.slot,
        'model': _0x4c4aa6[c(0x1b0)],
        'drawables': JSON[c(0x1c1)](_0x4c4aa6[c(0x1bd)]),
        'props': JSON.parse(_0x4c4aa6[c(0x1de)]),
        'hairColor': JSON.parse(_0x4c4aa6[c(0x1d9)]),
        'fadeLayer': JSON[c(0x1c1)](_0x4c4aa6[c(0x1c8)]),
        'customHeadModel': _0x4c4aa6[c(0x1b6)]
      }));
      return _0x4c0419;
    } else {
      return [];
    }
  });
  RPC[c(0x1d4)](c(0x200), async _0x2dee02 => {
    let _0x3f8f3c = f[c(0x215)][c(0x1bb)](source);
    let _0x20ebaa = _0x3f8f3c[c(0x1a9)][c(0x20f)];
    const _0x1095b1 = c(0x218);
    try {
      await SQL[c(0x1f7)](_0x1095b1, [_0x20ebaa, _0x2dee02]);
      return {
        'success': true
      };
    } catch (_0x2b1621) {
      console.error(c(0x1cf), _0x2b1621);
      return {
        'success': false,
        'error': c(0x1d5)
      };
    }
  });
  RPC.register(c(0x1b7), async _0x135d5b => {
    false;
    return false;
  });
  f[c(0x215)][c(0x1e3)]('qb-multicharacter:server:getSkin', async function (_0x5e2b17, _0x26ee27, _0x3c2b5) {
    let _0x1b5e38 = f.Functions[c(0x1bb)](_0x5e2b17);
    _0x3c2b5 = _0x3c2b5 || _0x1b5e38[c(0x1a9)][c(0x20f)];
    if (!_0x3c2b5) {
      if (plyer.PlayerData[c(0x1f3)][c(0x20f)]) {
        _0x3c2b5 = plyer.PlayerData.charinfo[c(0x20f)];
      } else {
        console[c(0x20b)](c(0x1f9));
      }
    }
    const _0x56d318 = await SQL.execute("\n        SELECT drawables_texture, props_texture, hairColor, fadeLayer, customHeadModel, model\n        FROM karma_clothing\n        WHERE cid = ?\n        ORDER BY created_at DESC\n        LIMIT 1\n    ", [_0x3c2b5]);
    if (_0x56d318[c(0x216)] > 0x0) {
      const _0x1c59d6 = _0x56d318[0x0];
      let _0x45f75e = {
        'model': _0x1c59d6.model,
        'drawables': JSON[c(0x1c1)](_0x1c59d6.drawables_texture),
        'props': JSON[c(0x1c1)](_0x1c59d6[c(0x1de)]),
        'hairColor': JSON[c(0x1c1)](_0x1c59d6[c(0x1d9)]),
        'fadeLayer': JSON[c(0x1c1)](_0x1c59d6[c(0x1c8)]),
        'customHeadModel': _0x1c59d6.customHeadModel
      };
      _0x26ee27(_0x1c59d6[c(0x1b0)], _0x45f75e);
      return _0x45f75e;
    } else {
      let _0x50c5ca = {
        'model': c(0x1ee),
        'drawables': {},
        'props': {},
        'hairColor': {},
        'fadeLayer': null,
        'customHeadModel': false
      };
      _0x26ee27(_0x50c5ca[c(0x1b0)], _0x50c5ca);
      return _0x50c5ca;
    }
  });
  f[c(0x215)][c(0x1e3)](c(0x212), async function (_0x1fc09e, _0x46c13d, _0x156f56) {
    if (!_0x156f56) {
      return {
        'headblend': {},
        'features': {},
        'overlays': [],
        'eyeColor': 0x0,
        'applyBlend': false
      };
    }
    let _0x2629e7 = await a(_0x156f56);
    if (!_0x2629e7) {
      return {
        'headblend': {},
        'features': {},
        'overlays': [],
        'eyeColor': 0x0,
        'applyBlend': false
      };
    }
    let _0x291f6a = _0x2629e7[0x0];
    let _0x58d354 = JSON[c(0x1c1)](_0x291f6a[c(0x1ef)]);
    let _0x1530d1 = JSON[c(0x1c1)](_0x291f6a[c(0x1ac)]);
    let _0x3225f7 = JSON[c(0x1c1)](_0x291f6a[c(0x1b1)]);
    let _0x53839e = {
      'headblend': {
        'ShapeFirst': _0x58d354[c(0x1d3)],
        'ShapeSecond': _0x58d354[c(0x1b8)],
        'ShapeThird': _0x58d354.ShapeThird,
        'SkinFirst': _0x58d354[c(0x1b9)],
        'SkinSecond': _0x58d354[c(0x207)],
        'SkinThird': _0x58d354[c(0x1c4)],
        'ShapeMix': _0x58d354[c(0x1fe)],
        'SkinMix': _0x58d354[c(0x20c)],
        'ThirdMix': _0x58d354[c(0x205)]
      },
      'features': {
        'nose_width': _0x1530d1.nose_width,
        'nose_peak': _0x1530d1[c(0x1c9)],
        'nose_length': _0x1530d1[c(0x214)],
        'nose_bone_curveness': _0x1530d1[c(0x1fd)],
        'nose_tip': _0x1530d1.nose_tip,
        'nose_bone_twist': _0x1530d1[c(0x1f2)],
        'eyebrow_up_down': _0x1530d1[c(0x1c6)],
        'eyebrow_in_out': _0x1530d1[c(0x1af)],
        'cheek_bones': _0x1530d1.cheek_bones,
        'cheek_sideways_bone_size': _0x1530d1[c(0x1da)],
        'cheek_bones_width': _0x1530d1.cheek_bones_width,
        'eye_opening': _0x1530d1[c(0x201)],
        'lip_thickness': _0x1530d1[c(0x1ab)],
        'jaw_bone_width': _0x1530d1[c(0x1ed)],
        'jaw_bone_shape': _0x1530d1[c(0x1b4)],
        'chin_bone': _0x1530d1[c(0x217)],
        'chin_bone_length': _0x1530d1[c(0x1e1)],
        'chin_bone_shape': _0x1530d1.chin_bone_shape,
        'chin_hole': _0x1530d1[c(0x1fb)],
        'neck_thickness': _0x1530d1[c(0x1e0)]
      },
      'overlays': _0x3225f7,
      'eyeColor': _0x291f6a[c(0x1aa)],
      'applyBlend': true
    };
    _0x46c13d('', _0x53839e);
    return _0x53839e;
  });
} else {
  e();
}