{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
    packages = [
        pkgs.nodePackages.npm
        pkgs.nodePackages.nodejs
    ];
}