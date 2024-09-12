{ pkgs ? import <nixpkgs> { } }:

let
  nodePackages = pkgs.nodePackages_latest;
in
pkgs.mkShell {
  packages = [
    nodePackages.nodejs
    nodePackages.pnpm
    pkgs.sqlite
  ];
}
