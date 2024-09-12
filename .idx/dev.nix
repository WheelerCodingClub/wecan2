{ pkgs, ... }:

let
  nodePackages = pkgs.nodePackages_latest;
in
{
  channel = "stable-23.11";

  # https://search.nixos.org/packages
  packages = [
    nodePackages.nodejs
    nodePackages.pnpm
    pkgs.sqlite
  ];

  env = {
    IN_A_CONTAINER = "1";
  };

  # https://open-vsx.org/
  idx.extensions = [
    "mtxr.sqltools"
    "mtxr.sqltools-driver-sqlite"
    "svelte.svelte-vscode"
  ];

  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = [
          "pnpm"
          "run"
          "dev"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
