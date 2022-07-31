<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
  // todo取得処理 //
  public function get($user_id)
  {
    if (Todo::where('user_id', $user_id)->exists()) {
      $tweets = Todo::where('user_id', $user_id)->orderBy('created_at', 'desc')->get()->toJson(JSON_PRETTY_PRINT);
      return response($tweets, 200);
    } else {
      return response()->json([
        "message" => "Tweet not found"
      ], 404);
    }
  }
  // 追加処理 //
  public function post(Request $request)
  {
    Todo::create([
      'user_id' => $request->user_id,
      'check' => false,
      'content' => $request->content
    ]);
  }
  // 削除処理 //
  public function delete(Request $request)
  {
    Todo::where('id', $request->id)->delete();
  }
  // チェック処理 //
  public function check(Request $request)
  {
    $todo = Todo::find($request->id);
    $todo->check = !$todo->check;
    $todo->save();
  }
}
