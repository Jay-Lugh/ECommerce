<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // GET /api/products - List all products
    public function index()
    {
        return Product::all();
    }

    // POST /api/products - Add a new product
    public function store(Request $request)
    {
        $request->validate([
            'barcode' => 'required|unique:products',
            'name' => 'required',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'category' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    // GET /api/products/{id} - Get details of a single product
    public function show($id)
    {
        return Product::findOrFail($id);
    }

    // PUT /api/products/{id} - Update a product
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'barcode' => 'sometimes|required|unique:products,barcode,' . $product->id,
            'name' => 'sometimes|required',
            'price' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer',
            'category' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $product->update($request->all());
        return response()->json($product, 200);
    }

    // DELETE /api/products/{id} - Delete a product
    public function destroy($id)
    {
        Product::destroy($id);
        return response()->json(null, 204);
    }
}
