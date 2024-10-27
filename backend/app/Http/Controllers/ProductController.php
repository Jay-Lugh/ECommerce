<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class ProductController extends Controller
{
    // List all products
    public function index(): JsonResponse
    {
        $products = Product::all();
        return response()->json(['data' => $products], 200);
    }

    // Add a new product
    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'barcode' => 'required|unique:products|max:255',
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $product = Product::create($validatedData);
        return response()->json(['message' => 'Product created successfully', 'data' => $product], 201);
    }

    // Get details of a single product
    public function show(int $id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        return response()->json(['data' => $product], 200);
    }

    // Update a product
    public function update(Request $request, int $id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $validatedData = $request->validate([
            'barcode' => 'sometimes|required|unique:products,barcode,' . $id . '|max:255',
            'name' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $product->update($validatedData);
        return response()->json(['message' => 'Product updated successfully', 'data' => $product], 200);
    }

    // Delete a product
    public function destroy(int $id): JsonResponse
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $product->delete();
        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
