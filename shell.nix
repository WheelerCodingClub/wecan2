{ pkgs ? import <nixpkgs> { } }:

let
  nodePackages = pkgs.nodePackages_latest;
in
pkgs.mkShell {
  packages = [
    nodePackages.nodejs
    nodePackages.npm
    pkgs.postgresql_16
  ];
}
