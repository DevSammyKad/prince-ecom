'use server';
function _0x1a73(_0x165205, _0x374cfb) {
  const _0x46027a = _0x4602();
  return (
    (_0x1a73 = function (_0x1a73a0, _0x4d098c) {
      _0x1a73a0 = _0x1a73a0 - 0x190;
      let _0xa08139 = _0x46027a[_0x1a73a0];
      return _0xa08139;
    }),
    _0x1a73(_0x165205, _0x374cfb)
  );
}
(function (_0x72ee2e, _0x3966d1) {
  const _0x22dfce = _0x1a73,
    _0x3a09c6 = _0x72ee2e();
  while (!![]) {
    try {
      const _0x14f68d =
        parseInt(_0x22dfce(0x1a3)) / 0x1 +
        parseInt(_0x22dfce(0x19e)) / 0x2 +
        -parseInt(_0x22dfce(0x1ad)) / 0x3 +
        (parseInt(_0x22dfce(0x192)) / 0x4) *
          (-parseInt(_0x22dfce(0x19c)) / 0x5) +
        parseInt(_0x22dfce(0x193)) / 0x6 +
        parseInt(_0x22dfce(0x19f)) / 0x7 +
        parseInt(_0x22dfce(0x1b0)) / 0x8;
      if (_0x14f68d === _0x3966d1) break;
      else _0x3a09c6['push'](_0x3a09c6['shift']());
    } catch (_0x406867) {
      _0x3a09c6['push'](_0x3a09c6['shift']());
    }
  }
})(_0x4602, 0xedab0);
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
function _0x4602() {
  const _0x1f6bb2 = [
    'princeglow.india@gmail.com',
    'images',
    '370nFjrgA',
    'true',
    '1650702xfukhJ',
    '11148732ufkAGh',
    'product',
    'flatMap',
    'split',
    '1382478TKPRuk',
    'trim',
    'banner',
    'salePrice',
    'description',
    'imageString',
    'success',
    '/dashboard/products',
    'reply',
    'isFeatured',
    '5381337yEkrtt',
    'category',
    'value',
    '3874384iYOclo',
    'map',
    '/dashboard/banner',
    'get',
    'title',
    '89476WrdHxb',
    '826620LIFtuu',
    'price',
    'status',
    'productId',
    'delete',
    'email',
    'create',
  ];
  _0x4602 = function () {
    return _0x1f6bb2;
  };
  return _0x4602();
}
import { bannerSchema, productSchema } from '@/lib/zodSchemas';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import _0xa0f5c7 from '@/lib/db';
export async function createProduct(_0x45ba3f, _0x437704) {
  const _0x454729 = _0x1a73,
    { getUser: _0x5c8207 } = getKindeServerSession(),
    _0x4a579b = await _0x5c8207();
  if (!_0x4a579b || _0x4a579b['email'] !== _0x454729(0x19a))
    return redirect('/');
  const _0x20e4c2 = parseWithZod(_0x437704, { schema: productSchema });
  if (_0x20e4c2['status'] !== 'success') return _0x20e4c2[_0x454729(0x1ab)]();
  const _0x6b1707 = _0x20e4c2[_0x454729(0x1af)][_0x454729(0x19b)][
    _0x454729(0x1a1)
  ]((_0x40135c) =>
    _0x40135c[_0x454729(0x1a2)](',')[_0x454729(0x1b1)]((_0x4915eb) =>
      _0x4915eb[_0x454729(0x1a4)]()
    )
  );
  await _0xa0f5c7[_0x454729(0x1a0)][_0x454729(0x199)]({
    data: {
      name: _0x20e4c2[_0x454729(0x1af)]['name'],
      description: _0x20e4c2[_0x454729(0x1af)][_0x454729(0x1a7)],
      status: _0x20e4c2[_0x454729(0x1af)]['status'],
      price: _0x20e4c2[_0x454729(0x1af)][_0x454729(0x194)],
      salePrice: _0x20e4c2[_0x454729(0x1af)][_0x454729(0x1a6)],
      images: _0x6b1707,
      isFeatured:
        _0x20e4c2[_0x454729(0x1af)][_0x454729(0x1ac)] === _0x454729(0x19d)
          ? !![]
          : ![],
      category: _0x20e4c2[_0x454729(0x1af)][_0x454729(0x1ae)],
    },
  }),
    redirect(_0x454729(0x1aa));
}
export async function editProduct(_0x41c93a, _0x41d962) {
  const _0x3ff494 = _0x1a73,
    { getUser: _0x4b8c30 } = getKindeServerSession(),
    _0x2a49ff = await _0x4b8c30();
  if (!_0x2a49ff || _0x2a49ff['email'] !== _0x3ff494(0x19a))
    return redirect('/');
  const _0x38b1c3 = parseWithZod(_0x41d962, { schema: productSchema });
  if (_0x38b1c3[_0x3ff494(0x195)] !== _0x3ff494(0x1a9))
    return _0x38b1c3['reply']();
  const _0x445e87 = _0x38b1c3[_0x3ff494(0x1af)][_0x3ff494(0x19b)]['flatMap'](
      (_0x5a98e7) =>
        _0x5a98e7[_0x3ff494(0x1a2)](',')[_0x3ff494(0x1b1)]((_0x23faff) =>
          _0x23faff[_0x3ff494(0x1a4)]()
        )
    ),
    _0x1d0458 = _0x41d962['get']('productId');
  await _0xa0f5c7[_0x3ff494(0x1a0)]['update']({
    where: { id: _0x1d0458 },
    data: {
      name: _0x38b1c3[_0x3ff494(0x1af)]['name'],
      description: _0x38b1c3['value'][_0x3ff494(0x1a7)],
      status: _0x38b1c3[_0x3ff494(0x1af)][_0x3ff494(0x195)],
      price: _0x38b1c3[_0x3ff494(0x1af)]['price'],
      salePrice: _0x38b1c3[_0x3ff494(0x1af)][_0x3ff494(0x1a6)],
      images: _0x445e87,
      isFeatured:
        _0x38b1c3[_0x3ff494(0x1af)][_0x3ff494(0x1ac)] === _0x3ff494(0x19d)
          ? !![]
          : ![],
      category: _0x38b1c3[_0x3ff494(0x1af)][_0x3ff494(0x1ae)],
    },
  }),
    redirect(_0x3ff494(0x1aa));
}
export async function deleteProduct(_0x252ec3) {
  const _0x4c515d = _0x1a73,
    { getUser: _0x156b7c } = getKindeServerSession(),
    _0x580057 = await _0x156b7c();
  if (!_0x580057 || _0x580057[_0x4c515d(0x198)] !== _0x4c515d(0x19a))
    return redirect('/');
  const _0x21b1c2 = _0x252ec3[_0x4c515d(0x190)](_0x4c515d(0x196));
  await _0xa0f5c7[_0x4c515d(0x1a0)]['delete']({ where: { id: _0x21b1c2 } }),
    redirect(_0x4c515d(0x1aa));
}
export async function createBanner(_0x1c853f, _0x5a651a) {
  const _0xe968b0 = _0x1a73,
    { getUser: _0x1d9d6a } = getKindeServerSession(),
    _0x4ef320 = await _0x1d9d6a();
  if (
    !_0x4ef320 ||
    _0x4ef320[_0xe968b0(0x198)] !== 'princeglow.india@gmail.com'
  )
    return redirect('/');
  const _0x4010ca = parseWithZod(_0x5a651a, { schema: bannerSchema });
  if (_0x4010ca[_0xe968b0(0x195)] !== _0xe968b0(0x1a9))
    return _0x4010ca[_0xe968b0(0x1ab)]();
  await _0xa0f5c7[_0xe968b0(0x1a5)][_0xe968b0(0x199)]({
    data: {
      title: _0x4010ca['value'][_0xe968b0(0x191)],
      imageString: _0x4010ca['value'][_0xe968b0(0x1a8)],
    },
  }),
    redirect(_0xe968b0(0x1b2));
}
export async function deleteBanner(_0x54ff19) {
  const _0x55a5ef = _0x1a73,
    { getUser: _0x5773b7 } = getKindeServerSession(),
    _0x23362b = await _0x5773b7();
  if (!_0x23362b || _0x23362b[_0x55a5ef(0x198)] !== _0x55a5ef(0x19a))
    return redirect('/');
  const _0x1c0aed = _0x54ff19['get']('bannerId');
  await _0xa0f5c7[_0x55a5ef(0x1a5)][_0x55a5ef(0x197)]({
    where: { id: _0x1c0aed },
  }),
    redirect(_0x55a5ef(0x1b2));
}
