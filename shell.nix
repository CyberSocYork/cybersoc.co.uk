{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = [ 
      pkgs.nodejs
      pkgs.nodePackages.yarn
    ];
}
