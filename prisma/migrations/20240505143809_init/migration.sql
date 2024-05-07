-- CreateTable
CREATE TABLE `iceCream` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `size_type` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `images` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `types` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flavor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flavors` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Topping` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toppings` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Size_size_key`(`size`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iceCreamType` (
    `ice_cream_id` INTEGER NOT NULL,
    `type_id` INTEGER NOT NULL,

    PRIMARY KEY (`ice_cream_id`, `type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iceCreamFlavor` (
    `ice_cream_id` INTEGER NOT NULL,
    `flavor_id` INTEGER NOT NULL,

    PRIMARY KEY (`ice_cream_id`, `flavor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iceCreamTopping` (
    `ice_cream_id` INTEGER NOT NULL,
    `topping_id` INTEGER NOT NULL,

    PRIMARY KEY (`ice_cream_id`, `topping_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `iceCream` ADD CONSTRAINT `iceCream_size_type_fkey` FOREIGN KEY (`size_type`) REFERENCES `Size`(`size`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCreamType` ADD CONSTRAINT `iceCreamType_ice_cream_id_fkey` FOREIGN KEY (`ice_cream_id`) REFERENCES `iceCream`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCreamType` ADD CONSTRAINT `iceCreamType_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCreamFlavor` ADD CONSTRAINT `iceCreamFlavor_ice_cream_id_fkey` FOREIGN KEY (`ice_cream_id`) REFERENCES `iceCream`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCreamFlavor` ADD CONSTRAINT `iceCreamFlavor_flavor_id_fkey` FOREIGN KEY (`flavor_id`) REFERENCES `Flavor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCreamTopping` ADD CONSTRAINT `iceCreamTopping_ice_cream_id_fkey` FOREIGN KEY (`ice_cream_id`) REFERENCES `iceCream`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iceCreamTopping` ADD CONSTRAINT `iceCreamTopping_topping_id_fkey` FOREIGN KEY (`topping_id`) REFERENCES `Topping`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
