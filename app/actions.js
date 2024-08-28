'use server';
function _0x191c() {
  const _0x245c1d = [
    'split',
    '123216Keoorm',
    'trim',
    'productId',
    'true',
    '/dashboard/banner',
    'price',
    'name',
    '/dashboard/products',
    'map',
    'description',
    '4520306pHBbML',
    'success',
    '4825524bhXfps',
    'reply',
    '12824uTLqkN',
    'salePrice',
    'status',
    'category',
    'value',
    '1754463qgwXaM',
    'create',
    'shortDescription',
    'images',
    'product',
    'flatMap',
    'isFeatured',
    'delete',
    'princeglow.india@gmail.com',
    'email',
    '828490rWyNKm',
    '12ankhjT',
    '633186pVnQcT',
    '3033txAmfz',
    'title',
    'banner',
  ];
  _0x191c = function () {
    return _0x245c1d;
  };
  return _0x191c();
}
(function (_0x475c49, _0x60edbc) {
  const _0x180f39 = _0x4011,
    _0x2927ff = _0x475c49();
  while (!![]) {
    try {
      const _0x5d0072 =
        parseInt(_0x180f39(0xda)) / 0x1 +
        -parseInt(_0x180f39(0xdf)) / 0x2 +
        parseInt(_0x180f39(0xf2)) / 0x3 +
        -parseInt(_0x180f39(0xeb)) / 0x4 +
        (parseInt(_0x180f39(0xfc)) / 0x5) * (-parseInt(_0x180f39(0xd9)) / 0x6) +
        parseInt(_0x180f39(0xe9)) / 0x7 +
        (parseInt(_0x180f39(0xed)) / 0x8) * (parseInt(_0x180f39(0xdb)) / 0x9);
      if (_0x5d0072 === _0x60edbc) break;
      else _0x2927ff['push'](_0x2927ff['shift']());
    } catch (_0x39a768) {
      _0x2927ff['push'](_0x2927ff['shift']());
    }
  }
})(_0x191c, 0xc46ef);
import { redirect } from 'next/navigation';
function _0x4011(_0x4c8e9a, _0x200caa) {
  const _0x191c37 = _0x191c();
  return (
    (_0x4011 = function (_0x401103, _0x45a1a5) {
      _0x401103 = _0x401103 - 0xd9;
      let _0x5a0e09 = _0x191c37[_0x401103];
      return _0x5a0e09;
    }),
    _0x4011(_0x4c8e9a, _0x200caa)
  );
}
import { parseWithZod } from '@conform-to/zod';
import { bannerSchema, productSchema } from '@/lib/zodSchemas';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import _0x512e70 from '@/lib/db';
export async function createProduct(_0x2f8cd0, _0x29b043) {
  const _0x76dd39 = _0x4011,
    { getUser: _0xa7e8bf } = getKindeServerSession(),
    _0x54e261 = await _0xa7e8bf();
  if (!_0x54e261 || _0x54e261['email'] !== 'princeglow.india@gmail.com')
    return redirect('/');
  const _0x3a2d66 = parseWithZod(_0x29b043, { schema: productSchema });
  if (_0x3a2d66[_0x76dd39(0xef)] !== _0x76dd39(0xea))
    return _0x3a2d66[_0x76dd39(0xec)]();
  const _0x3dca45 = _0x3a2d66[_0x76dd39(0xf1)][_0x76dd39(0xf5)]['flatMap'](
    (_0x58463e) =>
      _0x58463e[_0x76dd39(0xde)](',')[_0x76dd39(0xe7)]((_0x20a366) =>
        _0x20a366[_0x76dd39(0xe0)]()
      )
  );
  await _0x512e70[_0x76dd39(0xf6)][_0x76dd39(0xf3)]({
    data: {
      name: _0x3a2d66[_0x76dd39(0xf1)][_0x76dd39(0xe5)],
      shortDescription: _0x3a2d66['value'][_0x76dd39(0xf4)],
      description: _0x3a2d66['value'][_0x76dd39(0xe8)],
      status: _0x3a2d66[_0x76dd39(0xf1)][_0x76dd39(0xef)],
      price: _0x3a2d66[_0x76dd39(0xf1)][_0x76dd39(0xe4)],
      salePrice: _0x3a2d66[_0x76dd39(0xf1)]['salePrice'],
      images: _0x3dca45,
      isFeatured:
        _0x3a2d66[_0x76dd39(0xf1)][_0x76dd39(0xf8)] === _0x76dd39(0xe2)
          ? !![]
          : ![],
      category: _0x3a2d66[_0x76dd39(0xf1)][_0x76dd39(0xf0)],
    },
  }),
    redirect(_0x76dd39(0xe6));
}
export async function editProduct(_0xe9ee5b, _0x3938c5) {
  const _0x4b6033 = _0x4011,
    { getUser: _0x24f444 } = getKindeServerSession(),
    _0x4e828d = await _0x24f444();
  if (!_0x4e828d || _0x4e828d[_0x4b6033(0xfb)] !== 'princeglow.india@gmail.com')
    return redirect('/');
  const _0x49ab9c = parseWithZod(_0x3938c5, { schema: productSchema });
  if (_0x49ab9c[_0x4b6033(0xef)] !== 'success')
    return _0x49ab9c[_0x4b6033(0xec)]();
  const _0x2bc233 = _0x49ab9c[_0x4b6033(0xf1)]['images'][_0x4b6033(0xf7)](
      (_0x2d40ff) =>
        _0x2d40ff['split'](',')[_0x4b6033(0xe7)]((_0x3bf9d5) =>
          _0x3bf9d5[_0x4b6033(0xe0)]()
        )
    ),
    _0x3f6227 = _0x3938c5['get'](_0x4b6033(0xe1));
  await _0x512e70[_0x4b6033(0xf6)]['update']({
    where: { id: _0x3f6227 },
    data: {
      name: _0x49ab9c[_0x4b6033(0xf1)][_0x4b6033(0xe5)],
      shortDescription: _0x49ab9c[_0x4b6033(0xf1)][_0x4b6033(0xf4)],
      description: _0x49ab9c[_0x4b6033(0xf1)][_0x4b6033(0xe8)],
      status: _0x49ab9c[_0x4b6033(0xf1)]['status'],
      price: _0x49ab9c[_0x4b6033(0xf1)]['price'],
      salePrice: _0x49ab9c[_0x4b6033(0xf1)][_0x4b6033(0xee)],
      images: _0x2bc233,
      isFeatured:
        _0x49ab9c[_0x4b6033(0xf1)][_0x4b6033(0xf8)] === _0x4b6033(0xe2)
          ? !![]
          : ![],
      category: _0x49ab9c['value'][_0x4b6033(0xf0)],
    },
  }),
    redirect(_0x4b6033(0xe6));
}
export async function deleteProduct(_0x3be0c9) {
  const _0x1e81cc = _0x4011,
    { getUser: _0x436dea } = getKindeServerSession(),
    _0x506032 = await _0x436dea();
  if (!_0x506032 || _0x506032['email'] !== _0x1e81cc(0xfa))
    return redirect('/');
  const _0x2b1bce = _0x3be0c9['get'](_0x1e81cc(0xe1));
  await _0x512e70['product'][_0x1e81cc(0xf9)]({ where: { id: _0x2b1bce } }),
    redirect('/dashboard/products');
}
export async function createBanner(_0x3c4fa4, _0x2419c9) {
  const _0x251365 = _0x4011,
    { getUser: _0x4e9676 } = getKindeServerSession(),
    _0x5cdcc9 = await _0x4e9676();
  if (!_0x5cdcc9 || _0x5cdcc9[_0x251365(0xfb)] !== 'princeglow.india@gmail.com')
    return redirect('/');
  const _0xaa91a9 = parseWithZod(_0x2419c9, { schema: bannerSchema });
  if (_0xaa91a9[_0x251365(0xef)] !== _0x251365(0xea))
    return _0xaa91a9['reply']();
  await _0x512e70[_0x251365(0xdd)][_0x251365(0xf3)]({
    data: {
      title: _0xaa91a9[_0x251365(0xf1)][_0x251365(0xdc)],
      imageString: _0xaa91a9[_0x251365(0xf1)]['imageString'],
    },
  }),
    redirect('/dashboard/banner');
}
export async function deleteBanner(_0x3ba711) {
  const _0x4f73b0 = _0x4011,
    { getUser: _0x369fdf } = getKindeServerSession(),
    _0x585161 = await _0x369fdf();
  if (!_0x585161 || _0x585161[_0x4f73b0(0xfb)] !== _0x4f73b0(0xfa))
    return redirect('/');
  const _0x5886f2 = _0x3ba711['get']('bannerId');
  await _0x512e70['banner'][_0x4f73b0(0xf9)]({ where: { id: _0x5886f2 } }),
    redirect(_0x4f73b0(0xe3));
}
